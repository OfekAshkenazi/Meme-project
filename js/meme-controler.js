'use strict'
let gLine = 0
let gLineMax = 0
let gEmoji = 0
let gEmojiMax = 0


function onImageClicked(imageId) {
    const theImage = gImgs.find(image => image.id === imageId)
    gMeme.image = theImage
    document.querySelector('.main-section').style.display = "none"
    document.querySelector('.meme-area').style.display = "block"
    renderMeme()
    tapping.play()
}

function onRotate() {
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
    removeLine()
    renderMeme()
    tapping.play()
}

function onAddLine() {
    addLine()
    renderMeme()
    tapping.play()
}

function onSwitchLine() {
    gLine === gLineMax ? gLine = 0 : gLine++
    gEmoji === gEmojiMax ? gEmoji = 0 : gEmoji++
    // console.log(gEmojiMax, gEmoji)
    tapping.play()
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
    meme.lines.forEach(line => {
        line.stroke = inputValue
    })
    renderMeme()
    tapping.play()
}

function onColorSet() {
    const inputValue = document.getElementById('font-color').value
    const meme = getMeme()
    meme.lines.forEach(line => {
        line.color = inputValue
    })
    renderMeme()
    tapping.play()
}


function onChangeFont(elBtn) {
    const meme = getMeme()
    if (elBtn.innerText === 'A+') {
        meme.lines[gLine].size++
        meme.emoji[gEmoji].sizeX++
        meme.emoji[gEmoji].sizeY++
    } else {
        meme.lines[gLine].size--
        meme.emoji[gEmoji].sizeX--
        meme.emoji[gEmoji].sizeY--
    }
    renderMeme()
    tapping.play()
}

