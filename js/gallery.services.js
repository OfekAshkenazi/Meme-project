'use stict'
var filterImg = []

function getImages() {
    return gImgs
}


renderGalleryImage()


function renderGalleryImage() {
    let images = getImages()
    let strHtmls = images.map(image => {
        return `<div><img class="image ${image.id}" onclick="onImageClicked(${image.id},this)" src="./images/${image.id}.jpg"></div>`
    })

    document.querySelector('.meme-image-area').innerHTML = strHtmls.join('')
}