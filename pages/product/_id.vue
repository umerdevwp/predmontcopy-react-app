<template>

  <div v-if="product">
    <div class="container-fluid breadcrumbs-wrapper">
      <div class="breadcrumb container">
        <nuxt-link :to="'/'" >Home > </nuxt-link > 
        <nuxt-link :to="'/products'"> Products > </nuxt-link > 
        {{ product.title }}
      </div>
    </div>
    <img :src="product.bannerImage">
    <div class="container">
      <div class="bannerText" :class="{lightBanner : product.bannerColor === 'light' }">
        <h2>{{ product.bannerTitle }}</h2>
        {{ product.bannerContent }}
      </div>
      <!-- <h3>{{ product.title }} </h3> -->
      <div class="product-option">
      <div class="column">
        <h2><span class="badge">1</span>Product Options</h2>

        <div v-for="(optGroup, index) in product.productOptions" :key="index">
          <h6>{{optGroup.option_name}}</h6>
          <select :v-model="optGroup.option_model" >
            <option value="">Choose {{optGroup.option_name}}</option>
            <option v-for="(optItem) in optGroup.option_title_price"
              :key="optItem.Price"
              :value="optItem.Price"
              :id="optItem.title">
              {{ optItem.title }}
            </option>
          </select>
        
        </div>
      </div>


      <div class="column">
        <h2><span class="badge">2</span>Upload Design</h2>
        <img id="frontpreviewing" src="http://piedmontcopy.com/wp/wp-content/themes/piedmont/assets/images/upload-img.png">
      </div> 


      <div class="column job-summary">
        <h2><span class="badge">3</span>Job Information</h2>
        <input type="text" placeholder="Job Name" name="job_name">
        <input type="text" placeholder="Full Name" name="full_name">
        <input type="text" placeholder="Email" name="email">
        <input type="text" placeholder="Phone" name="phone">
        <textarea 
          name="additional_information" 
          class="form-control" 
          rows="5" 
          placeholder="Additional Information">
        </textarea>
        <input type="submit" class="btn btn-primary" value="submit order" name="submit-order">

      </div>
      </div>
    <ProductTabs :product="product"/>
    </div>
  </div>
</template>
<script>

import ProductTabs from '@/components/Product-tabs.vue'

export default {
  components: {
    ProductTabs
  },
  head() {
    return {
      title: 'Product Detail'
    }
  },
  /* validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
    
  },  */
  async asyncData({ $axios, error, params }) {
      return $axios.get('http://piedmontcopy.com/wp/wp-json/product/v2/productID/' + params.id ).then((response) => {
      
      //alert(params.id);
      return {
        product: response.data
      }
     
    })
    .catch( e => {
      error({ statusCode: 503, message: 'unable to load products at this time. please try again'})
    })
  },
  computed : {
    
   
  },
  methods: {
   /*  bannerImage() {
      return require ('~/assets/images/' + this.product.banner)
    } */
    
  },
 
}


</script>
<style scoped>

input {
  margin-bottom: 15px;
}
.column {
  width: 30%;
  float: left;
  padding: 0 30px;
}
.btn-primary.btn {
    color: #fff;
    background-color: #ff9948;
}
.job-summary .btn-primary {
    width: 100%;
    text-transform: uppercase;
    font-size: 16px;
    margin: 0 auto;
    margin: 20px 0;
    padding: 0;
    border:none;
}
.job-summary .btn-primary:hover {
  opacity: 0.9;
}
.product-option {
    width: 100%;
    float: left;
    margin-bottom: 40px;
    border-radius: 6px;
    background-color: #f7f7f7;
    padding: 15px;
}
  .breadcrumb {
    
    padding-top: 5px;
    margin: 0 auto;
    font-size: 11px;
    background: unset !important;
  }
.breadcrumb a {
  color: #656565;
  padding: 0 5px;
}
.bannerText {
    position: relative;
    color: #575757;
    margin-top: -200px;
    width: 450px;
    margin-bottom: 100px;
    min-height: 115px;
}
.breadcrumbs-wrapper {
    border-top: 1px solid rgba(55,55,55,.1);
    height: 28px;
    /* margin-bottom: -28px;
    position: relative;
    z-index: 90; */
    color: #FFF;
    background: rgb(198,198,198); /* Old browsers */
background: -moz-linear-gradient(top, rgb(198,198,198) 0%, rgb(202,202,202) 12%, rgb(206,206,206) 25%, rgb(196,196,196) 39%, rgb(187,187,187) 50%, rgb(187,187,187) 76%, rgb(173,173,173) 82%, rgb(173,173,173) 82%, rgb(182,182,182) 91%, rgb(179,179,179) 93%, rgb(179,179,179) 93%, rgb(179,179,179) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgb(198,198,198) 0%,rgb(202,202,202) 12%,rgb(206,206,206) 25%,rgb(196,196,196) 39%,rgb(187,187,187) 50%,rgb(187,187,187) 76%,rgb(173,173,173) 82%,rgb(173,173,173) 82%,rgb(182,182,182) 91%,rgb(179,179,179) 93%,rgb(179,179,179) 93%,rgb(179,179,179) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgb(198,198,198) 0%,rgb(202,202,202) 12%,rgb(206,206,206) 25%,rgb(196,196,196) 39%,rgb(187,187,187) 50%,rgb(187,187,187) 76%,rgb(173,173,173) 82%,rgb(173,173,173) 82%,rgb(182,182,182) 91%,rgb(179,179,179) 93%,rgb(179,179,179) 93%,rgb(179,179,179) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c6c6c6', endColorstr='#b3b3b3',GradientType=0 ); /* IE6-9 */

}
.lightBanner {
  color: #FFF;
}
.product-option h2 {
    font-size: 14px;
    color: #ffffff;
    background-color: #6aa6d1;
    width: 100%;
    padding: 6px 10px;
    margin-top: 10px;
}
.badge {
    display: inline-block;
    padding: 4px 6px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #ff9948;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.product-option h6 {
  padding:15px 0 0;
  color: #656565;
  font-size: 14px;
}
.product-option select {
    height: 30px;
    line-height:1;
    color: #656565;
    font-size: 14px;
}
.job-summary input, [type='text'],[type='number'],[type='search'],[type='password'] {
    height: 40px;
    font-size: 14px;
}
.job-summary textarea {
    font-size: 14px;
    box-sizing: border-box;
    border: solid 1px rgba(0, 0, 0, 0.4);
    border-radius: 0;
}
</style>