// This .js file is used to define every function
// that will be used to draw geometry with webgl

import {Geometry} from './geometry.js';

window.geo = new Geometry();

function drawLine(webgl, input1Data, input2Data, colorData) {
    const vertexProgram =
    `
    attribute vec2 pos;
    void main() {
        gl_Position = vec4(pos, 0, 1); 
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

    var vertexData = input1Data.concat(input2Data);
    const vertexBuffer = webgl.createBuffer();
    webgl.bindBuffer(webgl.ARRAY_BUFFER, vertexBuffer);
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(vertexData), webgl.STATIC_DRAW);

    webgl.useProgram(program);
    const vertexPosition = webgl.getAttribLocation(program, 'pos');
    const fragmentColor = webgl.getUniformLocation(program, 'col');
    webgl.vertexAttribPointer(vertexPosition, 2, webgl.FLOAT, false, 0, 0);
    webgl.uniform4fv(fragmentColor, colorData);
    webgl.enableVertexAttribArray(vertexPosition);
    webgl.drawArrays(webgl.LINES, 0, vertexData.length / 2);

    geo.setType("line");
    geo.setCoorData(vertexData);
    geo.setColorData(colorData);
}

// TODO
function drawSquare(webgl, input1Data, input2Data, colorData) {
    const vertexProgram =
    `
    attribute vec2 pos;
    void main() {
        gl_Position = vec4(pos, 0, 1); 
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

    var k = input1Data[0];
    var x0 = input2Data[0];
    var y0 = input2Data[1];

    var vertexData = input2Data.concat([x0 + k, y0, x0, y0 - k, x0 + k, y0 - k]);
    const vertexBuffer = webgl.createBuffer();
    webgl.bindBuffer(webgl.ARRAY_BUFFER, vertexBuffer);
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(vertexData), webgl.STATIC_DRAW);

    var indexData = [0, 2, 3, 0, 1, 3];
    const indexBuffer = webgl.createBuffer();
    webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), webgl.STATIC_DRAW);

    webgl.useProgram(program);
    const vertexPosition = webgl.getAttribLocation(program, 'pos');
    const fragmentColor = webgl.getUniformLocation(program, 'col');
    webgl.vertexAttribPointer(vertexPosition, 2, webgl.FLOAT, false, 0, 0);
    webgl.uniform4fv(fragmentColor, colorData);
    webgl.enableVertexAttribArray(vertexPosition);
    webgl.drawElements(webgl.TRIANGLES, indexData.length, webgl.UNSIGNED_SHORT, 0);

    geo.setType("square");
    geo.setCoorData(vertexData);
    geo.setIndexData(indexData);
    geo.setColorData(colorData);
}

// TODO
function drawPolygon(webgl, input1Data, colorData) {

}

export function draw(canvas, type, input1Data, input2Data, colorData) {
    const webgl = canvas.getContext('webgl');
    if (type == "line") {
        drawLine(webgl, input1Data, input2Data, colorData);
    }
    else if (type == "square") {
        drawSquare(webgl, input1Data, input2Data, colorData);
    }
    else { // type == "polygon"
        drawPolygon(webgl, input1Data, colorData);
    }
}