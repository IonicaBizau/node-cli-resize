"use strict";

const cliResize = require("../lib");

// Listen for resize
cliResize(size => {
    console.log(size);
});
console.log("Resize the terminal.");

// A hack to keep the process opened for 10sec
setTimeout(function() {
    console.log("Test ended.");
}, 10000);
