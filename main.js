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

let studentsandgrades = [
    { name: "vako", score: 85 },
    { name: "gabro", score: 76 },
    { name: "giorgi", score: 88 },
]

let studentsname1 = studentsandgrades.map((stundent) => {
    stundent = stundent.name
    console.log(stundent);
})





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

let prod = [
    {name: "apple" , price: 55} ,
     {name: "bannana" , price: 101} , 
     {name: "orage" , price: 155}
]

let over100 = prod.filter(prodover100 => prodover100.price > 100)

console.log(over100);
    
// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.

let over50 = [10 , 20 , 50 , 100 , 200 , 150 , 1000]

let filter50 = over50.filter(numbers => numbers > 50)

console.log(filter50);

