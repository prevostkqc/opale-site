<template>
    <main class="main">
        <section class="header-container">
            <div  class="darkrai">
                <img src="images/darkrai-2.png"  class="darkrai-2" alt="Darkrai">
                <img src="images/darkrai.png"  class="darkrai-1" alt="Darkrai">
                <div class="darkrai-animation">                    
                    <img src="images/darkrai-3.png"  class="darkrai-3" alt="Darkrai">
                    <img src="images/darkrai-4.png"  class="darkrai-4" alt="Darkrai">
                </div>
            </div>
            <img src="images/entei2.png" class="entei" alt="Pokémon Opale">
            <div class="titre-logo">
                <img src="images/titre-pokemon.png" class="titre-logo-pokemon" alt="Pokémon Opale">
                <img src="images/titre-opale.png" class="titre-logo-pokemon" alt="Pokémon Opale">
            </div>

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
        background-image: url(/public/images/header-back.png);
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
        width: 40%;
        max-width: 1000px;
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .entei{
        width: 100%;
        max-width: 600px;
        position: absolute;
        right: 50px;
        bottom: -120px;
        z-index: 10;
    }
    .darkrai{
        position: absolute;
        left: -80px;
        width: 50vw;
        max-width: 400px;
        filter: drop-shadow(2px 2px 100px black);
        animation : darkraimoove-up 20s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    }
    .darkrai-1{
        width:100%;
        position: absolute;
        animation : darkrai-opacity 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    }
    .darkrai-2{
        width:100%;
        position: absolute;
    }
    .darkrai-3{
        width:100%;
        position: absolute;
        opacity: 0;
        animation : darkrai-energie 0.25s infinite;
    }
    .darkrai-4{
        width:100%;
        position: absolute;
        opacity: 0;
        animation : darkrai-energie 0.25s 0.125s infinite;
    }
    .darkrai-animation{
        animation: darkrai-energie-opacity 5s infinite
    }
    @keyframes darkrai-opacity{
        0%{
            opacity: 0;
        }
        40%{
            opacity: 1;
        }
        60%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes darkraimoove-up{
        0%{
            opacity: 0;
            margin-top:0px;
            transform: translateX(-100%);
        }
        20%{
            opacity: 1;
            margin-top:50px;
            transform: translateX(00%);
        }
        40%{
            margin-top:0px;
        }
        60%{
            opacity: 1;
            margin-top:50px;
        }
        100%{
            opacity: 0;
            margin-top:0px;
        }
    }
    @keyframes darkrai-energie{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes darkrai-energie-opacity{
        0%{
            opacity: 0;
        }
        60%{
            opacity: 1;
        }
        70%{
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
  </style>
  