// this function only logs to the console, no HTML output. 
const domGen = () => {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extension = ['.com', '.gov']

    for (var i = 0; i < pronoun.length; i++) {
        for (var j = 0; j < adj.length; j++) { 
        for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < extension.length; l++) 
        { console.log(pronoun[i]+adj[j]+noun[k]+extension[l]);}
         }
        }
    }
    return pronoun[i]+adj[j]+noun[k]+extension[l];
} 
console.log(domGen())
