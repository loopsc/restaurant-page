
const pageLoad = () => {
    const divContent = document.querySelector("#content")

    const header = document.createElement("p")
    header.classList.add("header-text")
    header.textContent = "ANTIQUE"
    
    const content = document.createElement("p")
    content.style.fontSize = "100px"
    content.textContent = "Main page content"
    
    divContent.appendChild(header)
    // divContent.appendChild(content)
    divContent.appendChild(content)
}

export {pageLoad}
