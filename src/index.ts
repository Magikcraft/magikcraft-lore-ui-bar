const magik = magikcraft.io;

const Color = magik.Bars.Color;
export enum color {
    'GREEN' = Color.GREEN,
    'RED' = Color.RED,
    'PURPLE' = Color.PURPLE,
    'PINK' = Color.PINK,
    'WHITE' = Color.WHITE,
    'YELLOW' = Color.YELLOW
}

const Style = magik.Bars.Style;
export enum style {
    'NOTCHED_10' = Style.NOTCHED_10,
    'NOTCHED_12' = Style.NOTCHED_12,
    'NOTCHED_20' = Style.NOTCHED_20
}
export function bar (player: BukkitPlayer = magik.getSender()) {
    let _bar = magik.Bars.addBar(player,
        magik.TextComponent(""),
        magik.Bars.Color.RED,
        magik.Bars.Style.NOTCHED_20,
        0.5 // Progress (0.0 - 1.0)
    );
    let Bar = {
        _bar,
        text: function(msg: string) {
            (_bar as any).setMessage(msg);
            return Bar;
        },
        color: function(color: BarsColor) {
            _bar.setColor(color);
            return Bar;
        },
        style: function(style: style) {
            (_bar as any).setStyle(style);
            return Bar;
        },
        progress: function(progress: number = 0.5) {
            _bar.setProgress(progress);
            return Bar;
        }
    }
    return Bar;
}


