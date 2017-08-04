const magik = magikcraft.io;

const Color = magik.Bars.Color;
export enum color {
    'GREEN' = magik.Bars.Color.GREEN,
    'RED' = magik.Bars.Color.RED,
    'PURPLE' = magik.Bars.Color.PURPLE,
    'PINK' = magik.Bars.Color.PINK,
    'WHITE' = magik.Bars.Color.WHITE,
    'YELLOW' = magik.Bars.Color.YELLOW
}

const Style = magik.Bars.Style;
export enum style {
    'NOTCHED_10' = magik.Bars.Style.NOTCHED_10,
    'NOTCHED_12' = magik.Bars.Style.NOTCHED_12,
    'NOTCHED_20' = magik.Bars.Style.NOTCHED_20
}
export interface IBar {
    show(): IBar;
    text(msg: string): IBar;
    color(color: color): IBar;
    style(style: style): IBar;
    progress(percentage: number): IBar;
    addPlayer(player: BukkitPlayer): IBar;
    removePlayer(player: BukkitPlayer): IBar;
    destroy(): void;
}

interface _IBar extends IBar {
    _bar: BossBar;
    _msg: string;
    _color: BarsColor;
    _progress: number;
    _style: BarsStyle;
    _init: boolean;
}

export function bar(_msg = "", player = magik.getSender()): IBar {
    let _bar, _color, _style;
    let Bar: _IBar = {
        _bar,
        _msg,
        _color: magik.Bars.Color.RED,
        _progress: 0.5,
        _style: magik.Bars.Style.NOTCHED_20,
        _init: false,
        player
    } as any;
    Bar.show = function () {
        if (Bar._init) {
            return Bar;
        }
        Bar._bar = magik.Bars.addBar(player,
            magik.TextComponent(Bar._msg + ""),
            Bar._color,
            Bar._style,
            Bar._progress // Progress (0.0 - 1.0)
        );
        Bar._init = true;
        return Bar;
    }
    Bar.color = function (color: color) {
        Bar._color = (magik.Bars.Color as any)[color];
        if (Bar._init) {
            Bar._bar.setColor(Bar._color);
        }
        return Bar;
    };
    Bar.style = function (style: style) {
        Bar._style = (magik.Bars.Style as any)[style];
        return Bar;
    };
    Bar.text = function (msg: string) {
        Bar._msg = msg;
        if (Bar._init) {
            Bar.destroy();
            Bar.show();
        }
        return Bar;
    }
    Bar.progress = function (progress: number = 50) {
        Bar._progress = Math.min(progress / 100, 0.99);
        if (Bar._init) {
            Bar._bar.setProgress(progress);
        }
        return Bar;
    };
    Bar.addPlayer = function (player: BukkitPlayer) {
        if (Bar._init) {
            Bar._bar.addPlayer(player);
        }
        return Bar;
    };
    Bar.removePlayer = function (player: BukkitPlayer) {
        if (Bar._init) {
            Bar._bar.removePlayer(player);
        }
        return Bar;
    }
    Bar.destroy = function () {
        if (Bar._init) {
            Bar.removePlayer(player);
            Bar._init = false;
        }
        return undefined;
    }
    return Bar;
}

/**
 *
 * In this function we return a partially bound versino of bar that can be loaded as a lore at boot time. This means that users can use magikcraft.io.lore.sitapati.bar and get a bar in the UI.
 *
 * @param {*} canon
 * @returns
 */
function barWithClosure(canon: any, ) {
    const player = canon.magik.sender;
    return function (msg: string, _player: BukkitPlayer) {
        _player = (_player)? _player: player;
        return bar(msg, _player);
    }
}

export const _lore = {
    namespace: 'sitapati',
    loreToLoad: [
        {
            name: 'bar',
            code: barWithClosure,
            cost: 0
        }
    ]
}

