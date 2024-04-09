// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
      result.push(callback(item));
    });
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    let index = 0;
    const keys = Object.keys(collection);
    if (acc === undefined) {
        acc = collection[keys[0]];
        index = 1;
    }
    for (let i = index; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
      return acc;
  }
  
  // myFind
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            return collection[i];
          }
        }
      } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
      // If no value is found, return undefined
      return undefined;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      let count = 0;
      for (let key in collection) {
        count++;
      }
      return count;
    }
  }
  
  // myFirst
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return myMap(myKeys(object), function(key) {
      return object[key];
    });
  }
  