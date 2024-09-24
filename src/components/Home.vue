<template>
    <main class="main">
      <Header />
      <Headercontent />
      <Presentation />
      <Infos />
      <Apropos />
      <Telechargement />
      <Footer />
    </main>
  </template>
  
  <script>
  import { useHead } from '@vueuse/head';
  import Header from './Header.vue';
  import Headercontent from './Headercontent.vue';
  import Presentation from './Presentation.vue';
  import Infos from './Infos.vue';
  import Apropos from './Apropos.vue';
  import Telechargement from './Telechargement.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: {
      Header,
      Headercontent,
      Presentation,
      Infos,
      Apropos,
      Telechargement,
      Footer
    },
    data() {
      return {
        projets: [],
        compagnieProjet: "",
        projetActuel: null
      };
    },
    mounted() {
      const script = document.createElement('script');
      script.src = '/script.js';
      script.onload = () => {
        console.log('Script chargé');
      };
      document.head.appendChild(script);
    },
    setup() {
      useHead({
        title: 'Accueil - Pokémon Opale',
        meta: [
          { name: 'description', content: 'Page d\'accueil du site Pokémon Opale. Découvrez les dernières nouvelles et mises à jour.' }
        ]
      });
    }
  };
  </script>
  
  <style>
  </style>
  