<template>
    <div id="canvas-wrapper" ref="frame"></div>
</template>

<script>
export default {
    name: 'CanvasDots',
    data () {
        return {
            shell: {
                stage: null,
                front: {
                    id: 'application',
                    balls: [],
                    panel: null,
                    options: {
                        c: null,
                        i: 20,
                        r: null,
                        dx: null,
                        dy: null,
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
                    }
                },
                back: {
                    id: 'background',
                    balls: [],
                    panel: null,
                    options: {
                        c: null,
                        i: 180,
                        r: null,
                        dx: null,
                        dy: null,
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
                }
            }
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
        this.animate();
    },
    methods: {
        init: function(){
            const frame = this.shell;
            frame.stage = this.$refs.frame;
            if(!frame.front.options.c){
                frame.front.options.c = this.stage(frame.stage,frame.front);
            }
            if(!frame.back.options.c){
                frame.back.options.c = this.stage(frame.stage,frame.back);
            }

            this.radius(frame.front.options);
            this.radius(frame.back.options);

            this.makeCircles(frame.front);
            this.makeCircles(frame.back);
        },
        resize: function() {
            this.shell.front.panel.width = this.shell.stage.clientWidth;
            this.shell.front.panel.height = this.shell.stage.clientHeight;

            this.shell.back.panel.width = this.shell.stage.clientWidth;
            this.shell.back.panel.height = this.shell.stage.clientHeight;
        },
        radius: function(layer){
            layer.r = Math.floor(Math.random() * (layer.maxR - layer.minR + layer.varR)) + layer.minR;
        },
        animate: function(){
            requestAnimationFrame(this.animate);
	
	        this.moveBalls(this.shell.front);
	        this.moveBalls(this.shell.back);
        },
        moveBalls: function(panel){
            panel.options.c.clearRect(0,0,panel.panel.width,panel.panel.height);
            for(let i=0; i<panel.balls.length; i++){
  	            panel.balls[i].update();
	        }
        },
        makeCircles: function(o){
            o.balls.length = 0;
			
            for(var i=0; i<o.options.i; i++)
            {
                let details = new Object();
                details.r = Math.floor(Math.random() * (o.options.maxR - o.options.minR + o.options.varR)) + o.options.minR;
                details.x = Math.random() * (o.panel.width - details.r * 2) + details.r;
                details.y = Math.random() * (o.panel.height - details.r * 2) + details.r;
                details.dx = (Math.random() - o.options.speed) * 3;
                details.dy = (Math.random() - o.options.speed) * 3;
                details.c = o.options.c;
                details.a = o.options.alpha;
                details.col = o.options.color;

                o.balls.push(new this.Circle(details));
            }	
        },
        Circle: function(details){
            let dot = new Object();

	        // dot.minR = details.r;
	        dot.color = details.col[Math.floor(Math.random() * details.col.length)];    

            details.c.globalAlpha = details.a;

            this.draw = function() {
                details.c.beginPath();
                details.c.arc(details.x,details.y,details.r,0, Math.PI * 2, false);
                details.c.fillStyle = dot.color;
                details.c.fill();
            }
            this.update = function() {
                if(details.x + details.r > details.c.canvas.width || details.x - details.r < 0){
                    details.dx = -details.dx;
                }

                if(details.y + details.r > details.c.canvas.height || details.y - details.r < 0){
                    details.dy = -details.dy;
                }
                details.x += details.dx;		
                details.y += details.dy;

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
        stage: function(w,c){
            c.panel = document.createElement('canvas');
            c.panel.id = c.id;
            c.panel.width = w.clientWidth;
            c.panel.height = w.clientHeight;

            w.appendChild(c.panel);

            return c.panel.getContext('2d');    
        }
    }    
}
</script>

<style lang="scss">
    #canvas-wrapper {
        position: relative;
        border-radius: 1rem;
        border: 3px solid #eee;
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