'use strict'
var gSavedMeme = []

var gMeme = {

    lines: [
        {
            isDrag: false,
            txt: '',
            size: 40,
            align: 'left',
            color: 'white',
            x: 20,
            y: 35,
            font: 'impact',
            stroke: 'black',
            emoji: [],

        },
    ],

    savedUrl: '',


}

function getSavedMemes() {
    return gSavedMeme
}

function restGMeme() {
    return gMeme = {

        lines: [
            {
                isDrag: false,
                txt: '',
                size: 40,
                align: 'left',
                color: 'white',
                x: 20,
                y: 35,
                font: 'impact',
                stroke: 'black',
                emoji: [],

            },
        ],

        savedUrl: '',

    }
}

function renderMeme() {
    let img = new Image()
    const meme = getMeme()
    img.src = meme.image.url
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    meme.lines.map(line => {
        var { txt, color, size, align, x, y, font, stroke } = line
        drawText(txt, x, y, color, size, align, font, stroke)
        if (line.emoji) {
            var { url, x, y, sizeX, sizeY } = line.emoji
            let img = new Image()
            img.src = url
            gCtx.drawImage(img, x, y, sizeX, sizeY)
        }
    })

}

function getMeme() {
    return gMeme
}

function drawText(text, x, y, color, size, align, font, stroke) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = stroke
    gCtx.fillStyle = color;
    gCtx.font = `${size + 'px'} ${font}`;
    gCtx.textAlign = align;
    // gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function changeFonts() {
    const fontFam = document.getElementById('fonts').value
    const meme = getMeme()
    meme.lines.forEach(line => {
        line.font = fontFam
    })
}

function alignItmes(txt) {
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
}

function removeLine() {
    const meme = getMeme()
    meme.lines.splice(gLine, 1)
    gLine--
    gLineMax--
}

function addLine() {
    const meme = getMeme()
    meme.lines.push({
        isDrag: false,
        txt: '',
        size: 40,
        align: 'left',
        color: 'white',
        x: 20,
        y: 35,
        font: 'impact',
        stroke: 'black',
        emoji: [],
    },)
    gLine++
    gLineMax++
}

function restInputText() {
    document.getElementById('meme-text').value = ''
}