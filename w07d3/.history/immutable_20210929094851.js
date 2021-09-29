const user = {
  name: 'Alice',
  age: 25,
  name: 'Tony'
};

// const copy = user;

const copy = {
  ...user
};

copy.age = 30;

console.log('user:', user);
console.log('copy:', copy);
