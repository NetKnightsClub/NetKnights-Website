// disclaimer.js

if (localStorage.getItem('hasVisited') === 'true') {
    window.location.href = "../index.html";
}

document.getElementById("okay-btn").onclick = function() {
    localStorage.setItem('hasVisited', 'true');
    
    window.location.href = "../index.html";
};

document.getElementById("gmbh-btn").onclick = function() {
    window.location.href = "https://www.netknights.it";
};
