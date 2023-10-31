// 15th Exercise

const evenOrOdd = (value) => value % 2 === 0 ? "Even" : "Odd"

const evenOddSubmit = document.querySelector("#even-odd-submit-15")

evenOddSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const value = document.querySelector("#number-15").value
    const evenOdd = document.querySelector("#even-odd-15")

    evenOdd.textContent = `${value} is an ${evenOrOdd(Number(value)).toLowerCase()} number.`
})

// 16th Exercise

const getFactorial = (value) => value < 2 ? 1 : getFactorial(value - 1) * value

const factorialSubmit = document.querySelector("#factorial-submit-16")

factorialSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const value = document.querySelector("#number-16").value
    const factorial = document.querySelector("#factorial-16")

    factorial.textContent = `The factorial of ${value} is ${getFactorial(Number(value))}`
})

// 17th Exercise

const max = (value1, value2) => value1 > value2 ? value1 : value2

const min = (value1, value2) => value1 < value2 ? value1 : value2

const minMaxSubmit = document.querySelector("#min-max-submit-17")

minMaxSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const value1 = document.querySelector("#number-1-17").value
    const value2 = document.querySelector("#number-2-17").value
    const mode = document.querySelector("#mode-17").value
    const minMax = document.querySelector("#min-max-17")

    minMax.textContent = `The ${mode === "min" ? "lower" : "higher"} in the array is ${mode === "min" ? min(Number(value1), Number(value2)) : max(Number(value1), Number(value2))}`
})

// 18th Exercise

function revertString(text){
    const textArray = text.split("")
    const reverseArray = textArray.reverse()

    return reverseArray.join("")
}

const reverseSubmit = document.querySelector("#reverse-submit-18")

reverseSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const string = document.querySelector("#string-18").value
    const reverse = document.querySelector("#reverse-18")

    reverse.textContent = `The reverse of ${string} is ${revertString(string)}`
})

// 19th Exercise

function vowelCounter(text){
    const vowels = ["a", "e", "i", "o", "u"]
    const lowerTextArray = text.toLowerCase().split("")

    return lowerTextArray.reduce((acc, element) => vowels.includes(element) ? acc + 1 : acc, 0)
}

const vowelSubmit = document.querySelector("#vowel-submit-19")

vowelSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const text = document.querySelector("#string-19").value
    const vowel = document.querySelector("#vowel-19")

    const vowelsInWord = vowelCounter(text)

    vowel.textContent = `There are ${vowelsInWord} vowel${vowelsInWord > 1 ? "s" : ""} in the word ${text}.`
})

// 20th Exercise

const isPalindrome = (text) => text === text.split("").reverse().join("")

const palindromeSubmit = document.querySelector("#palindrome-submit-20")

palindromeSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const text = document.querySelector("#string-20").value
    const palindrome = document.querySelector("#is-palindrome-20")

    palindrome.textContent = `${text} is ${isPalindrome(text) ? "" : "not "}a palindrome.`
})

// 21th Exercise

function createRandomNumbersArray(arrayLength, min, max){
    let randomArray = []

    for(let i = 0; i < arrayLength; i++)
        randomArray = [...randomArray, Math.floor(Math.random() * (max - min + 1) + min)]

    return randomArray
}

const randomSubmit = document.querySelector("#random-submit-21")

randomSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const min = document.querySelector("#number-1-21").value
    const max = document.querySelector("#number-2-21").value
    const arrayLength = document.querySelector("#length-21").value
    const random = document.querySelector("#random-21")

    const randomArray = createRandomNumbersArray(Number(arrayLength), Number(min), Number(max))
    
    random.textContent = `Random Array Generated: [${randomArray.join(", ")}].`
})

// 22th Exercise

function maxElementFrequency(array){
    array.sort()

    let maxFrequencyName = ""
    let maxFrequencyAmount = 0
    let currentFrequency = 1
    for(let i = 1; i < array.length; i++){
        if(array[i] === array[i - 1])
            currentFrequency++
        else{
            if(currentFrequency > maxFrequencyAmount){
                maxFrequencyAmount = currentFrequency
                maxFrequencyName = array[i-1]
            }
            currentFrequency = 1
        }
    }
    if(currentFrequency > maxFrequencyAmount){
        maxFrequencyAmount = currentFrequency
        maxFrequencyName = array[array.length - 1]
    }

    return {maxFrequencyName, maxFrequencyAmount}
}

const frequencySubmit = document.querySelector("#frequency-submit-22")

frequencySubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const list = document.querySelector("#list-22").value
    const frequency = document.querySelector("#frequency-22")

    const maxFrequency = maxElementFrequency(list.split(" "))
    
    frequency.textContent = `The element "${maxFrequency.maxFrequencyName}" repeated the most, with ${maxFrequency.maxFrequencyAmount} apparitions.`
})