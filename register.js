let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Coco",
            age:3,
            gender:"female",
            breed:"Poodle",
            service:"Grooming",
            owner:"Ryhan",
            phone:"555-555-555"
        },
        {
            name:"Bear",
            age:2,
            gender:"female",
            breed:"Aussie Shepard",
            service:"Grooming",
            owner:"Mike",
            phone:"555-555-555"
        },
        {
            name:"Captain",
            age:8,
            gender:"Male",
            breed:"Husky",
            service:"Grooming",
            owner:"Justin",
            phone:"555-555-555"
        },
        {
            name:"Lexi",
            age:5,
            gender:"female",
            breed:"Husky",
            service:"Grooming",
            owner:"James",
            phone:"555-555-555"
        }
    ]
}
console.log(salon.pets);

function displayPetNames(){
    for(let i=0;i<4; i++){
        console.log(salon.pets[i].name);
    }

}
displayPetNames();

alert(salon.pets.length);