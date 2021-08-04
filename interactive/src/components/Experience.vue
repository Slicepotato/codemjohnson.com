<template>
    <div class="slick-wrap">
        <slick ref="slick" :options="slickOptions"  v-if="jobsInfo.length > 0">
            <template v-for="job in jobsInfo">
                <div class="card" :key="job">
                  <div class="inner">
                    <h3 class="job-timeline">{{ job.acf.start_date }} - {{ job.acf.end_date }}</h3>
                    <h4 class="employer">
                      <template v-if="job.acf.company_url">
                        <a :href="job.acf.company_url"><span>{{ job.title.rendered}}</span></a>
                      </template>
                      <template v-else>
                        <span>{{ job.title.rendered}}</span>
                      </template>
                    </h4>
                    <p class="job-title">{{ job.acf.job_title }}</p>
                    <p class="job-excerpt" v-html="job.excerpt.rendered"></p>
                    <template v-if="job.tagList.length">
                      <div class="skills-list">
                        <h5>Skills</h5>
                        <ul class="flex flex--justify-start flex--align-center flex--wrap">
                          <li v-for="tag in job.tagList" :key="tag">
                            <span>{{ tag.name }}</span>
                          </li>
                        </ul>
                      </div>
                    </template>
                    </div>
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
  @import '@/assets/scss/utility/_variables.scss';
  @import '@/assets/scss/utility/_mixins.scss';

  .slick-track {
    @include flexbox;

    .slick-slide {
      height: inherit;

      > div {
        height: 100%;
      }
    }
  }

  .card {
    height: inherit;

    .inner {
      background-color: $grey-8;
      padding: 1rem;
      border: 2px solid $grey-4;
      height: 100%;
    }

    .job-timeline {
      font-size: .75rem;
      font-family: $roboto-mono;
    }

    .employer {
      font-family: $roboto-slab;
      font-weight: 500;
      font-size: 1.5rem;

      a {
        text-decoration: none;
      }
    }

    .job-title {
      font-style: italic;
      font-size: .875rem;
      border-bottom: 2px solid $grey-4;
      padding-bottom: .25rem;
      margin-bottom: .5rem;
    }

    .job-excerpt {
      margin-bottom: 1rem;
    }

    .skills-list {
      h5 {
        font-family: $roboto-slab;
        font-weight: 500;
        border-bottom: 1px solid $accent-orange;
        margin-bottom: .5rem;
      }

      ul {
        li {
          span {
            font-size: .625rem;
            background-color: $grey-7;
            padding: .25rem;
            border-radius: 5px;
            margin: 0 .5rem .25rem 0;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
