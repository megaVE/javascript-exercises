// 1st Exercise

const temperatureSubmit = document.querySelector("#temperature-submit-1")

temperatureSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const temperature = document.querySelector("#temperature-1").value
    const temperatureMu = document.querySelector("#temperature-mu-1")
    const convertedTemperature = document.querySelector("#converted-temperature-1")

    const outputTemperature = temperatureMu.value === "celsius" ? (Number(temperature) * 9 / 5) + 32 : (Number(temperature) - 32) * 5 / 9
    
    convertedTemperature.textContent = `The resulting temperature is ${outputTemperature.toFixed(2)} ${temperatureMu.value === "celsius" ? "fahrenheit" : "celsius"} degrees.`
})

// 2nd Exercise

const bmiSubmit = document.querySelector("#bmi-submit-2")

bmiSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const height = document.querySelector("#height-2").value
    const weight = document.querySelector("#weight-2").value
    const calculatedBmi = document.querySelector("#calculated-bmi-2")

    const outputBmi = weight / (height * height)

    calculatedBmi.textContent = `Your Body Mass Index is ${outputBmi.toFixed(2)}.`
})

// 3rd Exercise

const concatSubmit = document.querySelector("#concat-submit-3")

concatSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const name = document.querySelector("#name-3").value
    const age = document.querySelector("#age-3").value
    const city = document.querySelector("#city-3").value
    const message = document.querySelector("#returned-messsage-3")
    
    message.textContent =`Greetings, ${name}! You are a ${Number(age).toFixed(0)} years old person living in the city of ${city}.`
})

// 4th Exercise

const rectangleSubmit = document.querySelector("#rectangle-submit-4")

rectangleSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const height = document.querySelector("#rectangle-height-4").value
    const width = document.querySelector("#rectangle-width-4").value
    const calculatedAreaAndPerimeter = document.querySelector("#area-and-perimeter-4")

    const area = width * height
    const perimeter = 2 * (Number(width) + Number(height))

    calculatedAreaAndPerimeter.textContent = `The rectangle's area is ${area.toFixed(2)} and its perimeter is ${perimeter.toFixed(2)}.`
})

// 5th Exercise

const divisionSubmit = document.querySelector("#division-submit-5")

divisionSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const dividend = document.querySelector("#dividend-5").value
    const divisor = document.querySelector("#divisor-5").value
    const divisibility = document.querySelector("#divisibility-5")

    const isDivisible = dividend % divisor === 0

    divisibility.textContent = `${dividend} is${isDivisible ? "" : " not"} divisible by ${divisor}.`
})

// 6th Exercise

const ageGroupSubmit = document.querySelector("#age-group-submit-6")

ageGroupSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const age = document.querySelector("#age-6").value
    const ageGroup = document.querySelector("#age-group-6")

    let ageGroupName

    if(Number(age) < 13)        ageGroupName = "child"
    else if(Number(age) < 18)   ageGroupName = "teenager"
    else if(Number(age) < 60)   ageGroupName = "adult"
    else                        ageGroupName = "elderly"

    ageGroup.textContent = `You are a(n) ${ageGroupName}.`
})

// 7th Exercise

const numbersComparisonSubmit = document.querySelector("#compare-numbers-submit-7")

numbersComparisonSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const firstNumber = document.querySelector("#number-1-7").value
    const secondNumber = document.querySelector("#number-2-7").value
    const numbersComparison = document.querySelector("#numbers-comparison-7")

    let comparison
    
    if(Number(firstNumber) < Number(secondNumber))          comparison = "lesser than"
    else if(Number(firstNumber) > Number(secondNumber))     comparison = "greater than"
    else                                                    comparison = "equal to"

    numbersComparison.textContent = `The first number is ${comparison} the second number.`
})

// 8th Exercise

const calculatorSubmit = document.querySelector("#calculator-submit-8")

calculatorSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const firstValue = document.querySelector("#number-1-8").value
    const secondValue = document.querySelector("#number-2-8").value
    const operation = document.querySelector("#operation-8").value
    const calculatorResult = document.querySelector("#calculator-result-8")

    function calculate(valueA, valueB, operator){
        const a = Number(valueA)
        const b = Number(valueB)

        switch(operator){
            case "sum": return a+b
            case "subtraction": return a-b
            case "times": return a*b
            case "division": return (a/b).toFixed(2)
            default: return NaN
        }
    }
    const result = calculate(firstValue, secondValue, operation)
    
    calculatorResult.textContent = result.toString()
})

// 9th Exercise

const fareSubmit = document.querySelector("#fare-submit-9")

fareSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const age = document.querySelector("#age-9").value
    const isStudent = document.querySelector("#is-student-9").value
    const fare = document.querySelector("#fare-9")

    let price = 2.50

    if(Number(age) < 9) price = 0
    else if(isStudent === "yes") price *= 0.5
    else if(age > 60) price *= 0.7

    fare.textContent = `Your fare is ${price}$`
})

// 10th Exercise

const sumSubmit = document.querySelector("#sum-submit-10")

sumSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const limit = document.querySelector("#limit-10").value
    const sum = document.querySelector("#sum-10")

    let result = 0
    for(let i = 0; i < Number(limit) + 1; i++)
        result += i

    sum.textContent = `The sum from 0 to ${limit} is ${result}.`
})

// 11th Exercise

const multiplicationTableSubmit = document.querySelector("#multiplication-table-submit-11")

multiplicationTableSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const number = document.querySelector("#number-11").value
    const multiplicationTable = document.querySelector("#multiplication-table-11")

    while(multiplicationTable.hasChildNodes())
        multiplicationTable.removeChild(multiplicationTable.firstChild)
    
    for(let i = 0; i < 10; i++){
        const answer = document.createElement("li")
        answer.textContent = `${number} x ${i + 1} = ${Number(number) * (i + 1)}`
        multiplicationTable.appendChild(answer.cloneNode(true))
    }
})

// 12th Exercise

const primeSubmit = document.querySelector("#prime-submit-12")

primeSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const limit = document.querySelector("#limit-12").value
    const primeNumbers = document.querySelector("#prime-numbers-12")

    let primeList = (Number(limit) >= 2) ? [2] : []
    
    for(let i = 3; i <= Number(limit); i += 2){
        let j = 3
        for(; j < i; j += 2)
            if(i % j === 0) break
        if(j === i) primeList.push(i)
    }

    const lastPrime = (primeList.length >= 2) ? primeList.pop() : undefined

    primeNumbers.textContent = `The prime numbers between 1 and ${limit} are ${primeList.length > 0 ? primeList.join(", ") : "none"}${lastPrime ? ` and ${lastPrime}` : ""}.`
})

// 13th Exercise

const patternSubmit = document.querySelector("#pattern-submit-13")

patternSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const limit = document.querySelector("#limit-13").value
    const pattern = document.querySelector("#pattern-13")

    while(pattern.hasChildNodes())
        pattern.removeChild(pattern.firstChild)

    for(let i = 0; i < Number(limit); i++){
        const line = document.createElement("li")
        line.textContent = "*".repeat(i+1)
        pattern.appendChild(line.cloneNode(true))
    }
})

// 14th Exercise

const fibonacciSubmit = document.querySelector("#fibonacci-submit-14")

fibonacciSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const sequences = document.querySelector("#sequences-14").value
    const fibonacci = document.querySelector("#fibonacci-14")

    let fibonacciList = []
    if(Number(sequences) >= 1) fibonacciList.push(1)
    if(Number(sequences) >= 2) fibonacciList.push(1)

    for(let i = 2; i < Number(sequences); i ++)
        fibonacciList.push(fibonacciList[i-2] + fibonacciList[i-1])

    const lastFibonacci = (fibonacciList.length >= 2) ? fibonacciList.pop() : undefined

    fibonacci.textContent = `The ${sequences} first sequences of fibonacci are ${fibonacciList.length > 0 ? fibonacciList.join(", ") : "none"}${lastFibonacci ? ` and ${lastFibonacci}` : ""}.`
})