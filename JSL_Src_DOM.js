function numbers() {
    var elem = document.getElementById('textSpan');

    for (var i = 0; i < 1000; i++) {
        elem.innerHTML += i + " ";
    }
}

    function changeColor(color) {
        var elem = document.getElementById('textSpan');
        elem.style.color = color;
    }

    window.onkeydown = function(evt) {
        console.log(evt);
        var key = evt.which ? evt.which : evt.keyCode;
        var c = String.fromCharCode(key);
        switch (c) {
        case ('R'):
            changeColor("#ff0000");
            break;
        case ('G'):
            changeColor("#00ff00");
            break;
        case ('B'):
            changeColor("#0000ff");
            break;

        }
    }; 