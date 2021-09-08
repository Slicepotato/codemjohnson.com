<template>
    <div class="desk" ref="desk">
        <ul class="b">
            <li>
                <ul class="k">
                    <li id="q" class="q work-it" data-lyric="Work it" v-on:click="lyric('work-it',$event)"><span>Work it</span></li>
                    <li id="w" class="q make-it" data-lyric="Make it" v-on:click="lyric('make-it',$event)"><span>Make it</span></li>
                    <li id="e" class="q do-it" data-lyric="Do it" v-on:click="lyric('do-it',$event)"><span>Do it</span></li>
                    <li id="r" class="q makes-us" data-lyric="Makes us" v-on:click="lyric('makes-us',$event)"><span>Makes us</span></li>
                    <li id="t" class="q"></li>
                    <li id="y" class="q"></li>
                    <li id="u" class="q more-than" data-lyric="More than" v-on:click="lyric('more-than',$event)"><span>More than</span></li>
                    <li id="i" class="q hour" data-lyric="Hour" v-on:click="lyric('hour',$event)"><span>Hour</span></li>
                    <li id="o" class="q our" data-lyric="Our" v-on:click="lyric('our',$event)"><span>Our</span></li>
                    <li id="p" class="q never" data-lyric="Never" v-on:click="lyric('never',$event)"><span>Never</span></li>
                </ul>
            </li>
            <li>
                <ul class="k">
                    <li id="a" class="q harder" data-lyric="Harder" v-on:click="lyric('harder',$event)"><span>Harder</span></li>
                    <li id="s" class="q better" data-lyric="Better" v-on:click="lyric('better',$event)"><span>Better</span></li>
                    <li id="d" class="q faster" data-lyric="Faster" v-on:click="lyric('faster',$event)"><span>Faster</span></li>
                    <li id="f" class="q stronger" data-lyric="Stronger" v-on:click="lyric('stronger',$event)"><span>Stronger</span>
                    </li>
                    <li id="g" class="q"></li>
                    <li id="h" class="q ever" data-lyric="Ever" v-on:click="lyric('ever',$event)"><span>Ever</span></li>
                    <li id="j" class="q after" data-lyric="After" v-on:click="lyric('after',$event)"><span>After</span></li>
                    <li id="k" class="q work-is" data-lyric="Work is" v-on:click="lyric('work-is',$event)"><span>Work is</span></li>
                    <li id="l" class="q over" data-lyric="Over" v-on:click="lyric('over',$event)"><span>Over</span></li>
                </ul>
            </li>
            <li>
                <ul class="k bottom">
                    <li id="z" class="q"></li>
                    <li id="x" class="q"></li>
                    <li id="c" class="q"></li>
                    <li id="v" class="q"></li>
                    <li id="b" class="q"></li>
                    <li id="n" class="q"></li>
                    <li id="m" class="q"></li>
                </ul>
            </li>
            <li>
                <ul class="k space">
                    <li id="space" class="q instrumental" data-lyric="(Instrumental)" v-on:click="lyric('instrumental',$event)"></li>
                </ul>
            </li>
        </ul>

        <div id="console" class="output" ref="console">
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Discovery',
    data () {
        return {
            playlist: [],
            panel: null,
            readout: null
        }
    },
    created: function() {
        this.init();
    },
    mounted: function() {
        this.fillKeys();
        this.panel = this.$refs.desk;
        this.readout = this.$refs.console;

        window.addEventListener('keypress', (e) => {
            if (e.keyCode == 113) { document.getElementById('q').click(); }
            if (e.keyCode == 119) { document.getElementById('w').click(); }
            if (e.keyCode == 101) { document.getElementById('e').click(); }
            if (e.keyCode == 114) { document.getElementById('r').click(); }
            if (e.keyCode == 117) { document.getElementById('u').click(); }
            if (e.keyCode == 105) { document.getElementById('i').click(); }
            if (e.keyCode == 111) { document.getElementById('o').click(); }
            if (e.keyCode == 112) { document.getElementById('p').click(); }
            if (e.keyCode == 97) { document.getElementById('a').click(); }
            if (e.keyCode == 115) { document.getElementById('s').click(); }
            if (e.keyCode == 100) { document.getElementById('d').click(); }
            if (e.keyCode == 102) { document.getElementById('f').click(); }
            if (e.keyCode == 104) { document.getElementById('h').click(); }
            if (e.keyCode == 106) { document.getElementById('j').click(); }
            if (e.keyCode == 107) { document.getElementById('k').click(); }
            if (e.keyCode == 108) { document.getElementById('l').click(); }
            if (e.keyCode == 32) { document.getElementById('space').click(); }
        });
    },
    methods: {
        init: function() {
            this.fetchAudio();
        },
        fillKeys: function() {
            const keys = document.querySelectorAll('.q');

            for (let i = 0; i < keys.length; ++i) {
                let key = keys[i].id;
                let b = document.createElement('b');
                b.append(key);
                if(key) {
                    keys[i].prepend(b);
                }
            }
        },
        lyric: function(slug, e) {
            let lyric = e.currentTarget.dataset.lyric;

            for(let i = 0; i < this.playlist.length; ++i){
                let file = this.playlist[i];

                if( file.slug == slug ) {
                    let audio = new Audio(file.source_url);
                    audio.play();

                    this.panel.classList.add(slug);

                    let display = this.readout;
                    let innerReadout = display.getElementsByTagName('span')[0];
                    
                    display.animate({opacity:'100'});
                    display.style.display = 'block';
                    innerReadout.innerHTML = lyric;

                    if( this.panel.classList.contains('instrumental') ){
                        let self = this;
                        setTimeout(function(){
                            self.panel.classList.remove(slug);
                            display.animate({opacity:'0'});
                            innerReadout.innerHTML = '';
                        },4000)
                    } else {
                        let self = this;
                        setTimeout(function(){
                            self.panel.classList.remove(slug);
                        },250)

                        setTimeout(function(){
                            display.animate({opacity:'0'});
                            innerReadout.innerHTML = '';
                        },500)
                    }
                }
            }
        },
        fetchAudio: function() {
            this.$http.get('wp/v2/media/?mime_type=audio/mpeg&per_page=20').then(response => {
                for(let item in response.data){
                    if( response.data[item].mime_type == 'audio/mpeg' ){
                        this.playlist.push(response.data[item]);
                    }
                }
            }, error => { 
                alert(error) 
            });
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    .desk {
        background-color: #1a1a1a;
        transition: .15s;
        padding: 2rem 1rem;
        border-radius: 1rem;
        
        &.work-it { background-color: hsl(22.5, 100%, 25%);	}
        &.make-it { background-color: hsl(45, 100%, 35%);	}
        &.do-it { background-color: hsl(67.5, 100%, 30%);	}
        &.makes-us { background-color: hsl(90, 100%, 45%);	}
        &.harder { background-color: hsl(112.5, 100%, 35%)	}
        &.better { background-color: hsl(135, 100%, 30%)	}
        &.faster { background-color: hsl(157.5, 100%, 25%)	}
        &.stronger { background-color: hsl(180, 100%, 20%) }
        &.more-than { background-color: hsl(202.5, 100%, 25%) }
        &.hour { background-color: hsl(225, 100%, 35%) }
        &.our { background-color: hsl(247.5, 100%, 30%) }
        &.never { background-color: hsl(270, 100%, 45%) }
        &.ever { background-color: hsl(292.5, 100%, 40%) }
        &.after { background-color: hsl(315, 100%, 50%) }
        &.work-is { background-color: hsl(337.5, 100%, 60%) }
        &.over { background-color: hsl(360, 100%, 20%) }
        &.instrumental {
            background: linear-gradient(124deg, hsl(0, 100%, 50%), hsl(30, 100%, 50%), hsl(60, 100%, 50%), hsl(90, 100%, 50%), hsl(120, 100%, 50%), hsl(150, 100%, 50%), hsl(180, 100%, 50%), hsl(210, 100%, 50%), hsl(240, 100%, 50%), hsl(270, 100%, 50%), hsl(300, 100%, 50%), hsl(330, 100%, 50%));
            background-size: 1800% 1800%;

            -webkit-animation: rainbow 4s ease infinite;
            -z-animation: rainbow 4s ease infinite;
            -o-animation: rainbow 4s ease infinite;
            animation: rainbow 4s ease infinite;
        }
    }

    .k {
        display: flex;
        justify-content: center;
        align-items: center;
        
        li {
            border: 2px solid #555;
            border-radius: 5px;
            height: 7vw;
            width: 7vw;
            margin: .5vw;
            transition: .25s;
            color: #ccc;
            // font-family: $open-sans;
            font-size: .6rem;
            padding: .25rem;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            position: relative;
            flex: 0 0 auto;
            
            b {
                font-weight: 900;
                font-size: 4vw;
                text-transform: uppercase;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                opacity:.25;
            }

            span {
                font-size: 1vw;
            }
            
            audio {
                display: none;
            }
            
            &:hover {
                border: 2px solid #29BA66;
                cursor: pointer;
            }
            
            &:active {
                position: relative;
                top: 2px;
                color: #efefef;
            }
            
            &.active {
                border: 2px solid #29BA66;
                position: relative;
                top: 2px;
                color: #efefef;
            }
        }
        
        &.bottom {
            margin-left: -5%;
        }
    }

    .space {
        li {
            width: 39vw;
            margin-left: 12vw;
        }	
    }

    .output {
        padding: 2rem;
        text-align: center;
        
        span {
            color: #efefef;
            font-size: 8vw;
            // font-family: $roboto;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 3px;
            height: 8vw;
            display: block;
        }
    }

    @include at-least($md) {
        .k {
            li {
                height: 5rem;
                width: 5rem;
                margin: .325rem;

                b {
                    font-size: 3rem;
                }
                span {
                    font-size: .7rem;
                }
            }

            &.space {
                li {
                    width: 27.5rem;
                    margin-left: 8.25rem;
                }
            }
        }

        .output {
            span {
                font-size: 5rem;
            }
        }
    }

    @-webkit-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-moz-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-o-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @keyframes rainbow { 
        0%{background-position:0% 82%}
        50%{background-position:100% 50%}
        100%{background-position:0% 82%}
    }
</style>