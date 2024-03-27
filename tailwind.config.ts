import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "dex-background": "url('/images/body_bg.png')",
            },
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                grass: "#9BCC50",
                poison: "#b97fc9",
                fire: "#fd7d24",
                water: "#4592c4",
                bug: "#729f3f",
                "flying-top": "#3dc7ef",
                "flying-bottom": "#bdb9b8",
                normal: "#a4acaf",
                electric: "#eed535",
                "ground-top": "#f7de3f",
                "ground-bottom": "#ab9842",
                fairy: "#fdb9e9",
                fighting: "#d56723",
                psychic: "#f366b9",
                rock: "#a38c21",
                steel: "#9eb7b8",
                ice: "#51c4e7",
                ghost: "#7b62a3",
                dark: "#707070",
                "dragon-top": "#53a4cf",
                "dragon-bottom": "#f16e57",
                "pokemon-blue": "#30a7d7",
                "pokemon-orange": "#ee6b2f",
                "pokemon-gray": "#a4a4a4",
            },
        },
        screens: {
            ...defaultTheme.screens,
            md: "1024px",
            sm: "768px",
            xs: "510px",
        },
        safelist: [
            {
                pattern:
                    /(bg|text|border)-(grass|poison|fire|water|bug|flying-top|flying-bottom|normal|electric|ground-top|ground-bottom|fairy|fighting|psychic|rock|steel|ice|ghost|dark|dragon-top|dragon-bottom|pokemon-blue|pokemon-orange)/,
            },
        ],
    },
    plugins: [],
};
export default config;
