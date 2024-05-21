<template>
    <!-- header -->
        <header class="header">
            
            <input type="checkbox" id="menu-toggle" class="menu-toggle" v-model="isChecked">
            <label for="menu-toggle" class="menu-toggle-label">
                <img src="images/menu-open.svg"  class="menu-circle  menu-circle--open" alt="Ouvrir le menu">
                <img src="images/menu-close.svg" class="menu-circle  menu-circle--close" alt="Fermer le menu">
            </label>
            <div class="titre-logo--mobile">
                <img src="images/titre-pokemon.png" class="titre-logo-pokemon--mobile" alt="Pokémon Opale">
                <img src="images/titre-opale.png" class="titre-logo-opale--mobile" alt="Pokémon Opale">
            </div>
            <nav class="menu" @click="disableCheckbox">

                <div class="cta-container">
                    <a href="#presentation" class="cta">
                        Présentation
                    </a>
                </div>
                
                <div class="cta-container">
                    <a href="#telechargement" class="cta">
                        Télechargement
                    </a>
                </div>
                
                <div class="cta-container">
                    <a href="#modes" class="cta">
                        Nouveautés
                    </a>
                </div>
                
                <div class="cta-container hide">
                    <a href="#maj" class="cta">
                        Notes de mise à jour
                    </a>
                </div>
                
                <div class="cta-container">
                    <a href="#apropos" class="cta">
                        A propos
                    </a>
                </div>

            </nav>
        </header>
    <!-- header -->
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                isChecked: false
            };
        },
        methods: {
            disableCheckbox() {
                this.isChecked = false;
            },
        },
        mounted() {
        },
    };
</script>

<style scoped>    
    .header{
        width:100%;
        background-image: url('/public/images/header-left.png'), url('/public/images/header-right.png');
        background-repeat: no-repeat, repeat-x;
        background-position-x: left, 314px;
        height: 197px;
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
        position: fixed;
        top:0;
        left:0;
        z-index: 100;
        filter: drop-shadow(1px 1px 14px #000000AA);
    }
    .menu{
        width: 100%;
        margin: 0 auto;
        height: fit-content;
        display: flex;
        justify-content: flex-end;
        padding: 0 20px;
        gap: 20px;
    }
    .menu-circle {
        width: 60px;
        height: 60px;
        cursor: pointer;
        display: none;
    }
    .menu-toggle{
        display: none;
    }
    .titre-logo--mobile{
        display: none;
    }
    @media screen and (max-width: 1200px){
        .header{
            background-image: url('/public/images/header-right.png');
        }
    }
    @media screen and (max-width: 1000px){
        .header{
            background-size: 120px auto, 100% 77px;
            height: 76px;
        }
        
        .header{
            width: calc(100% - 40px);
            background-image: none;
            background-repeat: no-repeat, repeat-x;
            background-position-x: left, 314px;
            height: fit-content;
            display: flex;
            justify-content: flex-start;
            padding: 20px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            filter: drop-shadow(1px 1px 14px #000000AA);
            background-color: #d51f3f;
        }
        .menu{
            flex-direction: column;
        }
        .menu-circle {
            display: block;
        }
        .menu{
            position: fixed;
            top: 134px;
            left: -150%;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            padding: 20px;
            background: #a61630;
            width: calc(100% - 40px);
            transition: left 0.5s;
        }
        .menu-circle--close{
            display: none;
        }
        .menu-toggle:checked ~ .menu-toggle-label .menu-circle--open{
            display: none;
        }
        .menu-toggle:checked ~ .menu-toggle-label .menu-circle--close{
            display: flex;
        }
        
        .menu-toggle:checked ~ .menu{
            display: flex;
            left: 0;
        }
        .titre-logo--mobile{
            display: flex;
            width: 250px;
            flex-direction: column;
            align-items: center;
            top: -20px;
            position: relative;
            margin: auto;
            left: -30px;
            margin-bottom: -30px;
        }
        .titre-logo-pokemon--mobile,
        .titre-logo-opale--mobile{
            object-fit: contain;
            width: 100%;
        }
        .titre-logo-opale--mobile{
            width: 60%;
            max-width: 250px;
        }
        .menu-toggle-label{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>