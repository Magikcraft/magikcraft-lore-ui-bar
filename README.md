# magikcraft-lore-ui-bar

A UI Bar for Magikcraft based on BossBarAPI.

After the show method is called, the UI Bar will appear in the user's display.

After show has been called, only progress and color can be changed. To change the text, you must call the `destroy()` method and create a new bar with the new text.

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
