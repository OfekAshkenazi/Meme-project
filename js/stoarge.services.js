'use strict'
const STORAGE_KEY = 'saved-memes'

function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    const val = JSON.parse(str)
    return val
}

function saveToStorage(key, val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
}