<template>
  <div style="background: #ccc;width: 100%;height: 500px;overflow: hidden">
    <!--    <p style="color: aqua;font-size: 16px">{{queryQata.name}}</p>-->
    <!--    <button @click='select(`糖果`)'>点击此处将‘糖果’发射给父组件</button>-->
    <!--    <p style="color: deeppink;height: 100px;line-height: 100px">{{meg}}</p>-->
    <div style="height:100px;box-sizing:border-box;margin: 50px;background:#fff;border-radius: 5px;overflow:hidden;">
      <p>标题</p>
      <button @click='select(`糖果`)'>通过</button>
      <button @click='select(`糖果`)'>驳回</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "home",
    props: {
      query: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        meg: '我是子组件',
        queryQata: {},
      }
    },
    mounted() {
      console.log('父组件传过来的值', this.query);
      this.queryQata = this.query
    },
    methods: {
      select(val) {
        let data = {
          cityname: val
        };
        this.$emit('showCityName', data);//select事件触发后，自动触发showCityName事件
      }
    }
  }
</script>

<style scoped>

</style>
