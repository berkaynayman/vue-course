Vue.component('VueCart', {
  props: {
    cart:{
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    cartTotal(){
      let total = 0
      this.cart.forEach((item) => {
        total += parseFloat(item.price, 10)
      })

      return total.toFixed(2)
    },
    isShoppingCart(){
      return this.type == 'shoppingCart'
    },
    savedCart(){
      return this.type == 'savedCart'
    }
  },
  methods:{
    removeFromCart(index){
      return this.cart.splice(index, 1)
    },
    changeCard(index){
      const item = this.removeFromCart(index)
      this.$emit('itemchangeoncard', item[0], this.type)
    }
  },
  template: `
      <div class="cart-wrapper">
        <h2>{{title}}</h2>
        <h4 v-if="!cart.length">No item in cart.</h4>
        <div class="cart">
            <div class="item" v-for="(item, index) in cart">
                <div class="image">
                    <a v-bind:href="item.url">
                        <img v-bind:src="item.image" />
                    </a>
                </div>
                <div class="info">
                    <h4>{{item.name}}</h4>
                    <p class="seller">by {{item.seller}}</p>
                    <p class="status avaliable" v-if="item.isAvailable">In Stock</p>
                    <div class="shipping" v-if="item.isEligible">
                        Eligible for FREE Shipping & FREE Returns
                    </div>
                    <a href="#" v-on:click="removeFromCart(index)">delete</a>
                    <a href="#" v-on:click="changeCard(index)" v-if="isShoppingCart" class="secondary">Save for later</a>
                    <a href="#" v-on:click="changeCard(index)" v-if="savedCart" class="secondary">Move to cart</a>
                </div>
              <p class="price">\${{item.price}}</p>
            </div>
            <div class="subtotal" v-if="cart.length">
                Subtotal ({{cart.length}} items) : $ <span class="price">{{cartTotal}}</span>
            </div>
        </div>
      </div>
  `
})

new Vue({
    el: '#app',
    data: {
        isLoading: true,
        cart: [],
        saved: []
    },
    methods: {
      handleItemChange(item, cartType){
        if(cartType === 'shoppingCart'){
          this.saved.push(item)
        }else{
          this.cart.push(item)
        }
         console.log(item, cartType);
      }
    },
    created() {
        fetch('./data.json')
          .then((res) => { return res.json() })
          .then((res) => {
            this.isLoading = false;
            this.cart = res.cart
            this.saved = res.saved            
          })
      }
  
})