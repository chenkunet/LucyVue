<template>
  <div class="app">
    <slotComponents>
      <button>普通插槽按钮</button>
      <template v-slot:slot1>
        <div></div>
        <button>具名插槽按钮</button>
      </template>
      <!-- <template #slot1> 
             <button>具名插槽按钮</button>
         </template> -->
      <template v-slot:slot2="value">
        <div></div>
        <button>作用域插槽按钮：{{ value.value1 }}</button>
      </template>
    </slotComponents>
  </div>
</template>
<script>
import slotComponents from "@/components/slot"; //测试插槽
export default {
  components: {
    slotComponents,
  },
};
</script>