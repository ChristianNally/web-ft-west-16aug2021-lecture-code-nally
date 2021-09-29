const user = {
  name: 'Alice',
  age: 25,
  age: 26,
  favorites: ['cheese']
};

// const copy = user;

const copy = {
  ...user,
  favorites: [...user.favorites],
  name: 'Bob',
  age: 31
};

copy.favorites.push('pineapple');

console.log('user:', user);
console.log('copy:', copy);
