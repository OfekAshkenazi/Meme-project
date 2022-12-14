'use strict'
console.log('hi')
let gCtx
let gElCanvas
function onInit() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()

}

function onImageClicked(imageId) {
    const image = getImages()
    const theImage = image.find(image => image.id === imageId)
    const imgUrl = theImage.url
    setTimeout(() => {
        document.querySelector('.main-section').style.display = "none"
        document.querySelector('.meme-area').style.display = "block"
        renderMeme(imgUrl)
    }, 1000)


}

function renderMeme(imgUrl) {
    let img = new Image() // Create a new html img element
    img.src = imgUrl // Set the img src to the img file we read
    // Run the callBack func, To render the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}



































function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}





function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}