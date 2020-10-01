
exports.min = function min (array) {
    if (array == undefined || array.length == 0)
        {
            return 0;
        }
    else {
            let minitem = Math.min(...array);
            return minitem;
        }
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0)
    {
        return 0;
    }
    else {
        let maxitem = Math.max(...array);
        return maxitem ;
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
