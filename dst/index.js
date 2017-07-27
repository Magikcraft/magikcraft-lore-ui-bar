"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magik = magikcraft.io;
var Color = magik.Bars.Color;
var color;
(function (color) {
    color[color["GREEN"] = magik.Bars.Color.GREEN] = "GREEN";
    color[color["RED"] = magik.Bars.Color.RED] = "RED";
    color[color["PURPLE"] = magik.Bars.Color.PURPLE] = "PURPLE";
    color[color["PINK"] = magik.Bars.Color.PINK] = "PINK";
    color[color["WHITE"] = magik.Bars.Color.WHITE] = "WHITE";
    color[color["YELLOW"] = magik.Bars.Color.YELLOW] = "YELLOW";
})(color = exports.color || (exports.color = {}));
var Style = magik.Bars.Style;
var style;
(function (style) {
    style[style["NOTCHED_10"] = magik.Bars.Style.NOTCHED_10] = "NOTCHED_10";
    style[style["NOTCHED_12"] = magik.Bars.Style.NOTCHED_12] = "NOTCHED_12";
    style[style["NOTCHED_20"] = magik.Bars.Style.NOTCHED_20] = "NOTCHED_20";
})(style = exports.style || (exports.style = {}));
function bar(_msg, player) {
    if (_msg === void 0) { _msg = ""; }
    if (player === void 0) { player = magik.getSender(); }
    var _bar, _color, _style;
    var Bar = {
        _bar: _bar,
        _msg: _msg,
        _color: magik.Bars.Color.RED,
        _progress: 0.5,
        _style: magik.Bars.Style.NOTCHED_20,
        _init: false,
        player: player
    };
    Bar.show = function () {
        if (Bar._init) {
            return Bar;
        }
        Bar._bar = magik.Bars.addBar(player, magik.TextComponent(Bar._msg + ""), Bar._color, Bar._style, Bar._progress // Progress (0.0 - 1.0)
        );
        Bar._init = true;
        return Bar;
    };
    Bar.color = function (color) {
        Bar._color = magik.Bars.Color[color];
        if (Bar._init) {
            Bar._bar.setColor(Bar._color);
        }
        return Bar;
    };
    Bar.style = function (style) {
        Bar._style = magik.Bars.Style[style];
        return Bar;
    };
    Bar.text = function (msg) {
        Bar._msg = msg;
        if (Bar._init) {
            Bar.destroy();
            Bar.show();
        }
        return Bar;
    };
    Bar.progress = function (progress) {
        if (progress === void 0) { progress = 50; }
        Bar._progress = Math.min(progress / 100, 0.99);
        if (Bar._init) {
            Bar._bar.setProgress(progress);
        }
        return Bar;
    };
    Bar.addPlayer = function (player) {
        if (Bar._init) {
            Bar._bar.addPlayer(player);
        }
        return Bar;
    };
    Bar.removePlayer = function (player) {
        if (Bar._init) {
            Bar._bar.removePlayer(player);
        }
        return Bar;
    };
    Bar.destroy = function () {
        if (Bar._init) {
            Bar.removePlayer(player);
            Bar._init = false;
        }
        return undefined;
    };
    return Bar;
}
exports.bar = bar;
