'use strict'
let gLine = 0
let gLineMax = 0

function onImageClicked(imageId) {
    const theImage = gImgs.find(image => image.id === imageId)
    gMeme.image = theImage
    document.querySelector('.main-section').style.display = "none"
    document.querySelector('.saved-area').style.display = "none"
    document.querySelector('.meme-area').style.display = "block"
    renderMeme()
}




function onRotate() {
}

function onClickEm(image) {
    const meme = getMeme()
    meme.lines[gLine].emoji = {
        url: image.src,
        x: 20,
        y: 35,
        isDrag: false,
        sizeX: 45,
        sizeY: 45,
    }
    renderMeme()
}

function onRandomMeme() {
    const randomId = getRandomInt(1, 20)
    onImageClicked(randomId)
    const meme = getMeme()
    meme.lines[0].txt = makeLorem(4)
    renderMeme()
}

function onSaveMeme() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')
    const meme = getMeme()
    meme.savedUrl = imgDataUrl
    gSavedMeme.push(meme)
    saveToStorage(STORAGE_KEY, gSavedMeme)
    renderSavedGallery()
    infoMsg('meme saved')
}

function onChangeFonts() {
    changeFonts()
    renderMeme()
}

function onAlignItems(txt) {
    alignItmes(txt)
    renderMeme()
}

function onRemoveLine() {
    restInputText()
    removeLine()
    renderMeme()
    infoMsg(`line remove`)
}

function onAddLine() {
    restInputText()
    addLine()
    renderMeme()
    infoMsg('Line add !')
}

function onSwitchLine() {
    gLine === gLineMax ? gLine = 0 : gLine++
    restInputText()
    infoMsg(`line now ${gLine + 1}`)
}

function onSetLineTxt() {
    const inputValue = document.getElementById('meme-text').value
    const meme = getMeme()
    meme.lines[gLine].txt = inputValue
    renderMeme()
}

function onStrokeSet() {
    const inputValue = document.getElementById('stroke-color').value
    const meme = getMeme()
    meme.lines[gLine].stroke = inputValue
    renderMeme()
}

function onColorSet() {
    const inputValue = document.getElementById('font-color').value
    const meme = getMeme()
    meme.lines[gLine].color = inputValue
    renderMeme()
}

function onChangeFont(elBtn) {
    const meme = getMeme()
    if (elBtn.innerText === 'A+') {
        meme.lines[gLine].size++
    } else {
        meme.lines[gLine].size--
    }
    renderMeme()
}

