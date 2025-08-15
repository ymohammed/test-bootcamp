const list1 = ['a', 'b', 'c', 'd'];
const list2 = [1, 2, 3, 4];

const promises = [];

console.log('Starting parallel loops...');

list1.forEach((item, index) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`List 1, Item: ${item}, Index: ${index}`);
      resolve();
    }, Math.random() * 1000);
  });
  promises.push(promise);
});

list2.forEach((item, index) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`List 2, Item: ${item}, Index: ${index}`);
      resolve();
    }, Math.random() * 1000);
  });
  promises.push(promise);
});

Promise.all(promises)
  .then(() => {
    console.log('...Parallel loops finished.');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
