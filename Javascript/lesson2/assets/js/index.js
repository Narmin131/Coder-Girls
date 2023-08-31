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

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

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
age -= 4; // age = age + 24 // age = 12 + 24

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
