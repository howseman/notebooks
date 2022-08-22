// (async function() {
//   // const [err, result] = await awaitHandler2(createCollaborator, params);
//   const [err, result] = await awaitHandler(createRecord());
//   if (err) console.log('err_result:', err);
//   else console.log('result:', result);
// })();

async function createRecord() {
  // return Promise.resolve('Promise Resolved');
  // return Promise.reject('Promise Rejected');
  // throw new Error('Error creating the record!');
  throw 'Error creating the record!';
}

async function awaitHandler(promise) {
  let _promise;
  try {
    _promise = await promise
      .then(data => [null, data])
      .catch(err => [err]);
    return _promise;
  } catch (e) {
    console.log('awaitHandler catch:', e.message);
    return [e];
  }
};

/**
 * UNTESTED FUNCTION, ONLY A CONCEPT
 * @param {*} promise 
 * @param {*} params 
 */
async function awaitHandler2(promise, params = []) {
  let _promise;
  if (!promise || !promise.constructor || promise.constructor.name !== 'Promise') {
    return [new Error('The first parameter for awaitHandler(promise: Promise, params: Array) must be a Promise!')];
  }
  try {
    _promise = await promise(...params || undefined)
      .then(data => [null, data])
      .catch(err => [err]);
    return _promise;
  } catch (e) {
    console.log('awaitHandler catch:', e.message);
    return [e];
  }
};

//=======================================================
async function badFunction() {
  // return Promise.resolve('Promise Resolved');
  // return Promise.reject('Promise Rejected');
  // throw new Error('Error creating the record!');
  throw 'Error on badFunction!';
}

async function returnAwait() {
  try {
    return await badFunction()
  } catch (error) {
    console.error('Something WRONG happened: ' + error)
    return []
  }
}

(async function() {
  console.log('result:', await returnAwait())
})()