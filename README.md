# magikcraft-lore-ui-bar

A UI Bar for Magikcraft with a fluent API. Based on [BossBarAPI](https://www.spigotmc.org/resources/api-bossbarapi-1-7-1-8-1-9-1-10.7504/).


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

## ComponentBuilder

Complex text is possible using the [ComponentBuilder](https://www.spigotmc.org/wiki/the-chat-component-api/#the-component-builder) class.

Here is an example showing the text features using ComponentBuilder:

### JavaScript (ES6)

```
const { bar, color, style, ComponentBuilder, ChatColor, version } = require('magikcraft-lore-ui-bar');

const magik = magikcraft.io;
const setTimeout = magik.setTimeout;

function mct1() {
    magik.dixit(`Bars version ${version}`);
    const text = ComponentBuilder("Insulin | ").append("Basal: Active").color(ChatColor.GREEN).create();

    const b = bar()
        .text(`BGL: 4.2`)
        .color(color.GREEN)
        .style(style.NOTCHED_20)
        .progress(100/30*4.2)
        .show();
    const i1 = bar()
        .textComponent(text)
        .color(magik.Bars.Color.BLUE)
        .style(style.NOTCHED_20)
        .progress(10)
        .show();
}
```
![Example with ComponentBuilder text](https://github.com/jwulf/magikcraft-lore-ui-bar/raw/master/src/common/imgs/componentBuilderExample.png "ComponentBuilder Example")

