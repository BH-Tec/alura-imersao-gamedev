let imagemCenario
let imagemPersonagem
let cenario
let somDoJogo
let personagem

function preload() {
  imagemCenario = loadImage('../assets/image/cenario/floresta.png')
  imagemPersonagem = loadImage('../assets/image/personagem/personagem.png')
  somDoJogo = loadSound('../assets/music/sounds_trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imagemCenario, 3)
  personagem = new Personagem(imagemPersonagem)
  // somDoJogo.loop();
  frameRate(40)
}
  
function draw() {
  cenario.exibe()
  cenario.move()

  personagem.exibe()
}