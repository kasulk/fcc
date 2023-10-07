Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  this.forEach((element, i) => {
    if (Boolean(callback(element, i, this) == true)) {
      newArray.push(element)
    }
  })

  // Only change code above this line
  return newArray;
};