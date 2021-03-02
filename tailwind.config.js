module.exports = {
    theme: {
        extend: {
            screens: {
                // light: {raw: "(prefers-color-scheme: light)"},
                // dark: {raw: "(prefers-color-scheme: dark)"}
            },
            colors: {
                'accent-1': '#FFFFFF',
                success: '#0070f3',
                cyan: '#79ffe1',
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem',
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [
    ]
}
