// this function only logs to the console, no HTML output. 



window.onload = () => {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extension = ['.com', '.gov']

    for (var i = 0; i < pronoun.length; i++) {
        for (var j = 0; j < adj.length; j++) {
            for (var k = 0; k < noun.length; k++) {
                for (var l = 0; l < extension.length; l++) {
                 document.getElementById("domain").innerHTML += `<p> ${pronoun[i] + adj[j] + noun[k] + extension[l]} </p>`;
                }
            }
        }
    }
    // return pronoun[i] + adj[j] + noun[k] + extension[l];
}
// console.log(domGen())
