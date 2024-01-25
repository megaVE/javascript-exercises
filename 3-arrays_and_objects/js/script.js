// 23th Exercise

const duplicateSubmit = document.querySelector("#duplicate-submit-23")

duplicateSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const array = document.querySelector("#array-23").value.split(" ")
    const duplicate = document.querySelector("#duplicate-23")

    let duplicateArray = []
    array.forEach(element => {
        if(!duplicateArray.includes(element))
            duplicateArray.push(element)
    })

    duplicate.textContent = `The array without duplicated elements is [${duplicateArray.join(", ")}]`
})

// 24th Exercise

const concatenateSubmit = document.querySelector("#concatenate-submit-24")

concatenateSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const array1 = document.querySelector("#array-1-24").value.split(" ")
    const array2 = document.querySelector("#array-2-24").value.split(" ")
    const concatenate = document.querySelector("#concatenate-24")
    
    const concatenateArray = [...array1, ...array2]

    concatenate.textContent = `The concatenation of both arrays is [${concatenateArray.join(", ")}]`
})

// 25th Exercise

const intersectionSubmit = document.querySelector("#intersection-submit-25")

intersectionSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const array1 = document.querySelector("#array-1-25").value.split(" ")
    const array2 = document.querySelector("#array-2-25").value.split(" ")
    const intersection = document.querySelector("#intersection-25")

    const intersectionArray = array1.filter(element => array2.includes(element))

    let duplicateArray = []
    intersection.forEach(element => {
        if(!duplicateArray.includes(element))
            duplicateArray.push(element)
    })

    intersection.textContent = `The intersection of both arrays is [${duplicateArray.join(", ")}]`
})

// 26th Exercise

const meanSubmit = document.querySelector("#mean-submit-26")

meanSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const array = document.querySelector("#array-26").value.split(" ")
    const mean = document.querySelector("#mean-26")

    const meanArray = array.reduce((acc, element) => Number(element) + acc, 0)

    mean.textContent = `The mean of the elements in the array is ${(meanArray / array.length).toFixed(2)}`
})

// 27th Exercise

const objectSum = {
    firstProperty: 2,
    secondProperty: 6,
    thirdProperty: 9,
}

document.querySelector("#object-27").textContent = JSON.stringify(objectSum)

const sumSubmit = document.querySelector("#sum-submit-27")

sumSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const sum = document.querySelector("#sum-27")
    
    let objectSumValue = 0

    Object.keys(objectSum).forEach(key => { objectSumValue += objectSum[key]})

    sum.textContent = `The sum of the object's properties is ${objectSumValue}`
})

// 28th Exercise

const objectFilter = {
    vegetables: ["apple", "banana", "turnip"],
    state: true,
    counter: 9,
    box: {},
}

document.querySelector("#object-28").textContent = JSON.stringify(objectFilter)

const filterSubmit = document.querySelector("#filter-submit-28")

filterSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const query = document.querySelector("#query-28").value.toLowerCase()

    const filtered = document.querySelector("#filtered-28")

    let filteredObject = {}

    if(query === ""){
        filteredObject = objectFilter
    } else {
        Object.keys(objectFilter).forEach(key => {
            if(key.includes(query)){
                filteredObject[key] = objectFilter[key]
            }
        })
    }
    
    filtered.textContent = JSON.stringify(filteredObject)
})

// 29th Exercise

const objectUnite1 = {
    firstProperty: "number",
    secondProperty: "string",
}

document.querySelector("#object-1-29").textContent = JSON.stringify(objectUnite1)

const objectUnite2 = {
    thirdProperty: "float",
    fourthProperty: "boolean",
}

document.querySelector("#object-2-29").textContent = JSON.stringify(objectUnite2)

const uniteSubmit = document.querySelector("#unite-submit-29")

uniteSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const unite = document.querySelector("#unite-29")

    const unitedObject = { ...objectUnite1, ...objectUnite2 }

    unite.textContent = JSON.stringify(unitedObject)
})