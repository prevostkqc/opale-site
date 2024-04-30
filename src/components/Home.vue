<template>
    <header class="header">
    </header>
    <main class="main">
        <section class="section">
            <UneVue />
        </section>
    </main>
  </template>
  
  <script>
    import UneVue from './UneVue.vue';

    export default {
        data() {
            return {
                projets: [],
                compagnieProjet: "",
                projetActuel: null
            };
        },
        components: {
            UneVue
        },
        computed: {
        },
        created() {
        },
        methods: {
        },
        mounted() {
            const script = document.createElement('script');
            script.src = '/script.js';
            script.onload = () => {
                console.log('Script chargé');
            };
        }
    };
  </script>
  
  <style>
  </style>
  