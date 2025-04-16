const loadMenu = () => {
    const divContent = document.querySelector("#content")

    const header = document.createElement("p")
    header.classList.add("header-text")
    header.textContent = "Menu"
    
    const content = document.createElement("p")
    content.style.fontSize = "100px"
    content.textContent = "Menu content"
    
    divContent.appendChild(header)
    divContent.appendChild(content)
}

export { loadMenu }