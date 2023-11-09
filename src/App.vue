<script setup>
import { ref, onMounted } from 'vue';
import Navigation from './components/Navigation.vue';
import store from './store/index';
import supabase from './supabase/init';

const appReady = ref(null)


supabase.auth.onAuthStateChange((_, session) => {
  store.methods.setUser(session)
  appReady.value = true
})
</script>

<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <Navigation/>
    <RouterView/>
  </div>   
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
</style>
