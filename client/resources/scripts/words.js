function getQuotes(){
    const allJokesApiUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

    fetch(allJokesApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<h2 text-center>\""+ json + "\"<h2>";
        document.getElementById("quoteActual").innerHTML = html;
        /*let html = "<table class=\"table-bordered table-hover\">";
        html += "<tr><th>Quote</th><th>Spoken By</th><tr>";
        json.forEach(quote => {
            html+="<tr><td>" +quote+"</td><td>Ron Swanson</td></tr>";
        });
        html += "</table>";
        document.getElementById("quoteTable").innerHTML = html;*/
    }).catch(function(error){
        console.log(error);
    })
}