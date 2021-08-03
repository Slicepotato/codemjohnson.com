<template>
    <div class="slick-wrap">
        <p>data</p>
        <slick
            ref="slick"
            :options="slickOptions">
            <template v-for="job in positions">
                <div class="card" :key="job"></div>
            </template>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
    name: 'Experience',
    components: { Slick },
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
            positions: []
        };
    },
    created: function() {
    // Fetch | Page Data
    this.$http.get('wp/v2/employment').then(response => {
      for(let item in response.data){
        this.positions.push(response.data[item]);
      }
      // console.log(response);
    }, error => { 
      alert(error) 
    });
  },
}
</script>

<style lang="scss">

</style>