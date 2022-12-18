'use strict'
const gTrans = {
    Gallery: {
        en: 'Gallery',
        he: 'הגלריה'
    },
    About: {
        en: 'About',
        he: 'האפליקציה'
    },
    impact: {
        en: 'Impact',
        he: 'אימפקט'
    },
    Arial: {
        en: 'Arial',
        he: 'אריאל'
    },
    poppins: {
        en: 'Poppins',
        he: 'פופינס'
    },
    fantasy: {
        en: 'Fantasy',
        he: 'פנטזיה'
    },
    poppinsX: {
        en: 'Poppins extra bold',
        he: 'פופינס אקסטרה צבע'
    },
    download: {
        en: 'Download',
        he: 'להורדה'
    },
    Share: {
        en: 'Share',
        he: 'לשתף'
    },
    Saved: {
        en: 'Saved',
        he: 'שמורים'
    },
}

var gCurrLang = 'en'

function getTrans(transKey) {
    // done: if key is unknown return 'UNKNOWN'
    const key = gTrans[transKey]
    if (!key) return 'UNKNOWN'

    // done: get from gTrans
    var translation = key[gCurrLang]

    // done: If translation not found - use english
    if (!translation) translation = key.en

    return translation
}

function doTrans() {
    // done: 
    // var els = document.querySelectorAll('[data-trans]'
    // for each el:
    //    get the data-trans and use getTrans to replace the innerText 
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        // console.log(transKey)
        const translation = getTrans(transKey)
        // console.log(translation)

        el.innerText = translation

        // done: support placeholder    
        if (el.placeholder) el.placeholder = translation
    })
}

function setLang(lang) {
    gCurrLang = lang
}

function onSetLang(lang) {
    setLang(lang)

    // done: if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')

    doTrans()
}


