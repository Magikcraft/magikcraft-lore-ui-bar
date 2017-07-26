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
function bar(msg, player) {
    if (msg === void 0) { msg = ""; }
    if (player === void 0) { player = magik.getSender(); }
    var _bar = magik.Bars.addBar(player, magik.TextComponent(msg + ""), magik.Bars.Color.RED, magik.Bars.Style.NOTCHED_20, 0.5 // Progress (0.0 - 1.0)
    );
    var Bar = {
        _bar: _bar,
        text: function (msg) {
            Bar._bar.setMessage(msg + "");
            return Bar;
        },
        color: function (color) {
            Bar._bar.setColor(color);
            return Bar;
        },
        style: function (style) {
            Bar._bar.setStyle(style);
            return Bar;
        },
        progress: function (progress) {
            if (progress === void 0) { progress = 0.5; }
            Bar._bar.setProgress(progress);
            return Bar;
        },
        addPlayer: function (player) {
            Bar._bar.addPlayer(player);
            return Bar;
        },
        removePlayer: function (player) {
            Bar._bar.removePlayer(player);
            return Bar;
        }
    };
    return Bar;
}
exports.bar = bar;
