console.log ('Groups');

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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));