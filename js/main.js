'use strict'

let gCtx
let gElCanvas
let gStartPos
// const tapping = new Audio('sounds/tap.wav')
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    addListeners()
    renderGalleryImage()
    renderSavedGallery()
}
// event listeners

function addListeners() {
    addMouseListeners()
    addTouchListeners()
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
    document.querySelector('.saved-area').style.display = 'none'
    restGMeme()
}

function onDown(ev) {
    const pos = getEvPos(ev)
    const meme = getMeme()
    meme.lines[gLine].isDrag = true
    document.body.style.cursor = 'grabbing'
    gStartPos = pos
}

function onMove(ev) {
    const meme = getMeme()
    if (!meme.lines[gLine].isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveText(dx, dy)
    gStartPos = pos
    renderMeme()
}

function moveText(dx, dy) {
    const meme = getMeme()
    meme.lines[gLine].x += dx
    meme.lines[gLine].y += dy
    if (meme.lines[gLine].emoji) {
        meme.lines[gLine].emoji.x += dx
        meme.lines[gLine].emoji.y += dy
    }
}

function onUp() {
    const meme = getMeme()
    meme.lines[gLine].isDrag = false
    document.body.style.cursor = 'default'
}

function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onUpLoadImage(ev) {
    document.querySelector('.main-section').style.display = "none"
    document.querySelector('.meme-area').style.display = "block"
    loadImageFromInput(ev, renderMemeFromUpload)
}

function onToggleMenu() {
    tapping.play()
    document.body.classList.toggle('menu-open')
}

function onMoveToSavedArea() {
    document.querySelector('.main-section').style.display = 'none'
    document.querySelector('.meme-area').style.display = 'none'
    document.querySelector('.saved-area').style.display = 'block'
}