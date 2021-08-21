<template>
    <div class="panel-wrapper">
        <ul class="dot-grid" ref="dotgrid">
            <li v-for="(dot,index) in lights" :key="index" :class="{on: dot.isActive}">
                <button type="button" @click="lightUp(dot.id)"></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LightDots',
    data() {
        return {
            windowWidth: window.innerWidth,
            gridW: null,
            gridH: null,
            dot: null,
            lights: [],
        }
    },
    created: function() {
        this.init();
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.deBounce(function(){
                this.onResize;
            }));
        });

        this.gridW = this.$refs.dotgrid.clientWidth;
        this.gridH = this.$refs.dotgrid.clientHeight;
        this.makeDots(this.gridW, this.gridH);
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.deBounce(function(){
            this.onResize;
        })); 
    },
    methods: {
        init: function(){
            
        },
        onResize() {
            this.gridW = this.$refs.dotgrid.clientWidth;
            this.gridH = this.$refs.dotgrid.clientHeight;
            this.makeDots(this.gridW, this.gridH);
        },
        deBounce(func) {
            let timer;
            return function(event){
                if(timer){
                    clearTimeout(timer);
                } else {
                    timer = setTimeout(func,100,event);
                }
            };
        },
        makeDots(gw, gh) {
            this.lights.length = 0;
            let grid = Math.floor(gw / 26) * Math.floor(gh / 26);
            for (let i = 0; i < grid; i++) {
                let bulb = {
                    id: i,
                    isActive: null
                }
                this.lights.push(bulb);
            }
        },
        lightUp(dot) {
            let clicked = this.lights.find(light => light.id === dot);
            clicked.isActive == null ? clicked.isActive = 'on' : clicked.isActive = null;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';

    @mixin random-bgr(){
        background-color: rgb(random(255), random(255), random(255));
    }

    .panel-wrapper {
        background-color: $blk;
        padding: 1rem;
        border-radius: .5rem;
    }
    .dot-grid {
        list-style-type: none;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
        grid-template-rows: repeat(auto-fill, 25px);
        grid-row-gap: 5px;
        grid-column-gap: 5px;
        height: 92vh;
        overflow: hidden;
        
        $colors: #AAFF00, #FFAA00, #FF00AA, #AA00FF, #00AAFF;
        $repeat: 2000;  // How often you want the pattern to repeat.
        // Warning: a higher number outputs more CSS.

        @for $i from 1 through $repeat {
            li:nth-child(#{$i}) {
                button {
                    //@include random-bgr();
                    background-color: nth($colors, random(5));
                }
            }
        }
            
        li {
            display: inline-block;
            // background-color: #efefef;
            // transition: all .25s ease-in-out;

            button {
                padding: 10px;
                margin: 2px;
                border-radius: 50%;
                border: none;
                opacity: .1;
                transition: .25s all ease-out .25s;
            }

            &:hover {
                button {
                    opacity: 1;
                    transition: 0s all ease-in 0s;
                    cursor: pointer;
                }
            }

            &.on {
                button {
                    opacity: 1;
                }
            }
        }
    }
</style>