


//connect to API and display data on page
function getInfo() {


   
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            recordStr = this.responseText;
                    record = JSON.parse(recordStr); // Create JS object


                    //test to get first timestamp
                        msg = "<b><u>Result:</b></u> <br>Timestamp: " + record.chart.result[0].timestamp[0] +"<br>";

                    //first timestamp
                    let timeTest = record.chart.result[0].timestamp[9];
                    var myDate = new Date(timeTest*1000);
                    let dateArray = myDate.toLocaleString().split("/") +"<br>";

                    let year = myDate.getFullYear();
                    let month = myDate.getMonth();
                    let day = myDate.getDay();

                    msg += "Date: " +myDate +"<br>";
                    msg += year +"<br>";
                    msg += month +"<br>";
                    msg += day +"<br>";

                    //test to get one timestamp
                    msg += "<b><u>Result:</b></u> <br>Price: " + record.chart.result[0].indicators.quote[0].open[0] +"<br>";



                    let dataPointList = [];


                    //test to get all price
                    msg += "Prices: ";
                        for (var i = 0; i < record.chart.result[0].indicators.quote[0].open.length; i++) {
                            //msg += record.chart.result[0].indicators.quote[0].open[i];
                            let price = record.chart.result[0].indicators.quote[0].open[i].toString().slice(0,4);
                            dataPointList.push({y:parseFloat(price)});
                            //msg += price
                            if (i + 1 != record.chart.result[0].indicators.quote[0].open.length) {
                                msg += "";
                            }
                        }

                    msg += dataPointList[8].y;


                    document.getElementById("info").innerHTML = msg;

        }
        else{
            
        }
    }

    var api_key = "";

    
    xhr.open("GET", "https://yh-finance.p.rapidapi.com/stock/v2/get-chart?interval=1d&symbol=AMRN&range=5y&region=US");
    xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", api_key);

    xhr.send(data);

};


