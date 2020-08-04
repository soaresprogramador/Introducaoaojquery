function consultaCep(){
    $(".barraProgresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
            $("#cepSet").html("CEP " + cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf); 
            $(".barraProgresso").hide();  
            $(".cep").show();
        }        
    })
}

$(function(){
    $(".barraProgresso").hide();
    $(".cep").hide();
})
