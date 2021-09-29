const user = {
  name: 'Alice',
  age: 25,
  age: 26,
  favorites: ['cheese']
};

// const copy = user;

const copy = {
  ...user,
  favorites: [
    ...user.favorites,
    'pineapple'
  ],
  name: 'Bob',
  age: 31
};

console.log('user:', user);
console.log('copy:', copy);
