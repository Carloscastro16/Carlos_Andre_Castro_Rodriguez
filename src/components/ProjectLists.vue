<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectItem from './ProjectItem.vue';
import { ProjectsData } from '@/stores/items';
const reactiveData = ref(ProjectsData);
const titulo = ref('');
const prioridad = ref('');
const id = ref(0);

const ProjectsCompleted = computed(() => {
  let countProjectsCompleted = 0
  for(let project of reactiveData.value) {
    if(project.completed) countProjectsCompleted++
  }
  return countProjectsCompleted
}) 
const totalProjects = computed(() => {
  return reactiveData.value.length
})

function Create() {
  let newObject = {
    id: id,
    title: titulo,
    priority: prioridad,
    completed: false,
  }
  reactiveData.value.push(newObject);
  console.log(reactiveData.value);
}

function updateStatus(value: any, id: any) {
  const index = reactiveData.value.findIndex((task) => task.id === id)
  if(index !== -1){
    reactiveData.value[index].completed = value
  }
}



</script>

<template>
  <div class="main-container">
    <div class="form-container">
      <div class="input-container">
        <label for="id">Id</label>
        <input type="text" id="id" v-model="id">
      </div>
      <div class="input-container">
        <label for="title">Titulo</label>
        <input type="text" id="title" v-model="titulo">
      </div>
      <div class="input-container">
        <label for="title">Prioridad</label>
        <input type="text" id="priority" v-model="prioridad">
      </div>
      <div class="input-btn">
        <button @click="Create()">Agregar</button>
      </div>
    </div>
    <div class="projects-container">
      <h1>
          <slot name="header"></slot>
      </h1>
      <div style="padding: 8px 8px;">
        <p v-if="!!totalProjects">{{ ProjectsCompleted }} / {{ totalProjects }} Proyectos completadas</p>
        <p v-else>No tienes ninguna tarea</p>
      </div>
      <div class="cards-container">
        <ProjectItem @update-status="updateStatus" v-for="(comment, index) in reactiveData" v-bind="comment" :key="index">
        </ProjectItem>
      </div>
    </div>
  </div>
</template>

<style>
  .main-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .projects-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .form-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .input-container{
    display: flex;
    flex-direction: column;
  }
</style>
