<script lang="ts">
  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: {
      name: string;
      logo: string;
    }[];
    type?: 'mobile' | 'web' | 'game';
    playStoreUrl?: string;
    codeUrl?: string;
    demoUrl?: string;
  };

  type Category = {
    title: string;
    projects: Project[];
  };

  const categories: Record<string, Category> = {
    mobile: {
      title: "Applications Mobiles",
      projects: [
        {
          title: "Musculog",
          description: "Application de suivi d'entrainement.",
          image: "/projects/musculog.png",
          technologies: [
            { 
              name: "Flutter",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
            },
            {
              name: "Hive",
              logo: "https://raw.githubusercontent.com/hivedb/hive/master/.github/logo_transparent.svg"
            },
            {
              name: "Dart",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
            }
          ],
          type: "mobile",
          playStoreUrl: "https://play.google.com/store/apps/details?id=com.musculog.app&pcampaignid=web_share"
        }
      ]
    },
    web: {
      title: "Applications Web et Logiciels",
      projects: [
        {
          title: "La bonne auberge",
          description: "Application de restaurant cowboy avec une architecture MVC.",
          image: "/projects/auberge.png",
          technologies: [
            {
              name: "JavaScript",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
              name: ".NET",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
            },
            {
              name: "Bootstrap",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            },
            {
              name: "SQLite",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
            }
          ],
          type: "web",
          codeUrl: "https://github.com/Martial59110/La-bonne-auberge",
          demoUrl: "#"
        }
      ]
    },
    games: {
      title: "Jeux Vidéo",
      projects: [
        {
          title: "Unity 2D Platformer",
          description: "Jeu de plateforme 2D développé avec Unity et C#.",
          image: "/projects/unity-game.png",
          technologies: [
            {
              name: "Unity",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
            },
            {
              name: "C#",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            },
            {
              name: "Blender",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
            }
          ],
          type: "game",
          codeUrl: "#",
          demoUrl: "#"
        }
      ]
    }
  };
</script>

<section class="projects py-6 bg-darker">
  <div class="container">
    <h2 class="text-center text-white mb-5">Projets Innovants</h2>
    
    {#each Object.entries(categories) as [key, category]}
      <div class="category-section mb-5">
        <h3 class="category-title">{category.title}</h3>
        <div class="projects-grid">
          {#each category.projects as project}
            <div class="project-card">
              <div class="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div class="project-content">
                <h4 class="project-title">{project.title}</h4>
                <p class="project-description">{project.description}</p>
                <div class="tech-stack">
                  {#each project.technologies as tech}
                    <div class="tech-item">
                      <img src={tech.logo} alt={tech.name} class="tech-logo" />
                      <span class="tech-name">{tech.name}</span>
                    </div>
                  {/each}
                </div>
                <div class="project-links">
                  {#if project.type === 'mobile'}
                    <a href={project.playStoreUrl} class="project-link" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-google-play"></i> Google Play
                    </a>
                  {:else}
                    <a href={project.codeUrl} class="project-link" target="_blank" rel="noopener noreferrer">
                      <i class="fas fa-code"></i> Code
                    </a>
                    <a href={project.demoUrl} class="project-link" target="_blank" rel="noopener noreferrer">
                      <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .category-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    border-left: 4px solid var(--primary);
    color: var(--primary);
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    max-width: 350px;
    margin: 0 auto;
    width: 100%;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .project-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16/9;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.05);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;
    justify-content: center;
  }

  .tech-tag {
    background: var(--primary);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .project-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .project-link:hover {
    color: var(--secondary);
  }

  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }

  .tech-stack {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .tech-item {
    position: relative;
    cursor: pointer;
  }

  .tech-logo {
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease;
  }

  .tech-name {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    background: var(--primary);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  .tech-item:hover .tech-logo {
    transform: translateY(-3px);
  }

  .tech-item:hover .tech-name {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
</style> 