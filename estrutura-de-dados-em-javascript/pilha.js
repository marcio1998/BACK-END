class Pilha{
    constructor(){
        this.items = []
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        this.items.pop();
    }

    top(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0;
    }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
console.table(pilha);
pilha.pop();
console.table(pilha);
console.log(pilha.top());
console.log(pilha.isEmpty());