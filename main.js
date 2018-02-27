new Vue({
  el:'#app',
  data:{
    message:'Hello',
    newItem:'',
    some:200,
    newQty:10,
    products: [
      {
        name:'samsung',
        qty:10
      },
      {
        name:'iPhone',
        qty:10
      
      },
      {
        name:'MI',
        qty:10,
      }
    ],
    cart:[],
  },
  methods:{
    addItem(){
      if(this.newItem == '')
        {
          alert('Enter value')
        }
      else if(this.products.find(product => product.name=== this.newItem))
      {
        alert('Item already exists')
      }
      else
      {
           this.products.push(
           {
            name:this.newItem,
             qty: this.newQty
             
           })
           this.newItem=''
           this.newQty=''
      }
    
    },
    addToCart(item){
      let existItem = this.cart.find(cartItem => cartItem.name === item.name)
      let productItem = this.products.find(product => product.name === item.name)
      if(existItem)
        {
          if(existItem.quantity < productItem.qty)
          {
            existItem.quantity++
          }
          else{
            alert("Product out of stock")
          }
          
        } 
      
      else
        this.cart.push({
          name: item.name,
          quantity: 1
        })
        
    }
  }
})