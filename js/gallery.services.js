'use stict'
var filterImg = []

function getImages() {
    return gImgs
}


renderGalleryImage()


function renderGalleryImage() {
    const strHtml = `<input class="search-bar" type="text" placeHolder="Search">
    <input class="search-bar bar2" type="text" placeHolder="Search">`
    let images = getImages()
    let strHtmls = images.map(image => {
        return `<div><img class="image ${image.id}" onclick="onImageClicked(${image.id},this)" src="./images/${image.id}.jpg"></div>`
    })

    document.querySelector('.meme-image-area').innerHTML = strHtml + strHtmls.join('')
}