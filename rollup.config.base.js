const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const node = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const vue = require('rollup-plugin-vue');
// const eslint = require('rollup-plugin-eslint');
const uglify = require('rollup-plugin-uglify');
const builtins = require('rollup-plugin-node-builtins');
const globals = require('rollup-plugin-node-globals');

const nodePlugin = node({ moule: true});
const commonjsPlugin = commonjs();
const vuePlugin = vue();
const babelPlugin = babel({
    'babelrc': false,
    'presets': [
        [
            'env',
            {
                'modules': false
            }
        ],
        'stage-2'
    ],
    'plugins': [
        'external-helpers'
    ],
    'exclude': 'node_modules/**' // only transpile our source code
});
const builtinsPlugin = builtins();
const globalsPlugin = globals();
const uglifyPlugin = uglify();
const jsonPlugin = json();

const plugins = [ nodePlugin, commonjsPlugin, globalsPlugin, builtinsPlugin, vuePlugin, babelPlugin, jsonPlugin ];

module.exports = {
    plugins,
    distPlugins: [ vuePlugin, babelPlugin ],
    browserPlugins: [ ...plugins, uglifyPlugin ],
    map: {
        node: nodePlugin,
        commonjs: commonjsPlugin,
        vue: vuePlugin,
        babel: babelPlugin
    }
};
