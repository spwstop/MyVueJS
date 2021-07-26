<template>
  <div>

      <div>
          <label for="date">Date</label>
          <input type="date" v-model="form.myDate" />
      </div>

      <div>
          <label for="description">Description</label>
          <input type="text" v-model="form.description" placeholder="Add Description">
      </div>

      <div class="inc">
          <label for="income">Income</label>
          <input type="text" v-model.number="form.income" placeholder="0">
      </div>

      <div>
          <label for="expense">Expense</label>
          <input type="text" v-model.number="form.expense" placeholder="0">
      </div>


      <div class = "addBtn">
          <button @click="addData">Add</button>
      </div>
      <br>
      <br>

      <span>Total Income:  {{this.totalIncome}} </span>
      <span>Total Expense:  {{this.totalExpense}} </span>
      <span>Balance:  {{this.total}} </span>

  </div>
</template>

<script>

import DataStore from '@/store/MyData'
export default {
    data() {
    return {
      form:{
          myDate: '',
          description: '',
          income: 0,
          expense: 0,
          balance: 0
      },
      totalIncome : 2000,
      totalExpense : 800,
      total : 1200
    }
  },
  methods: {
    clearForm() {
            this.form = {
                myDate: '',
                description: '',
                income: 0,
                expense: 0,
                balance: 0
            }
        },
    addData() {
        this.calTotal()
        let payload = {
            myDate: this.form.myDate,
            description: this.form.description,
            income: this.form.income,
            expense: this.form.expense,
            balance : this.total
        }
        console.log(payload);
        DataStore.dispatch('addData', payload)
        this.cal()
        this.clearForm()
        },
    calTotal() {
        if (this.form.income > 0 && (this.form.expense === 0 || this.form.expense === '')){
            this.form.balance = this.total + parseInt(this.form.income)
            this.total = this.form.balance
        }
        else if ((this.form.income === 0 || this.form.income == '' ) && this.form.expense > 0){
            this.form.balance = this.total - parseInt(this.form.expense)
            this.total = this.form.balance
        }
        },
    cal() {
      if (this.form.income > 0 && (this.form.expense === 0 || this.form.expense === '')){
            this.totalIncome += parseInt(this.form.income)
        }
      else if ((this.form.income === 0 || this.form.income == '' ) && this.form.expense > 0){
            this.totalExpense += parseInt(this.form.expense)
        }
    }
    },
    
}
</script>


<style lang="scss" scoped>
label{
    width: 120px;
    display: inline-block;
}
button{
    margin-top: 10px;
    background-color: salmon;
    border: 3px solid salmon;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    transition-duration: 0.5s;
    font-family: cursive;
}
button:hover{
    background-color: white;
}
div{
    color: rgb(255, 69, 49);
    font-family: cursive;
    font-weight: bold;
    font-size: 20px;
}
input{
    height: 30px;
    width: 200px;
    border: 2px solid rgb(253, 58, 58);
    border-radius: 15px;
    margin : 5px;
    padding: 10px;
}
span{
    color: white;
}

    
</style>