// 39th Exercise

let counter = 0

const timer = document.querySelector("#timer-39")

setInterval(() => {
    counter++

    timer.textContent = `Counter: ${counter}`
}, 1000)

// 40th Exercise

const transformSubmit = document.querySelector("#transform-submit-40")

const transformArray = [1, 2, 3, 4, 5, 6, 7]

transformArray.forEach(element => {
    const array = document.querySelector("#array-40")

    const newElement = document.createElement("li")
    newElement.textContent = element

    array.appendChild(newElement)
})

transformSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const transform = (element) => (element + 1) / 2

    const output = document.querySelector("#output-40")
    output.innerHTML = ''

    for(let i = 0; i < transformArray.length; i++) {
        const newElement = document.createElement("li")
        newElement.textContent = transform(transformArray[i])

        output.appendChild(newElement)
    }
})

// 41th Exercise

const conditionalSubmit = document.querySelector("#conditional-submit-41")

conditionalSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const input = parseInt(document.querySelector("#input-41").value)
    
    const output = document.querySelector("#output-41")

    const checkFunction = (number) => {
        if(isNaN(number)) {
            return false
        } else if(number < 2) {
            return false
        } else if(number === 2) {
            return true
        } else if(number % 2 === 0) {
            return false
        } else {
            for(let i = 3; i < number; i += 2) {
                if(number % i === 0) {
                    return false
                }
            }

            return true
        }
    }

    const executeFunction = () => {
        output.textContent = "The number is prime."
    }

    const doNotExecuteFunction = () => {
        output.textContent = "The number is not prime."
    }

    if(checkFunction(input)) {
        executeFunction()
    } else {
        doNotExecuteFunction()
    }
})

// 42th Exercise

function simulateAPI(result) {
    return new Promise(solve => {
        setTimeout(() => {
            solve(result)
        }, 3000)
    })
}

simulateAPI({ error: null, status: "COMPLETE" }).then(res => {
    const response = document.querySelector("#response-42")
    response.textContent = JSON.stringify(res)
})

// 43th Exercise

const fetchSubmit = document.querySelector("#fetch-submit-43")

fetchSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const link = document.querySelector("#link-43").value

    fetch(
        link,
        {
            method: "GET",
            header: { "Accept" : "application/json" }
        },
    )
    .then(res => res.json())
    .then(res => {
        const response = document.querySelector("#response-43")
        response.textContent = JSON.stringify(res)
    })
})

// 44th Exercise

const multiFetchSubmit = document.querySelector("#multi-fetch-submit-44")

multiFetchSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const links = document.querySelector("#link-44").value.split(" ")
    
    const response = document.querySelector("#response-44")
    response.textContent = ""
    
    links.forEach(async (link, index) => {
        const res = await fetch(
            link,
            {
                method: "GET",
                header: { "Accept" : "application/json" }
            },
        )
        
        const resJSON = await res.json()

        response.textContent += JSON.stringify(resJSON)
    })
})

// 45th Exercise

const retrySubmit = document.querySelector("#retry-submit-45")

retrySubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const link = document.querySelector("#link-45").value

    const response = document.querySelector("#response-45")

    const MAX_ATTEMPTS = 3

    new Promise(async (resolve, reject) => {
        for(let i = 0; i <= MAX_ATTEMPTS; i++){
            try {
                const result = await fetch(
                    link,
                    {
                        method: "GET",
                        header: { "Accept" : "application/json" }
                    },
                )
                
                return resolve(result)
            } catch (error) {
                console.log(`${i + 1}th attempt failed...`)

                if(i === MAX_ATTEMPTS) {
                    return reject(error)
                }

                await new Promise((r) => setTimeout(r, 1000))
            }
        }
    })
    .then(res => res.json())
    .then(res => {
        response.textContent = JSON.stringify(res)
    })
    .catch(_ => {
        response.textContent = "Error fetching data. Please try again."
    })
})