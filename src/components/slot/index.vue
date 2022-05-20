<template>
  <div class="button">
    <div>{{ msg }}</div>
    <div>{{ msg1 }}</div>
    <button @click="getMessage()">点击事件</button>
    <!-- 普通插槽-->
    <slot> 插槽默认内容 </slot>
    <!-- 具名插槽-->
    <slot name="slot1"></slot>
    <!-- 作用域插槽，父组件调用子组件的数据-->
    <!-- 首先在子组件的slot上动态绑定一个值( :key='value') -->
    <!-- 然后在父组件通过v-slot : name = ‘values ’的方式将这个值赋值给 values -->
    <!-- 最后通过{{ values.key }}的方式获取数据 -->
    <slot name="slot2" :value1="val"></slot>
  </div>
</template>
<script>
export default {
  //注册的组件
  components: {},
  //注册属性
  props: {
    name: {
      type: String,
      default: "name",
    },
  },
  created() {
    // created 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
  },
  mounted() {
    // mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
  },
  computed: {
    msg1() {
      return this.msg.split("");
    },
  },
  // data() 为变量赋值
  data() {
    return {
      msg: "组件测试",
      val: "{子组件作用域数据}",
    };
  },
  // methods 编写js函数
  methods: {
    getMessage() {
      alert(this.name);
    },
  },
};
</script>