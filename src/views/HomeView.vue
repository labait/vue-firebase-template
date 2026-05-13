
<script setup>
import { onMounted } from 'vue';
import ItemsList from '../components/ItemsList.vue'
import { useGlobal } from '../composables/global';
const global = useGlobal()


onMounted(() => {
  global.dialog = {
    title: 'Benvenuto!',
    content: 'Questa è la home view. Esplora gli elementi disponibili.',
    onOk: () => {
      console.log('Utente ha cliccato OK');
    },
    onCancel: () => {
      console.log('Utente ha cliccato Cancel');   
    }
  }
})
</script>

<template>
  <div class="home-view">
    <ItemsList />
  </div>
</template>


<style scoped>
</style>
