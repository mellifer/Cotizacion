$(function(){
    function createCORSRequest(method,url){
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr){
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined"){
            xhr = new XDomainRequest();
            xhr.open(method,url);
        } else{
            xhr = null;
        }
        return xhr;
    }
    var req = createCORSRequest("GET","https://api.codetabs.com/v1/proxy/?quest=https://bna.com.ar");
    if (req){
        req.onload = function(data){
            //console.log(data);
            var full = data.target.response;
            //console.log($(full).find("#divisas"));
            //$("#target").html($(full).find("#divisas"));
            //var tabla=$('.table.cotizacion tbody tr td');
            var tabla=$(full).find("#divisas").html();
            $("#Fecha").html($(tabla).find('th:eq(0)').text());
            $("#Dolar_Compra").html($(tabla).find('tr:eq(1) td:eq(1)').text());
            $("#Dolar_Venta").html($(tabla).find('tr:eq(1) td:eq(2)').text());
            $("#Euro_Compra").html($(tabla).find('tr:eq(3) td:eq(1)').text());
            $("#Euro_Venta").html($(tabla).find('tr:eq(3) td:eq(2)').text());
            $("#Franco_Compra").html($(tabla).find('tr:eq(4) td:eq(1)').text());
            $("#Franco_Venta").html($(tabla).find('tr:eq(4) td:eq(2)').text());
            $("#Corona_Compra").html($(tabla).find('tr:eq(9) td:eq(1)').text());
            $("#Corona_Venta").html($(tabla).find('tr:eq(9) td:eq(2)').text());
        };
        req.send();
    }
})
