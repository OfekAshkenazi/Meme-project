'use stict'
var filterImg = []

let gkeyWords = ['politician', 'people', 'president', 'dogs', 'funny']

let gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['politician', 'president'] },
    { id: 2, url: 'images/2.jpg', keywords: ['dogs', 'cute'] },
    { id: 3, url: 'images/3.jpg', keywords: ['baby', 'dogs'] },
    { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'images/5.jpg', keywords: ['people', 'cute'] },
    { id: 6, url: 'images/6.jpg', keywords: ['people', 'cute'] },
    { id: 7, url: 'images/7.jpg', keywords: ['funny', 'cute'] },
    { id: 8, url: 'images/8.jpg', keywords: ['funny', 'people'] },
    { id: 9, url: 'images/9.jpg', keywords: ['funny', 'cute'] },
    { id: 10, url: 'images/10.jpg', keywords: ['politician', 'president'] },
    { id: 11, url: 'images/11.jpg', keywords: ['people', 'cute'] },
    { id: 12, url: 'images/12.jpg', keywords: ['people', 'cat'] },
    { id: 13, url: 'images/13.jpg', keywords: ['people', 'president'] },
    { id: 14, url: 'images/14.jpg', keywords: ['people', 'cat'] },
    { id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] },
    { id: 19, url: 'images/19.jpg', keywords: ['funny', 'cat'] },
    { id: 20, url: 'images/Drakeposting.jpg', keywords: ['people', 'cat'] },
    { id: 21, url: 'images/girl.jpg', keywords: ['people', 'cat'] },
    { id: 22, url: 'images/hot.jpg', keywords: ['funny', 'cat'] },
    { id: 23, url: 'images/jenny.jpg', keywords: ['people', 'cat'] },
    { id: 24, url: 'images/meme.jpg', keywords: ['funny', 'cat'] },
    { id: 25, url: 'images/news.jpg', keywords: ['people', 'cat'] },
]




function renderSavedGallery() {
    let savedMemes = loadFromStorage(STORAGE_KEY)
    if (!savedMemes || !savedMemes.length) return
    let strHtmls = savedMemes.map(meme => {
        console.log(meme)
        return `<div><img class="saved-image ${meme.image.id}" onclick="onImageClicked(${meme.image.id},this)" src="${meme.savedUrl}"></div>`
    })

    document.querySelector('.saved-memes').innerHTML = strHtmls.join('')

}

function renderKeyWords() {
    const keys = getKeys()
    let strHtmls = keys.map(key => {
        return `<p class="pointer" onclick="onFilterByClick(this)">${key}</p>`
    })
    document.querySelector('.keyWords').innerHTML = strHtmls.join('')
}

function getKeys() {
    return gkeyWords
}

function getImages() {
    return gImgs
}

function renderGalleryImage() {

    let images = filterGallary()
    if (!images.length) {
        images = getImages()
    }

    let strHtmls = images.map(image => {
        return `<div><img class="image ${image.id}" onclick="onImageClicked(${image.id},this)" src="${image.url}"></div>`
    })

    document.querySelector('.meme-image-area').innerHTML = strHtmls.join('')
    renderKeyWords()
}

function onFilterGallery() {
    renderGalleryImage()
}

function filterGallary() {
    var inputFilter = document.getElementById('search').value
    const images = getImages()
    filterImg = images.filter(image => image.keywords.includes(inputFilter))
    return filterImg
}

function onFilterByClick(key) {
    renderGalleryByClick(key)
}

function renderGalleryByClick(key) {
    renderKeyWords()
    let filterImages = filterByClick(key)

    let strHtmls = filterImages.map(image => {
        return `<div><img class="image ${image.id}" onclick="onImageClicked(${image.id},this)" src="${image.url}"></div>`
    })

    document.querySelector('.meme-image-area').innerHTML = strHtmls.join('')
}

function filterByClick(key) {
    const keyText = key.innerText.toLowerCase()
    // console.log(keyText)
    const images = getImages()
    filterImg = images.filter(image => image.keywords.includes(keyText))
    tapping.play()
    return filterImg
}
