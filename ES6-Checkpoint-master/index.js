const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const  getAge = (pet) => {
  return new Date().getFullYear() - pet.bornOn;
}


pets.forEach(item=> item.age = getAge(item))
console.log(pets)



const dogs = pets.filter(item => item.type == 'dog')
console.log(dogs)




let jasper = pets.find(item=> item.name === 'Jasper')
console.log(`Jasper is ${jasper.age} years old`)