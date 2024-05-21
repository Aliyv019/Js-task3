//Task 1 Ekranda “salam dunya” yazısını göstərin
// console.log("Hello World");

//Task 2 Dəyişən elan edib ekranda onun qiymətini göstərin
// var a=123
// console.log(a);

//Task 3 İstifadəçidən rəqəm alaraq onu 2yə vurub ekranda göstərin
// var a =+prompt("enter a number")
// console.log(a*2);

//Task 4 İstifadəçidən 2 rəqəm alaraq onları bir birinə vurub ekranda cavabı yazdırın
// var a=+prompt("enter first number")
// var b=+prompt("enter second number")
// console.log(a*b);

//Task 5 İstifadəçidən onun adını, soyadını və yaşını soruşun. Alınan məlumatları ekranda “Mənim adım xxxx, soyadım xxxx, yaşım isə xxx-dir” şəklində göstərin
// var name=prompt("enter your name")
// var surname=prompt("enter your surname")
// var age=+prompt("enter your age")
// console.log(`Mənim adım ${name}, soyadım ${surname}, yaşım isə ${age}-dir`);

//Task 6 İstifadəçidən 2 rəqəm və hesablama simvolu alın. Əgər hesablama simvolu * olarsa vurma, . olarsa bolmə, - olarsa çıxma və + olarsa toplama əməliyyatı yerinə yetirilsin. Tapşırığı həm if..else həm də switch..case ilə yerinə yetirin
// var num1=+prompt("enter first number")
// var num2=+prompt("enter second number")
// var emel=prompt("emel daxil edin")
// if (emel=="+"){
//     console.log(num1+num2);
// }
// else if(emel=="-"){
//     console.log(num1-num2);
// }
// else if(emel=="*"){
//     console.log(num1*num2)
// }
// else if(emel=="/"){
//     if(num2==0){
//         alert("0-a bolmek olmaz")
//     }
//     else{
//         console.log(num1/num2);
//     }
// }
// else{
//     alert("zehmet olmasa +,-,*,/ emellerinden birini istifade edin")
// }

//Task 7 Ədədin kubunu göstərən proqram yazın.
// var a=+prompt("enter a number")
// console.log(a**3);

//Task 8 Düzbucaqlı fiqurumuz var. İstifadəçidən düzbucaqlının eni və uzunluğunu alaraq onun perimetr və sahəsini hesablayan proqram yazın
// var width=+prompt("enter rectangle's width")
// var height=+prompt("enter rectangle's height")
// var sp=+prompt("sahe ucun 1, perimetr ucun 2 yazin")
// if(sp==1){
//     console.log(width*height);
// }
// else if(sp==2){
//     console.log(width*2+height*2)
// }
// else{
//     alert("zehmet olmasa 1 ve ya 2 daxil edin");
// }