module.exports = function (api) {
    api.cache(true)

    const presets = ['next/babel']
    const plugins = [
        '@emotion',
        '@babel/plugin-proposal-private-methods',
        [
            'import',
            {
                libraryName: '@mui/material',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'core',
        ],
    ]

    return {
        presets,
        plugins,
    }
}
