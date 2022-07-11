class Fila{
    constructor(items){
        this.items = []
    }

    enqueue(item){
        this.items.push(item);
    }

    isEmpty(){
       return this.items.length == 0;
    }

    dequeue(){
        return this.isEmpty() ? undefined : this.items.shift();
    }

    front(){
        return this.items[0];
    }

    rear(){
        return this.items[this.items.length -1]
    }
}

const fila = new Fila();
console.log(fila.isEmpty());
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);
console.table(fila);
console.log(fila.isEmpty());
fila.dequeue();
console.table(fila);
console.log(fila.front());
console.log(fila.rear());
