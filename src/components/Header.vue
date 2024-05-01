<template>
    <!-- header -->
        <header class="header">
            <nav class="menu">

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
                    <a href="#maj" class="cta">
                        Notes de mise à jour
                    </a>
                </div>
                
                <div class="cta-container">
                    <a href="#modes" class="cta">
                        Modes de jeu
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
        name: 'UneVue',
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
    @media screen and (max-width: 900px){
        .header{
            background-size: 120px auto, 100% 77px;
            height: 76px;
        }
    }
</style>