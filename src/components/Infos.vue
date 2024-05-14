<template>
    <!-- info -->
        <section class="view-container  infos" id="modes">
            <div class="view-content">
                <input type="radio" name="modes" class="input-modes" id="modes-mode" checked="checked">
                <input type="radio" name="modes" class="input-modes" id="modes-lieux">
                <article class="infos-container">
                    <div class="zone-cta-info">
                        
                        
                        <label class="cta-container" for="modes-lieux">
                            <span class="cta">
                                Des lieux
                            </span>
                        </label>
                        <label class="cta-container" for="modes-mode">
                            <span class="cta">
                                Modes de jeu
                            </span>
                        </label>

                        <!-- 
                        <div class="cta-container">
                            <a href="#modes" class="cta">
                                Modes de jeu
                            </a>
                        </div>
                        
                        <div class="cta-container">
                            <a href="#modes" class="cta">
                                Modes de jeu
                            </a>
                        </div>
                        
                        <div class="cta-container">
                            <a href="#modes" class="cta">
                                Modes de jeu
                            </a>
                        </div> -->
                    </div>
                    <div class="une-info  une-info--lieux">
                        <h2 class="titre-pokeball">
                            <img src="images/pokeball.svg" alt="pokéball">Des endroits hors du commun !
                        </h2>
                        <div class="zone-text">
                            <p class="text">
                                Découvrez un monde vaste et immersif en Parcourant des régions inédites, rencontrez des Pokémon rares et découvrez des secrets cachés. Chaque région est riche en histoires et en défis, vous permettant de vivre une aventure sans fin.
                                Plongez dans ce rêve où l'extraordinaire devient la norme. Pokémon Opale vous emmène à la découverte des lieux les plus fascinants et mystérieux. Que vous soyez un aventurier chevronné ou un rêveur en quête d'évasion, ces destinations uniques promettent de vous émerveiller et de vous inspirer.
                            </p>
                        </div>
                    </div>
                    <div class="une-info  une-info--modes">
                        <h2 class="titre-pokeball">
                            <img src="images/pokeball.svg" alt="pokéball">Des modes de jeu extraordinaires
                        </h2>
                        <div class="zone-text">
                            <p class="text">
                                Pokémon Opale vous offre des modes de jeu extraordinaires qui enrichissent votre expérience et vous plongent dans des aventures variées et palpitantes. Quel que soit votre style de jeu, vous trouverez dans Pokémon Opale de quoi satisfaire votre passion et vivre des moments inoubliables. Préparez-vous à explorer, combattre, coopérer et créer comme jamais auparavant !
                                Résolvez des casse-têtes complexes pour avancer dans l'histoire et débloquer des récompenses spéciales. Chaque puzzle vous demandera réflexion et créativité, ajoutant une dimension supplémentaire à votre aventure Pokémon.
                            </p>
                        </div>
                    </div>
                </article>
                <article class="pokedex">
                    <div class="screen-pokedex">
                        <img src="images/screens/opale2.gif"    class="screen-opale  screen-opale--mode  screen-opale--1" alt="apercu du jeu">
                        <img src="images/screens/screen12.jpg"  class="screen-opale  screen-opale--mode  screen-opale--2" alt="apercu du jeu">
                        <img src="images/screens/opale4.gif"    class="screen-opale  screen-opale--mode  screen-opale--3" alt="apercu du jeu">

                        <img src="images/screens/screen8.jpg"   class="screen-opale  screen-opale--lieux  screen-opale--1" alt="apercu du jeu">
                        <img src="images/screens/screen1.jpg"   class="screen-opale  screen-opale--lieux  screen-opale--2" alt="apercu du jeu">
                        <img src="images/screens/screen7.jpg"   class="screen-opale  screen-opale--lieux  screen-opale--3" alt="apercu du jeu">

                        <img src="images/screens/screen3.jpg"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen4.jpg"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen5.jpg"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen6.jpg"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/opale3.gif"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen2.jpg"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen10.jpg"  class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen11.jpg"  class="screen-opale  " alt="apercu du jeu">
                    </div>
                    <img src="images/pokedex-green.png" class="pokedex-img  pokedex-img--green" alt="Pokédex">
                    <img src="images/pokedex-green-light.png" class="pokedex-img  pokedex-img--green-light"  alt="Pokédex">
                    <img src="images/pokedex-onde.png"  class="pokedex-img  pokedex-img--ondes"  alt="Pokédex">
                    <img src="images/pokedex1.png"      class="pokedex-img"  alt="Pokédex">
                    <img src="images/pokedex-light.png" class="pokedex-img  pokedex-img--light"  alt="Pokédex">
                </article>
            </div>
        </section>
    <!-- info -->
</template>

<script>
    export default {
        name: 'Infos',
        data() {
            return {
            };
        },
        methods: {
        },
        mounted() {
        },
    };
</script>

<style scoped>    
    .infos{
        width:100%;
        position: relative;
        z-index: 1;
        background-image: url(/public/images/header-back.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .pokedex{
        position: relative;
        width: 428px;
        height: 673px;
        overflow: hidden;
        left: -20px;
    }
    .pokedex-img {
        position: absolute;
    }
    .pokedex-img--green-light{
        animation: clignotement 2s infinite;
    }
    .pokedex-img--light{
        animation: clignotement 1s infinite;
    }
    .pokedex-img--ondes{
        animation: defilement 8s linear infinite;
    }
    .screen-pokedex{
        width: 269px;
        height: 302px;
        position: absolute;
        top: 191px;
        left: 96px;
    }
    .screen-opale{
        width: 100%;
        position: absolute;
    }
    .infos-container{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #d51f3e;
        border-radius: 20px 0 0 20px;
        padding: 0 20px;
        gap: 20px;
    }
    .une-info{
        width: 100%;
        max-width: 600px;
        background: #fafafa;
        border-radius: 20px 0 0 20px;
        padding: 100px 50px;
    }
    .zone-cta-info{
        display: flex;
        gap: 20px;
        flex-direction: column-reverse;
    }
    .screen-opale{
       display: none;
    }
    .une-info--modes{
        display: none;
    }
    #modes-mode:checked ~ .infos-container .une-info--modes,
    #modes-mode:checked ~ .pokedex .screen-opale--mode{
        display: block;
    }
    .une-info--lieux{
        display: none;
    }
    #modes-lieux:checked ~ .infos-container .une-info--lieux,
    #modes-lieux:checked ~ .pokedex .screen-opale--lieux{
        display: block;
    }
    .input-modes{
        display:none;
    }
    .screen-opale--1{
        animation: afficher-1 10s infinite;
    }
    .screen-opale--2{
        animation: afficher-2 10s infinite;
    }
    .screen-opale--3{
        animation: afficher-3 10s infinite;
    }
    @keyframes clignotement {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes defilement {
        0% {
            transform: translateX(-25%);
        }
        100% {
            transform: translateX(25%);
        }
    }
    @keyframes afficher-1 {
        0% {
            opacity: 1;
        }
        32% {
            opacity: 1;
        }
        33% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes afficher-2 {
        0% {
            opacity: 0;
        }
        32% {
            opacity: 0;
        }
        33% {
            opacity: 1;
        }
        65% {
            opacity: 1;
        }
        66% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes afficher-3 {
        0% {
            opacity: 0;
        }
        65% {
            opacity: 0;
        }
        66% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
    @media screen and (max-width: 900px){

    }
</style>