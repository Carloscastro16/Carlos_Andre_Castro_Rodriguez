<script lang="ts" setup>
    import type { IComment } from '@/interfaces/IComment';
    // Se hace de esta forma si quieres añadir la info con un v-bind
    const props = defineProps<IComment>()
    const emits = defineEmits(['SayHi', 'SayGoodbye'])
    const changeBackground = ()=>{
        //Así se puede enviar información al padré
        emits("SayGoodbye", props.color)
    }
    /*
    !!Se usa de esta manera si quieres que 
    solo tome el nombre de la variable como una directiva 
    defineProps<{data: IComment}>() 

    se imprime así:
    <div class="card-title">
        {{ data.title }}
    </div>
    */
</script>

<template>
    <div class="card">
        <div class="header">
            <div class="card-title">
                {{ props.title }}
            </div>
            <div class="card-date">
                {{ props.author }}
            </div>
        </div>
        <div class="card-content">
            {{ props.body }}
            <button @click="changeBackground()">click</button>
        </div>
        <div class="card-footer">
            <div class="left">
                {{ props.date.toDateString() }}
            </div>
            <div class="right">
                {{ props.id }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    width: 250px;
    background-color: #ffffffa8;
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: .7rem;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.header{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-footer{
    display: flex;
    justify-content: space-between;
}
</style>

