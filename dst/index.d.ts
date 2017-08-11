/// <reference types="magikcraft.io" />
export declare const version = "0.0.3";
/**
 *
 * new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true ).append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create();
 */
export declare const ComponentBuilder: (msg: string) => IComponentBuilder;
export declare enum ChatColor {
    'AQUA',
    'BLACK',
    'BLUE',
    'BOLD',
    'DARK_AQUA',
    'DARK_BLUE',
    'DARK_GRAY',
    'DARK_GREEN',
    'DARK_PURPLE',
    'DARK_RED',
    'GOLD',
    'GRAY',
    'GREEN',
    'ITALIC',
    'LIGHT_PURPLE',
    'MAGIC',
    'RED',
    'RESET',
    'STRIKETHROUGH',
    'UNDERLINE',
    'WHITE',
    'YELLOW',
}
export interface IComponentBuilder {
    (text: string): IComponentBuilder;
    append(msg: string): IComponentBuilder;
    bold(bold: boolean): IComponentBuilder;
    color(color: ChatColor): IComponentBuilder;
    create(): TextComponent;
    italic(italic: boolean): IComponentBuilder;
    strikethrough(strikethrough: boolean): IComponentBuilder;
    underlined(underlined: boolean): IComponentBuilder;
}
export declare enum color {
    'BLUE',
    'GREEN',
    'PINK',
    'PURPLE',
    'RED',
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
    textComponent(textComponent: TextComponent): IBar;
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
