<template>
  <div class="education-container">
    <header class="page-header">
      <h1>My Academic Journey</h1>
      <p class="subtitle">Building a foundation in Data Engineering and Full-Stack Development</p>
    </header>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="card-header">
            <span class="nqf-badge">NQF Level 6</span>
            <h3>Software Engineering</h3>
            <p class="institution">WeThinkCode_ • 2024 - 2025</p>
          </div>
          <div class="card-body">
            <p class="specialization">Specialization: <strong>Data Engineering</strong></p>
            <ul>
              <li>Architected end-to-end <strong>ETL pipelines</strong> and SQL databases.</li>
              <li>Developed advanced system architecture using Python and Java.</li>
              <li>Mastered collaborative <strong>Agile</strong> workflows in a peer-to-peer environment.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="card-header">
            <span class="nqf-badge">NQF Level 5</span>
            <h3>Software Development</h3>
            <p class="institution">Project Codex • 2023 - 2024</p>
          </div>
          <div class="card-body">
            <ul>
              <li>Intensive full-stack focus on <strong>TypeScript, Angular, and Vue.js</strong>.</li>
              <li>Built relational database systems using <strong>PostgreSQL</strong>.</li>
              <li>Focused on systematic problem-solving and rapid prototyping.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="card-header">
            <h3>Web Development Certification</h3>
            <p class="institution">Life Choices Academy • 2022 - 2023</p>
          </div>
          <div class="card-body">
            <ul>
              <li>6-month immersive course on <strong>Node.js</strong> and Vue.js.</li>
              <li>Foundations of frontend design and MySQL database management.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 5rem;
}

.page-header h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #7c3aed; 
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.timeline {
  position: relative;
  border-left: 3px solid #d8b4fe; 
  margin-left: 20px;
  padding-left: 40px;
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
}

.timeline-dot {
  position: absolute;
  left: -51.5px;
  top: 10px;
  width: 20px;
  height: 20px;
  background: #7c3aed;
  border: 4px solid #fdfaff;
  border-radius: 50%;
}

.timeline-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.1);
  transition: transform 0.3s ease;
}

.timeline-card:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.8);
}

.nqf-badge {
  background: #7c3aed;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 800;
  display: inline-block;
  margin-bottom: 1rem;
}

.institution {
  color: #6b7280;
  font-weight: 600;
  margin: 0.5rem 0;
}

.card-body ul {
  margin-top: 1rem;
  padding-left: 1.2rem;
  color: #4b5563;
}

.card-body li {
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .timeline {
    margin-left: 0;
    padding-left: 25px;
  }
  .timeline-dot {
    left: -34px;
  }
}
</style>