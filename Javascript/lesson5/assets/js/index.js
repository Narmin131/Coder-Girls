// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdən sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// Operatorlar, Operand

// Operand - sağında və ya solunda operator istifadə olunan dəyər və ya dəyişəndir
// +10, -20, ++40

// Arithmetic Operators - Cəbri(Riyazi) operatorlar
// + - toplama
// - - çıxma
// * - vurma
// /  - bölmə
// %  - qalıq
// **  -  qüvvət
// ++  - 1 vahid artırma
// --  - 1 vahid azaltma

let a = 100;
let b = 30;

console.log("Ededlerin cemi:" + (a + b));
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let name = "Narmin";
let surname = "Mammadova";

console.log(name + surname);
// console.log(a++); //100
// console.log(a--); //100

console.log(--a);

// Postfix ve Prefix

// -- yada ++ evvel gelirse bu olur prefix -- birinci topluyur ve sonra deyeri yazdirir
// -- yada ++ sora gelirse bu olur postfix -- postfix birinci deyeri yazdirir sonra topluyur yada cixir

//  Assingment Operators - Mənimsətmə(Bərabərləşdirmə) operatorları
// = - bərabərləşdirmə, mənimsətmə
// += - toplayıb mənimsətmə
// -= - çıxıb mənimsətmə
// *= - vurub mənimsətmə
// /= - bölüb mənimsətmə
// %= - qalığa mənimsətmə
// **= - qüüvətə mənimsətmə

let age = 12;
age += 4; // age = age + 4 // age = 12 + 4

console.log(age);

// Comparison operators - Müqayisə operatorları
// ==  - bərabərdir
// === - bərabərdir
// !=  - fərqlidir
// !== - fərqlidir
// < - kiçikdir
// <= - kiçik bərabərdir
// > - böyükdür
// >= - böyük bərabər

let price = 200;
let info = "200";

console.log(price == info);
console.log(price === info);

// == beraber yalniz deyeri yoxluyur, === hem deyeri hem tipi yoxluyur

console.log(34 >= 34);

// Logical Operators - Məntiqi operatorlar
// && - AND - ve (soldan baslayaraq false olan deyeri axtarir ve ilk tapdiginin original halini donderir,eger tapmazsa sonuncunu qaytarir)
// || - OR - ve ya (soldan baslayaraq true olan deyeri axtarir ve ilk tapdiginin original halini donderir, eger tapmazsa sonuncunu qaytarir)
// ! - NOT - inkar

// && - AND

// +18 yas  ve  prava

let myAge = 20;
let prava = true;

console.log(myAge > 18 && prava == true);
// True && true --> true
// True && false --> false
// False && true --> false
// False && false --> false

// ||  - Or - ve ya

let myPrice = 400;
let permission = false;

console.log(myPrice > 300 || permission == true);
// True || false --> true
// True || true --> true
// False || true --> true
// False || false --> false

// !  - Not - inkar

console.log(!true);

console.log(!(7 > 5));

console.log(!0);
console.log(!6);
console.log(!"Nermin");

let counter = 10;
console.log(!!counter); // true

// Type conversion - Tip cevrilmesi
// Implicit conversion - automatic type conversion --> avtomatik cevirilen tipler
// Explicit conversion - manual type conversion --> ozumuzun elnen cevirdiyimiz tipler

console.log(typeof true); // boolean data type
console.log(typeof String(true)); //string  data type
console.log(typeof 8);
console.log(String(8));
console.log("10");
console.log(Number("10"));
console.log("A123");
console.log(Number("A123"));

// **********************************************

// Xüsusi operator - Special operator
// ,    (vergül) (kodları bir birinden ayırmaq üçün istifadə olunur)

console.log(5 + 6, 11 - 2);

// typeof (datanın tipini dönderir)

console.log(typeof 12);
console.log(typeof "Hello");

// ?:     --> ternary operator - şərt operatoru

console.log(10 > 5 ? "10 ededi 5 den boyukdur" : "10 ededi 5 den boyuk deyil");

let money = 110;
console.log(
  money == 120 ? "Senin pulun 120 ye beraberdir" : "Senin pulun azdi"
);
// (condition ? true : false)

// void (void istenilen halda neticeni undefined edir)

console.log(void (5 + 6));

// delete (objectin deyerini silmek üçün istifadə olunur)

const company = {
  name: "Matrix",
  age: 5,
  founder: "Hilal",
};

delete company.age;
delete company.founder;
console.log(company);

// new (yeni deyer yaratmaq üçündur)
// this (mövcud deyeri yada parametri işarələmək üçündür)

function carStructure(model, year) {
  this.model = model;
  this.year = year;
}

