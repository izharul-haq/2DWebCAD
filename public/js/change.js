// This .js file is used to define every function
// that will be used by popup window with id
// change-popup

import {drawGeo} from './gl.js';
import {parseCoorInput, parseColorInput} from './draw.js';

// TODO
function scale(scaleValue, pointValue) {
    var canvas = document.querySelector('canvas');
    var webgl = canvas.getContext('webgl');

    var k = parseFloat(scaleValue);
    var p = parseCoorInput(pointValue);
    
    const transformMatrix = new Float32Array([
        k, 0, 0,
        0, k, 0,
        p[0], p[1], 1
    ])

    const vertexProgram =
    `
    attribute vec2 pos;
    uniform mat3 trans_mat;
    void main() {
        vec2 new_pos = (trans_mat * vec3(pos, 1)).xy;
        gl_Position = vec4(new_pos, 0, 1); 
    }
    `;
    const vertexShader = webgl.createShader(webgl.VERTEX_SHADER);
    webgl.shaderSource(vertexShader, vertexProgram);
    webgl.compileShader(vertexShader);

    const fragmentProgram =
    `
    precision mediump float;

    uniform vec4 col;
    void main() {
        gl_FragColor = col;
    }
    `;
    const fragmentShader = webgl.createShader(webgl.FRAGMENT_SHADER);
    webgl.shaderSource(fragmentShader, fragmentProgram);
    webgl.compileShader(fragmentShader);

    const program = webgl.createProgram();
    webgl.attachShader(program, vertexShader);
    webgl.attachShader(program, fragmentShader);
    webgl.linkProgram(program);

    var vertexData = geo.coorData;
    const vertexBuffer = webgl.createBuffer();
    webgl.bindBuffer(webgl.ARRAY_BUFFER, vertexBuffer);
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(vertexData), webgl.STATIC_DRAW);

    var indexData = geo.indexData;
    const indexBuffer = webgl.createBuffer();
    webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), webgl.STATIC_DRAW);

    webgl.useProgram(program);
    const vertexPosition = webgl.getAttribLocation(program, 'pos');
    const fragmentColor = webgl.getUniformLocation(program, 'col');
    const transformMtrx = webgl.getUniformLocation(program, 'trans_mat');
    webgl.vertexAttribPointer(vertexPosition, 2, webgl.FLOAT, false, 0, 0);
    webgl.enableVertexAttribArray(vertexPosition);
    webgl.uniform4fv(fragmentColor, geo.colorData);
    webgl.uniformMatrix3fv(transformMtrx, false, transformMatrix);

    if (geo.type == "line") {
        webgl.drawElements(webgl.LINES, indexData.length, webgl.UNSIGNED_SHORT, 0);
    }
    else {
        webgl.drawElements(webgl.TRIANGLES, indexData.length, webgl.UNSIGNED_SHORT, 0);
    }

    var newCoor = []
    for (var i = 0; i < vertexData.length / 2; i++) {
        newCoor[i * 2] = p[0] + k * (vertexData[i * 2] - p[0]);
        newCoor[i * 2 + 1] = p[1] + k * (vertexData[i * 2 + 1] - p[1]);
    }

    geo.setCoorData(newCoor);
}

function changeColor(colorValue) {
    var canvas = document.querySelector('canvas');
    
    var colorData = parseColorInput(colorValue);
    geo.setColorData(colorData);
    
    drawGeo(canvas, geo.type, geo.coorData, geo.indexData, colorData);
}

// TODO
window.changeGeometry = function changeGeometry() {
    var scaleInput = document.getElementById('factor-input');
    var pointInput = document.getElementById('Pc')
    var colorInput = document.getElementById("color-form");
    var scaleValue = scaleInput.value;
    var pointValue = pointInput.value;
    var colorValue = colorInput.value;
    if (scaleValue != "") {
        scale(scaleValue, pointValue);
    }
    
    if (colorValue != "") {
        changeColor(colorValue);
    }

    hidePopUpWindow('change');
}