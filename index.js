const state = {
    store: [],
    category: 'Home',
    modal: '',
    searchItem: '',
    selectedItem: null
}
function renderHeader() {
    const headerEl = document.createElement('header')
    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'navigation')
    const h1El = document.createElement('h1')
    h1El.setAttribute('class', 'logo')
    h1El.textContent = 'HOLLIXTON'
    h1El.addEventListener('click', function () {
        state.category = 'Home'
        state.selectedItem = null
        render()
    })
    const ulEl = document.createElement('ul')
    ulEl.setAttribute('class', 'tags-list')
    const liGirlTagEl = document.createElement('li')
    const girlButtonEl = document.createElement('button')
    girlButtonEl.setAttribute('class', 'girl-button')
    girlButtonEl.textContent = 'Girls'
    liGirlTagEl.append(girlButtonEl)
    girlButtonEl.addEventListener('click', function () {
        state.category = 'Girls'
        getGirlsProducts()
        state.selectedItem = null
        render()
    })
    const liGuysTagEl = document.createElement('li')
    const guysButtonEl = document.createElement('button')
    guysButtonEl.setAttribute('class', 'guys-button')
    guysButtonEl.textContent = 'Guys'
    liGuysTagEl.append(guysButtonEl)
    guysButtonEl.addEventListener('click', function () {
        state.category = 'Guys'
        state.selectedItem = null
        render()
    })
    const liSaleTagEl = document.createElement('li')
    const saleButtonEl = document.createElement('button')
    saleButtonEl.setAttribute('class', 'sale-button')
    saleButtonEl.textContent = 'Sale'
    liSaleTagEl.append(saleButtonEl)
    saleButtonEl.addEventListener('click', function () {
        state.category = 'Sale'
        state.selectedItem = null
        render()
    })
    ulEl.append(liGirlTagEl, liGuysTagEl, liSaleTagEl)
    divEl.append(h1El, ulEl)
    const divSettingsEl = document.createElement('div')
    divSettingsEl.setAttribute('class', 'menu')
    const ulSettingsEl = document.createElement('ul')
    ulSettingsEl.setAttribute('class', 'menu-list')
    const liSearchEl = document.createElement('li')
    const searchButtonEl = document.createElement('button')
    searchButtonEl.setAttribute('class', 'search-icon')
    searchButtonEl.addEventListener('click', function () {
        state.modal = 'Search'
        state.selectedItem = null
        render()
    })
    const searchImg = document.createElement('img')
    searchImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/54/54481.png')
    searchButtonEl.append(searchImg)
    liSearchEl.append(searchButtonEl)
    const liProfileEl = document.createElement('li')
    const profileButtonEl = document.createElement('button')
    profileButtonEl.setAttribute('class', 'profile-icon')
    const profileImg = document.createElement('img')
    profileImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/747/747376.png')
    profileButtonEl.append(profileImg)
    liProfileEl.append(profileButtonEl)
    const liBagEl = document.createElement('li')
    const bagButtonEl = document.createElement('button')
    bagButtonEl.setAttribute('class', 'cart-icon')
    const bagImg = document.createElement('img')
    bagImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/590/590506.png')
    bagButtonEl.append(bagImg)
    liBagEl.append(bagButtonEl)
    ulSettingsEl.append(liSearchEl, liProfileEl, liBagEl)
    divSettingsEl.append(ulSettingsEl)
    headerEl.append(divEl, divSettingsEl)
    document.body.append(headerEl)
}
function renderMain() {
    const mainEl = document.createElement('main')
    if (state.selectedItem === null) {
        const h2El = document.createElement('h2')
        h2El.textContent = state.category
        h2El.setAttribute('class', 'tag')
        mainEl.append(h2El)
        if (state.searchItem !== '') {
            const h2SearchEl = document.createElement('h2')
            h2SearchEl.textContent = `Searched item:${state.searchItem}`
            const xButtonEl = document.createElement('button')
            xButtonEl.textContent = 'X'
            xButtonEl.addEventListener('click', function () {
                state.searchItem = ''
                render()
            })
            mainEl.append(h2SearchEl, xButtonEl)
        }
        const productSectionEl = document.createElement('section')
        productSectionEl.setAttribute('class', 'product-list')
        for (const product of showProducts()) {
            const productCardEl = document.createElement('div')
            productCardEl.setAttribute('class', 'product-card')
            productCardEl.addEventListener('click', function () {
                state.selectedItem = product
                render()
            })
            const productLinkEl = document.createElement('a')
            productLinkEl.setAttribute('href', '#')
            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', product.image)
            productLinkEl.append(imgEl)
            const h3El = document.createElement('h3')
            h3El.setAttribute('class', 'product-name')
            h3El.textContent = product.name
            const spanEl = document.createElement('span')
            spanEl.setAttribute('class', 'price')
            spanEl.textContent = `£${product.price}`
            productCardEl.append(productLinkEl, h3El, spanEl)
            if (product.discountedPrice) {
                const discountPriceEl = document.createElement('span')
                discountPriceEl.setAttribute('class', 'discounted-price')
                spanEl.style['text-decoration'] = 'line-through'
                discountPriceEl.textContent = ` £${product.discountedPrice}`
                productCardEl.append(discountPriceEl)
            }

            const checkProductDate = checkDate(product)
            if (checkProductDate) {
                const newProduct = document.createElement('span')
                newProduct.textContent = 'New!'
                newProduct.setAttribute('class', 'new-product')
                productCardEl.append(newProduct)
            }
            productSectionEl.append(productCardEl)
        }
        mainEl.append(productSectionEl)
    }
    else {
        const productDetailsSection = document.createElement('section')
        productDetailsSection.setAttribute('class', 'details-section')
        const productImg = document.createElement('img')
        productImg.setAttribute('src', state.selectedItem.image)
        const productDetails = document.createElement('div')
        const productName = document.createElement('h2')
        productName.textContent = state.selectedItem.name
        const addToCartBtn = document.createElement('button')
        addToCartBtn.textContent = 'ADD TO BAG'
        addToCartBtn.setAttribute('class', 'add-to-cart')
        productDetails.append(productName, addToCartBtn)
        productDetailsSection.append(productImg, productDetails)
        mainEl.append(productDetailsSection)
    }
    document.body.append(mainEl)
}
function renderFooter() {
    const footerEl = document.createElement('footer')
    const h3El = document.createElement('h3')
    h3El.textContent = 'HOLLIXTON'
    footerEl.append(h3El)
    document.body.append(footerEl)
}

