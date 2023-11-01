function HasBalancedBrackets(string) {
  //Tu código aquí
  // const open = ["{", "[", "("],
  //   close = ["}", "]", ")"],
  //   reg = [];
  // for (let i = 0; i < string.length; i++) {
  //   if (open.includes(string[i])) {
  //     reg.push(string[i]);
  //   } else {
  //     if (close.indexOf(string[i]) !== open.indexOf(reg.pop())) {
  //       return false;
  //     }
  //   }
  // }
  // if (!reg.length) return true;
  // return false;
  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (const bracket of string) {
    if (validBrackets[bracket]) stack.push(bracket);
    else if (validBrackets[stack.pop()] !== bracket) return false;
  }
  return !stack.length;
}

module.exports = HasBalancedBrackets;
