/*
 * Social sharing counter
 * Made using sharedcount.com's API and a jQuery plugin.
 *
 * If you want to use this, you'll need to register and get your own API key.
 */

jQuery.sharedCount = function(url, fn) {
    url = encodeURIComponent(url || location.href);
    var domain = "//free.sharedcount.com/";
    var apikey = "f659d1d384c45bc9d5c2a2019f4da0e50e04626e"; /* rowan.weismiller@gmail.com */
    var arg = {
        data: {
            url : url,
            apikey : apikey
        },
        url: domain,
        cache: true,
        dataType: "json"
    };
    if ('withCredentials' in new XMLHttpRequest) {
        arg.success = fn;
    }
    else {
        var cb = "sc_" + url.replace(/\W/g, '');
        window[cb] = fn;
        arg.jsonpCallback = cb;
        arg.dataType += "p";
    }
    return jQuery.ajax(arg);
};

(function() {
    /* If social buttons don't exist on the page, don't bother with this */
    if (!$('.jsShare').length) return;

    $.sharedCount(location.href, function(data){
        $(".twitter .share__count").text(data.Twitter);
        $(".facebook .share__count").text(data.Facebook.like_count);
        $(".linkedin .share__count").text(data.LinkedIn);
        $(".google .share__count").text(data.GooglePlusOne);
    });
})();