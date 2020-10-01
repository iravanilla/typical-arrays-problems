function checkArray(array) {
    if ( Array.isArray(array) && array.length > 0 ) {
        return true;
    }
}

exports.min = function min (array) {
    if (checkArray(array)) {
        return Math.min.apply(null, array)
    } else {
        return 0
    }
    
}
     
exports.max = function max (array) {
    if (checkArray(array)) {
        return Math.max.apply(null, array)
    } else {
        return 0
    }
    
}
     
exports.avg = function avg (array) {
    if (checkArray(array)) {
        return array.reduce((a, b) => (a + b)) / array.length;
    } else {
        return 0
    }
   
}

