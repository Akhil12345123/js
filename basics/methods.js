const heros=[
    {id:1,name:'XL'},
    {id:2,name:'L'},
    {id:3,name:'M'},
]

const Heroid=heros.map((hero,id)=>console.log(hero.name,id))

const ID=[]
heros.forEach((val)=>ID.push(val.id))
console.log(ID)

const ID2=heros.map((val)=>val.id)
console.log(ID2)

const Pilots=[{
    id:1,
    name:"pilot1",
    years:2
},{
    id:2,
    name:"pilot2",
    years:5
},{
    id:3,
    name:"pilot3",
    years:8
},]

const Years=Pilots.reduce((prev,val)=>prev+val.years,0)
console.log(Years)