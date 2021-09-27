$(document).ready(function() {
    // import script to all pages
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("script-for-all-pages/myscript.js");
}) // for ready
