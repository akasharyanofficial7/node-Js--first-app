let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let x = arr.map(function process(v, i) {
  console.log(v, i);
  console.log(arr);
  return v * v;
});

console.log(x);
