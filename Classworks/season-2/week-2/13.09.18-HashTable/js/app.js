class HashTable{
    constructor(){
        this.table = new Array(255);
    }

    add(value){
        this.table[this.hash(value, 255)] = value;
    }

    check(value){
        return !!this.table[this.hash(value, 255)];
    }

    hash(value, max){
        let num = 0;
        for( let i = 0; i < value.length; i++){
            num += value.charCodeAt(i) * i;
        }
        return num % max;
    }
    remove(value){
        if(this.check(value)){
            delete this.table[this.table.indexOf(value)]
        }
    }
}

let hTable = new HashTable();
hTable.add('Test');
hTable.remove('Test');
console.log(hTable);

