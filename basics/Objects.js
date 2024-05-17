let Rollno=Symbol(1234)
const obj={
    name:"Akhil",
    class:24,
    [Rollno]:Rollno
}
console.log( typeof obj[Rollno])