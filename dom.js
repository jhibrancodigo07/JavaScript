
document.addEventListener("DOMContentLoaded", function() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    document.getElementById('visitCount').textContent = visitCount;
});
