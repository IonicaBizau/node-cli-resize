# cli-resize
Listen for the resize event in a friendly way.

## Installation
Run the following commands to download and install the application:

```sh
$ npm install cli-resize
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
