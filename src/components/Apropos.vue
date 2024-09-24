<template>
    <!-- A propos -->
        <section id="apropos" class="view-container  apropos  ">
            <div class="view-content">
                <article class="apropos-texte">
                    <h2 class="titre-pokeball">
                        <img src="images/pokeball.svg" alt="pokéball">À propos
                    </h2>
                        <p class="texte-apropos">
                            Créé par un fan passionné de la saga POKéMON, <span class="bold">POKéMON Opale</span> est bien plus qu'un simple hommage. Ce jeu propose une expérience unique qui respecte et s'inspire de la richesse des générations précédentes tout en introduisant des <span class="bold">innovations captivantes</span>.<br>
                            Avec des mécaniques repensées et un <span class="bold">souci du détail</span>, chaque aspect du jeu a été minutieusement conçu pour offrir aux joueurs une aventure POKéMON comme jamais auparavant.
                        </p>
                        <p class="texte-apropos">
                            L'un des points forts de POKéMON Opale réside dans sa capacité à <span class="bold">revisiter les bases</span> classiques tout en apportant des <span class="bold">améliorations significatives</span>. Par exemple, certaines fonctionnalités emblématiques, comme les CS, ont été totalement réinventées, permettant <span class="bold">une exploration plus fluide et sans contraintes</span>. Les joueurs pourront également découvrir des quêtes riches en histoire, des objets spéciaux et des interactions complexes avec les dresseurs.
                        </p>
                        <p class="texte-apropos">
                            L'immersion est renforcée par <span class="bold">l'attention portée aux détails</span> des villes, des PNJs et des régions, créant ainsi un monde cohérent et vivant. Avec une aventure complète et des heures de contenu inédit, POKéMON Opale promet de séduire à la fois les <span class="bold">fans de longue date et les nouveaux venus</span> dans l'univers POKéMON.
                        </p>

                        <h2 class="titre-pokeball">
                            <img src="images/pokeball.svg" alt="pokéball">Une aventure sur mesure
                        </h2>
                        <p class="texte-apropos">
                            POKéMON Opale propose <span class="bold">plusieurs modes de difficulté</span>, permettant à chaque joueur de personnaliser son aventure selon ses préférences. Que vous soyez un novice ou un expert, ces options vous offrent la possibilité de <span class="bold">vivre une expérience sur mesure</span>, adaptée à votre style de jeu.<br>
                            <br>
                            <span class="bold">Cliquez sur un mode pour en savoir plus.</span>
                        </p>
                        <div class="unedifficulte">          
                            <label for="facile" class="cta">
                                🟢 Facile
                            </label>
                            <input type="checkbox" id="facile" class="toggle-difficulte">
                            <article class="texte-facile  texte-difficulte">
                                <p class="bold">Conçu pour les joueurs qui souhaitent profiter de l'aventure sans se soucier des défis trop exigeants.
                                    <br>Idéal pour découvrir tranquillement le monde de Pokémon Opale.</p>
                                <ul class="list-difficulte">
                                    <li>Le niveau des POKéMON est affiché.</li>
                                    <li>5 MULTI EXP permettent de choisir comment répartir l’expérience.</li>
                                    <li>Le nombre de POKéMON des dresseurs est visible.</li>
                                    <li>Le type du prochain POKéMON que l’ennemi va envoyer est annoncé.</li>
                                    <li>Possibilité de changer de POKéMON avant que le dresseur adverse n'envoie le sien.</li>
                                    <li>Les objets sont utilisables en combat contre les dresseurs.</li>
                                    <li>Les captures rapportent 25% d’expérience de dresseur supplémentaire.</li>
                                    <li>La sauvegarde est possible à tout moment.</li>
                                    <li>Les soins dans les Centres POKéMON sont gratuits et illimités.</li>
                                    <li>Les objets présents dans l'inventaire sont illimités.</li>
                                    <li>Les combats peuvent être simples ou doubles, mais déjà définis.</li>
                                    <li>Les niveaux d’évolution sont standards.</li>
                                    <li>Aucun objet n’est perdu en cas de défaite.</li>
                                    <li>Perte de la moitié de l'argent en cas de défaite.</li>
                                    <li>Un pokemon mis KO ne perd pas son expérience accumulée à son niveau actuel.</li>
                                    <li>Les objets de soin fonctionnent normalement.</li>
                                    <li>Les POKéMON des dresseurs ont des statistiques de base.</li>
                                    <li>Les dégâts infligés par le joueur sont normaux (100%).</li>
                                    <li>Les POKéMON sauvages ont 10% de chance de fuir s’ils sont à moins de 5% de leurs PV max.</li>
                                    <li>Le taux de capture des POKéMON sauvages reste inchangé.</li>
                                </ul>
                            </article>
                        </div>       



                        <div class="unedifficulte">
                            <label for="normale" class="cta">
                                🟡 Normale
                            </label>
                            <input type="checkbox" id="normale" class="toggle-difficulte">
                            <article class="texte-normale  texte-difficulte">
                                <p class="bold">Le mode classique pour une expérience équilibrée, offrant juste ce qu'il faut de challenge tout en restant accessible à la majorité des joueurs.</p>
                                <ul class="list-difficulte">
                                    <li>Le niveau des POKéMON est affiché.</li>
                                    <li>3 MULTI EXP permettent de choisir comment répartir l’expérience.</li>
                                    <li>Le nombre de POKéMON des dresseurs est visible.</li>
                                    <li>Le type du prochain POKéMON de l'ennemi n’est pas annoncé.</li>
                                    <li>Possibilité de changer de POKéMON avant que l’adversaire n’envoie le sien.</li>
                                    <li>Les objets sont inutilisables en combat contre les dresseurs.</li>
                                    <li>L’expérience de dresseur gagnée après capture est normale.</li>
                                    <li>La sauvegarde est possible à tout moment.</li>
                                    <li>Les soins dans les Centres POKéMON sont payants, en fonction du nombre de POKéMON soignés, mais illimités.</li>
                                    <li>Les objets présents dans l'inventaire sont illimités.</li>
                                    <li>Les combats peuvent être simples ou doubles, mais déjà définis.</li>
                                    <li>Les niveaux d’évolution augmentent de 10% par rapport à la normale.</li>
                                    <li>Perte d'un objet de chaque type en cas de défaite.</li>
                                    <li>Perte de la totalité de l'argent en cas de défaite.</li>
                                    <li>Un pokemon mis KO perd son expérience accumulée à son niveau actuel.</li>
                                    <li>Les objets de soin fonctionnent normalement.</li>
                                    <li>Les POKéMON des dresseurs ont un bonus de +10% en statistiques.</li>
                                    <li>Les dégâts infligés par le joueur restent normaux (100%).</li>
                                    <li>Les POKéMON sauvages ont 15% de chance de fuir s’ils sont à moins de 10% de leurs PV max.</li>
                                    <li>Le taux de capture des POKéMON sauvages ne change pas.</li>
                                </ul>
                            </article>
                        </div>

                        <div class="unedifficulte">
                            <label for="difficile" class="cta">
                                🔴 Difficile
                            </label>
                            <input type="checkbox" id="difficile" class="toggle-difficulte">
                            <article class="texte-difficile  texte-difficulte">
                                <p class="bold">Pour ceux qui recherchent un véritable défi.
                                    <br>Ce mode impose des restrictions plus sévères et une gestion stratégique des ressources.</p>
                                <ul class="list-difficulte">
                                    <li>Le niveau des POKéMON est affiché.</li>
                                    <li>1 seul MULTI EXP permet de répartir l’expérience.</li>
                                    <li>Le nombre de POKéMON des dresseurs est inconnu.</li>
                                    <li>Le type du prochain POKéMON de l'ennemi n’est pas annoncé.</li>
                                    <li>Possibilité de changer de POKéMON avant que l’adversaire n’envoie le sien.</li>
                                    <li>Les objets sont inutilisables en combat contre les dresseurs.</li>
                                    <li>L’expérience de dresseur gagnée après capture reste normale.</li>
                                    <li>La sauvegarde nécessite un objet spécifique ou d’être dans un Centre POKéMON.</li>
                                    <li>Les soins dans les Centres POKéMON sont payants, selon le nombre de POKéMON à soigner, mais illimités.</li>
                                    <li>Chaque objet est limité à 5 exemplaires maximum dans l’inventaire sauf les balls.</li>
                                    <li>25% de chance que chaque combats contre un dresseur soit un combat double.</li>
                                    <li>Les niveaux d’évolution augmentent de 20% par rapport à la norme.</li>
                                    <li>Perte de tous les objets en cas de défaite.</li>
                                    <li>Perte de la totalité de l'argent en cas de défaite.</li>
                                    <li>Un pokemon mis KO perd son expérience accumulée à son niveau actuel.</li>
                                    <li>40% de chance que les objets de soin aient un effet négatif aléatoire (poison, sommeil, etc.).</li>
                                    <li>Les POKéMON des dresseurs bénéficient d’un bonus de +20% en statistiques.</li>
                                    <li>Les dégâts infligés par le joueur sont réduits de 10%.</li>
                                    <li>Les POKéMON sauvages ont 25% de chance de fuir s’ils sont à moins de 10% de leurs PV max.</li>
                                    <li>Le taux de capture des POKéMON sauvages est réduit de 10% (jusqu’à 1/255).</li>
                                </ul>
                            </article>
                        </div>


                        <div class="unedifficulte">
                            <label for="expert" class="cta">
                                ⚫ Expert
                            </label>
                            <input type="checkbox" id="expert" class="toggle-difficulte">
                            <article class="texte-expert  texte-difficulte">
                                <p class="bold">Le summum du défi, réservé aux joueurs les plus aguerris.
                                    <br>Chaque décision compte, et la moindre erreur peut être fatale.</p>
                                <ul class="list-difficulte">
                                    <li>Le niveau des POKéMON est masqué.</li>
                                    <li>1 seul MULTI EXP permet de répartir l’expérience.</li>
                                    <li>Le nombre de POKéMON des dresseurs est inconnu.</li>
                                    <li>Le type du prochain POKéMON de l'ennemi n’est pas annoncé.</li>
                                    <li>Impossible de changer de POKéMON avant que l’adversaire n’envoie le sien.</li>
                                    <li>Les objets sont inutilisables en combat contre les dresseurs.</li>
                                    <li>L’expérience de dresseur gagnée après capture reste normale.</li>
                                    <li>La sauvegarde nécessite un objet spécifique ou d’être dans un Centre POKéMON.</li>
                                    <li>Les soins dans les Centres POKéMON sont payants, selon le nombre de POKéMON à soigner et limités à un par centre, tant que le joueur n'en n’a pas visité un autre.</li>
                                    <li>Chaque objet est limité à un seul exemplaire dans l’inventaire sauf les balls.</li>
                                    <li>50% de chance que chaque combats contre un dresseur soit un combat double.</li>
                                    <li>Les niveaux d’évolution augmentent de 35% par rapport à la norme.</li>
                                    <li>Perte de tous les objets en cas de défaite.</li>
                                    <li>Perte de la totalité de l'argent en cas de défaite.</li>
                                    <li>Un pokemon mis KO perd son expérience accumulée à son niveau actuel.</li>
                                    <li>60% de chance que les objets de soin aient un effet négatif aléatoire (poison, sommeil, etc.).</li>
                                    <li>Les POKéMON des dresseurs bénéficient d’un bonus de +30% en statistiques.</li>
                                    <li>Les dégâts infligés par le joueur sont réduits de 10%.</li>
                                    <li>Les POKéMON sauvages ont 30% de chance de fuir s’ils sont à moins de 10% de leurs PV max.</li>
                                    <li>Le taux de capture des POKéMON sauvages est réduit de 20% (jusqu’à 1/255).</li>
                                </ul>
                            </article>
                        </div>
                        
                    <div class="cta-container  hide">
                        <a href="#telechargement" class="cta">
                            Télecharger
                        </a>
                    </div>
                </article>
                
                <article class="apropos-image">
                    <div class="card-container">
                        <div class="card">
                            <img src="images/hooh.png"  class="presentation-card" alt="presentation">
                            <img src="images/hooh2.png" class="presentation-card  presentation-card--2" alt="presentation">
                        </div>
                    </div>
                </article>
            </div>
        </section>
    <!-- A propos -->
