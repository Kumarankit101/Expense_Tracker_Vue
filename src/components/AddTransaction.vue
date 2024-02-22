<template>
    <h3>Add New Transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" v-model ="text" placeholder="Enter text ...">
        </div>
        <div class="form-control">
            <label for="amount">Amount <br />
            (negative - expene, positve - income)</label>
            <input type="text" id="amount" v-model ="amount" placeholder="Enter Amount ...">
        </div>
        <button class="btn"> Add Transaction</button>
    </form>
</template>

<script setup> 
    import { ref } from 'vue';
    import {useToast} from "vue-toastification"
    const text = ref("")
    const amount = ref("")

    const toast = useToast()

    const emit = defineEmits(['transactionAdded'])

    const onSubmit = () =>{
        if(!text.value || ! amount.value){
            toast.error(" Both Field Required");
            return;
        }

        const transactionData = {
            text: text.value,
            amount: parseFloat(amount.value)
        }
        // console.log(text.value, amount.value)

        emit('transactionAdded', transactionData)
        text.value = ""
        amount.value = ""
    }
</script>