function menuClick() {
    let menu = document.querySelector('nav ul')
    let nav = document.querySelector('nav')

    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
        nav.style.borderColor = '#4AAFF7'
    } else {
        menu.style.display = 'flex'
        nav.style.borderColor = 'transparent'
    }
}