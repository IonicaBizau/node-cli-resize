
# cli-resize

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/cli-resize.svg)](https://www.npmjs.com/package/cli-resize) [![Downloads](https://img.shields.io/npm/dt/cli-resize.svg)](https://www.npmjs.com/package/cli-resize) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Listen for the terminal resize event in a friendly way.

## :cloud: Installation

```sh
$ npm i --save cli-resize
```


## :clipboard: Example



```js
const cliResize = require("cli-resize");

// Listen for resize
cliResize(size => {
    console.log(size);
});
console.log("Resize the terminal.");

// A hack to keep the process opened for 10sec
setTimeout(function() {
    console.log("Test ended.");
}, 10000);
```

## :memo: Documentation


### `CliResize(fn)`
cliResize
Add a new resize event listener.

#### Params
- **Function** `fn`: The callback function which is called when the terminal is resized.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`3abn`](https://github.com/IonicaBizau/3abn#readme)—A 3ABN radio client in the terminal.
 - [`cli-update`](https://github.com/IonicaBizau/node-cli-update)—A library to update stdout output.
 - [`share-term`](https://github.com/Share-Term/share-term#readme)—Share the terminal with your friends.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
