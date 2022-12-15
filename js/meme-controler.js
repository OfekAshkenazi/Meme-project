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




function onAlignItems(txt) {
    const meme = getMeme()
    switch (txt) {
        case 'left':
            meme.lines[gLine].align = 'left'
            break
        case 'center':
            meme.lines[gLine].align = 'center'
            break
        case 'right':
            meme.lines[gLine].align = 'right'
            break
    }

    renderMeme()
}

function onRemoveLine() {
    const meme = getMeme()
    meme.lines.splice(gLine, 1)
    gLineMax--
    renderMeme()

}

function onAddLine() {
    const meme = getMeme()
    meme.lines.push({
        isDrag: false,
        txt: '',
        size: 40,
        align: 'center',
        color: 'red',
        x: 200,
        y: getRandomInt(20, 300)
    },)
    gLineMax++
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

