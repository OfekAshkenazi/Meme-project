function infoMsg(txt) {
    const elPopUpMsg = document.querySelector('.pop-up-msg')
    elPopUpMsg.style.display = 'block'
    elPopUpMsg.innerText = txt

    setTimeout(() => {
        elPopUpMsg.style.display = 'none'
    }, 2000);
}

