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
    tapping.play()
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
    tapping.play()
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
}

function onChangeFonts() {
    changeFonts()
    renderMeme()
    tapping.play()
}

function onAlignItems(txt) {
    alignItmes(txt)
    renderMeme()
    tapping.play()
}

function onRemoveLine() {
    restInputText()
    removeLine()
    renderMeme()
    infoMsg(`line remove`)
    tapping.play()
}

function onAddLine() {
    restInputText()
    addLine()
    renderMeme()
    infoMsg('Line add !')
    tapping.play()
}

function onSwitchLine() {
    gLine === gLineMax ? gLine = 0 : gLine++
    tapping.play()
    restInputText()
    infoMsg(`line now ${gLine + 1}`)
}

function onSetLineTxt() {
    const inputValue = document.getElementById('meme-text').value
    const meme = getMeme()
    meme.lines[gLine].txt = inputValue
    renderMeme()
    tapping.play()
}

function onStrokeSet() {
    const inputValue = document.getElementById('stroke-color').value
    const meme = getMeme()
    meme.lines[gLine].stroke = inputValue
    renderMeme()
    tapping.play()
}

function onColorSet() {
    const inputValue = document.getElementById('font-color').value
    const meme = getMeme()
    meme.lines[gLine].color = inputValue
    renderMeme()
    tapping.play()
}

function onChangeFont(elBtn) {
    const meme = getMeme()
    if (elBtn.innerText === 'A+') {
        meme.lines[gLine].size++
    } else {
        meme.lines[gLine].size--
    }
    renderMeme()
    tapping.play()
}

