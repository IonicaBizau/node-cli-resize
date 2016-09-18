"use strict";

const cliSize = require("cli-size");

/**
 * cliResize
 * Add a new resize event listener.
 *
 * @name CliResize
 * @function
 * @param {Function} fn The callback function which is called when the terminal is resized.
 */
module.exports = fn => {
    process.on("SIGWINCH", () => fn(cliSize()))
};
