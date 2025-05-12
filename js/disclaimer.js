// disclaimer.js

// check if the user has already visited and acknowledged the disclaimer
if (localStorage.getItem('hasVisited') === 'true') {
    window.location.href = "index.html";
}

document.getElementById("okay-btn").onclick = function() {
    // store in localStorage so they won't see this again
    localStorage.setItem('hasVisited', 'true');
    
    window.location.href = "index.html";
};

document.getElementById("gmbh-btn").onclick = function() {
    window.location.href = "https://www.netknights.it";
};
