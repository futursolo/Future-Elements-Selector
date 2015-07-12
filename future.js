function __collectionHas(a, b) {
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}

function __findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !__collectionHas(all, cur)) {
        cur = cur.parentNode;
    }
    return cur;
}

function __isParent (obj, parentObj) {
    while (obj !== undefined && obj !== null && obj.tagName.toUpperCase() != "DOCUMENT") {
        if (obj === parentObj) {
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}

var __Future = function (parentObject) {
    this.parentObject = parentObject;
};

__Future.prototype.on = function (eventName, selector, callback) {
    parentObject = this.parentObject;
    parentObject.addEventListener(eventName, function (event) {
        target = event.target || event.srcElement;
        selected = document.querySelectorAll(selector);
        collectionHas = __collectionHas(selected, target);
        parentHas = __findParentBySelector(target, selector);
        isParent = __isParent(parentHas, parentObject);
        if (collectionHas || (parentHas && isParent)) {
            callback(event);
        }
    });
};

function bind(object, eventName, selector, callback) {
    future = new __Future(object);
    future.on(eventName, selector, callback);
    return future;
}
