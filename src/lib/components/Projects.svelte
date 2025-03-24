<script lang="ts">
  let { projects = Array(3).fill({
    title: "Projet",
    description: "Une application web innovante utilisant les dernières technologies.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Node.js", "MongoDB"]
  }) } = $props<{
    projects?: Array<{
      title: string;
      description: string;
      image: string;
      technologies: string[];
    }>;
  }>();
</script>

<section class="projects py-6 bg-darker">
  <div class="container">
    <h2 class="text-center text-white mb-5">Projets Innovants</h2>
    <div class="row g-4">
      {#each projects as project, i}
        <div class="col-lg-4">
          <div class="project-card">
            <div class="project-image">
              <img src={project.image} alt="Projet {i + 1}">
              <div class="project-overlay">
                <div class="project-tech">
                  {#each project.technologies as tech}
                    <span class="tech-tag">{tech}</span>
                  {/each}
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{project.title} {i + 1}</h3>
              <p class="project-description">{project.description}</p>
              <div class="project-links">
                <a href="#" class="project-link">
                  <i class="fas fa-code"></i> Code
                </a>
                <a href="#" class="project-link">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 