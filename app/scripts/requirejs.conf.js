require.config({
    paths: {
        youtubeIframe: 'http://www.youtube.com/iframe_api?noext',
        facebook: '//connect.facebook.net/en_US/all.js?noext#xfbml=1&appId=144647118961553',
        twitter: '//platform.twitter.com/widgets',
        jquery: '../bower_components/jquery/jquery',
        jquery: '../bower_components/jquery/jquery',
        base64: '../bower_components/base64/base64',
        hogan: '../bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
        hgn: '../bower_components/requirejs-hogan-plugin/hgn',
        json: '../bower_components/requirejs-plugins/src/json',
        jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': '../bower_components/jasmine/lib/jasmine-core/jasmine-html',
        'jasmine-jquery': '../bower_components/jasmine-jquery/lib/jasmine-jquery',
        'event-emitter': '../bower_components/event-emitter/src/event-emitter',
        inherits: '../bower_components/inherits/inherits',
        text: '../bower_components/requirejs-text/text'
    },
    packages: [{
        name: "stream",
        location: "../bower_components/stream/src"
    },{
        name: "streamhub-metrics",
        location: "../bower_components/streamhub-metrics/src"
    },{
        name: "streamhub-hot-collections",
        location: "../bower_components/streamhub-hot-collections/src"
    },{
        name: "streamhub-sdk",
        location: "../bower_components/streamhub-sdk/src"
    },{
        name: "streamhub-sdk/auth",
        location: "../bower_components/streamhub-sdk/src/auth"
    },{
        name: "streamhub-sdk/collection",
        location: "../bower_components/streamhub-sdk/src/collection"
    },{
        name: "streamhub-sdk/content",
        location: "../bower_components/streamhub-sdk/src/content"
    },{
        name: "streamhub-sdk/modal",
        location: "../bower_components/streamhub-sdk/src/modal"
    },{
        name: "streamhub-wall",
        location: "../bower_components/streamhub-wall/src"
    }],
});
