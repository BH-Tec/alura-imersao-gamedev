let imagemCenario
let imagemPersonagem
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador
let imagemGameOver

let pontuacao
let cenario
let personagem
let inimigo
let inimigoGrande
let inimigoVoador

let somDoJogo
let somDoPulo

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matrizInimigoGrande = []

const matrizInimigoVoador = []

const inimigos = []

function preload() {
  imagemCenario = loadImage('../assets/image/cenario/floresta.png')
  imagemPersonagem = loadImage('../assets/image/personagem/personagem.png')
  imagemGameOver = loadImage('../assets/image/game-over.png') 
  imagemInimigo = loadImage('../assets/image/inimigos/gotinha.png')
  imagemInimigoGrande = loadImage('../assets/image/inimigos/troll.png')
  imagemInimigoVoador = loadImage('../assets/image/inimigos/gotinha-voadora.png')
  // somDoJogo = loadSound('../assets/music/sounds_trilha_jogo.mp3')
  // somDoPulo = loadSound('../assets/music/sounds_somPulo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imagemCenario, 3)
  pontuacao = new Pontuacao()
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200)
  const inimigoGrande = new InimigoGrande (matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 10, 1500)
  const inimigoVoador = new InimigoVoador(matrizInimigo, imagemInimigoVoador, width - 52, 200, 52, 52, 200, 150, 10, 2000)

  inimigos.push(inimigo)
  inimigos.push(inimigoGrande)
  inimigos.push(inimigoVoador)

  frameRate(40)
  somDoJogo.loop()
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibe()
  cenario.move()

  pontuacao.exibe()
  pontuacao.adicionarPonto()

  personagem.exibe()
  personagem.aplicaGravidade()

  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 3)
      // noLoop()
    }
  })

  
}