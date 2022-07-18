const person = {
    name: 'Márcio',
    age: 24,
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}


//destructuring
const printName = ({name, age, greet}) => {
    console.log(name);
    greet();
}

printName(person);


//destructuring
const {name, age} = person;
console.log(name, age);

//destructuring array
const hobbies = ['Sport', 'Cooking'];
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2);