let lastAnswer = 0;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    const display = document.getElementById('display');
    if (value === 'Ans') {
        display.value += lastAnswer;
    } else {
        display.value += value;
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        lastAnswer = eval(display.value);
        display.value = lastAnswer;
        document.getElementById('ans').innerText = `Ans = ${lastAnswer}`;
    } catch (error) {
        alert('Ekspresi tidak valid');
        clearDisplay();
    }
}
