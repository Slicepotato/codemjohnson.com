<template>
    <nav>
        <ul class="content-wrap">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">About</router-link></li>
            <li><router-link to="/">Experience</router-link></li>
            <li><router-link to="/">Examples</router-link></li>
            <li><router-link to="/">Contact</router-link></li>
            <li><router-link to="/">Resume</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    nav {
        background-color: $off-blk;
        width: 100%;

        ul {
            @include flexbox;
            @include justify-content(flex-end);

            li {
                a {
                    color: $wht;
                    padding: .5rem;
                    font-family: $roboto-slab;
                    display: block;
                    text-decoration: none;
                }
            }
        }
    }
</style>