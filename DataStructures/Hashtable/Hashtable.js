console.log("This is a home grown implementation of a Hash Table in javascript");

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

   _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    // generate a hash of the key
    let keyHash = this._hash(key);
    // Create array to hold the key/value pair
    let hashItemArr = [];
    hashItemArr[key] = value;
    // Assign key/value pair to the hash address of data array
    //this.data[keyHash] = hashItemArr[key];
    this.data[keyHash] = [key, value];
    // console.log(keyHash);
    // console.log(hashItemArr[key]);
    // console.log(this.data[keyHash]);
  }

  get(key){
    // find hash from key
    let keyHash = this._hash(key);
    // get hashItemArr from data array by hash
    let hashItemArr = [];
    hashItemArr = this.data[keyHash];
    console.log(hashItemArr);
    console.log(this.data);
    return hashItemArr;


  }


  keys(){
    console.log("keys")
    // init keysArr
    let keysArr = [];
    // loop through data array, grab the key and push to a new array
    this.data.forEach(dataItem => {
      console.log(dataItem);
      keysArr.push(dataItem[0])
    })
    console.log(keysArr);
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.set('grapess', 22)
myHashTable.get('grapess')

myHashTable.keys();
