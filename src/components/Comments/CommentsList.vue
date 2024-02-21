<script lang="ts" setup>
    import { CommentsData } from '@/data/CommentsData'
    import CommentsItem from '@/components/Comments/CommentsItem.vue'
    import { ref, computed } from 'vue';
    import { onMounted } from 'vue';
    let backgroundColor = ref('#000000')
    const clicked = (event: any)=>{
        console.log(event)
    }
    const changeBackground = (event: any)=>{
        backgroundColor.value = event
    }
/* 
    Computed hace un calculo geeral en base a una variable existente que hace un efecto de watch
    
    const validation = computed(()=> backgroundColor.value == '#000000')
     */
    onMounted(()=>{

    })
</script>

<template>
    <div class="cards-container" :style="{ background:backgroundColor }">
        <button v-on:click="clicked($event)">click</button>
        <!-- 
        !! Se puede agregar informacion de dos maneras una de ellas es con :data='Comment'
        !! en esta forma se utiliza el nombre de la variable principal 
        <CommentsItem v-for="comment in CommentsData" :data="comment"></CommentsItem>
    -->
        <!-- Recibe información desde el hijo con el $event -->
        <CommentsItem @say-goodbye="changeBackground($event)" v-for="(comment, index) in CommentsData" v-bind="comment" :key="index"></CommentsItem>
    </div>
</template>

<style scoped>
.cards-container{
    width: 100%;
    display: flex;
    gap: 1rem;
}
</style>