<script setup lang="ts">
    import type { IProject } from '@/interfaces/IProject';
    const props = defineProps<IProject>()
    const emits = defineEmits(['deleteItem', 'updateStatus'])
    const changeStatus = (event: any) =>{
        //Así se puede enviar información al padre
        emits("updateStatus", (event.target as HTMLInputElement).checked, props.id)
    }
    function Del() {
        emits("deleteItem", props.id) 
    }
</script>

<template>
  <div class="item-card" v-if="!props.completed">
    <div class="id">
        {{ props.id }}
        <div class="delete-btn">
          <button @click="Del()">Borrar</button>
        </div>
    </div>
    <div class="head">
        <div class="title">
            {{ props.title }}
        </div>
        <div class="prority">
            {{ props.priority }}
        </div>
    </div>
    <div class="completed-btn">
        <input @click="changeStatus($event)" type="checkbox">
    </div>
  </div>
</template>

<style>

</style>
