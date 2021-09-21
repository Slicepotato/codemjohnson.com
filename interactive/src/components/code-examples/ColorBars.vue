<template>
    <ul id="bars">
        <li v-for="index in 6" :key="index">
            <span class="outer">
                <span class="inner">
                    <span></span>
                </span>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ColorBars',
    data() {
        return {
            slug: this.$route.path.replace(/\s+/g, '-').replace(/\//g, '').toLowerCase(),
            maxW: null,
            barAnimator: ''
        }
    },
    mounted: function() {
        this.init();
    },
    created() {
        window.addEventListener("resize", this.barWidth);
    },
    destroyed() {
        window.removeEventListener("resize", this.barWidth);
        clearInterval(this.barAnimator); // Had to clear this... The animation kept bleeding on page load :3
    },
    methods: {
        init: function(){
            this.barWidth();
            this.barAnimation();
        },
        getRando(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        },
        barWidth(){
            this.maxW = document.getElementsByClassName('outer')[0].clientWidth;
        },
        barAnimation() {
            const self = this;
            this.barAnimator = setInterval(function(){ 
                document.getElementsByClassName('inner').forEach(bar => {
                    let w = self.getRando(5,self.maxW);
                    let scale = Math.floor((w / self.maxW) * 100);
                    let hsl = Math.floor((scale / 100) * 360);

                    bar.setAttribute(
                        'style',
                        'background-color: hsl(' + hsl + ', 100%, 50%); width: ' + w + 'px')
                    bar.firstChild.innerText = scale + '%';
                });
            }, 1000);
        }
    }
}
</script>

<style lang="scss">
    @font-face {
        font-family: 'Okuda';
        font-style: normal;
        font-weight: 400;
        src: url('https://raw.githubusercontent.com/Slicepotato/slicepotato.github.io/master/fonts/Swiss%20911%20Ultra%20Compressed%20BT.ttf') format('truetype');
    }

    * {
        box-sizing: border-box;	
    }

    #bars {
        list-style-type: none;
        margin: 0;
        padding: 1rem 0;
        background-color: #2a2a2a;
        border-radius: .5rem;
        
        li {
            padding: .5em 1em .5rem 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            
            .outer {
                flex: 1 0 auto;
                background-color: #3a3a3a;
                
                .inner {
                    display: block;
                    padding: 1.5rem 0;
                    transition: .25s all;
                    
                    span {
                        padding: 0 .5rem;
                        font-family: 'Okuda', sans-serif;
                        color: #efefef;
                        font-size: 2em;
                        position: absolute;
                        left: .5rem;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
            
            &:nth-child(even) {
                .outer {
                    display: flex;
                    justify-content: flex-end;
                    
                    .inner {
                        text-align: right;
                    }
                }
            }
            
            &:before, &:after {
                color: #2a2a2a;
                padding: 1.75em .25em;
            }
            &:before {
                content: '';
                margin-right: .25em;
                border-left: 4px solid #efefef;
                border-top: 1px solid #efefef;
                border-bottom: 1px solid #efefef;
            }
            &:after {
                content: '';
                margin-left: .25em;
                border-right: 4px solid #efefef;
                border-top: 1px solid #efefef;
                border-bottom: 1px solid #efefef;
            }
        }
    }
</style>