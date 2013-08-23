req();

function req (i) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) {return; }
        if (this.status != 200) {return;}

        self.postMessage(this.responseText);
    };

    var url = "02_php.php";
    xhr.open("GET", url);
    xhr.send();

    self.setTimeout(arguments.callee, 1000, i)
};