class HashTable {
    constructor(size){
        this.data = new Array(size)
    }
    // '_' means private property (lets developers know)
    _hash(key) {
        let hash = 0;
        for (let i= 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }// COME BACK AND USE A LINKED LISTS INSTEAD OF PUSHING TO AN ARRAY
    set(key, value){
        const index = this._hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        } 
        this.data[index].push([key, value]);
        return this.data;    
    }
    get(key) {
        const index = this._hash(key); // Calculate the hash for the key
        const currentBucket = this.data[index]; // Get the bucket at the calculated index
    
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]; // Return the value if the key is found
                }
            } 
        }
    
        return undefined; // Return undefined if the key is not found
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                //console.log(this.data[i][0][0]);
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
//console.log(myHashTable.get('apples'));
//console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());

// myHashTable.get('grapes');