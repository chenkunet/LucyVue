<template>
  <div class="wheel_body">
    <div class="wheel_title">{{ title }}</div>
    <LuckyWheel
      ref="myLucky"
      width="300px"
      height="300px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallback"
      @end="endCallback"
    />
    <div>
      <Gift
        v-if="giftTosat"
        :title="toastTitle"
        :message="toastMessage"
        :image="toastImage"
        @close="closeToast"
      ></Gift>
    </div>
  </div>
</template>

<script>
import Gift from "../components/gift";
export default {
  components: {
    Gift,
  },
  data() {
    return {
      title: "晓宇" + "的幸运大抽奖",
      giftTosat: false,
      toastTitle: "",
      toastMessage: "",
      toastImage: "",
      prizesNum: 0,
      giftTypes: "",
      blocks: [{ padding: "10px", background: "#617df2" }],
      prizes: [
        { fonts: [{ text: "特等奖", top: "10%" }], background: "#f35f5f" },
        { fonts: [{ text: "一等奖", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "三等奖", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "二等奖", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "惊奇奖", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "谢谢惠顾", top: "10%" }], background: "#e7e49e" },
      ],
      buttons: [
        { radius: "50px", background: "#617df2" },
        { radius: "45px", background: "#afc8ff" },
        {
          radius: "40px",
          background: "#869cfa",
          pointer: true,
          fonts: [{ text: "开始\n抽奖", top: "-20px" }],
        },
      ],
    };
  },
  mounted() {
    this.giftTypes = require("../../static/types.json");
    console.log(this.giftTypes);

    if (
      localStorage.getItem("xiaoyu_title") &&
      localStorage.getItem("xiaoyu_message") &&
      localStorage.getItem("xiaoyu_image")
    ) {
      this.toastTitle = localStorage.getItem("xiaoyu_title");
      this.toastMessage = localStorage.getItem("xiaoyu_message");
      this.toastImage = localStorage.getItem("xiaoyu_image");
      this.giftTosat = true;
    }
  },
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback() {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play();
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 随机生成中奖索引
        this.prizesNum = parseInt(Math.random() * 1000) % 6;
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(this.prizesNum);
      }, 3000);
    },
    // 抽奖结束会触发end回调
    endCallback() {
      console.log(this.prizesNum);

      let times = localStorage.getItem("xiaoyu_times");
      times ? times++ : (times = 1);
      localStorage.setItem("xiaoyu_times", times);

      const gift = this.giftTypes[this.prizesNum];
      this.toastTitle = gift.title;
      this.toastMessage = gift.message;
      this.toastImage = gift.image;
      this.giftTosat = true;
    },
    closeToast() {
      this.giftTosat = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.wheel_body {
  width: 300px;
  margin: auto;
}
.wheel_title {
  margin: auto;
  height: 80px;
  font-size: 30px;
  color: #d18a2e;
}
</style>