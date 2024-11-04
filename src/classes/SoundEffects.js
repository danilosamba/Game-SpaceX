// Classe SoundEffects para gerenciar efeitos sonoros no jogo
class SoundEffects {
    constructor() {
        // Lista de sons de disparo para evitar sobreposição de sons rápidos
        this.shootSounds = [
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
        ];

        // Lista de sons de impacto para evitar sobreposição
        this.hitSounds = [
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
        ];

        // Som de explosão, tocado uma vez por explosão
        this.explosionSound = new Audio("src/assets/audios/explosion.mp3");

        // Som de avanço de nível
        this.nextLevelSound = new Audio("src/assets/audios/next_level.mp3");

        // Índices para alternar entre os sons de disparo e impacto
        this.currentShootSound = 0;
        this.currentHitSound = 0;

        // Ajusta o volume dos sons
        this.adjustVolumes();
    }

    // Função para tocar o som de disparo
    playShootSound() {
        // Reseta o tempo do som de disparo atual para zero para evitar atraso
        this.shootSounds[this.currentShootSound].currentTime = 0;
        this.shootSounds[this.currentShootSound].play();

        // Alterna para o próximo som de disparo na lista
        this.currentShootSound =
            (this.currentShootSound + 1) % this.shootSounds.length;
    }

    // Função para tocar o som de impacto
    playHitSound() {
        // Reseta o tempo do som de impacto atual
        this.hitSounds[this.currentHitSound].currentTime = 0;
        this.hitSounds[this.currentHitSound].play();

        // Alterna para o próximo som de impacto na lista
        this.currentHitSound = (this.currentHitSound + 1) % this.hitSounds.length;
    }

    // Função para tocar o som de explosão
    playExplosionSound() {
        this.explosionSound.play();
    }

    // Função para tocar o som de avanço de nível
    playNextLevelSound() {
        this.nextLevelSound.play();
    }

    // Ajusta o volume de cada tipo de som para balancear o áudio
    adjustVolumes() {
        // Reduz o volume dos sons de impacto para 20%
        this.hitSounds.forEach((sound) => (sound.volume = 0.2));
        
        // Define o volume dos sons de disparo para 50%
        this.shootSounds.forEach((sound) => (sound.volume = 0.5));

        // Define o volume do som de explosão para 20%
        this.explosionSound.volume = 0.2;

        // Define o volume do som de avanço de nível para 40%
        this.nextLevelSound.volume = 0.4;
    }
}



;
// Obtém o elemento de áudio de fundo do jogo
const audioPlayer = document.getElementById("player");
// Controla o volume
audioPlayer.volume = 0.5;
// Obtém o botão de "Começar" na tela inicial
const playButton = document.getElementById("playButton");

// Adiciona um evento de clique para iniciar o áudio de fundo quando o botão é clicado
playButton.addEventListener("click", () => {
  // Tenta iniciar a reprodução do áudio
  audioPlayer.play().then(() => {
    // Esconde o botão de "Começar" após iniciar o áudio
    playButton.style.display = "none";
  }).catch(error => {
    console.log("Erro ao tentar reproduzir o áudio:", error); // Exibe um erro se a reprodução for bloqueada
  });
});


export default SoundEffects;

