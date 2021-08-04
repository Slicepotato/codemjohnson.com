<template>
    <div class="slick-wrap">
        {{ jobsInfo }}
        <slick ref="slick" :options="slickOptions"  v-if="jobsInfo.length > 0">
            <template v-for="job in jobsInfo">
                <div class="card" :key="job">
                  {{ job.acf.start_date }}
                  <a v-if="job.acf.company_url" :href="job.acf.company_url">
                    <h4 class="employer">{{ job.title.rendered }}</h4>
                  </a>
                  <h4 class="employer" v-else>{{ job.title.rendered}}</h4>
                  <p class="job-title">{{ job.acf.job_title }}</p>
                  <p class="job-excerpt" v-html="job.excerpt.rendered"></p>
                  {{ job.tagList }}
                  <ul v-for="tag in job.tagList" :key="tag">
                    <li>blah blah blah</li>
                  </ul>
                </div>
            </template>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
    name: 'Experience',
    components: { Slick },
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                infinite: false,
                accessibility: true,
                adaptiveHeight: true,
                arrows: true,
                dots: true,
                draggable: true,
                edgeFriction: 0.30,
                swipe: true
                // Any other options that can be got from plugin documentation
            },
            jobsInfo: [],
        };
    },
    created: function() {
      this.init();    
    },
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });
    },
    init: function(){
			this.fetchEmployment();
		},
    fetchEmployment() {
      this.$http.get('wp/v2/employment').then((response) => {    
        this.jobsInfo = response.data;
        
        for(let job in response.data){
          this.jobsInfo[job]['tagList'] = []
          for(let tagIds in response.data[job].acf.skills_list){
            this.fetchTags(response.data[job].acf.skills_list[tagIds]).then(function(result){
              this.jobsInfo[job]['tagList'].push({'name':result.name});
            });
          }
        }

        console.log(this.jobsInfo);
      }, error => { 
        alert(error) 
      });
    },
    fetchTags(tagList) {
      return this.$http.get('wp/v2/tags/' + tagList).then((response) => {
        return response.data;
      }, error => { 
        alert(error) 
      });
    }
  }
}
</script>

<style lang="scss">

</style>