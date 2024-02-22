<script setup lang="ts">
import ProjectLists from '@/components/ProjectLists.vue';

</script>

<template>
  <main>
    <div class="container">
      <ProjectLists>
        <template #header>Proyectos</template>
      </ProjectLists>
    </div>
  </main>
</template>
<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
