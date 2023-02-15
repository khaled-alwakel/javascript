class HashTable {
    constructor(size = 53) { // size of hash table
        this.keyMap = new Array(size)

    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31; // prime numbers reduce collision 
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    setElement(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        return this.keyMap
    }
    getElement(key) {
        let index = this._hash(key);
        if (!this.keyMap[index]) return undefined;
        for (let array of this.keyMap[index])
            if (array[0] === key) return array[1]
    }
    deleteElement(key) {
        let index = this._hash(key);
        if (!this.keyMap[index]) return undefined;
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index].splice(i, 1)
            }
        }

        return this.keyMap;

    }
    printAll() {
        for (let item of this.keyMap)
            if (item) console.log(item)
    }
    getKeys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0]))
                        keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr;
    }
    getValues() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr;
    }
}

const hashTable = new HashTable()
hashTable.setElement("maroon", "#800000");
hashTable.setElement("yellow", "#ffff00");
hashTable.setElement("salmon", "#fa8072");
hashTable.setElement("olive", "#808000");
hashTable.setElement("plum", "#dda0dd");
hashTable.setElement("blacs", "#000000");
hashTable.setElement("lightcoral", "#f08080");
hashTable.setElement("mediumvoiletred", "#c71585");
hashTable.deleteElement('yellow')

console.log(hashTable.getKeys())