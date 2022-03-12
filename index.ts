// Import stylesheets
import { Dot } from './models/dot.model';
import { Line } from './models/line.model';
import { Triangle } from './models/triangle.model';
import './style.css';
// Write TypeScript code!



const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
const dot1: Dot = new Dot(3.5, 2);
const dot2: Dot = new Dot(2.5, 4);
const dot3: Dot = new Dot(4.5, 4);
const line1 = new Line(dot1, dot2);
const line2 = new Line(dot2, dot3);
const line3 = new Line(dot3, dot1);
const triangle = new Triangle(line1, line2, line3);
console.log(triangle);
// const result = triangle.createDots();
// console.log(result);
