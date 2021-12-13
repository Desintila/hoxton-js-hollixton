const state = {
    store: []
}

function renderHeader() {
    const headerEl = document.createElement('header')
    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'tags')
    const h1El = document.createElement('h1')
    h1El.textContent = 'HOLLIXTON'
    const ulEl = document.createElement('ul')
    const liGirlTagEl = document.createElement('li')
    const girlButtonEl = document.createElement('button')
    girlButtonEl.textContent = 'Girls'
    liGirlTagEl.append(girlButtonEl)
    const liGuysTagEl = document.createElement('li')
    const guysButtonEl = document.createElement('button')
    guysButtonEl.textContent = 'Guys'
    liGuysTagEl.append(guysButtonEl)
    const liSaleTagEl = document.createElement('li')
    const saleButtonEl = document.createElement('button')
    saleButtonEl.textContent = 'Sale'
    liSaleTagEl.append(saleButtonEl)
    ulEl.append(liGirlTagEl, liGuysTagEl, liSaleTagEl)
    divEl.append(h1El, ulEl)
    const divSettingsEl = document.createElement('div')
    const ulSettingsEl = document.createElement('ul')
    ulSettingsEl.setAttribute('class', 'settings')
    const liSearchEl = document.createElement('li')
    const searchButtonEl = document.createElement('button')
    const searchImg = document.createElement('img')
    searchImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/54/54481.png')
    searchButtonEl.append(searchImg)
    liSearchEl.append(searchButtonEl)
    const liProfileEl = document.createElement('li')
    const profileButtonEl = document.createElement('button')
    const profileImg = document.createElement('img')
    profileImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/747/747376.png')
    profileButtonEl.append(profileImg)
    liProfileEl.append(profileButtonEl)
    const liBagEl = document.createElement('li')
    const bagButtonEl = document.createElement('button')
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
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', product.image)
        const h3El = document.createElement('h3')
        h3El.textContent = product.name
        const spanEl = document.createElement('span')
        spanEl.textContent = `£${product.price}`

        productSectionEl.append(imgEl, h3El, spanEl)

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