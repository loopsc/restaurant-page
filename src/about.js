const loadAbout = () => {
    const divContent = document.querySelector("#content")

    const header = document.createElement("p")
    header.classList.add("header-text")
    header.textContent = "About"
    
    const content = document.createElement("p")
    content.style.fontSize = "100px"
    content.textContent = "About content"
    
    divContent.appendChild(header)
    divContent.appendChild(content)
}

export { loadAbout }