import Player from "./classes/Player.js";

const canvas = document.querySelector('canvas')
const ctx=canvas.getContext("2d");

//canvas cria a tela de fundo do jogo
//.width=window.innerWidth serve para informar que o 
//canvas terá o comprimento da tela, o mesmo serve para o 
//height
canvas.width=window.innerWidth
canvas.height=window.innerHeight

//objeto player que está dentro da classe player
//recebendo os parâmetros de posição x e y onde o player será posicionado no canvas
const player=new Player(canvas.width, canvas.height)

//isso serve para alternar entre ativado e desativado 
//sem isso, quando você vai para direita ou esquerda
//o player começa a se mover e não para mais 
const keys={
    left:false,
    right:false,
}

const gameLoop=()=>{

    //ctx.clearRect serve para limpar o canvas
    //da posição inicial 0,0 até o tamanho e altura máxima do canvas
    ctx.clearRect(0,0,canvas.width, canvas.height)
    //renderiza a posição do player na tela
    player.draw(ctx)

    //se a tecla A e a posição do player no eixo X for maior q 0, ele move
    //isso é necessário para que o player não saia para fora da tela no eixo X
    //enquanto se move para a esquerda 
    if(keys.left && player.position.x > 0){

        //esse metodo .moveLeft() foi criado dentro da classe player
        player.moveLeft()

    }
    if(keys.right && player.position.x<=canvas.width-player.width){

        //esse metodo .moveRight() foi criado dentro da classe player
        player.moveRight()
    }

    //necessáiro pesquisar mais sobre esse requestAnimationFrame
    requestAnimationFrame(gameLoop)
}




//evento de pressionar a tecla
addEventListener("keydown", (event)=>{
const key=event.key.toLowerCase()
    if(key==='a'){
        //condição para movar para esquerda diminuindo a posição no eixo X
        keys.left=true
    }

    //condição para movar para esquerda aumentando a posição no eixo X
    if (key==='d'){
        keys.right=true
    }

});


//esse é o evento de soltar a tecla
addEventListener("keyup", (event)=>{
    const key=event.key.toLowerCase()
        if(key==='a'){
            //condição para parar de mover
            keys.left=false
        }
    
        //condição para parar de mover
        if (key==='d'){
            keys.right=false
        }
    
    });
    

gameLoop();
