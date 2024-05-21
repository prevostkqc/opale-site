<template>
    <!-- Header content -->
        <section class="header-container">
                <div  class="darkrai">
                    <img src="images/darkrai-2.png"  class="darkrai-2" alt="Darkrai">
                    <img src="images/darkrai.png"  class="darkrai-1" alt="Darkrai">
                    <div class="darkrai-animation">                    
                        <img src="images/darkrai-3.png"  class="darkrai-3" alt="Darkrai">
                        <img src="images/darkrai-4.png"  class="darkrai-4" alt="Darkrai">
                    </div>
                </div>
                <div class="entei-animation">
                    <img src="images/entei2.png" class="entei" alt="Pokémon Opale">
                    <img src="images/entei-cligne.png" class="entei-cligne" alt="Pokémon Opale">
                </div>
                <div class="titre-logo">
                    <img src="images/titre-pokemon.png" class="titre-logo-pokemon" alt="Pokémon Opale">
                    <div class="version-opale">
                        <img src="images/titre-opale.png" class="titre-logo-opale" alt="Pokémon Opale">
                    </div>
                </div>
                <img src="images/arrow_down.svg" class="arrow-scroll" alt="scroll">
        </section>
    <!-- Header content -->
</template>

<script>
    export default {
        name: 'Headercontent',
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
    .titre-logo-pokemon{
        animation: titre-apparait 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }
    .version-opale{
        position: relative;
        width: 100%;
        max-width: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        animation: titre-opale-apparait 2s cubic-bezier(0.25, 0.1, 0.25, 1) 2s forwards ;
        overflow: hidden;
    }
    .titre-logo-opale{
        position: relative;
        display: block;
        width: 100%;
    }
    .entei-animation{
        width: 100%;
        max-width: 600px;
        position: absolute;
        right: 50px;
        bottom: -120px;
        animation: entei-index 3s cubic-bezier(0.25, 0.1, 0.25, 1) 2s forwards ;
        pointer-events: none;
    }
    .entei{
        width:100%;
        transform: translateY(100%);
        animation: entei-apparait 3s cubic-bezier(0.25, 0.1, 0.25, 1) 2s forwards;
        pointer-events: none;
    }
    .entei-cligne{
        position: absolute;
        width:100%;   
        left: 0;
        top: 10%;
        z-index: 11;
        opacity: 0;
        animation: entei-cligne 3s cubic-bezier(0.25, 0.1, 0.25, 1) 5s infinite;
        pointer-events: none;
    }
    .darkrai{
        position: absolute;
        left: -80px;
        width: 50vw;
        max-width: 400px;
        animation : darkraimoove-up 20s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
        pointer-events: none;
    }
    .darkrai-1{
        width:100%;
        position: absolute;
        animation : darkrai-opacity 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
        pointer-events: none;
    }
    .darkrai-2{
        width:100%;
        position: absolute;
        filter: drop-shadow(2px 2px 50px black);
        pointer-events: none;
    }
    .darkrai-3{
        width:50%;
        position: absolute;
        opacity: 0;
        animation : darkrai-energie 0.125s infinitee, darkrai-energie-rotate 1s infinite;
        margin-top: -2vw;
        pointer-events: none;
    }
    .darkrai-4{
        width:50%;
        position: absolute;
        opacity: 0;
        animation : darkrai-energie 0.125s 0.625s infinite, darkrai-energie-rotate 0.25s infinite;
        pointer-events: none;
    }
    .darkrai-animation{
        top: 100px;
        left: 22%;
        width: 50%;
        animation: darkrai-energie-opacity 20s infinite;
        opacity: 0;
        position: absolute;
    }
    .arrow-scroll{
        opacity: 0;
        position: absolute;
        width: 100px;
        bottom: 40px;
        animation: arrow-scroll 2s infinite, arrow-apparait 2s cubic-bezier(0.25, 0.1, 0.25, 1) 2s forwards;
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
        30%{
            opacity: 0;
        }
        55%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes darkrai-energie-rotate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @keyframes titre-apparait{
        0%{
            width:0%;
            opacity: 0;
        }
        100%{
            opacity: 1;
            width: 90%;
        }
    }
    @keyframes titre-opale-apparait{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes entei-apparait{
        0%{
            transform: translateY(100%);
        }
        50%{
            transform: translateY(-20%);
        }
        100%{
            transform: translateY(10%);
        }
    }
    @keyframes entei-index{
        0%{
            z-index: 1;
        }
        49%{
            z-index: 1;
        }
        50%{
            z-index: 10;
        }
        100%{
            z-index: 10;
        }
    }
    @keyframes entei-cligne{
        0%{
            opacity: 0;
        }
        28%{
            opacity: 0;
        }
        30%{
            opacity: 1;
        }
        32%{
            opacity: 0;
        }
        48%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        52%{
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes arrow-scroll{
        0%{
            transform: translateY(0);
        }
        70%{
            transform: translateY(20px);
        }
        100%{
            transform: translateY(0);
        }
    }
    @keyframes arrow-apparait{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    
    @media screen and (max-width: 1200px){
        .header-container{
            height: 50vh;
        }
        .darkrai{
            width: 220px;
        }
        .entei-animation{
            width: 320px;
            right: 20px;
            bottom: -60px;
        }
    }
    
    @media screen and (max-width: 600px){
        .darkrai{
            display:none;
        }
        .header-container{
            height: 80vh;
        }
        .titre-logo{
            top: 170px;
            position: absolute;
            left: 20px;
            width: 300px;
        }
        .arrow-scroll{
            display: none;
        }
        .titre-logo--mobile{
            max-width: 50vw;
        }
    }
</style>