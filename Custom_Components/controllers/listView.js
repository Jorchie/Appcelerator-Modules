/*function ObtenerDatos(cantidad){
	var url="https://randomuser.me/api/?results=" + cantidad;
	var xhr = Ti.Network.createHTTPClient({
    onload: function(e) { 
        Ti.API.info(this.responseText); 
    },
    onerror: function(e) { 
        Ti.API.info(e.error); 
    },
    timeout:5000
});
xhr.open("GET", url);
xhr.send();
}


ObtenerDatos(5);
*/
