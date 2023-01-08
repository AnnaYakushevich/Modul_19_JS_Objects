const dog = {
    breed: "Golden Retriever",
    city: "Moscow",
  }
    
  const pet = Object.create(dog);  

  pet.age = 3;
  pet.gender = "male";  
  
  function checkProperty(Str, Obj) {  
    if (Str in Obj) {
      return true;
    }else{
      return false;
    }  
  }
  
  console.log (checkProperty ("age", pet)); //true
  console.log (checkProperty ("age", dog)); //false
  console.log (checkProperty ("gender", pet)); //true
  console.log (checkProperty ("city", pet)); //true
  console.log (checkProperty ("breed", dog)); //true
  console.log (checkProperty ("gender", dog)); //false