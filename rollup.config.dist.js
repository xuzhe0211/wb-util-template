const base = require('./rollup.config.base.js');

module.exports = {
    entry: './src/index.js',
    format: 'cjs',
    plugins: base.distPlugins,
    dest: './dist/index.js',
};
