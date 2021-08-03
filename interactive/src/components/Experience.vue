<template>
    <div class="slick-wrap">
        <slick ref="slick" :options="slickOptions"  v-if="positionMeta.length > 0">
            <template v-for="job in positionMeta">
                <div class="card" :key="job">
                  {{ job.acf.start_date }}
                  <a v-if="job.acf.company_url" :href="job.acf.company_url">
                    <h4 class="employer">{{ job.title.rendered }}</h4>
                  </a>
                  <h4 class="employer" v-else>{{ job.title.rendered}}</h4>
                  <p class="job-title">{{ job.acf.job_title }}</p>
                  <p class="job-excerpt" v-html="job.excerpt.rendered"></p>
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
            positionId: [],
            positionMeta: [],
            tagId: [],
            tags: []
        };
    },
    created: function() {
    // Fetch | Employment Post Ids
    this.$http.get('wp/v2/employment').then(response => {
      // get - List of employment posts
      for(let post in response.data){
        // get - Singular Post
        for(let tag in response.data[post].tags){
          // get - post tag array
          let tagName = this.fetchTags(response.data[post].tags[tag]);
          let theseTags = tagName.find(x => x.id == response.data[post].tags[tag]);
           theseTags.then(function(result) {
              let map = response.data[post].tags.map(tagId => {
                const tagObj = {}
                tagObj.id = tagId,
                tagObj.name = result

                return tagObj;
              });

              let tagList = map.map(x => {
                response.data[post].tagList = x;

                return x;
              });
              this.positionMeta.push(tagList);
           });
        }
        console.log(this.positionMeta);
      }
    }, error => { 
      alert(error) 
    });

    // Fetch | Use Employment IDs to gather Employmrnt posts with ACF
    
    // Fetch | Use Tag IDs to gather Tag details
    
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
    fetchEmployment(jobId) {
      this.$http.get('wp/v2/employment/' + jobId).then(response => {    
        for(let item in response.data.tags){
          let tagName = this.fetchTags(response.data.tags[item]);
          response.data['tagList'] = tagName;
        }
      }, error => { 
        alert(error) 
      });
    },
    fetchTags(tagList) {
      return this.$http.get('wp/v2/tags/' + tagList).then(response => {
        return Promise.resolve(response.data.name);
      }, error => { 
        alert(error) 
      });
    }
  }
}
</script>

<style lang="scss">

</style>