let Arr=[1,3,4,5,6,7]
console.log(Arr.indexOf(7))
console.log(Arr[0])
Arr.push(90)
Arr.pop()
Arr.shift()
console.log(Arr)
console.log(Arr.includes(5))
// console.log(Arr.findIndex())
let Alpahbets=["a","b","c"]
let Vowels=["a","e","i","o","u"]
// let All=Alpahbets.concat(Vowels)
// console.log(All)
let All=[...Alpahbets,...Vowels]
console.log(All)
console.log(Array.isArray("Akhil"))
console.log(Array.from("Akhil"))
let One =100
let two =200
let three =300
console.log(Array.of(One,two,three))