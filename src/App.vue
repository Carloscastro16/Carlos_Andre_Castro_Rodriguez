<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import NavMenu from './components/menu/NavMenu.vue';
</script>

<template>
  <header>
    <RouterLink class="item" to="/" name="home">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </RouterLink>

    <div class="wrapper">
      <NavMenu></NavMenu>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
h1{
  margin-bottom: 8rem;
}
main{
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 2rem;
}

.logo {
  height: 40px;
  width: 40px;
  display: block;
}
.wrapper{
  width: 100%;
}
</style>
