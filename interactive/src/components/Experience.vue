<template>
    <div class="slick-wrap">
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
                  <template v-if="job.tagList.length">
                    <h5>Skills</h5>
                    <ul v-for="tag in job.tagList" :key="tag">
                      <li>
                        <span>{{ tag.name }}</span>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <p>nope</p>
                  </template>
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
    // this.fetchEmployment();   
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
        const jobsInfo = response.data;

        const tagInit = this.initTagArray(jobsInfo);

        this.addTagArray(tagInit);

        this.jobsInfo = jobsInfo;

      }).catch((error) => { 
        alert(error);
      });
    },
    fetchTags(tagList) {
      return this.$http.get('wp/v2/tags/' + tagList).then((response) => {
        return response.data;
      }).catch((error) => { 
        alert(error) 
      });
    },
    initTagArray(jobsArray){
      for(let job in jobsArray){
        jobsArray[job]['tagList'] = [];
      }
      
      return jobsArray;
    },
    async addTagArray(jobsArray){
      for(let job in jobsArray){
        for(let tag in jobsArray[job].acf.skills_list) {
          const res = await this.fetchTags(jobsArray[job].acf.skills_list[tag]);
          jobsArray[job]['tagList'].push({'name':res.name}); 
        }
      }
    }
  },
  mounted: function(){
    // this.fetchEmployment();
  }
  
}
</script>

<style lang="scss">

</style>
