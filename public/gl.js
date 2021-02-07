// This .js file is used to define every function
// that will be used to draw with webGL.

function pointDistance(coorData, x_from, y_from, x_to, y_to) {
    return Math.sqrt((coorData[x_to] - coorDatap[x_from])**2 + (coorData[y_to] - coorDatap[y_from])**2);
}

function getNearestPoint(coorData, idxPointOrigin, listIdxPointTarget, idxPointException) {
    var shortestDistance = 100;
    var nearestPoint;

    for (i = 0; i < listIdxPointTarget.length; i++) {
        if (i != idxPointException) {
            var x_from = coorData[idxPointOrigin];
            var y_from = x_from + 1;
            var x_to = coorData[listIdxPointTarget[i]] * 3;
            var y_to = x_to + 1;

            var distance = pointDistance(coorData, x_from, x_to, y_from, y_to);

            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestPoint = i;
            }
        }
    }

    return nearestPoint;
}

function getIndex(type, coorData) {
    var idxData;
    
    if (type == "line") {
        idxData = [0,1];
    }
    else {
        var idxTemp;
        if (type == "square") {
            idxTemp = [0, 1, 2, 3];
        }
        else {
            for (i = 0; i < coorData.length / 2; i++) {
                idxTemp.push(i);
            }
        }

        var idxUsed = [];
        for (i = 0; i < idxTemp.length; i++) {
            var idxTarget;
            if (i == 0) {
                idxTarget = idxTemp;
            }
            else {
                idxTarget = idxUsed;
            }

            var nearestPoint1 = getNearestPoint(coorData, i, idxTarget, i);
            var nearestPoint2 = getNearestPoint(coorData, )
        }
    }

    return idxData;
}

export function draw(canvas, type, coorData, colorData) {
    const gl = canvas.getContext('webgl');
    var coorData = coorData;
    var colorData = colorData;
    var indxData;

    if (type == "line") {
        indxData = [0, 1];
    }
    else if (type == "square") {

    }
}