<template>
    <main class="main">
        
        <Header />
        <Headercontent />
        <Presentation />
        <Infos />
        <Footer />

    </main>
  </template>
  
  <script>
    import Header from './Header.vue';
    import Headercontent from './Headercontent.vue';
    import Presentation from './Presentation.vue';
    import Infos from './Infos.vue';
    import Footer from './Footer.vue';

    export default {
        data() {
            return {
                projets: [],
                compagnieProjet: "",
                projetActuel: null
            };
        },
        components: {
            Header,
            Headercontent,
            Presentation,
            Infos,
            Footer
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
  