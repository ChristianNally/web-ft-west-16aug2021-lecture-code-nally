const user = {
  name: 'Alice',
  age: 25,
  age: 26
};

// const copy = user;

const copy = {
  ...user,
  name: 'Bob',
  age: 31
};

console.log('user:', user);
console.log('copy:', copy);
