function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log('wrafz wrafz wrafz')
  },
  describe: function() {
    console.log('Wuff, my name is ' + this.name)
  }
};
