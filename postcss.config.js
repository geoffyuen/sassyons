module.exports = {
    plugins: {
        'cssnano': {
            preset: 'default',
            // removeAllButFirst: true
        },
        'autoprefixer': {
            // See browserlist in package.json
            grid: true,
        }
    }
}