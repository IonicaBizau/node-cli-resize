# cli-resize [![Support this project][donate-now]][paypal-donations]

Listen for the terminal resize event in a friendly way.

## Installation

```sh
$ npm i cli-resize
```

## Example

```js
// Dependencies
var CliResize = require("cli-resize");

// Listen for resize
var inst = new CliResize(function (err, size) {
    console.log(size);
});
console.log("Resize the terminal.");

// Deattach the listener
setTimeout(function() {
    inst.off();
    console.log("Deattached the listener.");
}, 3000);

// A hack to keep the process opened for 10sec
setTimeout(function() {
    console.log("Test ended.");
}, 10000);
```

## Documentation

### `CliResize(callback)`
Creates a new instance of `CliResize`

#### Params
- **Function** `callback`: The callback function which is called when the terminal is resized.

#### Return
- **Object** The `CliResize` instance.

### `size()`
Gets the terminal size.

#### Return
- **Object** An object containing the `width` and `height` values.

### `off()`
Deattaches the callback from the functions list.

#### Return
- **Object** The `CliResize` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`share-term`](https://github.com/Share-Term/share-term#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md