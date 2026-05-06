<template>
  <div class="about-split-container">




    <!-- Aliyah the Developer -->
    <section class="identity-card dev-side">
      <div class="photo-wrapper">
        <img src="@/assets/aliyah_du_toit_profile_photo-transformed.jpeg" alt="Aliyah du Toit - Software Engineer" class="profile-img" />
      </div>
      <div class="content">
        <h2>The Developer</h2>
        <p>I am a Software Engineering graduate with a focus on <strong>Data Engineering</strong> and <strong>ETL pipelines</strong>.</p>
        <p>I specialize in building scalable systems with Vue, TypeScript, and Python, ensuring code integrity and functional excellence.</p>
        <div class="skills-chips">
          <span>Python</span> <span>Java</span> <span>SQL</span> <span>Docker</span>
        </div>
      </div>
    </section>




    <!-- Aliyah the Person -->
    <section class="identity-card person-side">
      <div class="photo-wrapper">
        <img src="@/assets/photo_of_me.jpeg" alt="Aliyah du Toit with kitten" class="profile-img" />
      </div>
      <div class="content">
        <h2>The Person</h2>
        <p>Beyond the IDE, I am an empathetic individual driven by my family and a love for creativity.</p>
        <p>I am a <strong>violinist</strong> and a dedicated <strong>cat mom</strong> to my three feline companions, including a Siamese and two Maine Coons.</p>
        <div class="hobby-chips">
          <span>Violinist</span> <span>Baker</span> <span>Traveler</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style >
.about-split-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 2rem;
}

.identity-card {
  background: rgba(255, 255, 255, 0.7); 
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.identity-card:hover {
  transform: scale(1.02);
}

.photo-wrapper .profile-img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%; 
  border: 4px solid #d8b4fe; 
  margin-bottom: 1.5rem;
}

.skills-chips span, .hobby-chips span {
  display: inline-block;
  margin: 0.2rem;
  padding: 0.4rem 0.8rem;
  background: white;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: bold;
}


.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid #d8b4fe; 
  object-fit: cover; 
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.dev-side .profile-img {
  object-position: 40% 30%; 
}

.person-side .profile-img {
  object-position: 5% 0%; 
  
}
</style>