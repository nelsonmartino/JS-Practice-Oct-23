function spyOn(fn) {
  // Tu código aquí
  let count = 0;
  let calledWith = new Set();
  let returned = [];
  const spy = (...args) => {
    count++;
    calledWith = new Set([...calledWith, ...args]);
    const value = fn(...args);
    returned.push(value);
    return value;
  };
  spy.getCallCount = () => {
    return count;
  };
  spy.wasCalledWith = (arg) => {
    return calledWith.has(arg);
  };
  spy.returned = (val) => {
    return returned.includes(val);
  };
  return spy;
}

module.exports = spyOn;
