document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let expression = '';

    function appendChar(char) {
        expression += char;
        display.value = expression;
    }

    function clearDisplay() {
        expression = '';
        display.value = expression;
    }

    function deleteChar() {
        expression = expression.slice(0, -1);
        display.value = expression;
    }

    function calculate() {
        try {
            let result = eval(expression);
            display.value = result;
            expression = result.toString();
        } catch (error) {
            display.value = 'Error';
            expression = '';
        }
    }

    // Expose functions to the global scope for use in the HTML
    window.appendChar = appendChar;
    window.clearDisplay = clearDisplay;
    window.deleteChar = deleteChar;
    window.calculate = calculate;
});