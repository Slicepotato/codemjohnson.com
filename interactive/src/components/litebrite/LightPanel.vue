<template>
    <div class="panel-wrapper">
        <ul class="dot-grid">
            <li v-for="(dot,index) in lights" :key="index" @click="lightUp(dot)" :class="{on: index === isActive}">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lights: [],
            isActive: false
        }
    },
    created: function() {
        this.init();
    },
    methods: {
        init: function(){
            this.makeDots();
        },
        makeDots() {
            for (let i = 0; i < 2000; i++) {
                this.lights.push(i);
            }
        },
        lightUp(dot) {
            this.isActive = dot;
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin random-bgr(){
    background-color: rgb(random(255), random(255), random(255));
    }

    .dot-grid {
        list-style-type: none;
        padding: 1em;
        margin: 0;
        
        $colors: #AAFF00, #FFAA00, #FF00AA, #AA00FF, #00AAFF;
        $repeat: 2000;  // How often you want the pattern to repeat.
        // Warning: a higher number outputs more CSS.

        @for $i from 1 through $repeat {
            li:nth-child(#{$i}) {
                //@include random-bgr();
                background-color: nth($colors, random(5));
        }
        }
            
        li {
            display: inline-block;
            // background-color: #efefef;
            padding: 10px;
            margin: 2px;
            border-radius: 50%;
            opacity: .1;
            // transition: all .25s ease-in-out;
            
            &.on {
                opacity: 1 !important;
            }
            
            &:hover {
                // transform: scale(1.5);
                cursor: pointer;
            }
        }
    }
</style>