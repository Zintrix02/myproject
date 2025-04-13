// Собственная реализация метода map
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };
  
  // Пример использования
  const numbers = [1, 2, 3, 4];
  const squaredNumbers = numbers.myMap(num => num * num);
  
  console.log(squaredNumbers); // [1, 4, 9, 16]
  