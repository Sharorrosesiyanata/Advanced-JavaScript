/*
function firstTask() {
    console.log("Task 1");
  }
  
  function secondTask() {
    console.log("Task 2");
  }
  
  function thirdTask() {
  console.log("Task 3");  
  }
  
  // Execute the functions
  firstTask();
  secondTask();
  thirdTask();

  function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();
console.log(result);

console.log('...Finishing');

console.log("Start of script");

setTimeout(function() {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");

// Declare function
function fetchData(callback) {
    setTimeout(() => {
      const data = {name: "John", age: 30};
      callback(data);
    }, 3000);
  }
  
  // Execute function with a callback
  fetchData(function(data) {
    console.log(data);
  });
  
  console.log("Data is being fetched...");

  
const myPromise = new Promise(function(resolve, reject) {})
console.log(myPromise);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 2000);
});
console.log(myPromise);


myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


fetch("http://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => processData(data))
.then(processedData => {
    console.log(processedData);
})
.catch(error => console.log(error));

function processData(data) {
    // Example function to process data
    return data.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email

    }))
  };


fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    try {
      //processing received data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.log(error));

let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })

  fetch('https://some-api.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

getData();

