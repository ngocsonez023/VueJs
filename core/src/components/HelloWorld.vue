<template>
  <div>
    <strong>{{ getCount }}</strong>
    <button class="btn btn-success" v-on:click="increament"> Increament </button>
    <button class="btn btn-success" v-on:click="asyncDecreament"> Decreament </button>
    <button class="btn btn-success" v-on:click="getCategory"> Get Category </button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapMutations(['increament']),
    ...mapActions(['asyncDecreament', 'getCategory'])
  }
}
</script>

<style >

</style>
