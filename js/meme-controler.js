'use strict'
let gLine = 0
let gLineMax = 0


function onImageClicked(imageId) {
    const theImage = gImgs.find(image => image.id === imageId)
    gMeme.image = theImage
    document.querySelector('.main-section').style.display = "none"
    document.querySelector('.meme-area').style.display = "block"
    renderMeme()


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
    removeLine()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLine() {
    gLine === gLineMax ? gLine = 0 : gLine++
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
    meme.lines.forEach(line => {
        line.stroke = inputValue
    })
    renderMeme()
}

function onColorSet() {
    const inputValue = document.getElementById('font-color').value
    const meme = getMeme()
    meme.lines.forEach(line => {
        line.color = inputValue
    })
    renderMeme()

}


function onChangeFont(elBtn) {
    const meme = getMeme()
    if (elBtn.innerText === 'A+') {
        meme.lines.forEach(line => {
            line.size++
        })
    } else {
        meme.lines.forEach(line => {
            line.size--
        })
    }

    renderMeme()
}

