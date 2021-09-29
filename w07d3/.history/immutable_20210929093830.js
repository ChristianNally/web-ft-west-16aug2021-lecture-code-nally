const user = {
  name: 'Alice',
  age: 25
};

const copy = user;

copy.age = 30;


console.log('user:', user);
console.log('copy:', copy);
