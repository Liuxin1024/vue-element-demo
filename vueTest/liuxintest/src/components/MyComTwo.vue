<template>
  <div>
    <p>我是父组件二</p>
    <Home :query="query" @showCityName="showCityName"></Home>
    <p>子组件传过来的数据：{{val.cityname}}</p>
  </div>
</template>

<script>
  import Home from '@/components/home'

  export default {
    name: "MyComTwo",
    components: {Home},
    data() {
      return {
        query: {},
        val: {
          cityname:'222'
        }
      }
    },
    mounted() {
      this.query.name = "我是父组件二的值"
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
