
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.gov', '.org']

var allPosibilities = [pronoun, adj, noun, extension];

var domGen = (matrix) => {
let domain ="";

    for (var i = 0; i < matrix.length; i++) {
        var innerArray = matrix[i];
        var randomWord1 = innerArray[Math.floor(Math.random() * innerArray.length)];
        console.log('line 15', randomWord1);
        for (var j = 0; j < innerArray.length; j++) {

            var  words = innerArray;
            var randomword2 = words[Math.floor(Math.random() * words.length)];
            console.log('line20', randomword2);
            for(var k = 0; k < words.length; k++){
                console.log(words)
            }
        }
    // }console.log(domain); 
        // const randomElement = array[Math.floor(Math.random() * array.length)];

    }
}
console.log(domGen(allPosibilities))