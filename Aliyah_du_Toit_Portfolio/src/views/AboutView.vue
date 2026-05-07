<template>
  <div class="about-split-container">

    <section class="identity-card dev-side">
      <div class="photo-wrapper">
        <img src="@/assets/aliyah_du_toit_profile_photo-transformed.jpeg" alt="Aliyah du Toit - Software Engineer" class="profile-img" />
      </div>
      <div class="content">
        <h2>The Developer</h2>
        <div class="description">
          <p>
            My technical journey is rooted in a deep curiosity for how data moves and transforms. As a 2025 <strong>Software Engineering graduate (NQF 6)</strong>, I have specialized in <strong>Data Engineering</strong>, where I find immense satisfaction in architecting clean, efficient ETL pipelines and complex system infrastructures. I view coding as a puzzle; whether I am optimizing a PostgreSQL query or building a responsive frontend in <strong>Vue 3</strong>, my focus remains on code integrity and scalability.
          </p>
          <p>
            Beyond basic development, I have explored the cutting edge of AI, building <strong>RAG systems</strong> using Ollama and vector databases. My time at WeThinkCode_ and Project Codex taught me the value of <strong>Agile collaboration</strong> and the importance of being a lifelong learner. I am a developer who believes that the best solutions are not just functional, but also maintainable and architecturally sound.
          </p>
        </div>
        
        <div class="skills-chips">
          <span class="category-label">Languages & Frameworks:</span>
          <span>Python</span> <span>Java</span> <span>JavaScript</span> <span>TypeScript</span> 
          <span>Vue.js</span> <span>Angular</span> <span>Node.js</span> <span>SQL</span> 
          <span>HTML5</span> <span>CSS3/SCSS</span> <span>PHP</span>
        </div>
        <div class="skills-chips">
          <span class="category-label">Tools & Tech:</span>
          <span>Docker</span> <span>PostgreSQL</span> <span>MySQL</span> <span>Git</span> 
          <span>Vite</span> <span>Pinia</span> <span>REST APIs</span>
        </div>
      </div>
    </section>

    <section class="identity-card person-side">
      <div class="photo-wrapper">
        <img src="@/assets/photo_of_me.jpeg" alt="Aliyah du Toit with kitten" class="profile-img" />
      </div>
      <div class="content">
        <h2>The Person</h2>
        <div class="description">
          <p>
            While I spend a lot of my time in front of a terminal, my life is colored by a wide range of creative and personal pursuits. I am a <strong>violinist</strong>, a hobby that has taught me the discipline and precision that I carry into my engineering work. I am also a devoted primary caregiver for my mother, a role that has fostered a high level of empathy, organizational skill, and resilience in my daily life.
          </p>
          <p>
            I am a dedicated "cat mom" to my three companions—a Siamese and two Maine Coons—who keep me company while I work. I find joy in the tactile nature of <strong>baking and cooking</strong>, experimenting with flavors much like I experiment with new libraries. My love for <strong>Regency-era history</strong> and local Cape Town events keeps me curious about the world, and my recent travels, including a trip to Saudi Arabia, have given me a global perspective on community and culture.
          </p>
        </div>
        
        <div class="hobby-chips">
          <span class="category-label">Interests:</span>
          <span>Violinist</span> <span>Baker</span> <span>Traveler</span> <span>Cat Enthusiast</span> 
          <span>Regency History</span> <span>Novelist Reader</span> <span>Gaming</span> <span>Creative Writing</span> <span>Photography</span> <span>volunteering</span> <span>Hiking</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-split-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.identity-card {
  background: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
}

.identity-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
}

.description {
  text-align: left;
  margin-bottom: 2rem;
}

.description p {
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
}

.content h2 {
  font-size: 2.2rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.category-label {
  display: block;
  width: 100%;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #7c3aed;
  font-weight: 800;
  margin: 1rem 0 0.5rem 0;
  letter-spacing: 1px;
}

.skills-chips, .hobby-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skills-chips span, .hobby-chips span:not(.category-label) {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4a5568;
  transition: all 0.2s;
}

.skills-chips span:hover, .hobby-chips span:not(.category-label):hover {
  border-color: #d8b4fe;
  color: #7c3aed;
  transform: translateY(-2px);
}

.photo-wrapper .profile-img {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%; 
  border: 6px solid #d8b4fe; 
  margin-bottom: 2rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.dev-side .profile-img {
  object-position: 40% 30%; 
}

.person-side .profile-img {
  object-position: 5% 0%; 
}

@media (max-width: 900px) {
  .about-split-container {
    grid-template-columns: 1fr;
  }
}
</style>