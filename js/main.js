'use strict'

let gCtx
let gElCanvas
let gStartPos

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    addListeners()
    renderGalleryImage()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderMeme(gMeme.image.url)

    // })
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


function onMoveToGallery() {
    document.querySelector('.main-section').style.display = "block"
    document.querySelector('.meme-area').style.display = "none"
}

function onDown(ev) {
    const pos = getEvPos(ev)
    gStartPos = pos
    const meme = getMeme()
    meme.lines[gLine].isDrag = true
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const meme = getMeme()

    if (!meme.lines[gLine].isDrag) return

    const pos = getEvPos(ev)
    // Calc the delta , the diff we moved
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveText(dx, dy)
    // Save the last pos , we remember where we`ve been and move accordingly
    gStartPos = pos
    // The canvas is render again after every move
    renderMeme()
}

function moveText(dx, dy) {
    const meme = getMeme()
    meme.lines[gLine].x += dx
    meme.lines[gLine].y += dy


}

function onUp() {
    const meme = getMeme()
    meme.lines[gLine].isDrag = false
    document.body.style.cursor = 'default'
}

function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        // console.log('ev:', ev)
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

// not in use 
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}