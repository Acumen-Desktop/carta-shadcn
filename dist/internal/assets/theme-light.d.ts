declare const theme: {
    displayName: "Carta Light";
    name: "carta-light";
    semanticHighlighting: true;
    fg: string;
    bg: string;
    tokenColors: ({
        scope: string[];
        settings: {
            foreground: string;
            fontStyle?: undefined;
            background?: undefined;
        };
    } | {
        scope: string;
        settings: {
            foreground: string;
            fontStyle?: undefined;
            background?: undefined;
        };
    } | {
        scope: string;
        settings: {
            fontStyle: string;
            foreground: string;
            background?: undefined;
        };
    } | {
        scope: string;
        settings: {
            background: string;
            fontStyle: string;
            foreground: string;
        };
    } | {
        scope: string[];
        settings: {
            fontStyle: string;
            foreground: string;
            background?: undefined;
        };
    } | {
        scope: string[];
        settings: {
            background: string;
            foreground: string;
            fontStyle?: undefined;
        };
    })[];
    type: "light";
};
export default theme;
