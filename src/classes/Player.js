//construtor do player

class Player{


    constructor(canvasWidth, canvasHeight){
        this.width=100;
        this.height=100;
        this.velocity=5
        this.position={

            //aqui estamos dando a posição inicial do nosso player, ele deve estar no meio 
            //do canvas na linha X, por isso width/2, porém o ponto ZERO do player e o canto superior esquerdo
            //então ele se posiciona um pouco para a direita, para corrigir, diminuimos metade do tamanho
            //do player usando -player.width/2
            x:canvasWidth / 2 - this.width /2,
            y:canvasHeight- this.height-30,

        };
    }

    moveLeft(){
        //muda a posição do player no canvas
        //usando a variável velocity para ser mais fácil de alterar
        //a velocidade do player se for necessário
        this.position.x-=this.velocity
    }

    moveRight(){
        //muda a posição do player no canvas
        this.position.x+=this.velocity
    }


draw(ctx){
    //const CTX para desenhar no canvas
    //fillStyle para estilo na cor vermelha
    ctx.fillStyle="red";



//o fillRect() serve para preencher um espaço dentro do canva
//(posição no eixo x, eixo y,(indicando a posição) quantidade de px do eixo x
//e quantidade de px do eixo y)
//forma um quadrado na cor do style indicado ali em cima
//tudo está dentro do player na classes Player, mudando aqui, a posição do 
//objeto será auterada automaticamente 
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

}

}


//Esse export é necessário para poder usar a classe em outro 
//arquivo JS
export default Player