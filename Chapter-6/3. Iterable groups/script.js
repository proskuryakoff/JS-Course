console.log ('Iterable groups');

class Group {
    constructor(array){
        this.array = [];
    }
    add(value){
        if(!this.array.includes(value)) {
            this.array.push(value)
        };
    }
    delete(value){
        if(this.array.includes(value)){ 
            let result = this.array.filter(element => element !== value);
            this.array = result;
        }
    }
    has(value){
        return this.array.includes(value);
    }
    static from(arr){
        let newGroup = new Group;
        for(let elem of arr){
            newGroup.add(elem);
        }
        return newGroup;
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}


class GroupIterator {
    constructor(collection){
        this.collection = collection;
        this.index = 0;
    }
    next()  {
        if(this.index < this.collection.array.length) {
            let result = {value: this.collection.array[this.index], done: false}
            this.index++;
            return result
        } else return {done: true}
    }
}

for (let val of Group.from(["a", "b", "c"])) {
    console.log(val);
}