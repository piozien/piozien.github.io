function submitReservation() {
 
    var form = document.getElementById("reservationForm");
    
   
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }
    
   
    form.classList.add("disabled-form");
    
    
    event.target.disabled = true;
}
