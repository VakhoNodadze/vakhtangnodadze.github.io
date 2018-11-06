class Queue{
    constructor(){
        this.tasks = [];
    }
    
    isEmpty(){
        return this.tasks.length === 0;
    }

    add(element){
        if(!this.tasks.includes(element)){
            this.tasks.push(element);
        }
        return this;
    }

    has(element){
        let contains = false;
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks.includes(element)){
                contains = true;
                return contains;
            }
        }
        // console.log(contains);
    }

    remove(element){
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i] === element){
                this.tasks.splice(i, 1);
            }
        }
    }

    log(){
        console.log(this.tasks);
    }

    subset(newQueue){
        
    }
}

let myQueue = new Queue();
myQueue.add('5').add(5);
myQueue.add('5');
myQueue.log();
console.log(myQueue.has('5'));
// myQueue.remove('5');
myQueue.log();
let myQueue2 = new Queue();
myQueue.add('5').add(5);
console.log(myQueue.subset(myQueue2));