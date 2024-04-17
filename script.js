//<!-- logo abaixo o codigo javascript-->
    
//Primeira função de imprimir o numero na tela
    function insert(num){

        var numero = document.getElementById("resultado").innerHTML; //entrada de dados
        document.getElementById("resultado").innerHTML = numero + num;  //saída de dados
    }

    //segunda função para limpar tela
    function limpar(){
        var limpa = document.getElementById('resultado');// declaração de variavel 
        limpa.innerHTML = ""; // saída dados

    }
  
    //terceira função para apagar um elemento em telas
    function apagar(){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
        //neste comando é apresentado o a função substring()
    }
   
    function potentiation(){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById("resultado").innerHTML = numero*numero

    }
   
    // abragendo funções de soma,subtração e divisão
    function calcular (){

        let resultado = document.getElementById("resultado").innerHTML;

        if (resultado){
            document.getElementById('resultado').innerHTML = eval(resultado); //o eval realizada operaçoes matematicas de operadores dentro de string 
        }
        else {
            let alinhamentoCaixa = document.getElementById("resultado");
            alinhamentoCaixa.style.textAlign = "center";
            document.getElementById('resultado').innerHTML = 'INDEFINIDO';
        }
    }
    
    function raiz(){
        let n = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = Math.sqrt(n);
    }
    
    
