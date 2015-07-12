function collectionHas(a, b) {
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}

function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) {
        cur = cur.parentNode;
    }
    return cur;
}

var Future = function (parentObject) {
    this.parentObject = parentObject;
};

Future.prototype.on = function (eventName, selector, callback) {
    this.parentObject.addEventListener(eventName, function (event) {
        target = event.target || event.srcElement;
        selected = document.querySelectorAll(selector);
        if (collectionHas(selected, target) || findParentBySelector(target, selector)) {
            callback(event);
        }
    });
};

function bind(object, eventName, selector, callback) {
    future = new Future(object);
    future.on(eventName, selector, callback);
    return future;
}
