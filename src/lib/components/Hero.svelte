<script lang="ts">
  let { name, title, description } = $props<{
    name: string;
    title: string;
    description: string;
  }>();

  let gameStarted = $state(false);
  let gameFrame: HTMLIFrameElement;
  let isLoading = $state(false);

  function startGame() {
    isLoading = true;
    gameStarted = true;
    setTimeout(() => {
      if (gameFrame) {
        gameFrame.contentWindow?.postMessage({ type: 'start-game' }, '*');
      }
    }, 500);
  }
</script>

<section class="hero min-vh-100 d-flex align-items-center">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 text-center mb-4">
        <h1 class="display-4 fw-bold text-white mb-3">Martial Floquet</h1>
        <p class="lead text-light mb-4">Développeur d'applications web et de logiciels</p>
        <p class="text-info mb-5">Passionné par la programmation en tout genre et les jeux vidéo</p>
        <div class="d-flex justify-content-center gap-3 mb-5">
          <a href="#contact" class="btn btn-primary btn-lg">Me contacter</a>
          <a href="#projets" class="btn btn-outline-light btn-lg">Voir mes projets</a>
        </div>
      </div>
      
      <div class="col-12">
        <div class="game-wrapper">
          {#if !gameStarted}
            <div class="game-placeholder d-flex flex-column align-items-center justify-content-center">
              <button class="btn btn-primary btn-lg game-start-btn mb-3" on:click={startGame}>
                <i class="fas fa-play me-2"></i>
                Démarrer le jeu
              </button>
              <p class="text-light">Cliquez pour commencer</p>
            </div>
          {:else}
            <div class="game-container">
              {#if isLoading}
                <div class="loading-overlay">
                  <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Chargement...</span>
                  </div>
                  <p class="text-light mt-3">Chargement du jeu...</p>
                </div>
              {/if}
              <iframe
                bind:this={gameFrame}
                src="/Martial59110.github.io/game/index.html"
                title="Mon jeu"
                class="game-frame"
                allow="autoplay"
              ></iframe>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    position: relative;
    overflow: hidden;
  }

  .game-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 16/9;
  }

  @media (max-width: 768px) {
    .game-wrapper {
      aspect-ratio: 4/3;
      width: 100%;
      height: auto;
    }
  }

  .game-container {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }

  .game-frame {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .game-placeholder {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .game-start-btn {
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    transition: transform 0.2s;
  }

  .game-start-btn:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #357abd 0%, #2868a0 100%);
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
</style> 