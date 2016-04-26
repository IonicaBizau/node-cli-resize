
# cli-resize [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/cli-resize.svg)](https://www.npmjs.com/package/cli-resize) [![Downloads](https://img.shields.io/npm/dt/cli-resize.svg)](https://www.npmjs.com/package/cli-resize) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Listen for the terminal resize event in a friendly way.

## :cloud: Installation

```sh
$ npm i --save cli-resize
```


## :clipboard: Example



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

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`share-term`](https://github.com/Share-Term/share-term#readme)—Share the terminal with your friends.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
