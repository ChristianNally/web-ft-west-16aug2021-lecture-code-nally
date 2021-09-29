const user = {
  name: 'Alice',
  age: 25,
};

// const copy = user;

const copy = {
  ...user,
  age: 31
};

console.log('user:', user);
console.log('copy:', copy);
