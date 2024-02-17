<script setup lang="ts">
  import users from '@/stores/userData'
  import { DataTable } from "@/../node_modules/DataTable"
</script>

<template>
  <DataTable :rows="users"
               sortable/>
</template>