"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magik = magikcraft.io;
var Color = magik.Bars.Color;
var color;
(function (color) {
    color[color["GREEN"] = Color.GREEN] = "GREEN";
    color[color["RED"] = Color.RED] = "RED";
    color[color["PURPLE"] = Color.PURPLE] = "PURPLE";
    color[color["PINK"] = Color.PINK] = "PINK";
    color[color["WHITE"] = Color.WHITE] = "WHITE";
    color[color["YELLOW"] = Color.YELLOW] = "YELLOW";
})(color = exports.color || (exports.color = {}));
var Style = magik.Bars.Style;
var style;
(function (style) {
    style[style["NOTCHED_10"] = Style.NOTCHED_10] = "NOTCHED_10";
    style[style["NOTCHED_12"] = Style.NOTCHED_12] = "NOTCHED_12";
    style[style["NOTCHED_20"] = Style.NOTCHED_20] = "NOTCHED_20";
})(style = exports.style || (exports.style = {}));
function bar(player) {
    if (player === void 0) { player = magik.getSender(); }
    var _bar = magik.Bars.addBar(player, magik.TextComponent(""), magik.Bars.Color.RED, magik.Bars.Style.NOTCHED_20, 0.5 // Progress (0.0 - 1.0)
    );
    var Bar = {
        _bar: _bar,
        text: function (msg) {
            _bar.setMessage(msg);
            return Bar;
        },
        color: function (color) {
            _bar.setColor(color);
            return Bar;
        },
        style: function (style) {
            _bar.setStyle(style);
            return Bar;
        },
        progress: function (progress) {
            if (progress === void 0) { progress = 0.5; }
            _bar.setProgress(progress);
            return Bar;
        }
    };
    return Bar;
}
exports.bar = bar;
