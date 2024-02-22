<template>
    <Header />
    <div class="container">
        <Balance :total="+total"></Balance>
        <IncomeExpenses :income= "+income" :expense ="+expense"></IncomeExpenses>
        <TransactionList :transactions="transactions" @transactionDeleted = "handleTransactionDeleted"></TransactionList>
        <AddTransaction @transactionAdded="handleTransactionSubmitted"></AddTransaction>
    </div>
</template>

<script setup>
import Header from "./components/Header.vue"
import Balance from './components/Balance.vue'
import IncomeExpenses from "./components/IncomeExpenses.vue"
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";
import {useToast} from "vue-toastification"
const toast = useToast()


import { ref, computed, onMounted } from 'vue'
onMounted(() =>{
    const savedTransaction = JSON.parse(localStorage.getItem('transactions'));
    if(savedTransaction) {
        transactions.value = savedTransaction
    }
})

const transactions = ref([
    // { id: "1", text: 'Flower', amount: -20.99},
    // { id: "2", text: 'Books', amount: -5.00 },
    // { id: "3", text: 'Salary', amount: +1000.00 },

]);

const total = computed(() => {
    return transactions.value.reduce((sum, transaction) => {
        return sum + transaction.amount
    }, 0)
}
)
const income = computed(() => {
    return transactions.value.filter((transactions) => transactions.amount>0).reduce((sum, transaction) => {
        return sum + transaction.amount
    }, 0).toFixed(2)
}
)
const expense = computed(() => {
    return transactions.value.filter((transactions) => transactions.amount<0).reduce((sum, transaction) => {
        return sum + transaction.amount
    }, 0).toFixed(2)
}
)

const handleTransactionSubmitted = (transactionData) => {
    transactions.value.push({
        id: generateID(),
        text: transactionData.text,
        amount: transactionData.amount
    })
    saveTransactionToLocalStorage()
    toast.success("Transaction Added")
}

const generateID = () =>{
    const idLength  = 10
    let ans = ""
    const subset= "1234567890qwertyuooplkjhgfdasmzxncbv"

    for( let i = 0; i <= idLength; i++){
        ans += subset[Math.floor(Math.random()*subset.length)]
    }
    return ans
}

const handleTransactionDeleted = (id) => {
    console.log(id)
    transactions.value = transactions.value.filter((transaction) => transaction.id != id
    )
    saveTransactionToLocalStorage()
    toast.success("Transaction Deleted")
}

// Save to localStorage
const saveTransactionToLocalStorage = () =>{
    localStorage.setItem('transactions', JSON.stringify(transactions.value))
}



</script>