<!-- Import du style global -->
<script lang="ts">
  import '../app.css';
  
  let isMenuOpen = $state(false);
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">Portfolio</a>
    <button class="navbar-toggler" type="button" on:click={toggleMenu} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" class:show={isMenuOpen} id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#about">À propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Contenu principal -->
<main>
  <slot />
</main>

<style>
  main {
    padding-top: 56px; /* Hauteur de la navbar */
  }
  
  .navbar {
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
  
  .nav-link {
    position: relative;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
</style> 