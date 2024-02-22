<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import ProjectItem from './ProjectItem.vue';
import { ProjectsData } from '@/stores/items';
const reactiveData = ref(ProjectsData);
const titulo = ref('');
const prioridad = ref('');
const id = ref('');

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

function Update() {
}

function Del() {
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
      <div class="cards-container">
        <ProjectItem v-for="(comment, index) in reactiveData" v-bind="comment" :key="index">
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
