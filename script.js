function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("profile img")

    // substituir a imagem
    if (html.classList.contains('light')){
        // se tiver lighy mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        // se tiver sem light mode, manter a imagem natural
        img.setAttribute('src', './assets/avatar.png')
    }
}