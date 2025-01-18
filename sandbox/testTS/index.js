var getParams = function (query) {
    var a = query.split('&');
    var res = {};
    var result = a.reduce(function (acc, part) {
        var _a = part.split('='), key = _a[0], value = _a[1];
        acc[key] = value;
        return acc;
    }, res);
    return result;
};
console.log(getParams('per=10&page=5'));
