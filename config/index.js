const path = require('path')

const config = {
    projectName: 'taro-cnode',
    date: '2018-11-29',
    designWidth: 750,
    deviceRatio: {
        '640': 2.34 / 2,
        '750': 1,
        '828': 1.81 / 2,
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: {
        babel: {
            sourceMap: true,
            presets: ['env'],
            plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread'],
        },
    },
    defineConstants: {},
    alias: {
        '@store': path.resolve(__dirname, '..', 'src/store'),
        '@components': path.resolve(__dirname, '..', 'src/components'),
        '@lib': path.resolve(__dirname, '..', 'src/lib'),

        '@assets': path.resolve(__dirname, '..', 'src/assets'),
        '@entities': path.resolve(__dirname, '..', 'src/entities'),
        '@http': path.resolve(__dirname, '..', 'src/http'),

        '@pages': path.resolve(__dirname, '..', 'src/pages'),
        '@styles': path.resolve(__dirname, '..', 'src/styles'),
    },
    copy: {
        patterns: [{ from: 'src/static', to: 'dist/static' }],
        options: {},
    },
    weapp: {},
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        module: {
            postcss: {
                autoprefixer: {
                    enable: true,
                },
            },
        },
    },
}

module.exports = function(merge) {
    if (process.env.SITE_ENV === 'dev') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
