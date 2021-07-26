<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <h1>INCOME AND EXPENSE TABLE</h1>
    <submit></submit>
    <my-table></my-table>
  </div>

</template>

<script>

import MyTable from '@/components/MyTable.vue'
import Submit from '@/components/Submit.vue'

export default {

  components: {
    MyTable,
    Submit
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 15%;
}
.home{
  border: 4px solid black;
  background-image: url(../assets/bg.gif);
  background-size: 100%;
  background-color: rgb(255, 199, 177);
  padding-bottom: 10%;
}
h1{
  color: white;
}


</style>

