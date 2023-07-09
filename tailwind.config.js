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
            },
            fontFamily: {
                primary: ["Ubuntu", "sans-serif"],
                secondary: ["Ubuntu", "sans-serif"],
            },
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
