// Zaimplementuj funkcję przyjmującą jako argument tablicę dowolnych elementów.
// W przypadku gdy jest to string lub liczba, element taki zostaje dodany do tablicy wyjściowej.
// Pozostałe typy nie są uwzględniane w tablicy wyjściowej. Tak utworzoną tablicę należyposortować
// w kolejności: cyfry/liczby od najmniejszej do największej, litery/słowa od Z do A.

// input: [12, 3, 'das', 'pol', {}, null]
// output: [3, 12, 'pol', 'das']
// solution

function mySort(arr) {
  const sortedNumbers = [];
  const sortedStrings = [];
  arr.map((item) => {
    if (typeof item === "number") {
      sortedNumbers.push(item);
    }
    if (typeof item === "string") {
      sortedStrings.push(item);
    }
  });
  return sortedNumbers
    .sort((a, z) => a - z)
    .concat(sortedStrings.sort().reverse());
}

console.log(mySort([5, 12, 3, "das", "pol", "pod", {}, null]));
