/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "desaturated-dark-cyan": "var(--desaturated-dark-cyan)",
                "light-grayish-cyan-background":
                    "var(--light-grayish-cyan-background)",
                "light-grayish-cyan-filter-tablets":
                    "var(--light-grayish-cyan-filter-tablets)",
                "dark-grayish-cyan": "var(--dark-grayish-cyan)",
                "very-dark-grayish-cyan": "var(--very-dark-grayish-cyan)",
            },
        },
    },
    plugins: [],
};
export default config;
