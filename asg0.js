/* References / Resources: */

/* Mozilla Web Docs */

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
// Canvas API functions: stroke, fillStyle, fillRect, getContext, lineTo, strokeStyle, beginPath, moveTo

function main() {
    
    // Retrieve <canvas> element                                 
    var canvas = document.getElementById('example');
    
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    // Get the rendering context for 2DCG                          
    var ctx = canvas.getContext('2d');

    // Draw a black rectangle / canvas                                       
    ctx.fillStyle = 'black'; // Set color to black
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// function that draws a vector 
function drawVector(v, color) {

    let ctx = document.getElementById("example").getContext("2d");

    ctx.beginPath(); // Start path
    ctx.strokeStyle = color;

    // Move to center of the canvas (200, 200)
    ctx.moveTo(200, 200);

    // Draw a line to the scaled vector endpoint
    ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20); // Y-axis flipped in canvas
    ctx.stroke(); // Render the path
}

// Handles functionality for the Draw button for the vectors
function handleDrawEvent() {

    let canvas = document.getElementById("example");
    let ctx = canvas.getContext("2d");

    // clear the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Get input values and parse to float (Vector 1)
    let x1 = parseFloat(document.getElementById("xInput").value);
    let y1 = parseFloat(document.getElementById("yInput").value);

    // Get input values and parse to float (Vector 2)
    let x2 = parseFloat(document.getElementById("xInput2").value);
    let y2 = parseFloat(document.getElementById("yInput2").value);

    // Create vector 1
    let v1 = new Vector3([x1, y1, 0.0]);

    // Create vector 2
    let v2 = new Vector3([x2, y2, 0.0]);

    // Draw vector 1
    drawVector(v1, "red");

    // Draw vector 2
    drawVector(v2, "blue");
}

// Handles functionality for the Draw button for the operations
function handleDrawOperationEvent() {

    let canvas = document.getElementById("example");
    let ctx = canvas.getContext("2d");

    // clear the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Read inputs
    let x1 = parseFloat(document.getElementById("xInput").value);
    let y1 = parseFloat(document.getElementById("yInput").value);
    let v1 = new Vector3([x1, y1, 0.0]);

    let x2 = parseFloat(document.getElementById("xInput2").value);
    let y2 = parseFloat(document.getElementById("yInput2").value);
    let v2 = new Vector3([x2, y2, 0.0]);

    let scalar = parseFloat(document.getElementById("scalarInput").value);
    let op = document.getElementById("operationSelect").value;

    // Draw vectors v1 and v2
    drawVector(v1, "red");
    drawVector(v2, "blue");

    // Perform operation
    if (op === "add") {
        let v3 = new Vector3([x1, y1, 0]);
        v3.add(v2);
        drawVector(v3, "green");
    } else if (op === "sub") {
        let v3 = new Vector3([x1, y1, 0]);
        v3.sub(v2);
        drawVector(v3, "green");
    } else if (op === "mul") {
        let v3 = new Vector3([x1, y1, 0]);
        let v4 = new Vector3([x2, y2, 0]);
        v3.mul(scalar);
        v4.mul(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op === "div") {
        let v3 = new Vector3([x1, y1, 0]);
        let v4 = new Vector3([x2, y2, 0]);
        v3.div(scalar);
        v4.div(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op == "mag") {
        let v3 = new Vector3([x1, y1, 0]);
        let v4 = new Vector3([x2, y2, 0]);
        let magV3 = v3.magnitude(); 
        let magV4 = v4.magnitude();
        console.log("Magnitude v1: ", magV3);
        console.log("Magnitude v2: ", magV4);
    } else if (op == "nor") {
        let v3 = new Vector3([x1, y1, 0]);
        let v4 = new Vector3([x2, y2, 0]);
        v3.normalize();
        v4.normalize();
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op == "angle") {
        let v3 = new Vector3([x1, y1, 0]);
        let v4 = new Vector3([x2, y2, 0]);
        angleBetween(v3, v4);
    } else if (op == "area") {
        let v3 = new Vector3([x1, y1, 0]);
        let v4 = new Vector3([x2, y2, 0]);
        areaTriangle(v3, v4);
    }
}

// function that performs dot product of two angles
function angleBetween(v1, v2) {
    // Compute dot product of the vectors using dot function
    let dotProd = Vector3.dot(v1, v2);

    // Compute the magnitude (lengths) of the two vectors
    let magV1 = v1.magnitude();
    let magV2 = v2.magnitude();

    // Checking for zero-length vectors to avoid division by zero
    if (magV1 === 0 || magV2 === 0) {
        console.log("Cannot compute angle with zero-length vector.");
        return;
    }

    // dot(v1, v2) = ||v1|| * ||v2|| * cos(alpha)
    let cosTheta = dotProd / (magV1 * magV2);
    cosTheta = Math.max(-1, Math.min(1, cosTheta));
    
    // Compute the angle in radians using arccos
    let angleRad = Math.acos(cosTheta);
    
    // Convert the angle from radians to degrees
    let angleDeg = angleRad * (180 / Math.PI);

    // Print the Angle in degrees to the browser's console log
    console.log("Angle:", angleDeg.toFixed(0));    
}

// function that uses the cross function to compute area of a triangle
function areaTriangle(v1, v2) {
    // Compute the cross product with the cross function
    let crossProd = Vector3.cross(v1, v2);

    // Calculate magnitude of the cross product (area of parallelogram)
    let areaParallelogram = crossProd.magnitude();

    // Area of triangle is half the area of the parallelogram
    let areaTriangle = areaParallelogram / 2;

    // Print the area of a triangle to the browser's console log
    console.log("Area of the triangle:", areaTriangle.toFixed(1));
}