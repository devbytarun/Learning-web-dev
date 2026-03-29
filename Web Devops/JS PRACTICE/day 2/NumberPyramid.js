let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }
  console.log(row.trim());
}