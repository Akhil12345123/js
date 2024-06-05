const arr=[1,2,3,4,5]
// For of Loop Mainly used for arrays
for (const i of arr){
    console.log(i)
}
// Map (holds unique values)
const map=new Map()
map.set("IN",'india')
map.set("Can",'canada')
for(let [key,values] of map){
    console.log(key,values)
}

// for in Loop maily used for Objects
const myObject={
    name:"Xyz",
    class:24
}
for(let i in myObject){
    console.log(`${i} is ${myObject[i]}`)
}

// for Each Loop maily used for Array of Objects
const myArr=[1,2,3,4,5]
const Print=(val,index,arr)=>console.log(val,index,arr)
myArr.forEach(Print) 
// pass refrence here not execute it 