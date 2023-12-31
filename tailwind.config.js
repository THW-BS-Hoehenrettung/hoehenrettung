module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    // safelist: [{ pattern: /^swiper-/ }],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            colors: {
                background: "#fafafa",
                foreground: "#222222",
                text: "#444444",
                light: "#717171",
                dark: "#040404",
                primary: "#121212",
                body: "#fff",
                border: "#eaeaea",
                "theme-light": "#f6f6f6",
                "theme-dark": "",
                darkmode: {
                    text: "#B4AFB6",
                    light: "#B4AFB6",
                    dark: "#fff",
                    primary: "#fff",
                    body: "#1c1c1c",
                    border: "#3E3E3E",
                    "theme-light": "#222222",
                    "theme-dark": "",
                },
                neutral: {
                    50: "#fafafa",
                    100: "#f1f1f1",
                    200: "#e0e0e0",
                    300: "#cbcbcb",
                    400: "#999999",
                    500: "#6a6a6a",
                    600: "#4c4c4c",
                    700: "#393939",
                    800: "#222222",
                    900: "#181818",
                },
                thw: {
                    DEFAULT: "#003399",
                    50: "#eff6ff",
                    100: "#d9eafd",
                    200: "#badbfe",
                    300: "#89c5fe",
                    400: "#4aa4ff",
                    500: "#0880ff",
                    600: "#0064e7",
                    700: "#0050cf",
                    800: "#003db4",
                    900: "#003399",
                },
                "thw-yellow": {
                    DEFAULT: "#ffff00",
                    50: "#fafde9",
                    100: "#fdfff2",
                    200: "#fbffde",
                    300: "#ffff00",
                    400: "#f8e600",
                    500: "#e6c700",
                    600: "#c59900",
                    700: "#9c6c00",
                    800: "#805300",
                    900: "#6c4304",
                },
            },
            fontFamily: {
                primary: ["Ubuntu", "sans-serif"],
                secondary: ["Ubuntu", "sans-serif"],
            },
            width: {
                '128': '32rem',
            },
            zIndex: {
                '10000': '10000'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("@tailwindcss/forms"),
        require("tailwind-bootstrap-grid")({
            generateContainer: false
        }),
    ],
}
