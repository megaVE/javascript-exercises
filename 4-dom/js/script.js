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
})

// // 36th Exercise

// .addEventListener("click", (e) => {
//     e.preventDefault()
// })

// // 37th Exercise

// .addEventListener("click", (e) => {
//     e.preventDefault()
// })

// // 38th Exercise

// .addEventListener("click", (e) => {
//     e.preventDefault()
// })