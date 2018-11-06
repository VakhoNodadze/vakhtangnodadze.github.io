class pQueue {
    constructor(){
        this.tasks = [];
    }

    enqueue(task){
        if(this.isEmpty){
            this.tasks.push(task)
        }else{
            let insterted = false;

            for(let i = 0; i < this.tasks.length; i++){
                if( task[1] < this.tasks[i][1]){
                    this.tasks.splice(i, 0, task);
                    insterted = true;
                    break;
                }
            }

            if(!insterted){
                this.tasks.push(task);
            }
        }
    }

    dequeue(){
        return this.tasks.shift();
    }

    firstElement(){
        return this.tasks[0];
    }

    isEmpty(){
        return this.tasks.length === 0;
    }

    log(){
        console.log(this.tasks);
    }
}

// let myQueue = new Queue();
// myQueue.enqueue('1');
// myQueue.enqueue('3');
// myQueue.enqueue('5');
// myQueue.enqueue('7');
// myQueue.log();
// console.log(myQueue.firstElement());
// myQueue.dequeue();
// myQueue.log();
// console.log(myQueue.firstElement());

let pQueue = new pQueue();
pQueue.enqueue('Task', 1);