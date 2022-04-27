//connect to API and display data on page
function getInfo() {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            recordStr = this.responseText; // JSON format
            record = JSON.parse(recordStr); // Create JS object

            //test to get first timestamp
            msg = "<b><u>Result:</b></u> <br>Timestamp: " + record.chart.result[0].timestamp[0] +"<br>";

            document.getElementById("info").innerHTML = msg;

        }
        else{
            alert('error');
            document.getElementById("info").innerHTML = "ERROR"
        }
    }

    xhr.open("GET", "https://yh-finance.p.rapidapi.com/stock/v2/get-chart?interval=1d&symbol=AMRN&range=5y&region=US");
    xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "913846a913msh9f1d8abf8e98d47p1e0c1djsn54327b4fa572");

    xhr.send(data);

};