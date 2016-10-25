/* eslint no-unused-vars: 0, no-console: 0 */
'use strict';

let s function(p){
  
}

function setup(){
  createCanvas(400, 400);
  background(255, 255, 255);
  translate(200, 200);

  ellipse(0, 0, 4, 4);

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

  let nodeColor = color(40, 168, 107);
  let edgeColor = color(34, 68, 204);
  let nodeSize = 8;

  let count = 0;
  for (let node of nodes) {
  // count++;
  // console.log(`node: ${count} -> x: ${node.x}, y: ${node.y}, z: ${node.z}`);
  dmg.rotate(30, node);
  // console.log(`node: ${count} -> x: ${node.x}, y: ${node.y}, z: ${node.z}`);
  }

  // draw edges
  stroke(edgeColor);
  for (let edge of edges){
  line(nodes[edge[0]].x, nodes[edge[0]].y, nodes[edge[1]].x, nodes[edge[1]].y);
  }

  // draw nodes
  fill(nodeColor);
  noStroke();
  for (let node of nodes) {
  ellipse(node.x, node.y, nodeSize, nodeSize);
	}
}

let dmg = {
  rotate: function (degree, node) {
    console.log('roatating...');
    let tetha = this.rad(degree);
    let cos_tetha = Math.cos(tetha);
    let sin_tetha = Math.sin(tetha);
    let x = node.x;
    let y = node.y;
    node.x = (x * cos_tetha) - (y * sin_tetha);
    node.y = (y * cos_tetha) + (x * sin_tetha);
  },
  rad: function(degree){
    return (Math.PI/180)*degree;
  }
};
