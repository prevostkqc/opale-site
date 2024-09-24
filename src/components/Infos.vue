<template>
    <!-- infos -->
        <section class="view-container  infos" id="modes">
            <div class="view-content">
                <input type="radio" name="modes" class="input-modes" id="modes-mode" checked>
                <input type="radio" name="modes" class="input-modes" id="modes-lieux">
                <input type="radio" name="modes" class="input-modes" id="modes-pokemon">
                <input type="radio" name="modes" class="input-modes" id="modes-difficultes">
                <article class="infos-container">
                    <div class="zone-cta-info">
                        <label class="cta-container  cta-container--modes" for="modes-mode">
                            <span class="cta">
                                Modes de jeu
                            </span>
                        </label>
                        <label class="cta-container  cta-container--lieux" for="modes-lieux">
                            <span class="cta">
                                Des lieux mémorables
                            </span>
                        </label>
                        <label class="cta-container  cta-container--pokemon" for="modes-pokemon">
                            <span class="cta">
                                Plus de POKéMON
                            </span>
                        </label>
                        <label class="cta-container  cta-container--difficultes" for="modes-difficultes">
                            <span class="cta">
                                Plus de challenges
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
                            <img src="images/pokeball.svg" class="pokeball" alt="pokéball">Des endroits hors du commun&nbsp;!
                        </h2>
                        <div class="zone-text">
                            <p class="text">
                                Découvrez un monde <span class="bold">vaste et immersif</span> en Parcourant des régions inédites, rencontrez des POKéMON rares et découvrez des secrets cachés. Chaque région est riche en histoires et en défis, vous permettant de vivre <span class="bold">une aventure sans fin</span>.
                                <br>Plongez dans ce rêve où l'extraordinaire devient votre quotidien. POKéMON Opale vous emmène à la découverte des <span class="bold">lieux les plus fascinants et mystérieux</span>. Que vous soyez un aventurier chevronné ou un rêveur en quête d'évasion, ces destinations uniques promettent de vous émerveiller et de vous inspirer.
                            </p>
                        </div>
                    </div>
                    <div class="une-info  une-info--pokemon">
                        <h2 class="titre-pokeball">
                            <img src="images/pokeball.svg" class="pokeball" alt="pokéball">Une multitude de POKéMON et d'équipes différentes&nbsp;!
                        </h2>
                        <div class="zone-text">
                            <p class="text">
                                Bienvenue dans l'univers captivant de POKéMON Opale, où chaque dresseur peut explorer une myriade de possibilités grâce à <span class="bold">une multitude de POKéMON et d'équipes variées</span>. Que vous soyez un stratège chevronné ou un nouveau venu, les différentes régions offrent des combinaisons infinies pour créer <span class="bold">l'équipe de vos rêves</span>.<br>
                                Composez des équipes équilibrées en fonction de vos préférences et de vos stratégies. Que vous préfériez une équipe défensive, offensive ou polyvalente, <span class="bold">les combinaisons possibles sont illimitées</span>. Adaptez votre équipe aux défis que vous rencontrez pour maximiser vos chances de succès.
                            </p>
                        </div>
                    </div>
                    <div class="une-info  une-info--modes">
                        <h2 class="titre-pokeball">
                            <img src="images/pokeball.svg" class="pokeball" alt="pokéball">Des façons de jouer extraordinaires&nbsp;!
                        </h2>
                        <div class="zone-text">
                            <p class="text">
                                POKéMON Opale vous offre des modes de jeu extraordinaires qui enrichissent votre expérience et vous plongent dans <span class="bold">des aventures variées et palpitantes</span>. Quel que soit votre style de jeu, vous trouverez dans POKéMON Opale de quoi satisfaire votre passion et <span class="bold">vivre des moments inoubliables</span>. Préparez-vous à explorer, combattre, coopérer et créer comme jamais auparavant&nbsp;!<br>
                                Résolvez des casse-têtes complexes pour avancer dans l'histoire et <span class="bold">débloquer des récompenses spéciales</span>. Chaque puzzle vous demandera réflexion et créativité, ajoutant une dimension supplémentaire à votre aventure POKéMON.
                            </p>
                        </div>
                    </div>
                    <div class="une-info  une-info--difficultes">
                        <h2 class="titre-pokeball">
                            <img src="images/pokeball.svg" class="pokeball" alt="pokéball">Relevez des défis toujours plus grands&nbsp;!
                        </h2>
                        <div class="zone-text">
                            <p class="text">
                                POKéMON Opale vous propose de <span class="bold">modifier la difficulté</span> avec des options de jeu qui vous permettent de personnaliser votre expérience. Que vous soyez un joueur débutant ou un vétéran, vous trouverez dans POKéMON Opale des<span class="bold"> défis à votre mesure</span>. Augmentez la difficulté pour tester vos compétences et relever des défis toujours plus grands.<br>
                                Personnalisez votre aventure en choisissant parmi une variété d'options de jeu qui <span class="bold">modifient la difficulté et les mécaniques de jeu</span>. Que vous souhaitiez un défi plus corsé ou une expérience plus détendue, POKéMON Opale vous offre la possibilité de <span class="bold">jouer à votre rythme</span> et selon vos préférences.
                            </p>
                        </div>
                    </div>
                </article>
                <article class="pokedex">
                    <div class="screen-pokedex">
                        <img src="images/screens/opale2.gif"    class="screen-opale  screen-opale--mode  screen-opale--1" alt="apercu du jeu">
                        <img src="images/screens/screen11.jpg"  class="screen-opale  screen-opale--mode  screen-opale--2" alt="apercu du jeu">
                        <img src="images/screens/screen12.jpg"  class="screen-opale  screen-opale--mode  screen-opale--3" alt="apercu du jeu">

                        <img src="images/screens/screen8.jpg"   class="screen-opale  screen-opale--lieux  screen-opale--1" alt="apercu du jeu">
                        <img src="images/screens/screen1.jpg"   class="screen-opale  screen-opale--lieux  screen-opale--2" alt="apercu du jeu">
                        <img src="images/screens/screen7.jpg"   class="screen-opale  screen-opale--lieux  screen-opale--3" alt="apercu du jeu">

                        <img src="images/screens/opale4.gif"    class="screen-opale  screen-opale--pokemon  screen-opale--1" alt="apercu du jeu">
                        <img src="images/screens/screen6.jpg"   class="screen-opale  screen-opale--pokemon  screen-opale--2" alt="apercu du jeu">
                        <img src="images/screens/screen10.jpg"  class="screen-opale  screen-opale--pokemon  screen-opale--3" alt="apercu du jeu">

                        <img src="images/screens/screen3.jpg"   class="screen-opale  screen-opale--difficultes  screen-opale--1" alt="apercu du jeu">
                        <img src="images/screens/screen5.jpg"   class="screen-opale  screen-opale--difficultes  screen-opale--2" alt="apercu du jeu">
                        <img src="images/screens/screen10.jpg"   class="screen-opale  screen-opale--difficultes  screen-opale--3" alt="apercu du jeu">



                        <img src="images/screens/opale3.gif"   class="screen-opale  " alt="apercu du jeu">
                        <img src="images/screens/screen2.jpg"   class="screen-opale  " alt="apercu du jeu">
                    </div>
                    <img src="images/pokedex-green.png" class="pokedex-img  pokedex-img--green" alt="Pokédex">
                    <img src="images/pokedex-green-light.png" class="pokedex-img  pokedex-img--green-light"  alt="Pokédex">
                    <img src="images/pokedex-onde.png"  class="pokedex-img  pokedex-img--ondes"  alt="Pokédex">
                    <img src="images/pokedex1.png"      class="pokedex-img"  alt="Pokédex">
                    <img src="images/pokedex-light.png" class="pokedex-img  pokedex-img--light"  alt="Pokédex">
                </article>
            </div>
        </section>
    <!-- infos -->
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
        background-attachment: fixed;
    }
    .view-container{
        padding-bottom:60px;
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
        filter: drop-shadow(2px 4px 6px black);
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
        flex-direction: column;
        padding-left: 70px;
    }
    .screen-opale{
       display: none;
    }
    .une-info--modes,
    .une-info--lieux,
    .une-info--pokemon,
    .une-info--difficultes{
        display: none;
    }
    #modes-mode:checked ~ .infos-container .une-info--modes,
    #modes-mode:checked ~ .pokedex .screen-opale--mode,
    #modes-lieux:checked ~ .infos-container .une-info--lieux,
    #modes-lieux:checked ~ .pokedex .screen-opale--lieux,
    #modes-pokemon:checked ~ .infos-container .une-info--pokemon,
    #modes-pokemon:checked ~ .pokedex .screen-opale--pokemon,
    #modes-difficultes:checked ~ .infos-container .une-info--difficultes,
    #modes-difficultes:checked ~ .pokedex .screen-opale--difficultes{
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
    .cta-container:after{
        content: '';
        background-image: url(/public/images/arrow_right.svg);
        display: none;
        position: absolute;
        width: 40px;
        height: 50px;
        margin-top: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        left: -50px;
        top: -13px;
    }
    #modes-lieux:checked        ~ .infos-container .cta-container--lieux:after,
    #modes-mode:checked         ~ .infos-container .cta-container--modes:after,
    #modes-pokemon:checked      ~ .infos-container .cta-container--pokemon:after,
    #modes-difficultes:checked  ~ .infos-container .cta-container--difficultes:after{
        display: block;
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
    @media screen and (max-width: 1600px){
        .view-content{
            flex-direction: column;
            gap: 20px;
            padding-bottom: 50px;
        }
        .infos-container{
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            width: calc(100% - 100px);
        }
        .une-info{
            width: 100%;
            max-width: calc(100% - 100px);
        }
        .zone-cta-info{
            display: flex;
            gap: 20px;
            padding-left: 70px;
            align-content: space-between;
            flex-direction: row;
            justify-content: space-between;
        }
        .zone-cta-info{
            display: flex;
            gap: 20px;
            padding-left: 70px;
            align-content: space-between;
            flex-direction: row;
            justify-content: space-between;
            width: calc(100% - 70px);
        }
    }
    @media screen and (max-width: 1200px){
        .infos-container{
            padding: 20px;
            width: calc(100% - 40px);
        }
        .zone-cta-info{
            padding-left: 40px;
            width: calc(100% - 70px);
        }
        .cta-container:after{
            left: -35px;
        }
    }

    @media screen and (max-width: 1000px){
        .zone-cta-info[data-v-393ad305] {
            padding-left: 70px;
            align-content: space-between;
            flex-direction: column;
            flex-wrap:wrap;
        }
        .infos-container{
            overflow: hidden;
        }
    }

    @media screen and (max-width: 900px){
        .pokedex-img{
            display: none;
        }
        .pokedex {
            left: 0px;
            width: 100%;
            height: fit-content;
        }
        .screen-pokedex{
            width: 80%;
            margin: auto;
            left: 0;
            right: 0;
            top: 20px;
            position: relative;


            
            width: 269px;
            height: 302px;
        }
        .view-container{
            padding-bottom: 20px;
        }
        .screen-opale{
            border: solid 3px #000000;
            left: -5px;
            outline: solid 10px #d51f3f;
        }
        .titre-pokeball{
            flex-wrap: wrap;
        }
        .une-info{
            padding: 50px;
        }
        .cta-container{
            width: calc(100% - 70px);
            padding-left:0 !important;
        }
        .cta{
            width: calc(100% - 70px);
            left: 0;
        }
        .zone-cta-info{
            padding-left: 70px;
            align-content: space-between;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            max-width: 100%;
        }
        .cta-container::after{
            display: none !important;
        }
    }
</style>