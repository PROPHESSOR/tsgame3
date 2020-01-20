import { Vec2 } from './Math';

export interface iBoxProps {
  position: Vec2;
  size: Vec2;
}

export interface iBox extends iBoxProps {
  top: number;
  bottom: number;
  left: number;
  right: number;

  topleft: Vec2;
  topright: Vec2;
  bottomleft: Vec2;
  bottomright: Vec2;

  centerleft: Vec2;
  centerright: Vec2;
  centertop: Vec2;
  centerbottom: Vec2;
}

export default class Box {
  position: Vec2;
  size: Vec2;

  constructor(position: Vec2, size: Vec2) {
    this.position = position;
    this.size = size;
  }

  get top(): number {
    return this.position.y;
  }

  get bottom(): number {
    return this.position.y + this.size.y;
  }

  get left(): number {
    return this.position.x;
  }

  get right(): number {
    return this.position.x + this.size.x;
  }

  get topleft(): Vec2 {
    return this.position;
  }

  get topright(): Vec2 {
    return new Vec2(this.right, this.top);
  }

  get bottomleft(): Vec2 {
    return new Vec2(this.left, this.bottom);
  }

  get bottomright(): Vec2 {
    return new Vec2(this.right, this.bottom);
  }

  get centerleft(): Vec2 {
    return new Vec2(this.left, this.top + this.size.y / 2);
  }

  get centerright(): Vec2 {
    return new Vec2(this.right, this.top + this.size.y / 2);
  }

  get centertop(): Vec2 {
    return new Vec2(this.left + this.size.x / 2, this.top);
  }

  get centerbottom(): Vec2 {
    return new Vec2(this.left + this.size.x / 2, this.top);
  }

  checkInside(point: Vec2): boolean {
    return (
      point.x >= this.left &&
      point.y >= this.top &&
      point.x <= this.right &&
      point.y <= this.bottom
    );
  }
}
