const functions = {
  isNotBlank: (pw) => {
    if (pw.length > 0) {
      return true;
    } else {
      return false;
    }
  },
  isLessThan8Chars: (pw) => {
    if (pw.length <= 8) {
      return true;
    } else {
      return false;
    }
  },
  hasUppercase: (pw) => {
    const regexUppercase = /[A-Z]+/;
    if (pw.match(regexUppercase)) {
      return true;
    } else {
      return false;
    }
  },
  hasLowercase: (pw) => {
    const regexLowercase = /[a-z]+/;
    if (pw.match(regexLowercase)) {
      return true;
    } else {
      return false;
    }
  },
  hasDigit: (pw) => {
    const regexDigit = /[0-9]+/;
    if (pw.match(regexDigit)) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(functions.isLessThan8Chars(""));
console.log(functions.isNotBlank(""));
console.log(functions.hasUppercase(""));
console.log(functions.hasLowercase(""));
console.log(functions.hasDigit(""));
module.exports = functions;
