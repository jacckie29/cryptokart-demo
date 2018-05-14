<!DOCTYPE html>
<html>
    <head>
        <title>BackEnd</title>
        
    </head>
    <body onload="loadSocket();">
        <div>
            <p id="connect"></p>
            <div>
                <h3>Update the price for Frontend</h3>
            </div>

            <input type="text" id="price" />
            <input name="sendprice" type="submit"  id="sendprice" value="Update Price" onclick="updatePrice(document.getElementById('price').value)" />
        </div>
    </body>
    <script src="js/client.js"></script>
</html>
