app.component('review-form', {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<form id="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review"></label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating"></label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>3</option>
                <option>1</option>
            </select>
            <input class="button" type="submit" value="Submit">
        </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: 0
        }
    },
    methods: {
        onSubmit(){
            let review = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted',review)
            this.name = ''
            this.review = ''
            this.rating = ''
        }
        
    },
    computed: {
        
    }

})