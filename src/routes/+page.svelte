<script lang="ts">
  import '../lib/styles/global.css';
  import '../lib/styles/components.css';
  import Hero from '$lib/components/Hero.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';

  let name = "Martial Floquet";
  let title = "Développeur d'applications web et de logiciels";
  let description = "Passionné par la programmation en tout genre et les jeux vidéo";
  
  let skills = [
    { name: 'TypeScript', level: 90, color: '#007ACC' },
    { name: 'React/Svelte', level: 85, color: '#61DAFB' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'DevOps', level: 75, color: '#FF6B6B' },
    { name: 'Cloud Architecture', level: 85, color: '#4285F4' }
  ];
</script>

<Hero {name} {title} {description} />
<Skills {skills} />
<Projects />
<Contact />

<style>
  /* Variables */
  :root {
    --primary: #4A90E2;
    --secondary: #50E3C2;
    --dark: #1A1A1A;
    --darker: #141414;
  }

  /* Sections générales */
  .py-6 { padding-top: 6rem; padding-bottom: 6rem; }
  .bg-darker { background-color: var(--darker); }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    position: relative;
  }

  /* Effet de particules */
  .glowing-dots {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: moveBackground 20s linear infinite;
  }

  /* Effet Glitch */
  .glitch-wrapper {
    position: relative;
    margin-bottom: 2rem;
  }

  .glitch {
    position: relative;
    color: white;
    text-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  .glitch::after {
    left: -2px;
    text-shadow: -2px 0 #00fff9;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }

  /* Texte avec dégradé */
  .text-gradient {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Bouton avec effet de survol */
  .btn-gradient {
    position: relative;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border: none;
    color: white;
    overflow: hidden;
    z-index: 1;
  }

  .btn-gradient-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--secondary), var(--primary));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .btn-gradient:hover .btn-gradient-hover {
    opacity: 1;
  }

  /* Carte de compétence */
  .skill-card {
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid rgba(255,255,255,0.1);
    transition: transform 0.3s ease;
  }

  .skill-card:hover {
    transform: translateY(-5px);
    border-color: var(--skill-color);
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: white;
  }

  .skill-bar {
    height: 6px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background: var(--skill-color);
    transition: width 1s ease;
  }

  /* Carte de projet */
  .project-card {
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-10px);
  }

  .project-image {
    position: relative;
    overflow: hidden;
  }

  .project-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.1);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .project-content {
    padding: 1.5rem;
    color: white;
  }

  .tech-tag {
    background: rgba(74, 144, 226, 0.3);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    margin: 0.25rem;
    font-size: 0.875rem;
  }

  /* Formulaire de contact */
  .contact-card {
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .form-control {
    background: var(--darker);
    border: 1px solid rgba(255,255,255,0.1);
    color: white;
  }

  .form-control:focus {
    background: var(--darker);
    border-color: var(--primary);
    color: white;
    box-shadow: 0 0 0 0.25rem rgba(74, 144, 226, 0.25);
  }

  .form-floating label {
    color: rgba(255,255,255,0.5);
  }

  /* Animations */
  @keyframes moveBackground {
    from { background-position: 0 0; }
    to { background-position: 100% 100%; }
  }

  @keyframes glitch-anim {
    0% { clip: rect(44px, 450px, 56px, 0); }
    20% { clip: rect(4px, 450px, 96px, 0); }
    40% { clip: rect(64px, 450px, 36px, 0); }
    60% { clip: rect(24px, 450px, 76px, 0); }
    80% { clip: rect(84px, 450px, 16px, 0); }
    100% { clip: rect(14px, 450px, 86px, 0); }
  }

  @keyframes glitch-anim2 {
    0% { clip: rect(24px, 450px, 76px, 0); }
    20% { clip: rect(84px, 450px, 16px, 0); }
    40% { clip: rect(14px, 450px, 86px, 0); }
    60% { clip: rect(44px, 450px, 56px, 0); }
    80% { clip: rect(4px, 450px, 96px, 0); }
    100% { clip: rect(64px, 450px, 36px, 0); }
  }
</style>
