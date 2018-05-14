var websocket;
function loadSocket()
{
    websocket = new WebSocket('ws:websocket.com:8080');

    websocket.onopen = function(e) {
        document.getElementById("connect").innerHTML = "You are connected to server";
    };


    websocket.onmessage = function(e) {
        document.getElementById("newprice").value = e.data;
    };

    websocket.onerror = function(e) {
        document.getElementById("connect").innerHTML = "Error : "+e.data;
        document.getElementById("newprice").value = "";
    };
}

function updatePrice(latestPrice) {
    websocket.send(latestPrice);    
    document.getElementById("price").value = "";
}
