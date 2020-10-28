const base = require('./rollup.config.base.js');

module.exports = {
    entry: './src/index.js',
    format: 'umd',
    moduleName: 'lib.{{name}}',
    plugins: base.browserPlugins,
    dest: './browser/{{name}}.js'
};
