// Write a function iterateWithAsync That takes an array of value nad logs
// each value after a delay of 1 second between log

const delayFunction = (timeInMs) => {
  return new Promise((resolve, reject) => {
    if (timeInMs < 0) {
      reject("Invalid time");
    } else {
      setTimeout(() => {
        resolve("Promise resolved successfully");
      }, timeInMs);
    }
  });
};
// const iterateWithAsyncAwait = async (array) => {
//   for (eachElement of array) {
//     try {
//       console.log(eachElement);
//       await delayFunction(1000);
//     } catch (error) {
//       console.log(error);
//       break;
//     }
//   }
// };

// iterateWithAsyncAwait(["sunny", "rainy", "cloudy", "snowy"]);

// const awaitCall = async () => {
//   try {
//     // fetch from an api
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json(); // parse the response tp valid js object
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// awaitCall();

// chaining async/await; write a function chainedasyncfunctions that calls three seperate asynce functions sequentially.
// each function should log a message after 1 second delay chain these function using async/await

const log1 = async () => {
  await delayFunction(1000);
  console.log("First message printed ");
};

const log2 = async () => {
  await delayFunction(1000);
  console.log("second message printed ");
};

const log3 = async () => {
  await delayFunction(1000);
  console.log(" third message printed ");
};

// const chainedAsyncFunctions = async () => {
//   await log1();
//   await log2();
//   await log3();
// };

// chainedAsyncFunctions();

// parralel function calss
const parallelAsyncCalls = async () => {
  await Promise.all([log1(), log2(), log3()]);
};

// parallelAsyncCalls();

// the concurrent async calls
//  the [response1 , response2] is destructuring one
const concurrentRequests = async () => {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);
    const [data1, data2] = await Promise.all([
      response1.json(),
      response2.json(),
    ]);
    console.log(data1, data2);
  } catch (error) {
    console.log(error.message);
  }
};

// concurrentRequests();

// Task 05:
// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs
//  and fetches data from each URL concurrently using Promise.all(). Log the
//  responses once all requests are complete.
async function parallelCalls(urls) {
  try {
    // Fetch all URLs concurrently
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    // Parse all responses as JSON
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    // Log the results
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage with URLs from jsonplaceholder
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://api.github.com/users",
];

parallelCalls(urls);
