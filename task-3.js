const findLongestWord = function(string) {
    let SplitedString = string.split(' ');
    let LongestWord = [0,0]; 
    for ( let i=0; i<SplitedString.length; i++) {
        SplitedString[i].length > LongestWord[0] ? LongestWord = [SplitedString[i].length, SplitedString[i]] : LongestWord
    }    
return LongestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'