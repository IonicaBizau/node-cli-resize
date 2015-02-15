// Dependencies
var CliResize = require("../lib");

// Listen for resize
var inst = new CliResize(function (err, size) {
    console.log(size);
});

// Deattach the listener
setTimeout(function() {
    inst.off();
    console.log("Deattached the listener.");
}, 3000);

// A hack to keep the process opened for 10sec
setTimeout(function() {
    console.log("Test ended.");
}, 10000);
