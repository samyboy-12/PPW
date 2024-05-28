function compareNumbers() {
    const num1 = parseFloat(prompt("Masukkan bilangan pertama:"));
    const num2 = parseFloat(prompt("Masukkan bilangan kedua:"));

    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Salah satu atau kedua input bukan angka yang valid.";
    } else if (num1 > num2) {
        result = `Bilangan pertama (${num1}) lebih besar dari bilangan kedua (${num2}).`;
    } else if (num1 < num2) {
        result = `Bilangan pertama (${num1}) lebih kecil dari bilangan kedua (${num2}).`;
    } else {
        result = `Bilangan pertama (${num1}) sama dengan bilangan kedua (${num2}).`;
    }

    const content = document.getElementById('content');
    content.innerHTML += `
        <div class="alert alert-info mt-4" role="alert">
            ${result}
        </div>
    `;
}
