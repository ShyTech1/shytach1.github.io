for (i = 0; i < 5; i++) {
    showContent()
}

function showContent() {
    const temp = document.querySelector(".template")
    const node = temp.content.cloneNode(true)
    document.querySelector(".teble-container").appendChild(node)
}