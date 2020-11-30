showModal=function(){
    console.log("made it to the modal")
    console.log(score);
    console.log(document.getElementById("duck5").checked);
    if (document.getElementById("duck5").checked){
        console.log("modal should show")
        var modal = document.getElementById("modal");
        modal.style.display ="block";

        var span = document.getElementsByClassName("close")[0];
    }
}
//methods for closing the modal
closeModal = function(){
    var modal = document.getElementById("modal");
    modal.style.display ="none";
}
window.onclick = function(event){
    var modal = document.getElementById("modal");
    if (event.target == modal){
        modal.style.display ="none";
    }
}