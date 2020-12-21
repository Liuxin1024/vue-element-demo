<template>
  <div>
    <p>我是父组件一</p>
    <Home :query="query" @showCityName="showCityName"></Home>
    <p>子组件传过来的数据：{{val.cityname}}</p>
  </div>
</template>

<script>
  import Home from '@/components/home'

  export default {
    name: "MyComOne",
    components: {Home},
    data() {
      return {
        query: {},
        val: {
          cityname:'111'
        }
      }
    },
    mounted() {
      this.query.name = "我是父组件一的值"
    },
    methods: {
      showCityName(val) {
        this.val = val
      }
    }
  }
</script>

<style scoped>

</style>
