var requestAnimationFrame = function (callback) {
    if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        var self = this, start, finish;
        return window.setTimeout(function() {
            start = +new Date();
            callback(start);
            finish = +new Date();
            self.timeout = 1000/60 - (finish - start);
        }, self.timeout);
    });
} else {
    window.requestAnimationFrame(callback);
}
};

var  cancelRequestAnimFrame = function (callback) {
    window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout;
} )();
    window.cancelRequestAnimFrame(callback);
};

export {
 requestAnimationFrame,
 cancelRequestAnimFrame
};
