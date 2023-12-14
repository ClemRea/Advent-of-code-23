import fs from "fs";

function Day2() {
  const lines = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");

  const splitedLines = lines.map((line) => line.trim().replace(/[;,]/g, ""));
  const splitedLinesNoGame = splitedLines.map((e) => {
    const match = e.match(/: (.+)/);
    return match ? match[1].split(",") : [];
  });

  const maxBlue = 14;
  const maxGreen = 13;
  const maxRed = 12;

  let totalIndices = [];
  let totalMultiplication = 0;

  splitedLinesNoGame.forEach((ligneArray, gameIndex) => {
    const ligne = ligneArray[0];
    const mots = ligne.split(" ");

    let jeuRespecte = true;
    let numberOfBlue = 0;
    let numberOfRed = 0;
    let numberOfGreen = 0;

    for (let i = 1; i < mots.length; i += 2) {
      const quantite = parseInt(mots[i - 1], 10);
      const couleur = mots[i].toLocaleLowerCase();

      if (couleur === "blue") {
        if (quantite > maxBlue) {
          jeuRespecte = false;
        }
        numberOfBlue = Math.max(numberOfBlue, quantite);
      } else if (couleur === "red") {
        if (quantite > maxRed) {
          jeuRespecte = false;
        }
        numberOfRed = Math.max(numberOfRed, quantite);
      } else if (couleur === "green") {
        if (quantite > maxGreen) {
          jeuRespecte = false;
        }
        numberOfGreen = Math.max(numberOfGreen, quantite);
      }
    }
    totalMultiplication += numberOfBlue * numberOfRed * numberOfGreen;

    if (jeuRespecte) {
      totalIndices.push(gameIndex + 1);
    }
  });

  console.log(`PARTIE 1 : ${totalIndices.reduce((acc, value) => acc + value)}`);
  console.log(`PARTIE 2 : ${totalMultiplication}`);
}

Day2();
