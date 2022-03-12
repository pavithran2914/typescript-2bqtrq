import { Dot } from './dot.model';
export class Line {
  start: Dot;
  end: Dot;
  constructor(start: Dot, end: Dot) {
    this.start = start;
    this.end = end;
    this.createLine();
  }
  createLine() {
    console.log(
      `Line created from x = ${this.start.x}, y = ${this.start.y} to x = ${this.end.x}, y = ${this.end.y}`
    );
  }
}
