var noVowels = "What are doing?"
var reverse = ""

for (var i = noVowels.length -1; i >= 0; i -= 1)  {
  if (noVowels[i] !== "a" && noVowels[i] !== "e" && noVowels[i] !== "i" && noVowels[i] !== "o" && noVowels[i] !== "u")  {
  	reverse = reverse + noVowels[i];
  }
}
console.log(reverse)