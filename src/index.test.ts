declare const require, global;
// require('magikcraft-api-mock');

global.magikcraft = {
    io: {
        getSender: function() {
            return "Default";
        },
        TextComponent: function() {
            return {};
        },
        Bars: {
            addBar: function () {

            },
            setMessage: function () {

            },
            setColor: function () {

            },
            setStyle: function () {

            },
            setProgress: function () {

            },
            addPlayer() {

            },
            removePlayer() {

            },
            Color: {
                RED: 'RED'
            },
            Style: {
                NOTCHED_20: 'NOTCHED_20'
            }
        }
    }
};

import { bar, color, style } from './index';

describe("Test", () => {
    test("It returns the right shape", () => {
        bar()
            .text("Hello")
            .color(color.GREEN)
            .style(style.NOTCHED_10)
            .progress();
    });
})

