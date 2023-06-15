let button = document.querySelector('.button')
let Continue = document.querySelector('.continue')

let cardHolderName = document.querySelector('.cardHolderNameInput')
let cardHolderNumber = document.querySelector('.cardNumberInput')
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let cvc = document.querySelector('.cvc')

let backNumber = document.querySelector('.backNumber')
let cardNumber = document.querySelector('.frontNumber')
let cardName = document.querySelector('.name')
let monthCard = document.querySelector('.mm')
let yearCard = document.querySelector('.yy')

let inputs = document.querySelectorAll('input')

let form = document.querySelector('.form')
let thankyou = document.querySelector('.center')

let numberError = document.querySelector('.numberError')
let monthYearError = document.querySelector('.monthYearError')
let cvcError = document.querySelector('.cvcError')



button.addEventListener('click', () =>{
    if (cardNameFun() === true &&
        cardNumberFun() === true &&
        monthFun() === true &&
        yearFun() === true &&
        cvcFun() === true){
        cardNameFun()
        cardNumberFun()
        monthFun()
        yearFun()
        cvcFun()
        form.style.display = 'none'
        thankyou.style.display = 'block'
    } else{
        cardNameFun()
        cardNumberFun()
        monthFun()
        yearFun()
        cvcFun()
    }
})

Continue.addEventListener('click', () =>{
    form.style.display = 'flex'
    thankyou.style.display = 'none'
    cardHolderName.value = ''
    cardHolderNumber.value = ''
    month.value = ''
    year.value = ''
    cvc.value = ''
    cardNumber.innerHTML = 'Jane Appleseed'
    cardNumber.innerHTML = '0000 0000 0000 0000'
    monthCard.innerHTML = '00'
    yearCard.innerHTML = '00'
    backNumber.innerHTML = '000'
    numberError.style.display = 'none'
})


let cardNameFun = () =>{
    if (inputs[0].value.match(/^[A-Za-z]+$/)){
        cardName.innerHTML = cardHolderName.value
        inputs[0].style.borderColor = 'hsl(270, 3%, 87%)'
        return true
    }else{
        cardName.innerHTML
        inputs[0].style.borderColor = 'hsl(0, 100%, 66%)'
        return false
    }
}

let cardNumberFun = () =>{
    if (inputs[1].value.match(/^\d+/) && cardHolderNumber.value.length === 16){
        cardNumber.innerHTML = cardHolderNumber.value.match(/.{1,4}/g).join(" ")
        inputs[1].style.borderColor = 'hsl(270, 3%, 87%)'
        numberError.style.display = 'none'
        return true
    }else{
        cardNumber.innerHTML
        inputs[1].style.borderColor = 'hsl(0, 100%, 66%)'
        numberError.style.display = 'flex'
        return false
    }
}

let monthFun = () =>{
    if (inputs[1].value.match(/^\d+/) && month.value.length === 2){
        monthCard.innerHTML = month.value
        inputs[1].style.borderColor = 'hsl(270, 3%, 87%)'
        monthYearError.style.display = 'none'
        return true
    }else{
        monthCard.innerHTML
        inputs[1].style.borderColor = 'hsl(0, 100%, 66%)'
        monthYearError.style.display = 'flex'
        return false
    }
}

let yearFun = () =>{
    if (inputs[3].value.match(/^\d+/) && month.value.length === 2){
        yearCard.innerHTML = year.value
        inputs[3].style.borderColor = 'hsl(270, 3%, 87%)'
        monthYearError.style.display = 'none'
        return true
    }else{
        yearCard.innerHTML
        inputs[3].style.borderColor = 'hsl(0, 100%, 66%)'
        monthYearError.style.display = 'flex'
        return false
    }
}

let cvcFun = () =>{
    if (inputs[4].value.match(/^\d+/) && month.value.length === 2){
        backNumber.innerHTML = cvc.value
        inputs[4].style.borderColor = 'hsl(270, 3%, 87%)'
        monthYearError.style.display = 'none'
        return true
    }else{
        backNumber.innerHTML
        inputs[4].style.borderColor = 'hsl(0, 100%, 66%)'
        monthYearError.style.display = 'flex'
        return false
    }
}