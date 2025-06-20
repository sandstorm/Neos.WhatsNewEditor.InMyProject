import esbuild from 'esbuild'

const isWatchMode = process.argv.includes('--watch')

/**
 * This file contains the JS/CSS bundler configuration, as executed on `npm run build`
 */
esbuild
    .build({
        // Generic Options (shared between build.js and build-watch.js)
        entryPoints: ['./JavaScript/main.ts'],
        sourceRoot: './JavaScript',
        target: ['esnext'],
        // To prevent shortening of top, right, bottom, left into inset because it is not well supported yet (https://github.com/evanw/esbuild/pull/1758/files)
        supported: { 'inset-property': false },
        bundle: true,
        sourcemap: isWatchMode,
        outfile: '../Public/bundle.js',
        external: ['*.woff', '*.woff2', '*.svg', '*.ttf'],

        // Specific options for "npm run build"
        minify: true,
        watch: isWatchMode,
    })
    .catch(() => process.exit(1))
