interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * +v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: "Zee" };
calculateLength(v); // 5

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  console.log(length);

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

// function calc2(v: Vector3D) {
//   let length = 0;
//   for (const axis of Object.keys(v)) {
//     const coord = v[axis];
//     // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Vector3D. No index signature with a parameter of type 'string' was found on type 'Vector3D'.ts(7053)
//     length += Math.abs(coord);
//   }
//   return length;
// }

function calc1(v: Vector3D) {
  console.log(v);

  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

console.log(normalize({ x: 3, y: 4, z: 5 }));

const vec3D = { x: 3, y: 4, z: 1, address: "123 asdfasdf" };
console.log(calc1(vec3D));
