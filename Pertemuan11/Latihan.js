// 1. Cara Membuat Variabel di JavaScript
var title = "Belajar Pemrograman Javascript";
let description = "Tutorial untuk pemula";
const pi = 3.14;
x = 42;

var myVariable = "Hello";
var my_variable = "Hello";

// 2. Menampilkan Isi Variabel
var message = "Hello, World!";
console.log(message);
document.write(message + "<br>");
alert(message);

// 3. Contoh Variabel JavaScript dalam HTML
document.write("Title: " + title + "<br>");

// 4. Mengisi Ulang Variabel
var counter = 1;
console.log(counter); // Output: 1
counter = 2;
console.log(counter); // Output: 2

// 5. Menghapus Variabel
var toBeDeleted = "This will be deleted";
console.log(toBeDeleted); // Output: This will be deleted
delete toBeDeleted;
console.log(toBeDeleted); // Output: undefined

// 6. Otomatis Mengenali Tipe Data
var name = "John";
var age = 30;
var isSingle = true;

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isSingle); // Output: boolean

// 7. Aturan Penulisan Nama Variabel
var _startWithUnderscore = "Valid";
var camelCaseExample = "Recommended";
var PascalCase = "Valid";
var snake_case = "Valid";

// 8. Dialog Prompt
alert("Selamat datang di tutorial Javascript");
var userConfirmed = confirm("Apakah Anda yakin?");
console.log(userConfirmed); // Output: true atau false
var userInput = prompt("Masukkan nama Anda:", "John Doe");
console.log(userInput); // Output: nilai yang diinputkan oleh pengguna

// 9. Operator dalam JavaScript
// Operator Aritmatika
var a = 10;
var b = 2;
console.log(a + b); // Output: 12
console.log(a - b); // Output: 8
console.log(a * b); // Output: 20
console.log(a / b); // Output: 5
console.log(a % b); // Output: 0
console.log(a ** b); // Output: 100

// Operator Penugasan
var jumlahView = 10;
jumlahView += 5; // jumlahView sekarang adalah 15
console.log(jumlahView);

var a = 5;
a++; // a sekarang adalah 6
console.log(a);
a--; // a sekarang adalah 5
console.log(a);

// Operator Relasi atau Perbandingan
var x = 10;
var y = 20;
console.log(x > y); // Output: false
console.log(x < y); // Output: true
console.log(x == 10); // Output: true
console.log(x === "10"); // Output: false (perbandingan tipe data)
console.log(x != y); // Output: true
console.log(x !== "10"); // Output: true (perbandingan tipe data)

// Operator Logika
var a = true;
var b = false;
console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false

// Operator Bitwise
var a = 60; // 0011 1100
var b = 13; // 0000 1101
console.log(a & b); // Output: 12 (0000 1100)
console.log(a | b); // Output: 61 (0011 1101)
console.log(a ^ b); // Output: 49 (0011 0001)
console.log(~a); // Output: -61 (1100 0011)
console.log(a << 2); // Output: 240 (1111 0000)
console.log(a >> 2); // Output: 15 (0000 1111)

// Operator Ternary
var age = 18;
var canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes