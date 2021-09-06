<template>
    <div id="panel" class="panel" >
        <div class="palette" :class="palette">
            <nav id="controls" class="ui-change">
                <ul>
                    <li>
                        <button @click="uiChange" type="button" id="cruise">Standard</button>
                    </li>
                    <li>
                        <button @click="uiChange" type="button" id="docking">Docking</button>
                    </li>
                    <li>
                        <button @click="uiChange" type="button" id="yellow-alert">Yellow Alert</button>
                    </li>
                    <li>
                        <button @click="uiChange" type="button" id="red-alert">Red Alert</button>
                    </li>
                    <li>
                        <button @click="uiChange" type="button" id="off">Disable UI</button>
                    </li>
                </ul>
            </nav>
            <header>
                <div class="title">
                    <ul>
                        <li class="corner corner--top-lt"></li>
                        <li></li>
                        <li></li>
                        <li class="off content">
                            <h1>Systems Display</h1>
                        </li>
                        <li class="cap cap--rt"></li>
                    </ul>
                </div>
                <div class="block">
                    <div class="col col--bar">
                        <ul>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                        <div class="col col--content">
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis orci neque, sit amet volutpat nisl pharetra a. Morbi hendrerit vitae ante et fermentum. Maecenas in ornare metus, sed aliquet mi. Integer eget scelerisque erat. Vivamus sit amet aliquet arcu, in fringilla turpis. Phasellus lobortis tincidunt justo in feugiat.</p>
                    </div>
                </div>
                <div class="foot">
                    <ul>
                        <li class="corner corner--bottom-lt"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="cap cap--rt"></li>
                    </ul>
                </div>
            </header>
            <main>
                <div class="head">
                    <ul>
                        <li class="corner corner--top-lt"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="cap cap--rt"></li>
                    </ul>
                </div>
                <div class="block">
                    <div class="col col--bar">
                        <ul>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                    <div class="col col--content">
                        <h2>Title</h2>
                        <p>In imperdiet tincidunt facilisis. Fusce nec augue quis nisi suscipit pulvinar. Ut rutrum finibus consectetur. Proin non odio sodales, lobortis ante in, ultrices diam. Nunc in sapien non ipsum interdum accumsan sed vel eros. Cras luctus euismod purus in dignissim. Nunc nec ipsum ante. In commodo viverra urna, ut vulputate purus elementum id. Curabitur tincidunt turpis vitae nunc vehicula scelerisque a sit amet ligula. Maecenas vitae nunc consectetur, molestie orci a, sagittis libero. Suspendisse nulla nisi, sagittis vel sem vitae, scelerisque egestas dui. Nulla malesuada vestibulum interdum. Praesent venenatis eros id molestie euismod. Nullam id fringilla augue.</p>
                        <p>Ut pretium felis sem, sed pretium purus mattis sit amet. Curabitur ex magna, lobortis non condimentum lacinia, finibus id nisl. Phasellus euismod nibh vel magna consequat facilisis. Ut aliquet eleifend malesuada. Phasellus sit amet neque lacus. Curabitur a nibh eu enim dictum cursus. Quisque nec augue nec purus vestibulum dictum. Duis semper, massa id suscipit rutrum, mauris erat pretium orci, a dapibus turpis purus eget diam. Quisque in odio condimentum neque tempus porta nec ac eros. Morbi nec dui efficitur, rhoncus quam vitae, consectetur libero.</p>
                    </div>
                </div>
                <div class="foot">
                    <ul>
                        <li class="corner corner--bottom-lt"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="cap cap--rt"></li>
                    </ul>
                </div>
            </main>
            <footer class="align-rt">
                <div class="head">
                    <ul>
                        <li class="corner corner--top-lt"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="cap cap--rt"></li>
                    </ul>
                </div>
                <div class="block">
                    <div class="col col--bar">
                        <ul>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                    <div class="col col--content">
                        <h2>Title</h2>
                        <p>In commodo viverra urna, ut vulputate purus elementum id. Curabitur tincidunt turpis vitae nunc vehicula scelerisque a sit amet ligula. Maecenas vitae nunc consectetur, molestie orci a, sagittis libero. Suspendisse nulla nisi, sagittis vel sem vitae, scelerisque egestas dui. Nulla malesuada vestibulum interdum. Praesent venenatis eros id molestie euismod. Nullam id fringilla augue.</p>
                    </div>
                </div>
                <div class="foot">
                    <ul>
                        <li class="corner corner--bottom-lt"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="cap cap--rt"></li>
                    </ul>
                </div>
            </footer>
        </div>
        <div class="palette-grid">
            <ul class="palette palette--cruise">
                <li class="text"><span></span></li>
                <li class="active"><span></span></li>
                <li class="ops-1"><span></span></li>
                <li class="ops-2"><span></span></li>
                <li class="ops-3"><span></span></li>
                <li class="ops-4"><span></span></li>
            </ul>
            <ul class="palette palette--blue">
                <li class="active"><span></span></li>
                <li class="blu-1"><span></span></li>
                <li class="blu-2"><span></span></li>
                <li class="blu-3"><span></span></li>
                <li class="blu-4"><span></span></li>
            </ul>
            <ul class="palette palette--yellow">
                <li class="active"><span></span></li>
                <li class="yellow-1"><span></span></li>
                <li class="yellow-2"><span></span></li>
                <li class="yellow-3"><span></span></li>
                <li class="yellow-4"><span></span></li>
            </ul>
            <ul class="palette palette--red">
                <li class="active"><span></span></li>
                <li class="red-1"><span></span></li>
                <li class="red-2"><span></span></li>
                <li class="red-3"><span></span></li>
                <li class="red-4"><span></span></li>
            </ul>
            <ul class="palette palette--off">
                <li class="active"><span></span></li>
                <li class="off-1"><span></span></li>
                <li class="off-2"><span></span></li>
                <li class="off-3"><span></span></li>
                <li class="off-4"><span></span></li>
                <li class="disable"><span></span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lcars',
    data () {
        return {
            palette: 'palette--cruise',
        }
    },
    methods: {
        uiChange: function(e) {
            let env = e.target.id;
            this.palette = 'palette--' + env;
        }
    }
}
</script>

