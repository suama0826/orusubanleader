(function() {
    "use strict";

    var btn = document.getElementById("btn");
    var results = document.getElementById("results");

    btn.addEventListener("click", function() {
        var orusubanLeader = ["ramune001.jpg",
                              "ramune002.jpg",
                              "ramune003.jpg",
                              "potato001.jpg",
                              "potato002.jpg",
                              "potato003.jpg",
                              "nasubi001.jpg",
                              "nasubi002.jpg",
                              "nasubi003.jpg"];
        var n = Math.floor(Math.random() * orusubanLeader.length);
        document.getElementById("leader").src = orusubanLeader[n];
        if (n >=0 && n <= 2) {
            results.textContent = "ラムネくんです";
        } else if (n >= 3 && n <= 5) {
            results.textContent = "ポテトくんです";
        } else {
            results.textContent = "なすびくんです";
        }
    });

})();
