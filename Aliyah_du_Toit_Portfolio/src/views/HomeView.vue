<script setup lang="ts">

</script>

<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <h1 class="dev-name">Aliyah du Toit</h1>
        <p class="dev-headline">Software Engineer | NQF 6 | Cape Town</p>
        
        <div class="welcome-message">
          <p>Welcome to my technical universe.</p>
        </div>

        <div class="cta-container">
          <router-link to="/projects" class="btn primary-cta">Explore My Technical Work</router-link>
        </div>
      </div>
    </section>

    <section class="skills-snapshot">
      <div class="container">
        <h2>Technical Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <span class="icon">🚀</span>
            <h3>Frameworks & Languages</h3>
            <div class="skill-tags">
              <span class="tag">Vue 3</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Python</span>
              <span class="tag">Java</span>
            </div>
          </div>
          
          <div class="skill-category">
            <span class="icon">🛠️</span>
            <h3>Core Engineering Tools</h3>
            <div class="skill-tags">
              <span class="tag">Docker</span>
              <span class="tag">Vite</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

.home-container {
  font-family: 'Inter', sans-serif;
}

.hero-section {
  position: relative;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: start; 
  padding: 0 10%;
  color: white;
  
  background-image: url('@/assets/home_page.jpg'); 
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 22, 0.65); 
}

.hero-content {
  z-index: 2;
  max-width: 700px;
}

.dev-name {
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -1.5px;
}

.dev-headline {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0 2rem 0;
}

.welcome-message {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
}

.welcome-message p {
  margin: 0;
}

.cta-container {
  margin-top: 1rem;
}

.primary-cta {
  background-color: #42b883; 
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(66, 184, 131, 0.3);
}

.primary-cta:hover {
  background-color: #3aa673;
  transform: translateY(-2px);
}

.skills-snapshot {
  background: white;
  padding: 5rem 10%;
  color: #2c3e50;
}

.container h2 {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.skill-category {
  background: #f8fafc;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;
  text-align: center;
}

.skill-category:hover {
  transform: translateY(-3px);
}

.skill-category .icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.skill-category h3 {
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.tag {
  background: white;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1.1rem;
  border-radius: 20px;
}
</style>