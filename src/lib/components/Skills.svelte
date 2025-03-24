<script lang="ts">
  let { skills } = $props<{
    skills: Array<{
      name: string;
      level: number;
      color: string;
    }>;
  }>();
</script>

<section class="skills py-6 bg-dark position-relative">
  <div class="container">
    <h2 class="text-center text-white mb-5">Expertise Technique</h2>
    <div class="row g-4">
      {#each skills as skill}
        <div class="col-md-6">
          <div class="skill-card" style="--skill-color: {skill.color}">
            <div class="skill-header">
              <h3 class="skill-name">{skill.name}</h3>
              <span class="skill-level">{skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: {skill.level}%"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="tech-grid"></div>
</section> 