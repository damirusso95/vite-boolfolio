
<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',

  components: {
    ProjectCard
  },

  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: [],
    };
  },

  mounted() {
    this.fetchProjects();
  },

  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get(`${this.base_url}/api/projects`);
        // Log della risposta API
        console.log('Risposta API:', response.data); 
        
        if (response.data && response.data.success) {
          // Accede ai dati dei progetti
          this.projects = response.data.projects.data; 
        } else {
          console.error('La risposta API non contiene i dati attesi:', response.data);
        }
      } catch (error) {
        console.error('C\'è stato un errore nel caricamento dei progetti:', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Lista progetti</h1>
    <div class="projects-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :base-url="base_url"
      />
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>

