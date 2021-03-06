import * as meta from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

const onwarn = function(warning, warn) {
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    return;
  }
  warn(warning);
};
const output = {
  file: `public/main.js`,
  name: '${meta.name}',
  format: 'iife',
  indent: false,
  extend: true,
  banner: `// ${meta.homepage} v${
    meta.version
  } Copyright ${new Date().getFullYear()} ${meta.author.name}`,
};

export default {
  input: 'src/main.js',
  onwarn: onwarn,
  output: output,
  plugins: [resolve(),commonjs()],
};