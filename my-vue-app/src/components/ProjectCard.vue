<script>
export default {
    name: 'ProjectCard',

    props: {
        project: {
            type: Object,
            required: true
        },
        baseUrl: {
            type: String,
            required: true
        }
    }
};
</script>

<template>
    <div class="project-card">
        <div class="project-details">
            <h2>{{ project.nome }}</h2>
            <p><strong>Autore:</strong> {{ project.autore }}</p>
            <template v-if="!project.cover_image.startsWith('http')">
                <img :src="base_url + '/storage/' + project.cover_image" alt="Cover Image" class="project-image">
            </template>
            <template v-else>
                <img :src="project.cover_image" alt="Cover Image" class="project-image">
            </template>
            <p><strong>Descrizione:</strong> {{ project.descrizione }}</p>
            <p><strong>Inizio:</strong> {{ project.inizio }}</p>
            <p><strong>Fine:</strong> {{ project.fine }}</p>
            <p><strong>Tecnologia:</strong> {{ project.category_id }}</p>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    margin: 10px;
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-details {
    padding: 15px;
}

.project-details h2 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5em;
}

.project-details p {
    margin: 5px 0;
}

.project-details p strong {
    font-weight: bold;
}

p {
    color: rgb(0, 0, 0);
}
</style>