<template>
    <div class="body back-row-toggle splat-toggle">
        <div class="rain front-row"></div>
        <div class="rain back-row"></div>

        <div class="lightning"></div>
        
        <div class="central">
            <h1>Retro</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColorPop',
    data() {
        return {
            slug: this.$route.path.replace(/\s+/g, '-').replace(/\//g, '').toLowerCase(),
        }
    },
    created: function() {
        this.init();
    },
    methods: {
        init: function(){
            this.makeItRain();
        },
        makeItRain: function() {
            console.log('rain');
            const rain = document.getElementsByClassName('rain');
            const frontRow = document.getElementsByClassName('front-row');
            const backRow = document.getElementsByClassName('back-row');
            let increment = 0;
            let drops = "";
            let backDrops = "";

            //clear out everything
            while(rain.firstChild) rain.removeChild(rain.firstChild);

            while (increment < 100) {
                //couple random numbers to use for various randomizations
                //random number between 98 and 1
                const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
                //random number between 5 and 2
                const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
                //increment
                increment += randoFiver;
                //add in a new raindrop with various randomizations to certain CSS properties
                drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
                backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';

                frontRow.appendChild(drops);
                backRow.appendChild(backDrops);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

    $pop-blk: #000000;
    $pop-wht: #ffffff;
    $pop-pink: #ff1ead;

    .body {
        font-family: 'Press Start 2P', cursive;
        position: relative;
        padding: 30vw 1rem;
        border-radius: .5rem;
        margin: 0;
        overflow: hidden;
        background: linear-gradient(to bottom, #202020, #111119);

        &.splat-toggle {
            .splat {
                display: block;
            }
        }
    }

    .palette {
        > div {
            &:nth-child(1) {
                background: $pop-blk;
                border: 2px solid $pop-wht;
            }
            &:nth-child(2) {
                background: $pop-wht;
            }
            &:nth-child(3) {
                background: $pop-pink;
            }
        }
    }

    .central {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    h1 {
        color: $pop-wht;
        font-size: 10vw;
        position: relative;
        text-transform: uppercase;
    
        &:before {
            content:'Retro';
            color: $pop-pink;
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: -2;
        }
        &:after {
            content:'Retro';
            color: $pop-blk;
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: -1;
        }
    }

    .rain {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;

        &.back-row {
            z-index: 1;
            bottom: 60px;
            opacity: 0.5;
        }
    }

    .drop {
        position: absolute;
        bottom: 100%;
        width: 15px;
        height: 120px;
        pointer-events: none;
        animation: drop 0.5s linear infinite;
    }

    @keyframes drop {
        0% {
            transform: translateY(0vh);
        }
        75% {
            transform: translateY(95vh);
        }
        100% {
            transform: translateY(95vh);
        }
    }

    .stem {
        width: 5px;
        height: 80%;
        margin-left: 7px;
        background: linear-gradient(to bottom, rgba(255, 30, 173, 0), rgba(255, 30, 173, 0.25));
        animation: stem 0.5s linear infinite;
    }

    @keyframes stem {
        0% {
            opacity: 1;
        }
        65% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .lightning {
        top:0;
        left:0;
        right:0;
        bottom:0;
        // z-index:-3;
        width:100%;
        height:100%;
        overflow:hidden;
        position:absolute;
        animation:flash 5s linear infinite;
    }

    @keyframes flash{ 
        0%,  93%,  96% {background-color:transparent}
        94%,  97%,  98% {background-color:$pop-wht}
        96%, 99%, 100% {background-color:$pop-pink} 
    }

    .splat {
        width: 15px;
        height: 10px;
        border-top: 2px dotted rgba(255, 30, 173, 0.5);
        border-radius: 50%;
        opacity: 1;
        transform: scale(0);
        animation: splat 0.5s linear infinite;
        display: none;
    }

    @keyframes splat {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        80% {
            opacity: 1;
            transform: scale(0);
        }
        90% {
            opacity: 0.5;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.5);
        }
    }
</style>