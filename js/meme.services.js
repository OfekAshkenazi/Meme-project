'use strict'

var gMeme = {

    lines: [
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'red',
            x: 200,
            y: 35
        },
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'red',
            x: 200,
            y: 230
        },
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'red',
            x: 200,
            y: 480
        },
    ]
}

var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'images/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'images/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'images/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'images/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'images/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'images/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'images/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'images/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'images/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] },
    { id: 19, url: 'images/19.jpg', keywords: ['funny', 'cat'] },
]


function renderMeme(imgUrl) {
    let img = new Image()
    img.src = imgUrl
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    var { txt, color, size, align, x, y } = gMeme.lines[0]
    drawText(txt, x, y, color, size, align)
    var { txt, color, size, align, x, y } = gMeme.lines[1]
    drawText(txt, x, y, color, size, align)
    var { txt, color, size, align, x, y } = gMeme.lines[2]
    drawText(txt, x, y, color, size, align)
}

function getMeme() {
    return gMeme
}

function drawText(text, x, y, color, size, align) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color;
    gCtx.font = `${size + 'px'} poppins-extra-bold`;
    gCtx.textAlign = align;
    // gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}
