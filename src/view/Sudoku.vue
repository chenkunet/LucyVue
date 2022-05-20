<template>
  <div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
    <div class="sudoku_row">
        <span class="sudoku_num">1</span>
        <span class="sudoku_num">2</span>
        <span class="sudoku_num">3</span>
        <span class="sudoku_num">4</span>
        <span class="sudoku_num">5</span>
        <span class="sudoku_num">6</span>
        <span class="sudoku_num">7</span>
        <span class="sudoku_num">8</span>
        <span class="sudoku_num">9</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gameData: {},
    };
  },
};
</script>
<style lang="scss" scoped>
.sudoku_row{
    background-color: antiquewhite;
}
.sudoku_num{
    background-color: aquamarine;
}
</style>