function preload() {

    imagemCenario = loadImage('../assets/image/cenario/floresta.png')    
    imagemTelaInicial = loadImage('../assets/image/telaInicial.png');
    imagemPersonagem = loadImage('../assets/image/personagem/personagem.png')
    imagemGameOver = loadImage('../assets/image/game-over.png') 
    imagemInimigo = loadImage('../assets/image/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('../assets/image/inimigos/troll.png')
    imagemInimigoVoador = loadImage('../assets/image/inimigos/gotinha-voadora.png')
    imagemVida = loadImage('../assets/image/coracao.png')
  
    fonteTelaInicial = loadFont('../assets/fonts/fonteTelaInicial.otf');

    fita = loadJSON('../fita/fita.json')
    
    somDoJogo = loadSound('../assets/music/sounds_trilha_jogo.mp3')
    somDoPulo = loadSound('../assets/music/sounds_somPulo.mp3')
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    telaInicial = new TelaInicial()
    jogo = new Jogo()
    cenas = {
      telaInicial,
      jogo
    }
    jogo.setup()
    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)
  
    frameRate(40)
    somDoJogo.loop();
  }
  
  function keyPressed() {
    jogo.keyPressed(key)
  }
  
  function draw() {
    // if(cenaAtual === 'jogo') {
    //   jogo.draw()
    // }
    cenas[cenaAtual].draw()
  }