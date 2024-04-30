const weakMap = new WeakMap();

function queryAPI(endpoint) {
// eslint-disable-next-line no-use-before-define
  if (!endpoint || !isObject(endpoint) || !endpoint.protocol || !endpoint.name) {
    throw new TypeError('Invalid endpoint argument');
  }

  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count + 1);
  // Simulate API call
  console.log(`Calling API endpoint: ${endpoint.protocol}://${endpoint.name}`);
  return {}; // Simulate API response (replace with actual API call)
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export { weakMap, queryAPI };
