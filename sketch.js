/* eslint no-unused-vars: 0, no-console: 0 */
/* global p5 */
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

const NODE_COLOR = '#28a86b';
const EDGE_COLOR = '#2244cc';
const NODE_SIZE = 8;

var sketch = function( p ) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background('#fff');
    p.translate(200, 200);
    // center point
    // p.ellipse(0, 0, 4, 4);
    // rotate nodes

    for (let node of nodes) {
      rotate(30, node);
    }
    // draw edges
    p.stroke(EDGE_COLOR);
    for (let edge of edges) {
      p.line(nodes[edge[0]].x, nodes[edge[0]].y, nodes[edge[1]].x, nodes[edge[1]].y);
    }
    // draw nodes
    p.fill(NODE_COLOR);
    p.noStroke();
    for (let node of nodes) {
      p.ellipse(node.x, node.y, NODE_SIZE, NODE_SIZE);
    }
  };

  p.draw = function() {
  };
};

function rotate(degree, node) {
  let tetha = rad(degree);
  let cos_tetha = Math.cos(tetha);
  let sin_tetha = Math.sin(tetha);
  let x = node.x;
  let y = node.y;
  node.x = (x * cos_tetha) - (y * sin_tetha);
  node.y = (y * cos_tetha) + (x * sin_tetha);
}

function rad(degree){
  return (Math.PI/180)*degree;
}

var myp5 = new p5(sketch);
