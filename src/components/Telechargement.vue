<template>
    <!-- Telechargement -->
        <section id="telechargement" class="view-container  Telechargement  ">
            <div class="view-content">
                <article class="Presentation-image">
                    <div class="card-container">
                        <div class="card">
                            <img src="images/opaleboitier.png" class="presentation-card" alt="presentation">
                        </div>
                    </div>
                </article>
                <article class="Presentation-texte">
                    <h2 class="titre-pokeball">
                        <img src="images/pokeball.svg" alt="pokéball">Téléchargement
                    </h2>
                    <p class="texte-cta">
                        Le jeu <span class="bold">POKéMON Opale</span> n'est pas encore disponible en téléchargement.<br>
                        Le projet est toujours <span class="bold">en cours de développement</span>, mais la sortie approche&nbsp;!<br>
                        Restez à l'écoute pour les mises à jour, et revenez ici pour obtenir le lien de téléchargement une fois le jeu finalisé.

                    </p>
                    <div class="cta-container  hide">
                        <a href="#telechargement" class="cta">
                            Télecharger
                        </a>
                    </div>
                    <br>
                    <br>
                    <h2 class="titre-pokeball">
                        <img src="images/pokeball.svg" alt="pokéball">Notes de patchs d'avancement
                    </h2>

                    <p class="bold">
                        Patch du 4 septembre 2024 - v.0.72
                    </p>
                    <p class="texte-cta">
                        - Toutes les régions sont désormais complètement connectées.<br>
                        - Ajout de nombreuses quêtes secondaires dans plusieurs villes.<br>
                        - Optimisation des animations de combats et de captures.<br>
                        - Amélioration du système de gestion des arènes et équilibrage des types.<br>
                    </p>

                    <br>
                    <p class="bold">
                        Patch du 10 juillet 2024 -  v.0.71
                    </p>
                    <p class="texte-cta">
                        - Implémentation des niveaux de difficulté personnalisables.<br>
                        - Révision complète des statistiques des dresseurs.<br>
                        - Ajout de nouveaux objets permettant de remplacer les CS.<br>
                    </p>


                    <div class="cta-container  hide">
                        <a href="#telechargement" class="cta">
                            Télecharger
                        </a>
                    </div>
                </article>

            </div>
        </section>
    <!-- Telechargement -->
</template>

<script>
    export default {
        name: 'Telechargement',
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

    .presentation{
        width:100%;
        position: relative;
        z-index: 1;
        background-image: linear-gradient(90deg, rgb(0 0 0 / 2%) 2px, #00000000 1px), linear-gradient(rgb(0 0 0 / 2%) 2px, #00000000 1px);
        background-size: 10px 10px;
        animation: scroll-grid 1s linear infinite;

    }
    .presentation-card{
        border-radius: 20px;
        width:100%;
    }
    .card-container {
        perspective: 1000px;
        width: 80%;
        margin: 50px auto;
    }
    .card {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s;
        transform: rotateY(-5deg);
        filter: drop-shadow(12px 12px 6px #00000055);
        transition: 0.3s;
        overflow: hidden;
    }
    .card:hover {
        transform: rotateY(5deg);
        filter: drop-shadow(-12px 12px 6px #00000055);
    }


    .card::before {
        content: '';
    position: absolute;
    top: -100%;
    left: -150%;
    width: 200%;
    height: 300%;
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
    transition: transform 1s ease;
    transform: translateX(-100%) rotate(25deg);
    }

    .card:hover::before {
        transform: translateX(200%) rotate(25deg);
    }


    .card-front {
        z-index: 2;
        transform: rotateY(0deg);
    }
    .card-back {
        transform: rotateY(180deg);
    }
    .Presentation-texte{
        width: 100%;
        background-color: #FFF;
        height: fit-content;
        padding: 30px 30px 30px 50px;
        border-top: solid 1px #000000;
        border-bottom: solid 1px #000000;
        margin-left: -5.5%;
    }
    @keyframes scroll-grid {
        0% {
            background-position: 30px 10px;
        }
        100% {
            background-position: 0px 0px;
        }
    }
    @media screen and (max-width: 1200px){
        .view-content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 1600px;
            margin: auto;
            flex-wrap: wrap;
        }
        .view-container{
            padding-bottom: 100px;
        }
        .Presentation-image{
            display:none;
        }
        
        .Presentation-texte{
            margin-left: 0%;
        }
    }
</style>