function showProducts() {
    let productList = state.store
    if (state.category === 'Girls') {
        productList = getGirlsProducts()
    }
    if (state.category === 'Guys') {
        productList = getGuysProducts()
    }
    if (state.category === 'Sale') {
        productList = getSaleProducts()
    }

    productList = productList.filter(function (product) {
        return product.name.toLowerCase().includes(state.searchItem.toLowerCase())
    })
    return productList
}
function getData() {
    return fetch('http://localhost:3000/store').then(function (resp) {
        return resp.json()
    })
}
getData().then(function (store) {
    state.store = store
    render()
})
function checkDate(product) {
    const second = 1000
    const minutes = 60
    const hour = 60
    const day = 24
    const daysToCheck = 10
    const tenDaysInMs = Date.now() - day * hour * minutes * second * daysToCheck
    const productDate = Date.parse(product.dateEntered)
    return productDate > tenDaysInMs
}
function getGirlsProducts() {
    return state.store.filter(function (product) {
        return product.type === 'Girls'
    })
}
function getGuysProducts() {
    return state.store.filter(function (product) {
        return product.type === 'Guys'
    })
}
function getSaleProducts() {
    return state.store.filter(function (product) {
        return product.discountedPrice
    })
}
function renderSearchModal() {
    const sectionEl = document.createElement('section')
    sectionEl.setAttribute('class', 'modal-section')
    const modalEl = document.createElement('div')
    modalEl.setAttribute('class', 'modal')
    const closeButton = document.createElement('button')
    closeButton.textContent = 'X'
    closeButton.setAttribute('class', 'close-button')
    closeButton.addEventListener('click', function () {
        state.modal = ''
        render()
    })
    const h3El = document.createElement('h3')
    h3El.textContent = 'Search your product'
    const formEl = document.createElement('form')
    const inputEl = document.createElement('input')
    inputEl.setAttribute('type', 'text')
    inputEl.setAttribute('name', 'search-item')
    inputEl.setAttribute('placeholder', 'Search...')
    formEl.append(inputEl)
    formEl.addEventListener('submit', function (event) {
        event.preventDefault()
        state.searchItem = formEl['search-item'].value
        render()
    })
    modalEl.append(closeButton, h3El, formEl)
    sectionEl.append(modalEl)
    document.body.append(sectionEl)
}
function renderModal() {
    if (state.modal === 'Search') {
        renderSearchModal()
    }
}
function render() {
    document.body.innerHTML = ''
    renderHeader()
    renderMain()
    renderFooter()
    renderModal()
}
render()
console.log(state)

