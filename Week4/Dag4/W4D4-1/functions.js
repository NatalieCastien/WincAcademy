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
  isValid: (password) => {
    let score = 0;
    // const isNotBlank = (pw) => {
    //   if (pw.length > 0) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    // const isLessThan8Chars = (pw) => {
    //   if (pw.length <= 8) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    // const hasUppercase = (pw) => {
    //     const regexUppercase = /[A-Z]+/;
    //     if (pw.match(regexUppercase)) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    // };
    // const hasLowercase = (pw) => {
    //     const regexLowercase = /[a-z]+/;
    //     if (pw.match(regexLowercase)) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    // };
    // const hasDigit = (pw) => {
    //     const regexDigit = /[0-9]+/;
    //     if (pw.match(regexDigit)) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    // };
    if (functions.isNotBlank(password)) score++;
    if (functions.isLessThan8Chars(password)) score++;
    if (functions.hasUppercase(password)) score++;
    if (functions.hasDigit(password)) score++;
    if (functions.hasLowercase(password)) {
      score++;
    } else {
      score = 0;
    }

    return {
      score: score,
      valid: score >= 3,
    };
  },
};

// console.log(functions.isLessThan8Chars(""));
// console.log(functions.isNotBlank(""));
// console.log(functions.hasUppercase(""));
// console.log(functions.hasLowercase(""));
// console.log(functions.hasDigit(""));
console.log(functions.isValid("henkie1"));
module.exports = functions;
