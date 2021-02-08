// This .js file is used to define every function
// that will be used to draw with webGL.

/*
function isMember(elmt, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == elmt) {
            return true;
        }
    }

    return false;
}

function add(elmt, array) {
    if (!isMember(elmt, array)) {
        array.push(elmt);
    }
}

function pointDistance(x_from, y_from, x_to, y_to) {
    // return euclidean distance between two points
    var x = (x_to - x_from)**2;
    var y = (y_to - y_from)**2;
    return Math.sqrt(x + y);
}

function getNearestPoint(coorData, idxPointOrigin, listIdxPointTarget, idxPointException) {
    console.log("idxPointOrigin");
    console.log(idxPointOrigin);
    var shortestDistance = 100;
    var nearestPoint;
    console.log(nearestPoint);
    console.log("listIdxPointTarget: ");
    console.log(listIdxPointTarget);
    for (var i = 0; i < listIdxPointTarget.length; i++) {
        console.log("listIdxPointTarget[i]: ");
        console.log(listIdxPointTarget[i]);
        
        if (!isMember(listIdxPointTarget[i], idxPointException)) {
            var x_from = coorData[idxPointOrigin * 3];
            console.log(x_from);
            var y_from = coorData[idxPointOrigin * 3 + 1];
            console.log(y_from);
            var x_to = coorData[listIdxPointTarget[i] * 3];
            console.log(x_to);
            var y_to = coorData[listIdxPointTarget[i] * 3 + 1];
            console.log(y_to);

            var distance = pointDistance(x_from, y_from, x_to, y_to);
            console.log("distance");
            console.log(distance);

            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestPoint = i;
            }
        }
    }
    console.log(nearestPoint);

    return nearestPoint;
}

function getIndex(type, coorData) {
    var idxData = [];
    
    if (type == "line") {
        idxData.push(0);
        idxData.push(1);
    }
    else {
        var idxTemp = [];
        if (type == "square") {
            idxTemp = [0, 1, 2, 3];
        }
        else {
            for (var i = 0; i < coorData.length / 2; i++) {
                idxTemp.push(i);
            }
        }

        console.log(idxTemp);

        var idxUsed = [];
        var idxTarget = [];
        var idxException = [];
        for (var i = 0; i < idxTemp.length; i++) {
            if (idxTemp[i] !== undefined) {
                console.log(idxTemp[i]);
                if (i == 0) {
                    idxTarget = idxTemp.slice();
                    add(i, idxUsed);
                    idxException = idxUsed.slice();
                }
                else {
                    idxTarget = idxUsed.slice();
                    idxException = [].slice();
                }

                console.log(idxTarget);
                var nearestPoint1 = getNearestPoint(coorData, i, idxTarget, idxException);
                add(nearestPoint1, idxException);
                var nearestPoint2 = getNearestPoint(coorData, i, idxTarget, idxException);
                
                add(nearestPoint1, idxUsed);
                add(nearestPoint2, idxUsed);

                delete idxTemp[i];
                delete idxTemp[nearestPoint1];
                delete idxTemp[nearestPoint2];

                idxData.push(nearestPoint1);
                idxData.push(i);
                idxData.push(nearestPoint2);
                console.log(idxData);

                
                console.log("end");
            }
        }
    }

    return idxData;
}
*/

// Ignore codes above

// TODO
function drawLine() {
    
}

// TODO
function drawSquare() {

}

// TODO
function drawPolygon() {

}

export function draw(canvas, type, coorData, colorData) {
    const gl = canvas.getContext('webgl');
    
}