// Your task is to implement a custom Promise implementation using ES6. The Promise object represents a value that may not be available yet but will be resolved at some point in the future.

// You will need to use polyfills to ensure that your implementation works in all modern browsers. Your implementation should include the following methods:

//     then(onFulfilled, onRejected) - Adds a callback to be executed when the Promise is resolved.
//     catch(onRejected) - Adds a callback to be executed when the Promise is rejected.
//     resolve(value) - Resolves the Promise with a given value.
//     reject(reason) - Rejects the Promise with a given reason.

const STATE = {
  'PENDING': 'PENDING',
  'FULFILLED': 'FULFILLED',
  'REJECTED': 'REJECTED'
};

class CustomPromise {
  constructor(executor) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.callbacks = [];
    
    const resolve = value => {
      if (this.state === STATE.PENDING) {
        this.state = STATE.FULFILLED;
        this.value = value;
        this.callbacks.forEach(callback => this.handleCallback(callback));
      }
    };

    const reject = reason => {
      if (this.state === STATE.PENDING) {
        this.state = STATE.REJECTED;
        this.value = reason;
        this.callbacks.forEach(callback => this.handleCallback(callback));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  handleCallback(callback) {
    const { onFulfilled, onRejected, resolve, reject } = callback;

    if (this.state === STATE.FULFILLED) {
      if (typeof onFulfilled === 'function') {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(this.value);
      }
    } else if (this.state === STATE.REJECTED) {
      if (typeof onRejected === 'function') {
        try {
          const result = onRejected(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        reject(this.value);
      }
    }
  }

  then(onFulfilled, onRejected) {
    // Your code here
    return new CustomPromise((resolve, reject) => {
      const callback = { resolve, reject, onFulfilled, onRejected };

      if (this.state === STATE.FULFILLED || this.state === STATE.REJECTED) {
        this.handleCallback(callback);
      } else {
        this.callbacks.push(callback);
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => reject(reason));
  }
}

// You will need to fill in the constructor and the methods with the appropriate code to make this implementation work.
// Requirements

//     Your implementation should work in all modern browsers, including IE11 and above.
//     Your implementation should include error handling for any unexpected behavior.
//     Your implementation should not use any external libraries or frameworks.
//     Your implementation should use ES6 features, including classes and arrow functions.
//     Your implementation should be well-documented with clear explanations of how it works.

// Testing

// To test your implementation, you can create a new instance of your CustomPromise class and use it to resolve or reject a value, and then use the then and catch methods to handle the results.

// Here's an example of how to use your implementation:

const myPromise = new CustomPromise((resolve, reject) => {
  // Resolve the Promise after 1 second
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

// myPromise
//   .then((result) => {
//     console.log(result); // Output: Success!
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
// const myPromise = new CustomPromise((resolve, reject) => {
//   // Reject the Promise immediately
//   reject("Error!");
// });

// myPromise.catch((error) => {
//   console.error(error); // Output: Error!!
// });
