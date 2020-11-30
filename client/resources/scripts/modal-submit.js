showModal = function(){
    var modal = document.getElementById("successModal");
    modal.style.display ="block";
    var form = document.getElementById("contactForm");
    form.reset();

    var span = document.getElementsByClassName("close")[0];
}
closeModal = function(){
    var modal = document.getElementById("successModal");
    modal.style.display ="none";
    document.getElementById("name").reset();
}
window.onclick = function(event){
    var modal = document.getElementById("successModal");
    if (event.target == modal){
        modal.style.display ="none";
    }
}