
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.gov', '.org']

var allPosibilities = [pronoun, adj, noun, extension];

var domGen = (matrix) => {
let domain ="";

    for (var i = 0; i < matrix.length; i++) {
        
        var innerArray = matrix[i];

        for (var j = 0; j < innerArray.length; j++) {
            console.log(innerArray[j]);
            let domain = `${innerArray[j]}`
            // domain = matrix.concat(innerArray);
            
        }
    // }console.log(domain); 

    }
}
console.log(domGen(allPosibilities))