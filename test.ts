/** 1장 */

// interface Vector2D {
//   x: number;
//   y: number;
// }

// function calculateLength(v: Vector2D) {
//   return Math.sqrt(v.x * v.x + v.y * +v.y);
// }

// interface NamedVector {
//   name: string;
//   x: number;
//   y: number;
// }

// const v: NamedVector = { x: 3, y: 4, name: "Zee" };
// calculateLength(v); // 5

// interface Vector3D {
//   x: number;
//   y: number;
//   z: number;
// }

// function normalize(v: Vector3D) {
//   const length = calculateLength(v);
//   console.log(length);

//   return {
//     x: v.x / length,
//     y: v.y / length,
//     z: v.z / length,
//   };
// }

// // function calc2(v: Vector3D) {
// //   let length = 0;
// //   for (const axis of Object.keys(v)) {
// //     const coord = v[axis];
// //     // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Vector3D. No index signature with a parameter of type 'string' was found on type 'Vector3D'.ts(7053)
// //     length += Math.abs(coord);
// //   }
// //   return length;
// // }

// function calc1(v: Vector3D) {
//   console.log(v);

//   return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
// }

// console.log(normalize({ x: 3, y: 4, z: 5 }));

// const vec3D = { x: 3, y: 4, z: 1, address: "123 asdfasdf" };
// console.log(calc1(vec3D));

/** 2장 */

const res = fetch("http://example.com");

const x: never = 12;

type AB12 = "A" | "B" | 12;

const a: AB12 = "A";
const c: AB12 = "C";

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "asdf",
  birth: new Date("2000/01/01"),
  death: new Date("2022/01/01"),
};

interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point; // x | y

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  // ...
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];
sortBy(pts, "x");
sortBy(pts, "y");
sortBy(pts, Math.random() < 0.5 ? "x" : "y");
sortBy(pts, "z"); //

type T1 = "string literal";
type T2 = 123;
const T1 = "string literal";
const T2 = 123;
