let input = document.getElementById('inputCalculator')
let clean = document.getElementById('buttonClean')
let buttonsNumber = document.getElementsByClassName('number')
let solve = document.getElementById('buttonEqual')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')

for (let i = 0; i < buttonsNumber.length; i++){
    buttonsNumber[i].addEventListener('click', (e)=>{
        // alert(e.currentTarget.textContent)
        input.value += e.currentTarget.textContent
    })
}

clean.addEventListener('click', ()=>{
    input.value = ''
})

plus.addEventListener('click', (e)=>{
    input.value += e.currentTarget.textContent
})

solve.addEventListener('click', (e)=>{

})

multiply.addEventListener('click', (e)=>{
    input.value += e.currentTarget.textContent
})

divide.addEventListener('click', (e)=>{
    input.value += e.currentTarget.textContent
})

minus.addEventListener('click', (e)=>{
    input.value += e.currentTarget.textContent
})


