const state = {
    store: []
}

function renderHeader() {
    const headerEl = document.createElement('header')
    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'navigation')
    const h1El = document.createElement('h1')
    h1El.setAttribute('class', 'logo')
    h1El.textContent = 'HOLLIXTON'
    const ulEl = document.createElement('ul')
    ulEl.setAttribute('class', 'tags-list')
    const liGirlTagEl = document.createElement('li')
    const girlButtonEl = document.createElement('button')
    girlButtonEl.setAttribute('class', 'girl-button')
    girlButtonEl.textContent = 'Girls'
    liGirlTagEl.append(girlButtonEl)
    const liGuysTagEl = document.createElement('li')
    const guysButtonEl = document.createElement('button')
    guysButtonEl.setAttribute('class', 'guys-button')
    guysButtonEl.textContent = 'Guys'
    liGuysTagEl.append(guysButtonEl)
    const liSaleTagEl = document.createElement('li')
    const saleButtonEl = document.createElement('button')
    saleButtonEl.setAttribute('class', 'sale-button')
    saleButtonEl.textContent = 'Sale'
    liSaleTagEl.append(saleButtonEl)
    ulEl.append(liGirlTagEl, liGuysTagEl, liSaleTagEl)
    divEl.append(h1El, ulEl)
    const divSettingsEl = document.createElement('div')
    divSettingsEl.setAttribute('class', 'menu')
    const ulSettingsEl = document.createElement('ul')
    ulSettingsEl.setAttribute('class', 'menu-list')
    const liSearchEl = document.createElement('li')
    const searchButtonEl = document.createElement('button')
    searchButtonEl.setAttribute('class', 'search-icon')
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
    for (const product of state.store) {
        const productSectionEl = document.createElement('section')
        productSectionEl.setAttribute('class', 'product-card')
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
        const discountPriceEl = document.createElement('span')
        discountPriceEl.setAttribute('class', 'discounted-price')
        if (product.discountedPrice) {
            spanEl.style['text-decoration'] = 'line-through'
            discountPriceEl.textContent = ` £${product.discountedPrice}`
        }
        productSectionEl.append(productLinkEl, h3El, spanEl, discountPriceEl)
        mainEl.append(productSectionEl)
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


function getData() {
    return fetch('http://localhost:3000/store').then(function (resp) {
        return resp.json()
    })
}
getData().then(function (store) {
    state.store = store
    render()
})
function render() {
    document.body.innerHTML = ''
    renderHeader()
    renderMain()
    renderFooter()
}
render()
console.log(state)
