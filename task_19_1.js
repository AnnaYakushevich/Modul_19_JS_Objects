const dog = {
  breed: "Golden Retriever",
  city: "Moscow",
}
  
const pet = Object.create(dog);  
pet.gender = "male";  
pet.age = 3;

function printOwnProperties(Obj) {
  console.log("Own properties of the object");
  for (let key in Obj) {
    if (Obj.hasOwnProperty(key)) {
      console.log(key,":",Obj[key]);
    }
  }
}

printOwnProperties (pet);
  