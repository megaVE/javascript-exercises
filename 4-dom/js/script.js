// 30th Exercise

const contentSubmit = document.querySelector("#content-submit-30")

contentSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const title = document.querySelector("#title-30").value
    const h1element = document.querySelector("#title-h1-30")

    h1element.textContent = title
})

// 31th Exercise

const colorSubmit = document.querySelector("#color-submit-31")

colorSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    console.log("object");

    const newColor = document.querySelector("#color-31").value
    const list = document.querySelector("#paragraph-31")

    list.style.color = newColor
})

// 32th Exercise

const classSubmit = document.querySelector("#class-submit-32")

classSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const container = document.querySelector("#container-32")

    const content = document.querySelector("#content-32")
    
    content.textContent = (container.classList.length === 0) ? "Active" : "Not active"

    container.classList.toggle("active")

})

// 33th Exercise

const addingSubmit = document.querySelector("#adding-submit-33")

addingSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const element = document.querySelector("#element-33").value
    const list = document.querySelector("#list-33")

    const newElement = document.createElement("li")
    newElement.textContent = element

    list.appendChild(newElement)
})

// // 34th Exercise

const removableParagraph = document.querySelector("#paragraph-34")

removableParagraph.addEventListener("click", () => {
    removableParagraph.remove()
})

// 35th Exercise

const filterSubmit = document.querySelector("#filter-submit-35")

filterSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const list = document.querySelector("#list-35").children

    const query = document.querySelector("#element-35").value

    Object.keys(list).forEach(key => {
        list[key].style.display = (list[key].textContent.toLowerCase().includes(query)) ? "" : "none"
    })
})

// // 36th Exercise

const moveableList = ["Top element", "Middle element", "Bottom element"]

const moveList = document.querySelector("#list-36")

moveableList.forEach((element, index) => {
    const listElement = document.createElement("li")

    const content = document.createElement("span")
    content.textContent = `${element} `

    const toTopButton = document.createElement("button")
    toTopButton.textContent = "Move up"
    toTopButton.addEventListener("click", (e) => {
        e.preventDefault()


        if(index !== 0) {
            const list = document.querySelector("#list-36")

            const aux = list.children[index].children[0].textContent

            list.children[index].children[0].textContent = list.children[index - 1].children[0].textContent
            list.children[index - 1].children[0].textContent = aux
        }
    })

    const toBottomButton = document.createElement("button")
    toBottomButton.textContent = "Move down"
    toBottomButton.addEventListener("click", (e) => {
        e.preventDefault()
        
        if(index !== moveableList.length - 1) {
            const list = document.querySelector("#list-36")
        
            const aux = list.children[index].children[0].textContent

            list.children[index].children[0].textContent = list.children[index + 1].children[0].textContent
            list.children[index + 1].children[0].textContent = aux
        }
    })

    listElement.appendChild(content)
    listElement.appendChild(toTopButton)
    listElement.appendChild(toBottomButton)

    moveList.appendChild(listElement)
})

// // 37th Exercise

const modalToggle = document.querySelector("#toggle-37")

modalToggle.addEventListener("click", (e) => {
    e.preventDefault()

    const modal = document.querySelector("#modal-37")

    if(modalToggle.textContent === "Show"){
        modal.style.display = ""
        modalToggle.textContent = "Hide"
    } else {
        modal.style.display = "none"
        modalToggle.textContent = "Show"
    }
})

// // 38th Exercise

const accordionList = document.querySelectorAll(".accordion h2")

Object.keys(accordionList).forEach(key => {
    accordionList[key].addEventListener("click", (e) => {
        e.preventDefault()
    
        const accordionList = document.querySelectorAll(".accordion p")

        accordionList.forEach(accordion => accordion.style.display = "none")

        const accord = document.querySelector(`#${e.target.id}`).nextElementSibling

        accord.style.display = ""
    })
})