</template>

<script>
    export default {
        name: 'Apropos',
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
    .texte-apropos{
        margin-bottom: 20px;
    }
    .toggle-difficulte{
        display: none;
    }
    .apropos-texte{
        padding: 20px;
        background-color: white;
        border-radius:20px;
        width: 60%;
    }
    .apropos-image{
        width: 40%;
        min-width: 400px;
    }
    .texte-difficulte{
        border-radius: 20px;
        margin: 0;
        transition: 0.3s;
        transform: scaleY(0);
        max-height: 0px;
        padding:0px;
    }
    .toggle-difficulte:checked + .texte-difficulte{
        
        transform: scaleY(1);
        padding:20px;
        margin: 20px 0 30px;
        max-height: 1000px;
    }
    .unedifficulte{
        margin: 20px 0;
    }
    .texte-facile{
        background: #daffe7;
    }
    .texte-normale{
        background: #fcffda;
    }
    .texte-difficile{
        background: #ffdede;
    }
    .texte-expert{
        background: #e4e4e4;
    }
    .list-difficulte li{
        list-style: disc;
        margin-left: 20px;
        line-height: 25px;
    }
    .presentation-card{
        width: 100%;
    }
    .card{
        position: relative;   
    }
    .presentation-card--2{
        position: absolute;
        top: 0;
        left: 0;
        animation: showhide 5s linear infinite;
    }

    @keyframes showhide {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @media screen and (max-width: 900px){
        .card-container{
            display: none;
        }
        .apropos-texte{
            width: calc(100% - 40px);
            padding:20px
        }
        .view-content{
            flex-direction: column;
        }
        #apropos{
            padding-top: 40px;
        }
    }
</style>