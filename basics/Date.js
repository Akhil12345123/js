let Dates = new Date ()
console.log(Dates.toString())
console.log(Dates.toLocaleString())
console.log(Dates.toLocaleDateString())
console.log(Dates.getDate());
console.log(Dates.toLocaleDateString("default",{
    weekday:"long"
}))
