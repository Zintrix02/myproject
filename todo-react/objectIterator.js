const obj = {
    name: "Lika",
    age: 20,
    mood: "❤️",
    [Symbol.iterator]: function* () {
      for (const key of Object.keys(this)) {
        yield [key, this[key]];
      }
    }
  };
  
  for (const [key, value] of obj) {
    console.log(`${key}: ${value}`);
  }
  