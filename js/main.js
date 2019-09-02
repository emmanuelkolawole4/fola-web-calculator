class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
        // this.onCalc();
    }

    // onCalc() {
    //     this.currentOperand = 0;
    //     this.previousOperand = '';
    //     this.operation = undefined;
    // }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() +  number.toString();
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const onCalculator = document.querySelector('[data-on]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

function loadFunction() {
    onCalculator.innerText = 'OFF';
    // calculator.currentOperand = 0;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        // console.log(this);
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
    // console.log(this);
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
    // console.log(this);
})





// function checkOnOnButton() {
//     if (onCalculator.innerText === 'OFF') {
//         onCalculator.addEventListener('click', () => {
//             console.log('hello');
//         })
//     }
// }


