const arr=[1,2,3,4,5]
const newArr=arr.filter((val)=>val%2===0)
console.log(newArr)

const Books=[{
    name:"book1",
    class:12
},{
    name:"book2",
    class:21
}]
const Budgetbooks=Books.filter((val)=>val.name==="book1").map((val)=>val.class)
console.log(Budgetbooks)
const TotalClass=Books.reduce((acc,val)=>acc+val.class,0)
console.log(TotalClass)
const All=Books.map((val)=>val.class*2)
console.log(All)