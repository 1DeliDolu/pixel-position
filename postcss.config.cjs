module.exports = {
    plugins: [
        require("@tailwindcss/postcss")({
            config: "./tailwind.config.js", // optional, falls du es extern hast
        }),
        require("autoprefixer"),
    ],
};
