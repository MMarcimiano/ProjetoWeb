

fetch("php/listar.php", { 
    method: "GET" 
}).then(async function (resposta) {
    var objeto = await resposta.json();
    listarProdutos(objeto);
});


function addCarrinho(id){

    document.getElementById("id_produto").value = id;

    var form = document.getElementById("formCarrinho");
    var dados = new FormData(form);


    fetch("php/addcarrinho.php", {
        method: "POST",
        body: dados
    });
}

function listarProdutos(produtos){
   
    for(var i = 0; i < produtos.length; i++)
    {
        var conteudo = '';

        conteudo += '<div class="card">'
        conteudo += '<div>' + produtos[i].nome + '</div>'
        conteudo += '<div>' + produtos[i].preco + '</div>'
        conteudo += '<button onclick="addCarrinho(+ produto[i].id_produto)"> ADD carrinho </button>'
        conteudo += '</div>'

        document.getElementById("produtos").innerHTML += conteudo;
    }
}

