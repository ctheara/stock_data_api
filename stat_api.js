//read stock ticker saved in memory
var stockTickerStored = localStorage.getItem("stockTicker");

//get user stock ticker input
stockTickerUser = document.getElementById('stockTickerUser').value.trim().toLowerCase();


//if no entry in text box and there is a stock ticker stored in local storage, then look that stock
if (stockTickerUser == "") {
    if (stockTickerStored) {
        getInfoStored();
    }
}

// ENTER YOUR API KEY
let api_key = "";


//connect to API and display data on page
function getInfo() {
    //saved user search in local memory
    stockTicker = document.getElementById('stockTickerUser').value.trim().toLowerCase();
    localStorage.setItem('stockTicker', stockTicker); //Save info to local storage

    //connecting to API
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.onreadystatechange = function () {
        //if API connection is successful
        if (this.readyState == 4 && this.status == 200) {
            recordStr = this.responseText;
            record = JSON.parse(recordStr); // Create JS object

            //unhide stock stat table
            document.getElementById('stockTable').style.display = 'block';

            //get stock data from api and write in table
            document.getElementById("beta").innerHTML = record.defaultKeyStatistics.beta.fmt;
            document.getElementById("numShares").innerHTML = record.defaultKeyStatistics.sharesOutstanding.fmt;
            document.getElementById("compName").innerHTML = record.price.longName;
            document.getElementById("marCap").innerHTML = record.summaryDetail.marketCap.fmt;
            document.getElementById("stockPrice").innerHTML = record.financialData.currentPrice.raw;
            document.getElementById("pe").innerHTML = record.summaryDetail.forwardPE.fmt;
            document.getElementById("pMargin").innerHTML = record.financialData.profitMargins.fmt;
            document.getElementById("grossP").innerHTML = record.financialData.grossProfits.fmt;
            document.getElementById("debtE").innerHTML = record.financialData.debtToEquity.fmt;
            document.getElementById("cash").innerHTML = record.financialData.totalCash.fmt;
            document.getElementById("revenue").innerHTML = record.financialData.totalRevenue.fmt;
            document.getElementById("roe").innerHTML = record.financialData.returnOnEquity.fmt;
        }
        else {
        }
    }

    xhr.open("GET", "https://yh-finance.p.rapidapi.com/stock/v2/get-statistics?symbol=" + stockTicker + "&region=US");
    xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", api_key);

    xhr.send(data);
};


//connect to API and display data on page for stock ticker saved in local storage
function getInfoStored() {

    //get user stock ticker from input box
    stockTicker = document.getElementById('stockTickerUser').value.trim().toLowerCase();
    localStorage.setItem('stockTicker', stockTicker); //Save stock to local storage

    //connecting to API
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.onreadystatechange = function () {
        //if API connection is successful
        if (this.readyState == 4 && this.status == 200) {
            recordStr = this.responseText;
            record = JSON.parse(recordStr); // Create JS object

            //unhide stock stat table
            document.getElementById('stockTable').style.display = 'block';

            //get stock data from api and write in table
            document.getElementById("beta").innerHTML = record.defaultKeyStatistics.beta.fmt;
            document.getElementById("numShares").innerHTML = record.defaultKeyStatistics.sharesOutstanding.fmt;
            document.getElementById("compName").innerHTML = record.price.longName;
            document.getElementById("marCap").innerHTML = record.summaryDetail.marketCap.fmt;
            document.getElementById("stockPrice").innerHTML = record.financialData.currentPrice.raw;
            document.getElementById("pe").innerHTML = record.summaryDetail.forwardPE.fmt;
            document.getElementById("pMargin").innerHTML = record.financialData.profitMargins.fmt;
            document.getElementById("grossP").innerHTML = record.financialData.grossProfits.fmt;
            document.getElementById("debtE").innerHTML = record.financialData.debtToEquity.fmt;
            document.getElementById("cash").innerHTML = record.financialData.totalCash.fmt;
            document.getElementById("revenue").innerHTML = record.financialData.totalRevenue.fmt;
            document.getElementById("roe").innerHTML = record.financialData.returnOnEquity.fmt;
        }
        else {
        }
    }

    //ENTER API KEY
    let api_key = "";

    xhr.open("GET", "https://yh-finance.p.rapidapi.com/stock/v2/get-statistics?symbol=" + stockTickerStored + "&region=US");
    xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", api_key);

    xhr.send(data);
};
