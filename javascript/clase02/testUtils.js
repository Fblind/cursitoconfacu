const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgWhite = "\x1b[37m";
const FgCyan = "\x1b[36m";
const isBrowser = () => {
  try {
    window;
    return true;
  } catch {
    return false;
  }
};
const log = (text) => {
  if (!isBrowser()) {
    console.log(text);
    return;
  }
  // console.log(text);
  if (text.includes(FgGreen) || text.includes(FgRed) || text.includes(FgWhite))
    return;
  window.document.getElementById("tests");
  const element = window.document.createElement("p");
  element.innerHTML = text;
  tests.appendChild(element);
};

const test = (string, callback) => {
  log(
    isBrowser()
      ? `<h3>Executing test case: ${string}</h3>`
      : `${FgWhite}Executing test case: ${string}`
  );
  try {
    callback();
    log(
      isBrowser() ? `<span style="color: green">PASS</span>` : `${FgGreen}PASS`
    );
    log("\n");
    return true;
  } catch (error) {
    log(isBrowser() ? `<span style="color: red">FAIL</span>` : `${FgRed}FAIL`);
    log(error.message);
    log("\n");
    return false;
  }
};

test.only = () => {};
test.skip = (string, callback) => {
  log(
    isBrowser()
      ? `<h3 style="color: cyan">Skipping test case: ${string}</h3>`
      : `${FgCyan}Skip test case: ${string}`
  );
  return false;
};

const expect = (thing) => {
  const toThrow = (expectation) => {
    try {
      const result = thing();
      throw new Error(result || "undefined");
    } catch (err) {
      if (expectation) {
        const message = isBrowser()
          ? `expected <span style="color: green">${err.message}</span> to be <span style="color: red">${expectation}</span>`
          : `${FgWhite}expected ${FgGreen}${err.message}${FgWhite} to be ${FgRed}${expectation}`;
        throw new Error(message);
      }
      const message = isBrowser()
        ? `<span style="color: red">${err.message}</span>`
        : `${FgRed}${err.message}`;
      throw new Error(message);
    }
  };

  return {
    toBe(expectation) {
      if (thing === expectation) return true;
      const message = isBrowser()
        ? `expected <span style="color: green">${thing}</span> to be <span style="color: red">${expectation}</span>`
        : `${FgWhite}expected ${FgGreen}${thing}${FgWhite} to be ${FgRed}${expectation}`;
      throw new Error(message);
    },
    not: {
      toThrow(expectation) {
        return !toThrow(expectation);
      },
    },
    toThrow,
  };
};

if (isBrowser()) {
  window.test = test;
  window.expect = expect;
} else {
  module.exports = {
    test,
    expect,
  };
}
