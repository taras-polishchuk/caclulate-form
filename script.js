'use strict'
const form = document.querySelector('form'),
      inputs = document.querySelectorAll('input'),
      select = document.querySelector('#select'),
      result = document.querySelector('.result span');
let firstNum, secondNum, selected, results;


function operate (operator, operand1, operand2) {
    return  Math.floor(operator(operand1, operand2));
    
}

function add (x, y) {
    return x + y;
}
function multiply (x, y) {
    return x * y;
}
function divide (x, y) {
    return x / y;
}
function subtract (x, y) {
    return x - y;
}


function onChangeInput (input) {
    if (input === inputs[1]) {
        firstNum = +input.value
    } else {
        secondNum = +input.value;
    }
}
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        onChangeInput(e.currentTarget);
    })
});
select.addEventListener('change', (e) => {
    selected = e.target.value;
});

function getResults (operator) {
    switch (operator) {
        case '+':  results = operate(add, firstNum, secondNum); break;
        case '*':  results = operate(multiply, firstNum, secondNum); break;
        case '/':  results = operate(divide, firstNum, secondNum); break;
        case '-':  results = operate(subtract, firstNum, secondNum); break;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (selected != '+' && selected != '-' && selected != '*' && selected != '/') {
        result.textContent = 'Выберите операцию!';
        return;
    }
    getResults(selected);
    result.textContent = results;
})

form.addEventListener('reset', () => {
    result.textContent = 0;
    selected = '';
})

