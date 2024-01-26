// Build an array from scratch (dont usually have to do in interviews)

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};

    }
    get(index) {
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {

        if(this.length === 0) {
            return "cannot pop with no elements in the array"
        }
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);

    }
    shiftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('are');
newArray.push('very');
newArray.push('cool');
newArray.delete(0);
console.log(newArray);
