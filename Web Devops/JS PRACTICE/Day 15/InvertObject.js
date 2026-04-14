let objj = {
  a: 1,
  b: 2,
  c: 3,
};

let obj = {};

for(let keys in objj){
obj[objj[keys]] = keys;
}

console.log(obj);  