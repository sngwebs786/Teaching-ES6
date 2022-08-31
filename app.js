//  ////////////////////// Variable Declaration

// 1. var
// 2. let
// 3. const

// const pi = 3.14;
// console.log(pi)

// pi = 5;   // wrong
// console.log(pi)

// let a = 5;
// // console.log(a)

// if(a == 5){
//     console.log(a)
// }

// if(a==5){
//     let b = 6;
//     console.log(b)
// }

// console.log("A:", a);
// console.log("B:", b);

// b is a blockscope variable

// //////////////////////////////// Storage

// 1. Local storage
// 2. Session Storage

// var name;

// localStorage.setItem("name","Nashra")

// function getName() {
//   var name = document.getElementById("my-name");
// //   console.log(name.value);
//   let userName = name.value
//   localStorage.setItem("User name", userName)
//   console.log(localStorage.getItem("User name"))
//   localStorage.removeItem("User name")
// }

// //////////////////////////////// Variable Hoisting

// var a=5;
// console.log(a)
// var a;

// //////////////////////////////// Variable Destructuring

// const students = ["Alina", "Hamza", "Nashra"];

// console.log(students[0]);
// console.log(students[1]);

// // wrong

// // let st1 = students[0]
// // let st2 = students[1];

// let [st1, st2] = students;

// console.log("ST1:", st1);
// console.log("ST2:", st2);
// // console.log("ST3:", st3);

// // Objects

// let student = {
//   name: "Nashra",
//   uni: "NED",
//   rollno: 32,
// };

// let { name, uni, rollno } = student;
// console.log("Name: ", name);
// console.log("Uni: ", uni);
// console.log("Roll no: ", rollno);

// //////////////////////////////// Template Literals
// let name = "Nashra"
// let para = "Hello I am a MERN Stack Developer";
// let para2 = `Hello I am a 


//  MERN Stack Developer`;

//  let para3 = `Hello my name is ${name}`;
// console.log(para);
// console.log(para2);
// console.log(para3);


// //////////////////////////////// Ternary Operators

// let age = 18;


// if(age>=18){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }


// console.log((age>=18) ? ++age : --age)



// //////////////////////////////// Spread Operators (...)

// const myArray = ["A","B","C","D"]
// console.log(myArray)
// const newArray = [...myArray,"E","F","G"]
// console.log("new: ", newArray)


// //////////////////////////////// Arrow Functions

function func1(){
    console.log("This is function 1")
}

func1()


// fat arrow 
let func2 = () => console.log("This is function 2")


func2()



