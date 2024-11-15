// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.

let num1 = [1 , 2 , 3 , 4, 5, 6 , 7 , 8]

num1.forEach((num1) =>{
    console.log(num1 * num1);
})
// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.


let fruits = ["apples" , "oranges" , "bananas"]

fruits.forEach((fruits) => {
    console.log(fruits);
})

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.

let num2 = [44 , 55 ,32]
let plus = 0

num2.forEach((num2) => {
    plus += num2;
})

console.log(`numbers sum ${plus}`);

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.

let studentsname = ["rati elizbarashvili" , "vako bejashvili" , "giorgi bawelashvili"]

studentsname.forEach((studentsname , place) => {
    console.log(`${studentsname} palce ${place + 1}`);
})


// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.


let evennum = [44 ,51 , 20 , 100 , 61 , 12]

evennum.forEach((even) => {
    if (even % 2 === 0) {
        console.log(even);
    }
})

// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

let num3 = [2 , 5 , 6]

let square = num3.map(number => number * number)

console.log(square);



// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.

let names = ["RATI" , "VAKO" , "GIORGI"]

let firstletter = names.map(names => names.toLowerCase())

console.log(firstletter);

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.

let num4 = [1 , 2 , 3 , 4]

let mult = num4.map(number => number * 10)

console.log(mult);


// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. 
// map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.

// let studentsandgrades = [name:"vako", 11 , "giorgi" , 22 , "gabro" , 15]

// vergavige es

// let onlynames = studentsandgrades.map()

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია,
//  ხოლო კენტი არ შეცვლილა.

let num5 = [15 , 12 , 66 , 44 , 20 , 91 , 31]

let evenmult = num5.map((number) => {
    if(number % 2 === 0){
        console.log(number * number);
    }
})

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.

let num6 = [6 , 7 , 12 , 11 , 22 , 92]

num6.filter((number) => {
    if (number % 2 === 0) {
        console.log(number);
    }
})

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

let name1 = ["rati" , "vako" , "giorgi" , "gabrieli"]

name1.filter((name) => {
    if(name.length > 5){
        console.log(name);
    }
})


// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.

let negativenumbers = [-1 , -2 , 3 , -55 , 99 , -22]

negativenumbers.filter((Positive) => {
    if(Positive < 0){
        console.log(Positive * -1);
    }
})

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. 
// filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.

let prod = [{name: "apple" , price: 55} , {name: "bannana" , price: 101} , {name: "orage" , price: 155}]

prod.filter((prodprice) => {
         prodprice > 100
        // verc es ver gavige
        console.log(prodprice);
    })
    
// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.

// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.

// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.

// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.

// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.