// Listen once on the SIGWINCH event and call the callbacks
var _foos = [];
process.on("SIGWINCH", function() {
    _foos.forEach(function (c) {
        c.callback && c.callback.call(c._, null, c._.size());
    });
});

/**
 * CliResize
 * Creates a new instance of `CliResize`
 *
 * @name CliResize
 * @function
 * @param {Function} callback The callback function which is called when the terminal is resized.
 * @return {Object} The `CliResize` instance.
 */
function CliResize(callback) {
    _foos.push({
        callback: callback
      , _: this
    });
    return this;
}

/**
 * size
 * Gets the terminal size.
 *
 * @name size
 * @function
 * @return {Object} An object containing the `width` and `height` values.
 */
CliResize.prototype.size = function () {
    return {
        width: process.stdout.columns
      , height: process.stdout.rows
    }
};

/**
 * off
 * Deattaches the callback from the functions list.
 *
 * @name off
 * @function
 * @return {Object} The `CliResize` instance.
 */
CliResize.prototype.off = function () {
    _foos = _foos.filter(function (c) {
        return c._ !== this;
    }.bind(this));
};

module.exports = CliResize;
