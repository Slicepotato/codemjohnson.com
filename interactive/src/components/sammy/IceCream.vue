<template>
    <div id="platform">
        <section class="sammy">
            <div class="shadow"></div>
            <div class="bottom"></div>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <div class="top"></div>  
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    $purple-1: #4b384c;
    $purple-2: #632c65;
    $purple-3: #e2a9e5;
    $chocolate: #492020;
    $chocolate-shadow: #371818;

    .sammy {
        position: relative;
        left: 50%;
        top: 10vw;
        transform: translateX(-50%) rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
        transform-style: preserve-3d;
        width: 40vw;
        height: 80vw;
        
        .top, .bottom {
            background-color: $chocolate;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transform-style: preserve-3d;
            
            &:before, &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: inherit;
                background-size: cover;
                background-color: $chocolate-shadow;
            }
            
            &:before {
                transform-origin: left center;
                transform: rotateY(90deg);
                width: 3vw;
            }
            
            &:after {
                transform-origin: bottom center;
                transform: rotateX(90deg);
                height: 3vw;
                top: auto;
                bottom: 0;
                background-position: bottom center;
            }
        }
        
        .top {
            transform: translateZ(22vw);
        }
        .bottom {
            transform: translateZ(0);
            background-color: $chocolate-shadow;
        }
        
        .shadow {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            background-color: rgba(0, 0, 0, 0.3);
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
            transform: translateZ(-2em);
        }
        
        ul {
            padding: 0;
            margin: 0;
            list-style-type: none;    
            position: absolute;
            top: 1.5%;
            left: 1.5%;
            width: 97%;
            height: 97%;
            
            li {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
            
                &:nth-child(1) {
                    background-color: $purple-1;
                    transform: translateZ(6vw);
                }
                &:nth-child(2) {
                    background-color: $purple-2;
                    transform: translateZ(13vw);
                }
                &:nth-child(3) {
                    background-color: $purple-3;
                    transform: translateZ(20vw);
                }
                
                &:before, &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: inherit;
                    background-size: cover;
                }
                
                &:before {
                    transform-origin: left center;
                    transform: rotateY(90deg);
                    width: 7vw;
                }
                
                &:after {
                    transform-origin: bottom center;
                    transform: rotateX(90deg);
                    height: 7vw;
                    top: auto;
                    bottom: 0;
                    background-position: bottom center;
                }
            }
        }
    }
</style>