
exports.min = function min (array) {
    if (array == undefined || array.length == 0)
        {
            return 0;
        }
    else {
            return Math.min(...array);
        }
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0)
    {
        return 0;
    }
    else {
        return  Math.max(...array);

    }
}

exports.avg = function avg (array) {
    let sumarray =0;
        if (array == undefined || array.length == 0)
    {
        return 0;
    }
    else {
        for ( i=0; i<array.length; i++)
            {
                sumarray= sumarray + array[i];
            }
         let avgarray = sumarray/array.length;
        return avgarray;
    }
}