<style lang="scss">
    $bgcolor: #2a2a2a;

    $text-lt: #79a3cd;

    $active-ops: #97c3e0;
    $ui-ops-1: #4a72ca;
    $ui-ops-2: #335da7;
    $ui-ops-3: #2350b5;
    $ui-ops-4: #133d87;

    $active-blu: #8d9bfe;
    $ui-blu-1: #4259ff;
    $ui-blu-2: #0166ff;
    $ui-blu-3: #0033ff;
    $ui-blu-4: #0000cc;

    $active-yel: #fed966;
    $ui-yel-1: #ffa90e;
    $ui-yel-2: #cd870d;
    $ui-yel-3: #986509;
    $ui-yel-4: #664405;

    $active-red: #ff9190;
    $ui-red-1: #fe0000;
    $ui-red-2: #cc0001;
    $ui-red-3: #990100;
    $ui-red-4: #660000;

    $active-off: #cccccc;
    $ui-off-1: #808080;
    $ui-off-2: #808080;
    $ui-off-3: #808080;
    $ui-off-4: #808080;
    $ui-disable: #4d4d4d;

    @mixin blink($light, $dark){
		0% { background-color: $light; }
		59% { background-color: $light; }
		60% { background-color: $dark; }
		99% { background-color: $dark; }
		100% { background-color: $light; }
    }

    @mixin cycle($color1, $color2, $color3, $color4, $color5){
        0% { background-color: $color1; }
        19% { background-color: $color1; }
        20% { background-color: $color2; }
        39% { background-color: $color2; }
        40% { background-color: $color3; }
        59% { background-color: $color3; }
        60% { background-color: $color4; }
        79% { background-color: $color4; }
        80% { background-color: $color5; }
        99% { background-color: $color5; }
    }

    @mixin blink-start($env,$start,$end){
        animation-name: $env;
        animation-duration: random(8) + s;
        animation-iteration-count: infinite;
        
        @keyframes #{$env} {
            @include blink($start, $end);
        }
    }

    @function randBetween($min, $max) {
        @return floor(random() * ($max - $min + 1) + $min);
    }

    @function generate($max, $count) {
        $r:();
        $currSum: 0;
        @for $i from 1 through $count {
            $r: append($r,randBetween(1%, $max - ($count - $i - 1) - $currSum), $separator: comma);
        $currSum: $currSum + nth($r,$i);
        }
        @return $r;
    }

    @font-face {
        font-family: 'Okuda';
        font-style: normal;
        font-weight: 400;
        src: url('https://raw.githubusercontent.com/Slicepotato/slicepotato.github.io/master/fonts/Swiss%20911%20Ultra%20Compressed%20BT.ttf') format('truetype');
    }

    .panel {
        background-color: $bgcolor;
        font-family: 'Okuda', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        padding: 1rem;
        border-radius: 1rem;
    }

    .ui-change {
        padding: 1em;
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            
            li {
                padding: .5em;
                
                button {
                    border: 0;
                    padding: .25em 1em;
                    font-family: 'Okuda', sans-serif;
                    font-weight: 400;
                    text-transform: uppercase;
                    font-size: 2em;
                    border-radius: 2em;
                    
                    &:hover, &:focus {
                        outline: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    header, main, footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        position: relative;
        
        .block {
            display: flex;
        }
    }

    .title, .foot, .head {
        flex: 1 0 100%;
        
        ul {
            display: flex;
            justify-content: space-between;
            
            li {
                flex: 1 0 auto;
                padding: .5rem;
                margin: .15rem;

                &.corner {
                    flex: 0 0 150px;
                    height: 75px;
                    position: relative;
                    padding: 0;
                        
                    &--top-lt {
                        border-radius: 5.2rem 0 0 0;
                        margin-right: 0;
                        margin-left: .25em;
                    
                        &:before {
                            content: '';
                            position: absolute;
                            padding: .75rem;
                            background-color: $bgcolor;
                            bottom: 0;
                            left: calc(100% - 2em);
                        }
                        
                        &:after {
                            content: '';
                            position: absolute;
                            padding: 2rem;
                            background-color: $bgcolor;
                            border-radius: 50%;
                            left: calc(100% - 2em);
                            top: 1em;
                        }
                        
                        & + li {
                            margin-left: 0;
                            flex: 0 0 1em;
                        }
                    }
                    &--bottom-lt {
                        border-radius: 0 0 0 4.5rem;
                        margin-right: 0;
                        margin-left: .25em;
                        
                        &:before {
                            content: '';
                            position: absolute;
                            padding: .75rem;
                            background-color: $bgcolor;
                            top: 0;
                            left: calc(100% - 2em);
                        }
                        
                        &:after {
                            content: '';
                            position: absolute;
                            padding: 2rem;
                            background-color: $bgcolor;
                            border-radius: 50%;
                            left: calc(100% - 2em);
                            bottom: 1em;
                        }
                        
                        & + li {
                            margin-left: 0;
                            flex: 0 0 1em;
                        }
                    }
                }
                
                
                &.content {
                    flex: 0 0 auto;
                    margin-top: 0;
                }
            }
        }
    }
    .title {
        ul {
            align-items: flex-start;
            
            li {
                margin-top: 1em;
            }
        }
        
        h1 {
            font-family: 'Okuda', sans-serif;
            font-weight: 400;
            font-size: 2.25rem;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
            margin: 0;
        }
    }
    .block {
        h2 {
            text-align: left;
        }
    }
    .head {
        ul {
            align-items: flex-start;
        }
    }
    .foot {
        ul {
            align-items: flex-end;
        }
    }

    .palette {
        &--cruise {
            .title, .head, .foot {
                ul {
                    li {
                        background-color: $ui-ops-3;
                    }
                }
            }
            
            #controls {
                ul {
                    li {
                        button {
                            background-color: $ui-ops-2;
                            
                            &:hover, &:focus {			
                                background-color: $active-ops;
                            }
                        }
                    }
                }
            }	
            header, main, footer {
                .col {
                    ul {
                        $colors: $ui-ops-1, $ui-ops-2, $ui-ops-3, $ui-ops-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    display: block;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-ops;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        &--docking {
            .title, .head, .foot {
                ul {
                    li {
                        background-color: $ui-blu-3;
                    }
                }
            }
            
            #controls {
                ul {
                    li {
                        button {
                            background-color: $ui-blu-2;
                            
                            &:hover, &:focus {			
                                background-color: $active-blu;
                            }
                        }
                    }
                }
            }
            
            header, main, footer {
                .col {
                    ul {
                        $blues: $ui-blu-1, $ui-blu-2, $ui-blu-3, $ui-blu-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($blues)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($blues, random(length($blues)));
                                    display: block;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-blu;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            header {
                .col {
                    ul {
                        li {
                            &:nth-child(1){
                                span {
                                    animation-name: blink-blue;
                                    animation-duration: 2s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
            }
        }
        &--yellow-alert {
            .title, .head, .foot {
                ul {
                    li {
                        background-color: $ui-yel-3;
                    }
                }
            }
            
            #controls {
                ul {
                    li {
                        button {
                            background-color: $ui-yel-2;
                            
                            &:hover, &:focus {			
                                background-color: $active-yel;
                            }
                        }
                    }
                }
            }
            
            $time-yellow: 3s;
            header {
                .col {
                    ul {
                        $colors: $ui-yel-1, $ui-yel-2, $ui-yel-3, $ui-yel-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    // padding: 1rem;
                                    display: block;
                                    // height: random(100) + px;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-yel;
                                    }
                                }
                            }
                        }
                        
                        li {
                            &:nth-child(1){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 1.5s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(2){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 2s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
                
                .foot {
                    ul {
                        li {
                            &:nth-child(1), &:nth-child(2){
                                animation-name: cycle-yellow;
                                animation-duration: $time-yellow;
                                animation-delay: 2.5s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(3){
                                animation-name: cycle-yellow;
                                animation-duration: $time-yellow;
                                animation-delay: 3s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(4){
                                animation-name: cycle-yellow;
                                animation-duration: $time-yellow;
                                animation-delay: 3.5s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(5){
                                animation-name: cycle-yellow;
                                animation-duration: $time-yellow;
                                animation-delay: 4s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(6){
                                animation-name: cycle-yellow;
                                animation-duration: $time-yellow;
                                animation-delay: 4.5s;
                                animation-iteration-count: infinite;
                            }
                        }
                    }
                }
            }
            
            main {
                .col {
                    ul {
                        $colors: $ui-yel-1, $ui-yel-2, $ui-yel-3, $ui-yel-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    // padding: 1rem;
                                    display: block;
                                    // height: random(100) + px;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-yel;
                                    }
                                }
                            }
                        }
                        
                        li {
                            &:nth-child(5){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 0s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(4){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: .5s;
                                    animation-iteration-yellow: infinite;
                                }
                            }
                            &:nth-child(3){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 1s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(2){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 1.5s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(1){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 2s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
                
                .head {
                    ul {
                        li {
                            &:nth-child(1), &:nth-child(2){
                                animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 2.5s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(3){
                                animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 3s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(4){
                                animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 3.5s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(5){
                                animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 4s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(6){
                                animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 4.5s;
                                    animation-iteration-count: infinite;
                            }
                        }
                    }
                }
            }
            
            footer {
                .col {
                    ul {
                        $colors: $ui-yel-1, $ui-yel-2, $ui-yel-3, $ui-yel-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    // padding: 1rem;
                                    display: block;
                                    // height: random(100) + px;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-yel;
                                    }
                                }
                            }
                        }
                        
                        li {
                            &:nth-child(3){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: .5s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(2){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 1s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(1){
                                span {
                                    animation-name: cycle-yellow;
                                    animation-duration: $time-yellow;
                                    animation-delay: 1.5s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
            }
        }
        &--red-alert {
            .title, .head, .foot {
                ul {
                    li {
                        background-color: $ui-red-3;
                    }
                }
            }
            
            #controls {
                ul {
                    li {
                        button {
                            background-color: $ui-red-2;
                            
                            &:hover, &:focus {			
                                background-color: $active-red;
                            }
                        }
                    }
                }
            }
            
            $time-red: 2s;
            header {
                .col {
                    ul {
                        $colors: $ui-red-1, $ui-red-2, $ui-red-3, $ui-red-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    // padding: 1rem;
                                    display: block;
                                    // height: random(100) + px;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-red;
                                    }
                                }
                            }
                        }
                        
                        li {
                            &:nth-child(1){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(2){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1.25s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
                
                .foot {
                    ul {
                        li {
                            &:nth-child(1), &:nth-child(2){
                                animation-name: cycle-red;
                                animation-duration: $time-red;
                                animation-delay: 1.5s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(3){
                                animation-name: cycle-red;
                                animation-duration: $time-red;
                                animation-delay: 1.75s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(4){
                                animation-name: cycle-red;
                                animation-duration: $time-red;
                                animation-delay: 2s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(5){
                                animation-name: cycle-red;
                                animation-duration: $time-red;
                                animation-delay: 2.25s;
                                animation-iteration-count: infinite;
                            }
                            &:nth-child(6){
                                animation-name: cycle-red;
                                animation-duration: $time-red;
                                animation-delay: 2.5s;
                                animation-iteration-count: infinite;
                            }
                        }
                    }
                }
            }
            main {			
                .col {
                    ul {
                        $colors: $ui-red-1, $ui-red-2, $ui-red-3, $ui-red-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    // padding: 1rem;
                                    display: block;
                                    // height: random(100) + px;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-red;
                                    }
                                }
                            }
                        }
                        
                        li {
                            &:nth-child(5){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: .25s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(4){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: .5s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(3){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: .75s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(2){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(1){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1.25s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
            
                .head {
                    ul {
                        li {
                            &:nth-child(1), &:nth-child(2){
                                animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1.5s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(3){
                                animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1.75s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(4){
                                animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 2s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(5){
                                animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 2.25s;
                                    animation-iteration-count: infinite;
                            }
                            &:nth-child(6){
                                animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 2.5s;
                                    animation-iteration-count: infinite;
                            }
                        }
                    }
                }
            }
            footer {
                .col {
                    ul {
                        $colors: $ui-red-1, $ui-red-2, $ui-red-3, $ui-red-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    // padding: 1rem;
                                    display: block;
                                    // height: random(100) + px;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-red;
                                    }
                                }
                            }
                        }
                        
                        li {
                            &:nth-child(3){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: .75s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(2){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1s;
                                    animation-iteration-count: infinite;
                                }
                            }
                            &:nth-child(1){
                                span {
                                    animation-name: cycle-red;
                                    animation-duration: $time-red;
                                    animation-delay: 1.25s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }
                    }
                }
            }
        }
        &--off {
            .title, .head, .foot {
                ul {
                    li {
                        background-color: $ui-off-3;
                    }
                }
            }
            
            #controls {
                ul {
                    li {
                        button {
                            background-color: $ui-off-2;
                            
                            &:hover, &:focus {			
                                background-color: $active-off;
                            }
                        }
                    }
                }
            }
            
            header, main, footer {
                .col {
                    ul {
                        $colors: $ui-off-1, $ui-off-2, $ui-off-3, $ui-off-4;

                        @for $i from 1 through 20 {
                            li:nth-child(#{length($colors)}n+#{$i}) {
                                padding: .15rem 0;

                                span {
                                    background-color: nth($colors, random(length($colors)));
                                    display: block;

                                    &:hover, &:focus {			
                                        cursor: pointer;
                                        background-color: $active-off;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
        header {
            .col {
                ul {
                    li {
                        @for $i from 1 through 2 {
                            &:nth-child(#{$i}) {
                            flex: 1 0 nth(generate(80,2),$i);
                            }
                    }
                    }
                }
            }
        }
        
        main {
            .col {
                ul {
                    li {
                        @for $i from 1 through 5 {
                            &:nth-child(#{$i}) {
                            flex: 1 0 nth(generate(80,5),$i);
                            }
                    }
                    }
                }
            }
        }
        
        footer {
            .col {
                ul {
                    li {
                        @for $i from 1 through 3 {
                            &:nth-child(#{$i}) {
                            flex: 1 0 nth(generate(80,3),$i);
                            }
                        }
                    }
                }
            }
        }
    }

    .cap {
        flex: 0 0 .5% !important;
        
        &--rt{
            border-radius: 0 2rem 2rem 0;
        }
    }

    .off { 
        background-color: transparent !important;
        color: $text-lt;
    }

    .col {
        &--bar {
            flex: 0 0 150px;
            
            ul {
                display: flex;
            flex-direction: column;
            justify-content: space-between;
                width: calc(100% - 2em);
                margin: 0 .25em;
                height: 100%;
                
                li {		
                    span {
                        height: 100%;
                    }
                }
            }
        }
        
        &--content {
            color: $text-lt;
            padding: 1em;

            p {
                font-size: 1.25rem;
                line-height: 1.75;
            }
        }
    }

    #palette-grid {
        margin-top: 3em;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        
        ul {
            li {
                padding: .5em;
        
                span {
                    display: inline-block;
                    padding: .25em 1em;
                    text-transform: uppercase;
                    font-size: 1.5rem;
                    border-radius: 2rem;
                    transition: .25s all;
                    
                    &:hover {			
                        cursor: pointer;
                    }
                }
            }
            
            &.palette {
                &--cruise {
                    li {
                        &.text { 
                            span {
                                background-color: $text-lt; 
                                &:after { content: '#{$text-lt}'; }
                            }
                        }
                        &.active {  
                            span {
                                background-color: $active-ops; 
                                &:after { content: '#{$active-ops}'; } 
                            }
                        }

                        &.ops-1 {  
                            span {
                                background-color: $ui-ops-1; 
                                &:after { content: '#{$ui-ops-1}'; } 
                            }
                        }
                        &.ops-2 {  
                            span {
                                background-color: $ui-ops-2; 
                                &:after { content: '#{$ui-ops-2}'; } 
                            }
                        }
                        &.ops-3 {  
                            span {
                                background-color: $ui-ops-3; 
                                &:after { content: '#{$ui-ops-3}'; } 
                            }
                        }
                        &.ops-4 {  
                            span {
                                background-color: $ui-ops-4; 
                                &:after { content: '#{$ui-ops-4}'; } 
                            }
                        }
                        span {
                            &:hover, &:focus { background-color: $active-ops; }
                        }
                    }
                }
                &--docking {
                    li {
                        &.active {  
                            span {
                                background-color: $active-blu; 
                                &:after { content: '#{$active-blu}'; } 
                            }
                        }
                        &.blu-1 {  
                            span {
                                background-color: $ui-blu-1; 
                                &:after { content: '#{$ui-blu-1}'; } 
                            }
                        }
                        &.blu-2 {  
                            span {
                                background-color: $ui-blu-2; 
                                &:after { content: '#{$ui-blu-2}'; } 
                            }
                        }
                        &.blu-3 { 
                            span { 
                                background-color: $ui-blu-3; 
                                &:after { content: '#{$ui-blu-3}'; } 
                            }
                        }
                        &.blu-4 {  
                            span {
                                background-color: $ui-blu-4; 
                                &:after { content: '#{$ui-blu-4}'; } 
                            }
                        }
                        span {
                            &:hover, &:focus { background-color: $active-blu; }
                        }
                    }
                }
                &--yellow-alert {
                    li {
                        &.active {  
                            span {
                                background-color: $active-yel; 
                                &:after { content: '#{$active-yel}'; } 
                            }
                        }
                        &.yellow-1 {  
                            span {
                                background-color: $ui-yel-1; 
                                &:after { content: '#{$ui-yel-1}'; } 
                            }
                        }
                        &.yellow-2 {  
                            span {
                                background-color: $ui-yel-2; 
                                &:after { content: '#{$ui-yel-2}'; } 
                            }
                        }
                        &.yellow-3 { 
                            span { 
                                background-color: $ui-yel-3; 
                                &:after { content: '#{$ui-yel-3}'; } 
                            }
                        }
                        &.yellow-4 {  
                            span {
                                background-color: $ui-yel-4; 
                                &:after { content: '#{$ui-yel-4}'; } 
                            }
                        }
                        span {
                            &:hover, &:focus { background-color: $active-yel; }
                        }
                    }
                }
                &--red-alert {
                    li {
                        &.active {  
                            span {
                                background-color: $active-red; 
                                &:after { content: '#{$active-red}'; } 
                            }
                        }
                        &.red-1 {  
                            span {
                                background-color: $ui-red-1; 
                                &:after { content: '#{$ui-red-1}'; } 
                            }
                        }
                        &.red-2 {  
                            span {
                                background-color: $ui-red-2; 
                                &:after { content: '#{$ui-red-2}'; } 
                            }
                        }
                        &.red-3 { 
                            span { 
                                background-color: $ui-red-3; 
                                &:after { content: '#{$ui-red-3}'; } 
                            }
                        }
                        &.red-4 {  
                            span {
                                background-color: $ui-red-4; 
                                &:after { content: '#{$ui-red-4}'; } 
                            }
                        }
                        span {
                            &:hover, &:focus { background-color: $active-red; }
                        }
                    }
                }
                &--off {
                    li {
                        &.active {  
                            span {
                                background-color: $active-off; 
                                &:after { content: '#{$active-off}'; } 
                            }
                        }
                        &.off-1 {  
                            span {
                                background-color: $ui-off-1; 
                                &:after { content: '#{$ui-off-1}'; } 
                            }
                        }
                        &.off-2 {  
                            span {
                                background-color: $ui-off-2; 
                                &:after { content: '#{$ui-off-2}'; } 
                            }
                        }
                        &.off-3 { 
                            span { 
                                background-color: $ui-off-3; 
                                &:after { content: '#{$ui-off-3}'; } 
                            }
                        }
                        &.off-4 {  
                            span {
                                background-color: $ui-off-4; 
                                &:after { content: '#{$ui-off-4}'; } 
                            }
                        }
                        &.disable {  
                            span {
                                background-color: $ui-disable; 
                                &:after { content: '#{$ui-disable}'; } 
                            }
                        }
                        span {
                            &:hover, &:focus { background-color: $active-off; }
                        }
                    }
                }
            }
        }
    }

    @keyframes blink-ops {
        @include blink($ui-ops-1, $ui-ops-4);
    }

    @keyframes blink-blue {
        @include blink($ui-blu-1, $ui-blu-4);
    }

    @keyframes cycle-red {
        @include cycle($active-red, $ui-red-1, $ui-red-2, $ui-red-3, $ui-red-4);
    }

    @keyframes cycle-yellow {
        @include cycle($active-yel, $ui-yel-1, $ui-yel-2, $ui-yel-3, $ui-yel-4);
    }
</style>