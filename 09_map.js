const y= new Map();
y.set("Name","Kedar");
y.set("DOB",30);
y.set("City", "Jalna")
console.log(y);

//get method to fetch specific record

console.log(y.get("Name"));

//to check key is available or not

console.log(y.has("Name"));
console.log(y.size);
console.log(y.values());
console.log(y.keys());