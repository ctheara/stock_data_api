


//connect to API and display data on page
function getInfo() {
    
    //get user stock ticker input
    stockTicker = document.getElementById('stockT').value.trim().toLowerCase();

    //connecting to API
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    
    xhr.onreadystatechange = function () {
        //if API connection is successful
        if (this.readyState == 4 && this.status == 200) {
            recordStr = this.responseText;
            record = JSON.parse(recordStr); // Create JS object


            //test to get first timestamp
            msg = "<b><u>Result:</b></u> <br>Ticker: " + record.symbol + "<br>";

            document.getElementById("info").innerHTML = msg;



        }
        else {

        }
    }

    var api_key = "";


    xhr.open("GET", "https://yh-finance.p.rapidapi.com/stock/v2/get-statistics?symbol="   +  stockTicker   + "&region=US");
    xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", api_key);

    xhr.send(data);

};


