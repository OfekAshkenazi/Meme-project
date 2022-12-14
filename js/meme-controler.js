'use strict'
let gLine = 0
function onImageClicked(imageId) {
    const theImage = gImgs.find(image => image.id === imageId)
    gMeme.image = theImage
    // setTimeout(() => {
        document.querySelector('.main-section').style.display = "none"
        document.querySelector('.meme-area').style.display = "block"
        renderMeme(gMeme.image.url)
    // }, 700)


}


function onSwitchLine() {
    gLine === 2 ? gLine = 0 : gLine++
}


function onSetLineTxt() {
    const inputValue = document.getElementById('meme-text').value
    const meme = getMeme()
    meme.lines[gLine].txt = inputValue
    renderMeme(gMeme.image.url)
}

function onColorSet() {
    const inputValue = document.getElementById('font-color').value
    const meme = getMeme()
    meme.lines.forEach(line => {
        line.color = inputValue
    })
    renderMeme(gMeme.image.url)

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

    renderMeme(gMeme.image.url)
}

