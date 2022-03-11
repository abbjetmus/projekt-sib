<template>
<div>
    <h1>Statistik Sidan</h1>
    <ul>
        <li v-for="(form, index) in formList" :key="index">{{form.fullName}} - {{form.serialNumber}}</li>
    </ul>
</div>
</template>

<script setup>
import { collection, onSnapshot } from "firebase/firestore";
import {db} from '../boot/firebase'
import {ref} from 'vue'
const formRef = collection(db, 'forms');

const formList = ref([])

onSnapshot(formRef,  (snapshot) => {
  snapshot.forEach((doc) => {
      formList.value.push(doc.data());
  });
});




</script>