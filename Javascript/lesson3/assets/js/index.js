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
// && - AND - ve
// || - OR - ve ya
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

// typeof -- datanın tipini müeyyen edir
// ternary operator - sert operatoru

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