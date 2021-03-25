const PENDDING = "pendding";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";
const callFn = (fn, resovel, reject) => {
    try {
      const result = fn(this.promiseResult);
      if (result instanceof Promise) {
        result.then(
          (r) => {
            resovel(r);
          },
          (e) => {
            reject(e);
          }
        );
      } else {
        resovel(result);
      }
    } catch (error) {
      reject(error);
    }
};
function Promise(executor) {
  this.promiseState = PENDDING;
  this.promiseResult = null;
  this.callbacks = [];
  const resovel = (value) => {
    if (this.promiseState !== PENDDING) return;
    this.promiseState = FULLFILLED;
    this.promiseResult = value;
    this.callbacks.forEach((item) => item.onResovel(value));
  };
  const reject = (error) => {
    if (this.promiseState !== PENDDING) return;
    this.promiseState = REJECTED;
    this.promiseResult = error;
    this.callbacks.forEach((item) => item.onReject(error));
  };
  try {
    executor(resovel, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(onResovel, onReject) {
  return new Promise((resovel, reject) => {
    if (this.promiseState === FULLFILLED) {
      callFn(onResovel, resovel, reject);
    }
    if (this.promiseState === REJECTED) {
        callFn(onReject, resovel, reject);
    }
    if (this.promiseState === PENDDING) {
      this.callbacks.push({
        onResovel: () => {
            callFn(onResovel, resovel, reject);
        },
        onReject: () => {
            callFn(onReject, resovel, reject);
        },
      });
    }
  });
};

Promise.prototype.Resovel = function (value) {
    return new Promise((resovel) => {
        if(value instanceof Promise){
            value.then(r => {
                resovel(r)
            })
        } else {
            resovel(value)
        }
    })
}
Promise.prototype.Reject = function (value) {
    return new Promise((resovel, reject) => {
        if(value instanceof Promise){
            value.then(r => {
                resovel(r)
            }, e => {
                reject(e)
            })
        } else {
            reject(value)
        }
    })
}

const p = Promise.prototype.Reject('test')

console.log('p', p)
