# magikcraft-lore-ui-bar

A UI Bar based on BossBarAPI for Magikcraft

## JavaScript (ES6)
```
const { bar, color, style } = require('magikcraft-lore-ui-bar');

function test() {
    bar()
        .text("Hello")
        .color(color.GREEN)
        .style(style.NOTCHED_10)
        .progress();
}
```

## TypeScript
```
import { bar, color, style } from 'magikcraft-lore-ui-bar';

bar()
    .text("Hello")
    .color(color.GREEN)
    .style(style.NOTCHED_10)
    .progress();

```
