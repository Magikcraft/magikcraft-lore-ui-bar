# magikcraft-lore-ui-bar

A UI Bar for Magikcraft with a fluent API. Based on BossBarAPI.


![UI Bar](https://media.giphy.com/media/xTkcEzfUCkrTC1q6li/giphy.gif)


See below for examples of how to use the UI Bar fluent API.
# Basic Functionality

## JavaScript (ES6)
```
const { bar, color, style } = require('magikcraft-lore-ui-bar');

function test() {
    bar()
        .text("Hello")
        .color(color.GREEN)
        .style(style.NOTCHED_10)
        .progress(50)
        .show();
}
```
## TypeScript
```
import { bar, color, style } from 'magikcraft-lore-ui-bar';

bar("Hello")
    .color(color.GREEN)
    .style(style.NOTCHED_10)
    .progress(50)
    .show();

```

# Complete Demo

## JavaScript (ES6)

```
const { bar, color, style } = require('magikcraft-lore-ui-bar');

const magik = magikcraft.io;
const setTimeout = magik.setTimeout;

function test() {
    const b = bar()
        .text("Hello")
        .color(color.GREEN)
        .style(style.NOTCHED_10)
        .progress(50)
        .show();

    // Change color
    setTimeout(() => b.color(color.RED), 2000);

    // Change progress
    setTimeout(() => b.progress(70), 4000);

    // Change message, color, and progress
    setTimeout(() => b.text("Goodbye").progress(65).color(color.PURPLE),
    6000);

    // Remove bar
    setTimeout(() => b.destroy(), 8000);
}
```