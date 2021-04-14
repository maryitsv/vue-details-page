app.component('review-list', {
    props:{
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div id="app">
            <h1>Reviews</h1>
            <ul class="user-review">
                <li v-for="(review, index) in reviews" :key="index">
                    {{review.name}} gave this {{review.rating}} stars
                </li>
            </ul>
        </div>`,
    data() {
        return {
            
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        addReview( review ) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return 'Product ' + this.product;
        },
        shipping(){
            if(this.premium){
                return 'Free';
            }
            return 4.99
        }
    }

})