// common code for implementing require()/exports
var dependencies = {}; // loaded modules
var modules = {}; // code of your dependencies


// require function
var require = function (module) {
  if (!dependencies[module]) {
    // module not loaded, let’s load it
    var exports = {};
    modules[module](exports);
    // now in `exports` we have the things made “public”
    dependencies[module] = exports;
  }
  return dependencies[module];
};


// dependendencies
modules["jquery"] = function (exports) {
  // code of jquery
};
modules["foo"] = function (exports) {
  // code of bar.js
  exports.helloWorld = function () {
    console.log("hello world");
  };
};
modules["bar"] = function (exports) {
  // code of bar.js
};

// etc…
// here goes the code of your "entry file".
// Which is the entry point of your code
// For example:
var $ = require("jquery");
var foo = require("foo");
var bar = require("bar");
const { nodeName } = require("jquery");
foo.helloWorld();


// Sample output of a very simple javascript bunder tool 

// 4 main Advantages:

// 1. We can now use npm 
//   - Because require()/exports are implemented in the same way in node.js
//   - All the bundler needs is look up the dependency in node_modules and inject into the
//     bundle the code that you need. 
//   - This allows the use of npm's powerful versioning system

// 2. Allows us to write cross platform code
//   - require() behaves the same in node.js or in browser environment. 
//   - As long as you don't depend on specific functionality in the browser or node.js core modules
//   - If you do then you can always just check to see what platform you are in using `typeof window !== "undefined"`

// 3. Allows us to use different syntax
//   - allows the use of latest version of javascript syntax like ES6 or ES5
//   - we don't have to worry about our code not working in other browsers since we can transpile into common.js 

// 4. Allows minification or even the removal of unused code
//   - Some bundlers allow for minification of code to create a smaller js bundle size
//   - Can even remove dead or unused code. 

// 5. Can even allow for code splitting for many other types of code
//   - Allows us to modularize css, images, fonts, and even wasm