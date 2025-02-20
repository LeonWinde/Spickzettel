// Variablen
// Bestehen aus einem Keyword (var, let oder const) einem Variablen
var numberName = 0;
let numberName2 = 4.5;
let stringName = "Hello World";
let booleanName = true;
const arrayName = [1, 2, 3, 4, 5];
const objectName = {
  property1: "Hallo",
  property2: "Welt!",
};
// Funktionen
// führern die Anweisung die in den geschweiften Klammern stehen aus und nehmen argumente in den runden klammern an
function functionName(argument) {
  return argument;
}

// function: Das ist ein Keyword mit dem eine Funktion deklariert wird
// functionName: Das ist der name der funktion damit kann sie später aufgerufen werden
// argument: Das ist der name des arguments innerhalb der funktion dieser kann nur innerhalb der Funktion verwendet werden.
// return: Das ist ein Keyword mit dem eine function beendet wird. Alles was nach dem Keyword, auf der gleichen Zeile steht

// Wie ruf ich eine Funktion auf ?
console.log(functionName("so ruf ich eine funktion auf"));

let variable = "so ruf ich eine Funktion mit einer Variablen auf";
console.log(functionName(variable));

// Mathematische Operatoren
// + Plus - Minus * Multiplikator / Divisions Operator () Ausführungsreihenfolge % Modulo
console.log("Plus ", 3 + 5);

console.log("Minus ", 10 - 3);

console.log("Multiplikator ", 4 * 5);

console.log("Divisions Operator ", 10 / 2);

console.log("Ausführungsreihenfolge ", 10 + 4 / 2);

console.log("Ausführungsreihenfolge ", (10 + 4) / 2);

console.log("Modulo 1 ", (10 + 4) % 2);
// Modulo gibt den Rest an. 14 / 2 = 7 rest = 0

console.log("Modulo 2 ", (10 + 5) % 2);
// Modulo gibt den Rest an. 15 / 2 = 7 rest = 1

// Boolische vergleiche
// < Kleiner als > Größer als == Gleichheit === Strikte Gleichheit ! Umkehrungsoperator
// if / else und if / else if

console.log(3 < 4);
// links kleiner als rechts ?
console.log(3 > 4);
// links größer als rechts
console.log(4 == "4");
// linker wert ist gleich wie rechter wert
console.log(4 === "4");
// linker wert und typ sind gleich dem rechten wert und typ
console.log(4 != "4");
// linker wert und rechter wert sind nicht gleich
console.log(4 !== "4");
// linker wert und typ sind nicht gleich dem rechten wert und typ

let bedingung = 4 != "4";

if (bedingung) {
  console.log("Die Bedingung war wahr ", bedingung);
} else {
  console.log("Die Beding war falsch ", bedingung);
}

let bedingung2 = 4 !== "4";

if (bedingung) {
  console.log("Die Bedingung war wahr ", bedingung);
} else if (bedingung2) {
  console.log(
    "Die Bedingung war falsch, aber bedingung2 war wahr ",
    bedingung,
    bedingung2
  );
} else {
  console.log("Beide Bedingungen waren falsch ", bedingung, bedingung2);
}

// Schleifen
// while for
let x = 0;
while (x < 4) {
  console.log("while loop runde: ", x);
  x = x + 1;
}

for (let index = 0; index < 5; index++) {
  console.log("for durchlauf: ", index);
}

// So funktionieren Klassen ihr müsst es noch nicht verstehen das steht nur hier um euch einmal zu zeigen wie methoden funktionieren
class MyConsole {
  log(argument) {
    console.log(argument);
  }
}
const myConsole = new MyConsole();
myConsole.log(stringName);
