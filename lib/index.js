// Dependencies
var Events = require("events")
  , EventEmitter = Events.EventEmitter
  ;

function CliHandlers () {
    var ev = new EventEmitter();
    process.on('SIGWINCH', function() {
        ev.emit("resize", this.size());
    }.bind(this));
    return ev;
}

CliHandlers.prototype.size = function () {
    return {
        width: process.stdout.columns
      , height: process.stdout.rows
    }
};

module.exports = new CliHandlers();
