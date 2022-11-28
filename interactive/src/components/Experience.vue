<template>
  <div class="slick-wrap">
    <div class="arrow-wrapper">
      <button id="slick-prev" type="button"><fa :icon="['fas','chevron-left']" /></button>
      <button id="slick-next" type="button"><fa :icon="['fas','chevron-right']" /></button>
    </div>
    <slick ref="slick" :options="slickOptions"  v-if="jobsInfo.length > 0">
      <div class="card" v-for="(job,index) in jobsInfo" :key="index">
        <section class="inner">
          <div class="front">
            <h3 class="job-timeline">
              <fa :icon="['fas', 'calendar']" class="icon" />{{ job.acf.start_date }} - {{ job.acf.end_date }}
            </h3>
            <h4 class="employer">
              <template v-if="job.acf.company_url">
                <a :href="job.acf.company_url" target="_blank"><span>{{ job.title.rendered}}</span></a>
              </template>
              <template v-else>
                <span>{{ job.title.rendered}}</span>
              </template>
            </h4>
            <h5 class="job-title">{{ job.acf.job_title }}</h5>
            <img class="job-img" v-if="job.acf.featured_image" :src="job.acf.featured_image.url" />
            <article class="job-excerpt" v-html="job.excerpt.rendered"></article>
            <template v-if="job.tagList.length">
              <div class="skills-list">
                <h5>Skills</h5>
                <ul class="flex flex--justify-start flex--align-center flex--wrap">
                  <li v-for="(tag,index) in job.tagList" :key="index">
                    <span>{{ tag.name }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </div>
          <div class="back">
            <span class="card-bg" :style="{ 'background-image':'url(' + cardBack +')'}"></span>
          </div>
        </section>
      </div>
    </slick>
    <div id="dots-wrapper"></div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

let token;
let cardBack;

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
              swipe: true,
              prevArrow: '#slick-prev',
              nextArrow: '#slick-next',
              appendDots: '#dots-wrapper',
              responsive: [
                {
                  breakpoint: 1160,
                  settings: {
                    slidesToShow: 2 
                  }
                },
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 1,
                    arrows: false
                  }
                }
              ]
              // Any other options that can be got from plugin documentation
          },
          jobsInfo: [],
          tags: [],
          token,
          cardBack
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
      this.fetchTags();

      this.fetchMedia(42).then(function(result){
        this.token = result;
      });
      this.fetchMedia(55).then(function(result){
        this.cardBack = result;
      });
		},
    fetchMedia(id){
        return this.$http.get('wp/v2/media/' + id).then((response) => {
            return response.data.source_url; 
        }, error => { 
            alert(error) 
        });
    },  
    fetchEmployment() {
      this.$http.get('wp/v2/employment').then((response) => {  
        this.jobsInfo = response.data;

        this.initTagArray(this.jobsInfo);
      }).catch((error) => { 
        alert('job: ' + error);
      });
    },
    fetchTags() {
      this.$http.get('wp/v2/tags?per_page=100').then((response) => {
        this.tags = response.data;
        this.fetchEmployment();
      }).catch((error) => { 
        alert(error) 
      });
    },
    initTagArray(jobsArray){
      for(let job in jobsArray){
        jobsArray[job]['tagList'] = [];
      }
      this.addTagArray(jobsArray);
    },
    addTagArray(jobsArray){
      for(let job in jobsArray){
        for(let tag in jobsArray[job].acf.skills_list) {
          const res = this.tags.find(obj => {
            if(obj.id === jobsArray[job].acf.skills_list[tag]){
              return obj;
            }
          });
          jobsArray[job]['tagList'].push({'name':res.name}); 
        }
      }
    }
  },  
}
</script>

<style lang="scss">
  @import '@/assets/scss/utility/_variables.scss';
  @import '@/assets/scss/utility/_mixins.scss';

  .slick-wrap {
    position: relative;

    .arrow-wrapper {
      display: none;

      @include at-least(850px) {
        display: block;
      }
    }

    .slick-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-271px);
      height: 500px;
      border: none;
      background-color: transparent;
      z-index: 9;
      padding: 0 .5rem;

      &.slick-disabled {
        color: $grey-6;
      }

      &#slick-prev {
        left: -.75rem;
      }
      &#slick-next {
        right: -.75rem;
      }

      &:hover, &:focus {
        cursor: pointer;
      }
    }

    .slick-slider {
        padding: 0 .5rem;
    }
  }
  .slick-dots {
    @include flexbox;
    @include justify-content(center);
    @include align-items(center);
    padding: 1rem;

    li {
      button {
        text-indent: -9999px;
        display: block;
        height: .825rem;
        width: .825rem;
        padding: 0;
        border: none;
        border-radius: 100%;
        background-color: $grey-7;
        margin: .5rem;
        transition: all .25s ease-in-out;

        &:hover, &:focus {
          cursor: pointer;
        }
      }

      &.slick-active {
        button {
          background-color: $accent-orange;
        }
      }
    }
  }

  .card {
    padding: 1rem 0;

    .inner {
      transition: transform 0.6s;
      transition-delay: 500ms;
      transform-style: preserve-3d;
      position: relative;
      border: 2px solid $blk;
      border-radius: .5rem;
      width: 100%;
      max-width: 360px;
      height: 600px;
      margin: 0 auto;
      box-shadow: -2px 2px 5px rgba(29,29,29,.5);

      .front, .back {
        position: absolute;
        bottom: 0;
        top: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      .front {
        @include flexbox;
        @include flex-direction(column);
        padding: 1rem;
        background-color: $chocolate;
        border: .5rem solid $wht;
        border-radius: .5rem;
        transform: rotateY(180deg);
      }
      .back {
        background-color: $chocolate-drk;
        border: .5rem solid $blk;
        left: 0;
        right: 0;

        .card-bg {
          display: block;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }

    .job-timeline {
      font-size: .75rem;
      font-family: $roboto-mono;
      color: $off-wht;

      .icon {
        margin-right: .5rem;
      }
    }

    .employer {
      font-family: $roboto-slab;
      font-weight: 500;
      font-size: 1.5rem;
      color: $off-wht;
      margin-bottom: .25rem;

      a {
        text-decoration: none;
        color: $off-wht;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .job-title {
      font-style: italic;
      font-size: .875rem;
      border-bottom: 2px solid $accent-orange;
      padding-bottom: .25rem;
      margin-bottom: .5rem;
      color: $grey-6;
    }

    .job-img {
      width: 100%;
      margin-bottom: .5rem;
      border: 2px solid $wht;
    }

    .job-excerpt {
      margin-bottom: 1rem;
      padding: .5rem;
      background-color: $wht;
      border-radius: .25rem;

      p {
        line-height: 1.25rem;
        font-size: .875rem;
      }
    }

    .skills-list {
      margin-top: auto;

      h5 {
        font-family: $roboto-slab;
        font-weight: 500;
        border-bottom: 1px solid $accent-orange;
        margin-bottom: .5rem;
        color: $off-wht;
      }

      ul {
        li {
          span {
            font-size: .625rem;
            font-weight: 400;
            background-color: $chocolate-drkr;
            color: $grey-8;
            padding: .25rem;
            border-radius: 5px;
            margin: 0 .5rem .25rem 0;
            display: inline-block;
          }
        }
      }
    }

    .slick-active & {
      .inner {
        transform: rotateY(180deg);
      }
    }
  }
</style>
