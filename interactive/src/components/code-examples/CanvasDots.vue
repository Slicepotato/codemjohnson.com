<template>
    <div id="canvas-wrapper"></div>
</template>

<script>
export default {
    name: 'CanvasDots',
    data () {
        return {
            wrapper: null,
            foreground: null,
            background: null,
            apptx: null,
            bgtx: null,
            options: {
                fore: {
                    c: null,
                    i: 20,
                    minR: 6,
                    maxR: 9,
                    varR: 20,
                    speed: .7,
                    alpha: .7,
                    color: [
                        '#F44336',
                        '#1E88E5',
                        '#FDD835'
                    ]
                },
                back: {
                    c: null,
                    i: 180,
                    minR: 3,
                    maxR: 5,
                    varR: 1,
                    speed: 0.001,
                    alpha: .2,
                    color: [
                        '#F44336',
                        '#1E88E5',
                        '#FDD835'
                    ]
                }
            },
            front: null,
            back: null 
        }
    },
    created: function(){
        const self = this;
        window.addEventListener('resize', function(e){
            self.resize();
            self.init();
        });
    },
    mounted: function(){
        this.init();
    },
    methods: {
        init: function(){
            this.wrapper = document.getElementById("canvas-wrapper");
            this.foreground = document.createElement('canvas');
            this.background = document.createElement('canvas');
            this.apptx = this.stage(this.wrapper,this.foreground,'application');
            this.options.fore.c = this.apptx;
            this.bgtx =this.stage(this.wrapper,this.background,'background');
            this.options.back.c = this.bgtx;

            this.options.fore.r = this.radius(this.options.fore);
            this.options.fore.dy = this.options.fore.dx;
            this.options.back.r = this.radius(this.options.back);
            this.options.back.dy = this.options.back.dx;

            this.front = this.ballPit(this.options.fore);
            this.back = this.ballPit(this.options.back);

            this.makeCircles(this.front);
            this.makeCircles(this.back);

            this.animate(); 
        },
        resize: function() {
            this.foreground.width = this.wrapper.innerWidth;
            this.background.width = this.wrapper.innerWidth;
            this.background.height = this.wrapper.innerHeight;
            this.foreground.height = this.wrapper.innerHeight;
        },
        radius: function(layer){
            return Math.floor(Math.random() * (layer.maxR - layer.minR + layer.varR)) + layer.minR;
        },
        animate: function(){
            requestAnimationFrame(this.animate);
	
	        this.moveBalls(this.front);
	        this.moveBalls(this.back);
        },
        moveBalls: function(panel){
            panel.c.clearRect(0,0,innerWidth,innerHeight);
            for(let i=0; i<panel.Arr.length; i++){
  	            panel.Arr[i].update();
	        }
        },
        makeCircles: function(o){
            o.Arr.length = 0;
			
            for(var i=0; i<o.i; i++)
            {
                let details = new Object();
                details.r = Math.floor(Math.random() * (o.s.maxR - o.s.minR + o.s.varR)) + o.s.minR;
                details.x = Math.random() * (innerWidth - details.r * 2) + details.r;
                details.y = Math.random() * (innerHeight - details.r * 2) + details.r;
                details.dx = (Math.random() - o.s.speed) * 3;
                details.dy = (Math.random() - o.s.speed) * 3;
                details.c = o.c;
                details.a = o.s.alpha;
                details.col = o.s.color;
                
                o.Arr.push(new this.circle(details));
            }	
        },
        ballPit: function(options){
            let balls = new Object();
            balls.c = options.c;
            balls.i = options.i;
            balls.s = options;
            balls.Arr = new Array();
        
            return balls;
        },
        circle: function(details){
            this.x = details.x;
            this.y = details.y;
            this.dx = details.dx;
            this.dy = details.dy;
            this.r = details.r;
            this.minR = details.r;
            this.color = details.col[Math.floor(Math.random() * details.col.length)];
            
            details.c.globalAlpha = details.a;

            this.draw = function() {
                details.c.beginPath();
                details.c.arc(this.x,this.y,this.r,0, Math.PI * 2, false);
                details.c.fillStyle = this.color;
                details.c.fill();
            }
            this.update = function() {	
                if(this.x + this.r > innerWidth || this.x - this.r < 0)
                {
                    this.dx = -this.dx;
                }
                

                if(this.y + this.r > innerHeight || this.y - this.r < 0)
                {
                    this.dy = -this.dy;
                }

                this.x += this.dx;		
                this.y += this.dy;
                
                // Interactive
                /*
                if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50)
                {
                    if(this.r < maxR)
                    {
                        this.r += 2;
                    }
                    apptx.fillStyle = 'white';
                    apptx.fillText(msg,this.x,this.y);


                } else if(this.r > this.minR)
                {
                        this.r -= 2;		
                }
                */

               this.draw();
            }

        },
        stage: function(w,c,id){
            c.id = id;
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            w.appendChild(c);

            let context = c.getContext('2d');
            
            return context;
        }
    }
    
}
</script>

<style lang="scss">
    #canvas-wrapper {
        position: relative;
        border-radius: 1rem;
        border: 2px solid #2a2a2a;
        height: 80vh;
    }
    canvas {
        position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	    height: 100%;
        width: 100%;
        border-radius: 1rem;
        
        &#application {
            z-index: 1;
        }
        &#background {
            background: rgb(255,255,255); /* Old browsers */
            background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(237,249,255,1) 100%); /* FF3.6-15 */
            background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(237,249,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
            background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(237,249,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#edf9ff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        }
    }
</style>