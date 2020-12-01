module.exports = {
    theme: {
        extend: {
            screens: {
                // light: {raw: "(prefers-color-scheme: light)"},
                // dark: {raw: "(prefers-color-scheme: dark)"}
            },
            colors: {
                'accent-1': '#FFFFFF',
                // 'accent-2': '#16192c',
                // 'accent-3': '#764a3b',
                // 'accent-4': '#16192c',
                // 'accent-5': '#0a0d20',
                // 'accent-6': '#74625b',
                // 'accent-7': '#333333',
                // 'accent-8': '#ebeff1',
                // 'accent-9': '#736f6e',
                // 'accent-10': '#b0b0d4',
                // 'accent-11': '#74625b88',
                // 'accent-12': '#74625bBB',
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
