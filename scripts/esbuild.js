const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  platform: 'node',
  minify: true,
  sourcemap: true,
  format: 'cjs',
  external: ['vscode', 'pnpapi'],
});
