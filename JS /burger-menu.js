function toggleOverlay() {
    var overlay = document.getElementById('menu-overlay');
    
    if (overlay.style.display === "none") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
    overlay.classList.toggle('active');

}
