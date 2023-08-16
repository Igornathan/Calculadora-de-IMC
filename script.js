/* Mais+ Menos- Multiplicar* Dividir/ Resto% Quadrado** */
//FAÇO A FORMATAÇÃO DO VALOR DIGITADO NO INPUT DA ALTURA 
const input = document.getElementById("Altura");

input.addEventListener("keyup", altura);

function altura(e) {

    var v = e.target.value.replace(/\D/g, "");

    v = (v / 100).toFixed(2);

    v = v.replace(",", ".");

    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3.");

    v = v.replace(/(\d)(\d{3}),/g, "$1.$2.");

    e.target.value = v;

}

function Enviar(event) {
    event.preventDefault();
    //Declarando variaveis e pegando o valor digitado no input
    var nome = document.getElementById("Nome").value;
    var peso = document.getElementById("Peso").value;
    var altura = document.getElementById("Altura").value;

    if (nome == "" || peso == "" || altura == "") { //ESTOU DIZENDO QUE CASO QUALQUER UM DESSES ESTEJA VAZIO, IRÁ INTERROMPER O CÓDIGO! 
        window.alert('POR FAVOR, PREENCHER OS DADOS CORRETAMENTE!!! ')
    }
    var calculo = peso / (altura * altura);
    imc = calculo.toFixed(2).replace(',', '.')
    document.getElementById("Titulo").innerHTML = `O seu IMC é ${imc}`; //ESTOU ALTERANDO O NOME DO TITULO PARA O VALOR DO CALCULO IMC
   
    document.getElementById("Result").style.fontSize = "50px";
    //EU VERIFICO ABAIXO OS PARAMETROS E GUIO-OS PARA A INFORMAÇÃO DE ACORDO COM O IMC CALCULADO
    if (imc < 18.5) {
        document.getElementById("Result").innerHTML = "Você está abaixo do peso";
        document.getElementById("Imagem").innerHTML = '<img src="https://img.freepik.com/fotos-gratis/nerd-esportivo-engracado-mostra-biceps-ou-musculos-usa-luvas-e-shorts-esportivos-tem-expressao-severa-e-seria-quer-ter-um-corpo-forte-nao-quer-ser-fraco-posa-contra-a-parede-amarela_273609-39560.jpg?w=740&t=st=1682478418~exp=1682479018~hmac=d2ea4535ef1a5458a72f405a6ab155c12f9b1c16e200d2cb6e63433a7a9bfee0">';
    }
    else if (imc <= 24.9) {
        document.getElementById("Result").innerHTML = "Você está no peso correto!";
        document.getElementById("Imagem").innerHTML = '<img src="https://img.freepik.com/fotos-gratis/close-up-em-um-jovem-barbudo-de-oculos-isolado_273609-34855.jpg?w=740&t=st=1682478263~exp=1682478863~hmac=41ba09a21973b6995a14018ba8b690aea1515560b6dd17766d53f03078ad5004">';
    }
    else if (imc <= 29.9) {
        document.getElementById("Result").innerHTML = "Você está SobrePeso";
        document.getElementById("Imagem").innerHTML = '<img src="https://img.freepik.com/fotos-gratis/homem-ruivo-obeso-com-excesso-de-peso-jogando-a-cabeca-para-tras-colocando-uma-grande-pilha-de-batatas-fritas-na-boca-desfrutando-de-comida-nao-saudavel-vestindo-camiseta-de-tamanho-pequeno-com-a-barriga-saindo_273609-452.jpg?w=740&t=st=1682478172~exp=1682478772~hmac=ae6336641bfdd3e66ac161c9c5e890ad55a2f7d5a06fc1585248dec01153fd2c">';

    } else if (imc <= 34.9) {
        document.getElementById("Result").innerHTML = "Você está Obeso Grau I";
        document.getElementById("Imagem").innerHTML = '<img src="https://img.freepik.com/fotos-gratis/foto-de-homem-serio-e-zangado-com-barba-espessa-fecha-os-punhos-e-olha-com-expressao-indignada-promete-vinganca-mostra-barrigao-robusto-vestido-com-camiseta-amarela-expressa-emocoes-negativas_273609-40136.jpg?w=740&t=st=1682478531~exp=1682479131~hmac=fc09832ec8390b3f5a7f976899ef7d0aa3c99f6697d64e6dc5b615f04ed74bfe">';
    }
    else if (imc <= 39.9) {
        document.getElementById("Result").innerHTML = "Você está Obeso Grau II";
        document.getElementById("Imagem").innerHTML = '<img src="https://img.freepik.com/fotos-gratis/gordo-barbudo-serio-tem-barba-espessa-corpo-tatuado-e-barriga-grande-parece-debaixo-das-sobrancelhas-mantem-as-maos-na-cintura-isolada-na-parede-amarela-obesidade-lipoaspiracao-conceito-de-perda-de-peso_273609-39942.jpg?w=740&t=st=1682478682~exp=1682479282~hmac=cb538f4afb15ae37c6e25194bfec8d3b96d1ce0f315f65748e77add013eb80c9">';
    }
    else {
        document.getElementById("Result").innerHTML = "Você está Obeso Grau III ou Mórbido";
        document.getElementById("Imagem").innerHTML = '<img src="https://preview.redd.it/fat-man-in-an-orange-t-shirt-sitting-on-a-couch-playing-v0-z7qm89jz1xy91.png?width=640&crop=smart&auto=webp&s=86ee64e082df75eff61a9a135c35deafc2477085">';
    }

}

