app.component('product-display', {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div id="app">
            <h1>{{ title }}</h1>
            <div class="product-container">
                <div class="product-left-container">
                    <p>Shipping: {{shipping}}</p>
                    <img height="200" width="200" v-bind:src="image"/>
                </div>
                <div class="product-right-container">
                    <h3>Description:</h3>
                    <p v-if="inStock">In stock</p>
                    <p v-else>Out of stock</p>

                    <h4>Skills:</h4>
                    <ul>
                        <li v-for="detail in details">{{detail}}</li>
                    </ul>

                    <h4>Variants:</h4>
                    <ul>
                        <li v-for="variant in variants" :key="variant.id">{{variant.color}}</li>
                    </ul>

                    <button v-on:click="addToCart()">Add to cart</button>
                    
                    <review-list :reviews="reviews"></review-list>
                    <review-form @review-submitted="addReview"></review-form>
                </div>
            </div>
        </div>`,
    data() {
        return {
            product: 'Belen',
            image: './assets/images/dog.jpeg',
            inStock: true,
            details: ["healthy", "friendly"],
            variants: [
                { id: 1, color: 'dark' },
                { id: 2, color: 'black' },
                { id: 3, color: 'ginger' },
                { id: 3, color: 'white' }
            ],
            cart: 0,
            reviews: []
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