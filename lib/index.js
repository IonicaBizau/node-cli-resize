"use strict";

const cliSize = require("cli-size");

/**
 * cliResize
 * Add a new resize event listener.
 *
 * @name CliResize
 * @function
 * @param {Function} fn The callback function which is called when the terminal is resized.
 * @returns {Function} A function that disables the resize listener.
 */
module.exports = fn => {
    const listener = () => fn(cliSize());
    process.on("SIGWINCH", listener);
    return () => process.removeListener("SIGWINCH", listener);
};
