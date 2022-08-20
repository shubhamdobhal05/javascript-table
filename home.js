function createTable() {

    fetch("http://localhost:5654/data").
        then((res) => {
            return res.json();
        }).then((res) => {
            var data = res;
            var col = [];
            for (var i = 0; i < data.length; i++) {
                for (var k in data[i]) {
                    if (col.indexOf(k) === -1) {
                        col.push(k)
                    }
                }
            }
            //console.log(col)
            var table = document.createElement("table");
            var tr = table.insertRow(-1);

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            for (var i = 0; i < data.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tableData = tr.insertCell(-1);
                    tableData.innerHTML = data[i][col[j]];
                }
            }
            var div = document.getElementById("showData");
            div.innerHTML = "";
            div.appendChild(table);
        }).catch((err) => {
            console.log(err);
        })








}

window.addEventListener("load", () => {
    createTable();
})