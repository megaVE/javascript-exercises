// 1st Exercise

const temperatureSubmit = document.querySelector("#temperature-submit")

temperatureSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const temperature = document.querySelector("#temperature").value
    const temperatureMu = document.querySelector("#temperature-mu")
    const convertedTemperature = document.querySelector("#converted-temperature")

    const outputTemperature = temperatureMu.value === "celsius" ? (Number(temperature) * 9 / 5) + 32 : (Number(temperature) - 32) * 5 / 9
    
    convertedTemperature.textContent = `The resulting temperature is ${outputTemperature.toFixed(2)} ${temperatureMu.value === "celsius" ? "fahrenheit" : "celsius"} degrees`
})

// 2nd Exercise

const bmiSubmit = document.querySelector("#bmi-submit")

bmiSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const height = document.querySelector("#height").value
    const weight = document.querySelector("#weight").value
    const calculatedBmi = document.querySelector("#calculated-bmi")

    const outputBmi = weight / (height * height)

    calculatedBmi.textContent = `Your Body Mass Index is ${outputBmi.toFixed(2)}`
})

// 3rd Exercise

const concatSubmit = document.querySelector("#concat-submit")

concatSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const name = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const city = document.querySelector("#city").value
    const message = document.querySelector("#returned-messsage")
    
    message.textContent =`Greetings, ${name}! You are a ${Number(age).toFixed(0)} years old person living in the city of ${city}`
})

// 4th Exercise

const rectangleSubmit = document.querySelector("#rectangle-submit")

rectangleSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const height = document.querySelector("#rectangle-height").value
    const width = document.querySelector("#rectangle-width").value
    const calculatedAreaAndPerimeter = document.querySelector("#area-and-perimeter")

    const area = width * height
    const perimeter = 2 * (Number(width) + Number(height))

    calculatedAreaAndPerimeter.textContent = `The rectangle's area is ${area.toFixed(2)} and its perimeter is ${perimeter.toFixed(2)}`
})

// 5th Exercise

