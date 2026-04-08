let arr = [1, [2, 3], [4, [5, 6]], 7];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    for (let j = 0; j < arr[i].length; j++) {
      if (Array.isArray(arr[i][j])) {
        for (let k = 0; k < arr[i][j].length; k++) {
          result.push(arr[i][j][k]);
        }
      } else {
        result.push(arr[i][j]);
      }
    }
  } else {
    result.push(arr[i]);
  }
}
