define(
    ['./coolness', 'require'],
function (coolness, require) {
    
    //here's how to something relative to this module
    var cssUrl = require.toUrl("./style.css");


    //Does Awesome Stuff with coolness
    return coolness * 2; // Now that's awesome
}
);