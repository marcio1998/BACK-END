const hobbies = ['Sport', 'Cooking'];

const copiedArray = hobbies.slice();
console.log(copiedArray);

//not a copy
const copiedArray2 = [hobbies];
console.log(copiedArray2);

//spread operator copy the array.
const copiedArray3 = [...hobbies];
console.log(copiedArray3);

const person = {
    name: 'Márcio',
    age: 24,
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

//copy an object with the spread operator
const person2 = {...person}
console.log(person2);

//Rest opertor

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(1, 2, 3,));
console.log(toArray(1, 2, 3,4));

const toArray2 = (...args) => {
    return args;
}
console.log(toArray2(1, 2, 3,4));