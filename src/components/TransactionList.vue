<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" v-bind:key="transaction.id"
            v-bind:class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>${{ transaction.amount }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">X</button>
        </li>
        <!-- <li class="minus">
            Cash <span>-$400</span>
            <button class="delete-btn">X</button>
        </li> -->

    </ul>
</template>

<script setup>

const emit  =defineEmits(['transactionDeleted'])
import { defineProps } from 'vue';
const props = defineProps({
    transactions: {
        type : Array,
        required : true
    }
})

const deleteTransaction = (id) =>{
    // console.log(id)
    emit('transactionDeleted', id)

}
</script>

// <!-- <script setup>
// const transactions = [
//     { id: "1", text: 'Flower', amount: -20.00 },
//     { id: "2", text: 'Books', amount: -5.00 },
//     { id: "3", text: 'Salary', amount: +1000.00 },

// ];
// </script> -->

<!-- 
// <script>
// export default {
//     setup() {
//         const transactions = [
//             { id: "1", text: 'Flower', amount: -20.00 },
//             { id: "2", text: 'Books', amount: -5.00 },
//             { id: "3", text: 'Salary', amount: +1000.00 },

//         ];
//         return {transactions}
//     }

//     //     data() {
//     //     return {
//     //         transactions: [
//     //             { id: "1", text: 'Flower', amount: -20.00 },
//     //             { id: "2", text: 'Books', amount: -5.00 },
//     //             { id: "3", text: 'Salary', amount: +1000.00 },

//     //         ]
//     //     }
//     // }
// }

// </script> -->