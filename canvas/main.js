/* eslint no-unused-vars: 0, no-console: 0 */
'use strict';

let nodes = [];
nodes.push({x: -100, y: -100, z: -100});
nodes.push({x: -100, y: -100, z:  100});
nodes.push({x: -100, y:  100, z: -100});
nodes.push({x: -100, y:  100, z:  100});
nodes.push({x:  100, y: -100, z: -100});
nodes.push({x:  100, y: -100, z:  100});
nodes.push({x:  100, y:  100, z: -100});
nodes.push({x:  100, y:  100, z:  100});

let edges = [];
edges.push([0, 1]);
edges.push([1, 3]);
edges.push([3, 2]);
edges.push([2, 0]);
edges.push([4, 5]);
edges.push([5, 7]);
edges.push([7, 6]);
edges.push([6, 4]);
edges.push([0, 4]);
edges.push([1, 5]);
edges.push([2, 6]);
edges.push([3, 7]);

function draw(){
  let canvas  = document.getElementById("mycanvas");


  let point = { x:200, y:0 };

  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(0, 0, 200, rad(0), rad(360));
    ctx.stroke();

    drawPoint(ctx, point, 4);

    rotate(10, point);
    drawPoint(ctx, point, 4);

    rotate(10, point);
    drawPoint(ctx, point, 4);

    rotate(10, point);
    drawPoint(ctx, point, 4);

    rotate(10, point);
    drawPoint(ctx, point, 4);

    rotate(10, point);
    drawPoint(ctx, point, 4);

    rotate(10, point);
    drawPoint(ctx, point, 4);

  } else {
    alert('no canvas');
     // canvas-unsupported code here
  }

  function drawPoint(ctx, point, size){
    ctx.beginPath();
    ctx.arc(point.x, point.y, size, rad(0), rad(360));
    ctx.stroke();
    ctx.fill();
  }

  function rotate(degree, point) {
    let cos_tetha = Math.cos(rad(degree));
    let sin_tetha = Math.sin(rad(degree));
    // console.log(`cos: ${cos_tetha}`);
    // console.log(`sin: ${sin_tetha}`);
    // console.log(`x: ${point.x}, y: ${point.y}`);
    let x = point.x;
    let y = point.y;
    point.x = x * cos_tetha - y * sin_tetha;
    point.y = y * cos_tetha + x * sin_tetha;
    // console.log(`x: ${point.x}, y: ${point.y}`);
  }

  // convert degree to radians
  function rad(degree){
    return (Math.PI/180)*degree;
  }
}
