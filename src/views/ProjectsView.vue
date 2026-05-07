<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Beauty Salon Booking System",
    description: "A full-stack application designed to automate appointment scheduling. Features a responsive frontend and a robust backend for managing client data and service availability.",
    techStack: ["Vue.js", "TypeScript", "Python", "Pinia", "Docker"],
    githubLink: "https://github.com/aliyah-du-toit/salon-booking"
  },
  {
    title: "Art Gallery Management Web",
    description: "A digital showcase for local artists. Includes an administrative dashboard for managing artwork listings, categories, and exhibition details.",
    techStack: ["Vue 3", "TypeScript", "Vite", "CSS3"],
    githubLink: "https://github.com/aliyah-du-toit/art-gallery"
  },
  {
    title: "NQF 6 Capstone Project",
    description: "A comprehensive system architecture project focused on data engineering and relational database design for complex workflows.",
    techStack: ["Java", "Python", "PostgreSQL", "Data Engineering"],
    githubLink: "https://github.com/aliyah-du-toit/capstone"
  }
];
</script>

<template>
  <div class="projects-container">
    <header class="projects-header">
      <h1>Technical Projects</h1>
      <p>A selection of full-stack and architecture projects I've built during my engineering studies and freelance work.</p>
    </header>

    <div class="projects-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          
          <div class="tech-tags">
            <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="card-actions">
          <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="btn secondary">GitHub</a>
          <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="btn primary">Live Demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.projects-header {
  margin-bottom: 4rem;
  text-align: center;
}

.projects-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 1.5rem;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card-content h3 {
  margin: 0 0 1rem 0;
  color: #333;
}

.card-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #f0fdf4;
  color: #166534;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  border: 1px solid #bbf7d0;
}

.card-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  flex: 1;
  text-align: center;
  padding: 0.6rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn.primary {
  background: #42b883;
  color: white;
}

.btn.secondary {
  background: #f1f5f9;
  color: #475569;
}

.btn:hover {
  opacity: 0.8;
}
</style>