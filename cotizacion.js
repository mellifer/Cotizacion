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
    var req = createCORSRequest("GET","https://cors-anywhere.herokuapp.com/https://bna.com.ar");
    if (req){
        req.onload = function(data){
            console.log(data);
            var full = data.target.response;
            $("#target").html($(full).find("#billetes"));
        };
        req.send();
    }
})
