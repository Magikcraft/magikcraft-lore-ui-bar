/// <reference types="magikcraft.io" />
export declare enum color {
    'GREEN',
    'RED',
    'PURPLE',
    'PINK',
    'WHITE',
    'YELLOW',
}
export declare enum style {
    'NOTCHED_10',
    'NOTCHED_12',
    'NOTCHED_20',
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
export declare function bar(_msg?: string, player?: BukkitPlayer): IBar;
export declare const _lore: {
    namespace: string;
    loreToLoad: {
        name: string;
        code: (canon: any) => (msg: string, _player: BukkitPlayer) => IBar;
        cost: number;
    }[];
};
