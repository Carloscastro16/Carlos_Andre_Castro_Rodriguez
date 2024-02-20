<script setup lang="ts">
  import { users } from '@/stores/userData'
  import { DataTable } from "@jobinsjp/vue3-datatable"
    import "@jobinsjp/vue3-datatable/dist/style.css"
</script>

<template>
  <DataTable :rows="users"></DataTable>
</template>