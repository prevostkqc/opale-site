<template>
    <!-- Presentation -->
        <section id="presentation" class="view-container  presentation">
            <div class="view-content">
                <article class="Presentation-image">
                    <div class="card-container">
                        <div class="card">
                            <img src="images/image-presentation.jpg" class="presentation-card" alt="presentation">
                        </div>
                    </div>
                </article>
                <article class="Presentation-texte">
                    <h2 class="titre-pokeball">
                        <img src="images/pokeball.svg" alt="pokéball">Découvrez POKéMON Opale, une expérience immersive sur PC et Android qui redéfinit l'aventure POKéMON&nbsp;!
                    </h2>
                    <p class="texte-cta">
                        Explorez <span class="bold">60 villes</span> réparties dans <span class="bold">5 régions</span> possèdeant chacune son charme et ses mystères à découvrir.
                        Capturez <span class="bold">plus de 600 POKéMON</span>, enrichissez votre collection et formez l'équipe ultime.
                        Obtenez <span class="bold">40 badges</span> en relevant les défis des arènes qui mettront à l'épreuve vos compétences.
                        <span class="bold">Les PP réduits</span> ajoutent une dimension stratégique supplémentaire, mais soyez tranquille, ils sont restaurés en fin de combat.
                        L'efficacité de capture augmente avec <span class="bold">l'expérience du joueur</span>, vous récompensant pour vos efforts et votre progression.
                        Récupérez <span class="bold">151 cartes</span> dans les boosters, et collectionnez-les pour obtenir des récompenses exclusives.
                        <br/>
                        <span class="bold">Embarquez pour une aventure épique avec POKéMON Opale et devenez le meilleur dresseur que le monde ait connu&nbsp;!</span>
                    </p>
                    <div class="cta-container  hide">
                        <a href="#telechargement" class="cta">
                            Télecharger
                        </a>
                    </div>
                </article>
            </div>
        </section>
    <!-- Presentation -->
</template>

<script>
    export default {
        name: 'Presentation',
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
        width: 450px;
        height: 400px;
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
    }
    .card:hover {
        transform: rotateY(5deg);
        filter: drop-shadow(-12px 12px 6px #00000055);
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
    }
    
</style>