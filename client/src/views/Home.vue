<template>
  <div class="home">
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-start>
        <v-flex v-for="product in $store.state.products" :key="product._id">
          <ProductCard
            :product="product"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard'

export default {
  name: 'home',
  components: {
    ProductCard
  }
}
</script>

<!-- jangan lupa nanti di template untuk bikin grid list dari barang2-->
