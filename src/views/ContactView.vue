<script setup lang="ts">
import { ref } from 'vue';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  alert(`Thanks for reaching out, ${form.value.name}! I'll get back to you soon.`);
  form.value = { name: '', email: '', message: '' };
};
</script>

<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Let's Connect</h1>
      <p>Whether you have a question or just want to talk tech, my inbox is always open.</p>
    </div>

    <div class="contact-grid">
      <section class="contact-details">
        <h3>Contact Information</h3>
        
        <div class="info-item">
          <span class="icon">📍</span>
          <div>
            <strong>Location</strong>
            <p>Wynberg, Cape Town</p>
          </div>
        </div>

        <div class="info-item">
          <span class="icon">📧</span>
          <div>
            <strong>Email</strong>
            <p><a href="mailto:aliyah.dutoit@gmail.com">aliyah.dutoit@gmail.com</a></p>
          </div>
        </div>

        <div class="info-item">
          <span class="icon">📱</span>
          <div>
            <strong>Phone</strong>
            <p><a href="tel:+27614402813">+27 61 440 2813</a></p>
          </div>
        </div>

        <div class="social-links-minimal">
          <a href="https://www.linkedin.com/in/aliyah-du-toit?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4pSrNNq6TL2GJGRmBLwncQ%3D%3D" target="_blank" class="social-btn">LinkedIn</a>
          <a href="https://github.com/aliyah-du-toit" target="_blank" class="social-btn">GitHub</a>
        </div>
      </section>

      <section class="contact-form-section">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <input type="text" v-model="form.name" required placeholder="Your Name" />
          </div>

          <div class="form-group">
            <input type="email" v-model="form.email" required placeholder="Your Email" />
          </div>

          <div class="form-group">
            <textarea v-model="form.message" rows="5" required placeholder="Tell me about your project..."></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem;
  color: #2c3e50;
}

.contact-header {
  margin-bottom: 4rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.icon {
  font-size: 1.5rem;
  background: #f0f4f8;
  padding: 0.8rem;
  border-radius: 12px;
}

.info-item p {
  margin: 0;
  color: #555;
}

.info-item a {
  color: #42b883;
  text-decoration: none;
}

.social-links-minimal {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}

.social-btn {
  padding: 0.6rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.social-btn:hover {
  background: #2c3e50;
  color: white;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  font-size: 1rem;
}

.submit-btn {
  background: #42b883;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s;
}

.submit-btn:active {
  transform: scale(0.98);
}

@media (max-width: 850px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>