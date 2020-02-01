var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);

if(is_uiwebview){
    alert("es webview 1");
}


if (typeof Android === "undefined") {
   
} else {
    alert("es webview 2");
}

var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|ipod|ipad/.test( userAgent );

if( ios ) {
    if ( safari ) {
       
    } else if ( !safari ) {
        alert("es webview 3");
    };
} else {
    
};