<template>
  <v-layout row justify-center dark>
    <v-dialog v-model="show" persistent max-width="400px">
      <v-card >
        <v-card-title primary-title align-center class="headline lighten-2 justify-center">
          Product
        </v-card-title>
        <v-card-text>
          <v-container grid-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-form  id="register-form" xs12>
                    <v-text-field v-model="name" label="Name*" type="text" required
                    :rules="nameRules"></v-text-field>
                    <upload-btn :fileChangedCallback="fileChanged" :rules="imgRules"/>
                    <small>{{image && image.name}}</small>
                    <v-text-field v-model="price" label="Price*" type="number" required
                    :rules="priceRules"></v-text-field>
                    <v-text-field v-model="stock" label="Stock*" type="number" required
                    :rules="stockRules"></v-text-field>
                    <v-btn type="submit" @click.prevent="submit" color="success" form="register-form" block>Submit</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="show = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import UploadButton from 'vuetify-upload-button'
import { mapMutations } from 'vuex'
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'

export default {
  created () {
    if (this.edit) {
      this.productId = this.product._id
      this.name = this.product.name
      this.price = this.product.price
      this.stock = this.product.stock
    }
  },
  data () {
    return {
      name: '',
      price: 0,
      stock: 0,
      productId: '',
      image: null,
      nameRules: [
        (v) => v.length > 3 || 'Name length should greater than 3 character'
      ],
      imgRules: [
        (v) => !!v || 'Image is required'
      ],
      priceRules: [
        (v) => !!v || v > 0 || 'Price is required & greater than 0'
      ],
      stockRules: [
        (v) => !!v || v > 0 || v < 1000 || 'Stock is required and between 0-1000'
      ]
    }
  },
  components: {
    'upload-btn': UploadButton
  },
  props: ['value', 'edit', 'product'],
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    ...mapMutations(['showSnackbar', 'addProduct']),
    fileChanged (file) {
      this.image = file,
      console.log('fileChanged', this.image)
    },
    clearForm () {
      this.name = ''
      this.price = 0
      this.stock = 0
      this.image = null
      this.show = false
    },
    submit () {
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('stock', this.stock)

      if (this.edit) {
        if (this.image !== null) {
          formData.append('image', this.image)
        }
        for (var pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1])
        }
        myaxios({
          method: 'patch',
          url: `/products/${this.productId}`,
          data: formData
        })
          .then(({ data }) => {
            console.log(data)
            this.showSnackbar({ text: `Successfully edited data` })
            this.clearForm()
            this.$store.dispatch('getProduct')
          })
          .catch(error => {
            axiosErrorHandler(error)
          })
      } else {
        formData.append('image', this.image)
        myaxios({
          method: 'post',
          url: '/products',
          data: formData
        })
          .then(({ data }) => {
            this.showSnackbar({ text: `Successfully added new data` })
            this.addProduct(data)
            this.show = false
            this.clearForm()
          })
          .catch(error => {
            axiosErrorHandler(error)
          })
      }
    }

  }

}
</script>
