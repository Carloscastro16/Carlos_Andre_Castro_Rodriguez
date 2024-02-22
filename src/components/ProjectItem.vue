<script setup lang="ts">
    import type { IProject } from '@/interfaces/IProject';
    const props = defineProps<IProject>()
    const emits = defineEmits(['SayHi', 'updateStatus'])
    const changeStatus = ()=>{
        //Así se puede enviar información al padré
        emits("updateStatus", props.completed)
    }
</script>

<template>
  <div class="item-card">
    <div class="id">
        {{ props.id }}
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
        <input type="checkbox" :value="props.completed">
    </div>
  </div>
</template>

<style>

</style>
