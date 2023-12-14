import fs from "fs";

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\r\n");
  const values = lines.map((line) => {
    let first = line.split("").find((e) => !Number.isNaN(Number(e)));
    let last = line.split("").findLast((e) => !Number.isNaN(Number(e)));
    return Number(first + last);
  });
  return values.reduce((acc, value) => acc + value);
}

console.log("Partie 1 :", partOne("./input.txt"));
