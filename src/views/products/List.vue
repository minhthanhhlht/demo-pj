<template>
    
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="display-4">Product Management</h2>
    <p><router-link to="/product/create">Add new</router-link></p>
  </div>

  <div class="container">
    <div class="card-deck mb-3 text-center">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(product, index) in products">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ this.formatPrice(product.price) }}</td>
            <td>
              <button class="btn btn-primary">Edit</button> &nbsp;
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [] 
    };                  
  },
  created() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.$request.get('https://minhthanhhlht.com/api/products').then(res => {
        this.products = res.data
      })
    },
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
}
</script>