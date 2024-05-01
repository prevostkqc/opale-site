<template>
    <main class="main">
        <section class="header-container">
            <img src="images/darkrai.png" class="darkrai" alt="Darkrai">
            <img src="images/entei2.png" class="entei" alt="Pokémon Opale">
            <img src="images/titre.png" class="titre-logo" alt="Pokémon Opale">
        </section>
        <Header />
    </main>
  </template>
  
  <script>
    import Header from './Header.vue';

    export default {
        data() {
            return {
                projets: [],
                compagnieProjet: "",
                projetActuel: null
            };
        },
        components: {
            Header
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
    .header-container{
        background-image: url(http://localhost:8080/img/header-back.a5ce14db.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        height: 80vh;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .titre-logo{
        width: 80%;
        max-width: 1000px;
        position: relative;
        z-index: 10;
    }
    .darkrai{
        position: absolute;
        top: 160px;
        left: -3vw;
        width: 50vw;
        max-width: 490px;
    }
    .entei{
        width: 100%;
        max-width: 600px;
        top: 10vh;
        position: absolute;
        right: 10vw;
    }
  </style>
  