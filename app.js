const vowels = ["a", "e", "i", "o", "u"]
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

function getAllSubstrings(str){
    var substrings = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}

function getVowelSubstrings(str){
    return getAllSubstrings(str).filter(substring => vowels.includes(substring.charAt(0)) && vowels.includes(substring.charAt(substring.length - 1)))
}

function getConsonantSubstrings(str){
    return getAllSubstrings(str).filter(substring => consonants.includes(substring.charAt(0)) && consonants.includes(substring.charAt(substring.length - 1)))
}

console.log(getVowelSubstrings("apple"));
console.log(getConsonantSubstrings("aviation"));
console.log(getConsonantSubstrings("motor"));