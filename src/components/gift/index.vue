<template>
  <div>
    <div class="toast_div">
      <div class="toast_title">{{ title }}</div>
      <div class="toast">
        <img :src="image" style="width: 300px" />
      </div>
      <div class="toast_show">{{ message }}</div>
    </div>
    <div class="toast_button" v-show="show">
      <button style="background-color: #f6efdc" @click="close">
        我觉得不行
      </button>
      <button style="background-color: #b9e6e6" @click="choosed">选好了</button>
    </div>
    <div class="toast_result">
      <div></div>
    </div>
    <div class="back" tabindex="0"></div>
  </div>
</template> 
<script>
export default {
  name: "Toast",
  props: {
    title: {
      type: String,
      default: "零食大礼包",
    },
    message: {
      type: String,
      default: "普普通通的保底零食套餐哦",
    },
    image: {
      type: String,
      default: "/static/snacks.jpg",
    },
  },
  data() {
    return {
      show: true,
    };
  },
  mounted(){
    if (
      localStorage.getItem("xiaoyu_title") &&
      localStorage.getItem("xiaoyu_message") &&
      localStorage.getItem("xiaoyu_image")
    ) {
      let times = localStorage.getItem("xiaoyu_times");
      this.title = "你一共抽取了" + times + "次，最终的选择是";
      this.show = false;
    }
  },
  methods: {
    close() {
      this.$parent.closeToast();
    },
    choosed() {
      localStorage.setItem("xiaoyu_title", this.title);
      localStorage.setItem("xiaoyu_message", this.message);
      localStorage.setItem("xiaoyu_image", this.image);

      let times = localStorage.getItem("xiaoyu_times");
      this.title = "你一共抽取了" + times + "次，最终的选择是";
      this.show = false;
    },
  },
};
</script > 
<style lang="scss" scoped>
.toast_div {
  z-index: 8002;
  position: fixed;
  left: 50%;
  top: 30%;
  background: white;
  padding: 30px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  animation: show-toast 0.2s;
  overflow: hidden;
  align-items: center;

  .toast_title {
    z-index: 8002;
    color: #d18a2e;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .toast_show {
    margin-top: 5px;
    z-index: 8002;
    text-align: right;
    font-size: 15px;
  }
  .toast {
    z-index: 8002;
  }
}
.toast_button {
  position: relative;
  z-index: 8002;
  button {
    width: auto;
    margin: 20px;
    border: 0px;
    border-radius: 20px;
    padding: 12px 23px;
  }
}
.back {
  z-index: 8001;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
}
@keyframes show-toast {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>