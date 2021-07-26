<template>
  <div>
    <table>





      <thead>
        <tr class>
          <th>Number</th>
          <th>Date</th>
          <th>Description</th>
          <th>Income</th>
          <th>Expense</th>
          <th>Balance</th>
        </tr>
      </thead>






      <tbody>
        <tr v-for="(ledg, index) in ledger" :key = "index">
          <td>{{ index + 1 }}</td>
          <td>{{ledg.myDate}}</td>
          <td>{{ledg.description}}</td>
          <td>{{ledg.income}}</td>
          <td>{{ledg.expense}}</td>
          <td>{{ledg.balance}}</td>
        </tr>
      </tbody>


    </table>
    <br>
    <br>
    
  </div>
</template>

<script>
import DataStore from '@/store/MyData'

export default {
  data() {
    return {
      ledger: [],
      totalIncome : 0,
      totalExpense : 0,
      totalBalance : 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData(){
      await DataStore.dispatch("fetchData")

      this.ledger = DataStore.getters.ledger
    },
  },


}
</script>

<style scoped lang="scss">
table{
  background-color: rgb(255, 208, 208);
  color: black;
  width: 90%;
  margin: auto;
  border: 5px solid rgb(255, 255, 255);
 }
th{
  font-size: 24px;
  background-color: salmon;
}
tr{
  height: 40px;

}
tr:nth-child(even){ 
  background-color: rgb(253, 161, 148);
}
span{
  color: white;
}


</style>
