var currentInput = "";
var currentOperator = "";
var storedInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    storedInput = "";
    updateDisplay();
}

function operate(operator) {
    if (currentInput !== "") {
        if (storedInput !== "") {
            calculate();
        }
        currentOperator = operator;
        storedInput = currentInput;
        currentInput = "";
        updateDisplay();
    }
}

function calculate() {
{
        let result;
        const num1 = parseFloat(storedInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        currentOperator = "";
        storedInput = "";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        appendNumber(parseInt(key, 10));
    } else if (key === '.') {
        appendDecimal();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'C') {
        clearDisplay();
    } else if (['+', '-', '*', '/'].includes(key)) {
        operate(key);
    } else {
        alert("Invalid key pressed. Only numbers and operators are allowed.");
    }
});
