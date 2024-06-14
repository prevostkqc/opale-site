<template>
  <router-view></router-view>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'App',
  setup() {
    useHead({
      title: 'Pokémon Opale',
      meta: [
        { name: 'description', content: 'Bienvenue sur le site Pokémon Opale. Découvrez tout sur le jeu et ses fonctionnalités.' },
        { name: 'robots', content: 'index, follow' }
      ]
    });
  }
}
</script>