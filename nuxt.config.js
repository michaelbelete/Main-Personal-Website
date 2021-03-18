const webpack = require("webpack");

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'michaelbelete',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/logo.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:700|Roboto:400,400i,500' }
        ],
        script: [{
                type: 'text/javascript',
                src: '/assets/js/vendor/jquery-2.2.4.min.js',
                body: true,
            },
            {
                type: 'text/javascript',
                src: '/assets/js/vendor/bootstrap.min.js',
                body: true,
            },
            {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
                integrity: 'sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4',
                crossorigin: 'anonymous',
                body: true,
            },
            {
                type: 'text/javascript',
                src: '/assets/js/jquery.ajaxchimp.min.js',
                body: true,
            },
            {
                type: 'text/javascript',
                src: '/assets/js/owl.carousel.min.js',
                body: true,
            },
            {
                type: 'text/javascript',
                src: '/assets/js/jquery.nice-select.min.js',
                body: true,
            },
            {
                type: 'text/javascript',
                src: '/assets/js/jquery.magnific-popup.min.js',
                body: true,
            },
            {
                type: 'text/javascript',
                src: '/assets/js/main.js',
                body: true,
            }
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/linearicons.css',
        // '~/assets/css/owl.carousel.css',
        '~/assets/css/font-awesome.min.css',
        '~/assets/css/nice-select.css',
        '~/assets/css/magnific-popup.css',
        '~/assets/css/bootstrap.css',
        '~/assets/css/main.css'

    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        vendor: ["jquery", "bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
    }
}