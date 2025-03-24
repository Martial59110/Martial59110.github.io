// Configuration pour le démarrage du jeu
let audioContext = null;

window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'start-game') {
    // Créer le contexte audio après l'interaction utilisateur
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioContext.resume();
    }
    
    // Démarrer le jeu
    if (window.gameInstance) {
      window.gameInstance.resume();
    } else {
      // Si l'instance n'est pas encore créée, attendre un peu
      setTimeout(() => {
        if (window.gameInstance) {
          window.gameInstance.resume();
        }
      }, 100);
    }
  }
}); 