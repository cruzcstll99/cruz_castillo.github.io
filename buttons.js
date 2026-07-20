const intro_gifs = ['button/elliptic.png','button/PCSv3.gif'];
const intro_text =[ 'Non-vanishing of analytic ranks [1]','Pair correlation surface, see [4]'];
let ind = 0;

function switchintro() {
    ind = (ind +1) % intro_gifs.length;
    document.getElementById("intro_text").innerHTML = intro_text[ind];
    document.getElementById("intro_pic").src = intro_gifs[ind];
}
function email() {
    navigator.clipboard.writeText("ccasillo49@gatech.edu");
    alert("The email address (ccasillo49@gatech.edu) of Cruz Castillo has been copied to your clipboard!");
}