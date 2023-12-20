const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => firstName + " " + lastName;

  this.setFirstName = (newFirst) => {
    firstName = newFirst;
  };
  this.setLastName = (newLast) => {
    lastName = newLast;
  };
  this.setFullName = (newFirst, newLast) => {
    firstName = newFirst;
    lastName = newLast;
  };
};
