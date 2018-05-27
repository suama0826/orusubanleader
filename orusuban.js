(function() {
    "use strict";

    var btn = document.getElementById("btn");
    var results = document.getElementById("results");

    btn.addEventListener("click", function() {
        var orusubanLeader = ["ramune001.JPG",
                              "ramune002.JPG",
                              "ramune003.JPG",
                              "potato001.JPG",
                              "potato002.JPG",
                              "potato003.JPG",
                              "nasubi001.JPG",
                              "nasubi002.JPG",
                              "nasubi003.JPG"];
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
