function emptyObject() {
  const obj = Object.create(null);
  return obj;  
}

const newObj = emptyObject();

console.log(newObj);