let firstCar = new carStructure("Mersedes", 2023);
let secondCar = new carStructure("BMW", 2022);
console.log(firstCar);
console.log(secondCar);

// in

let school = {
  teacher: "Narmin",
  student: "Esma",
};

console.log("teacher" in school);
console.log("student" in school);

// instanceof (Yalniz referans, non-primitive tiplerde datanin tipini true yada false olaraq dondurur)

let num = 12;
let arr = [12, true, "hello"];
console.log(num instanceof Number);
console.log(arr instanceof Array);

// *********************************************

// Truthy, falsy value

// Javascriptde 7 dene falsy deyer var ve bunlar asagidakilardir
// 1.false :
// 2.0 :
// 3. 0n:
// 4. "", '', `` : Double quote, single quote, literal template
// 5.null:
// 6.undefined:
// 7. NaN: Not a number

// var/let/const + variableName(deyiskenAdi) = variableValue(degiskenDeyeri)
// acar soz + deyisken adi = deyiskene menimsedeceyimiz deyer

var myWork = "Team Lead"; //ES6
let myCity = "Baku";
const myCountry = "Azerbaijan";

// constant --> sabit

let p = 23;
p = 46;
console.log(p);

// sehv yazilis
// const k = 12;
// k = 45;
// console.log(k);

// VAR  - global ve ya function scope  yaradir
// LET  -  block scope yaradir
// CONST - block scope yaradir

// SCOPE - yazdiginiz kodun istenilen yerden elcatanligi

var child = "Furkan"; // global

console.log(child);

function test() {
  console.log(child);
  var person = "Narmin"; // function scope
}

test();

if (myAge == 20) {
  let g = "Hello";
  console.log(g);
}

let x;
x = 200;
console.log(x);

// const z ;
// z = 100
// console.log(z);
// sehv yazilis

// Window, document

// console.log(window);
// window.alert("Salam")
// window.prompt
// let response = confirm('zehmet olmasa geri donun')
// console.log(response);

// let yourAge = prompt('Zehmet olmasa yasinizi daxil edin') // prompt cavabi hemise string tipinde geri dondurur
// console.log(typeof yourAge);

// Şərt operatorları  - Conditional operators

// if - eger
// else if  - deyilse eger
// else - deyilse

// **Example1**

// let yourAge = Number(prompt("Zehmet olmasa yasinizi daxil edin"));

// if (yourAge > 20) {
//   console.log("Yasin 20 den boyukudr");
// } else if (yourAge == 20) {
//   console.log("Yasin 20 ye beraberdir");
// } else {
//   console.log("Yasin 20 den kicikdir");
// }

// **Example2**
// let examResult1 = Number(prompt("1 ci imtahan neticenizi daxil edin"));
// let examResult2 = Number(prompt("2 ci imtahan neticenizi daxil edin"));

// let final = examResult1 * 0.4 + examResult2 * 0.6;

// Literal Template

// if (final >= 65) {
//   alert(`Sizin imtahan neticeniz ${final} dir ve ugurla  kecdiniz`);
// } else {
//   alert(`Sizin neticeniz ${final} kece bilmediniz`);
// }

// Switch, case

// let yourNumber = prompt("Reqemi daxil edin");

// switch (yourNumber) {
//   case "1":
//     console.log("Sizin reqeminiz 1 dir");
//     break;
//   case "2":
//     console.log("Sizin reqeminiz 2 dir");
//     break;
//   case "3":
//     console.log("Sizin reqeminiz 3 dur");
//     break;
//   default:
//     console.log("Sizin reqeminiz bunlardan hec biri deyil");
//     break;
// }


// Number methods - Eded metodlari

let myNum = 23.854

// console.log(Number(myNum));
// console.log(parseInt(myNum));
// console.log(parseFloat(myNum));
// console.log(myNum.toString());
// console.log(myNum.toFixed(4));
// console.log(myNum.toPrecision());
// console.log(isNaN(23));

// Math methods 

// console.log(Math.PI);
// console.log(Math.round(4.5)); //yuvarlaqlasdirir
// console.log(Math.ceil(4.1)); // bir uste yuvarlaq
// console.log(Math.floor(4.2)); // ozune yuvarlaq
// console.log(Math.sqrt(49)); // kok alir
// console.log(Math.pow(2,2)); // quvvete yukseldir
// console.log(Math.abs(-300)); // modula salir,  hemise musbet qaytarir
// console.log(Math.min(34, 45, 12, 6, 56, 88)); // en kicik ededi qaytarir
// console.log(Math.max(32, 56, 78, 90, 12, 111)); // en boyuk ededi qaytarir
// console.log(Math.round(Math.random() * 10));  // random ededler qaytarir


