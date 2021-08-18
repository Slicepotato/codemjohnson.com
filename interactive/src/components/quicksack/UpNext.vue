<template>
    <div class="coming-soon">
       <h2>Coming Soon!</h2>
       <p class="title">
           <span>{{ comingSoon }}</span>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

const sheetId = '1LfDJd7_731VeKbXcYJMBJnK23kE6MbipC7mH2a0FWXk';
const cellId = 'A2';
const googleSheet = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/' + cellId;


export default {
    data() {
        return {
            comingSoon: ''
        }
    },
    mounted() {
        this.getLatest(googleSheet)
    },
    methods: {
        getLatest(apiUrl) {
            axios.get(apiUrl, {
                params: {
                    key: 'AIzaSyA3CyPmdzBxT2h439TOuN-UxAQnD77244Q'
                }
            }).then(response => {
                console.log(response);
                this.comingSoon = response.data.values[0][0];
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';
.coming-soon {
    margin: 1rem 0;

    h2 {
        font-family: $roboto-slab;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: .5rem;
    }

    .title {
        text-align: center;
        padding: .25rem 0;
        font-style: italic;
        font-family: $roboto-slab;
        font-size: 1.5rem;
        border-top: 1px solid $grey-5;
        border-bottom: 1px solid $grey-5;

        span {
            display: block;
            padding: 1rem;
            border-top: 3px solid $grey-6;
            border-bottom: 3px solid $grey-6;
        }
    }
}
</style>