<template>
<q-page class="row justify-center">
  <div class="col-xs-12 col-md-6">
    <h1 class="text-center">Förmulär Sidan</h1>
    <q-form ref="form" class="q-gutter-sm" @submit.prevent="onSubmit" greedy>
        <q-input
          no-error-icon
          hide-bottom-space
          v-model="serialNumber"
          bg-color="white"
          class="q-pa-none"
          outlined          
          :rules="[(v) => v.length > 0 || 'Inte en giltig serienummer']"
          placeholder="Serienummer"
        />
        <q-input
          no-error-icon
          hide-bottom-space
          v-model="fullName"
          bg-color="white"
          class="q-pa-none"
          outlined          
          :rules="[(v) => v.length > 0 || 'Inte en giltig namn']"
          placeholder="Namn"
        />
        <q-input
          no-error-icon
          hide-bottom-space
          v-model="productionOrder"
          bg-color="white"
          class="q-pa-none"
          outlined          
          :rules="[(v) => v.length > 0 || 'Inte en giltig produktionsorder']"
          placeholder="Produktionsorder"
        />
        <q-input
          no-error-icon
          hide-bottom-space
          v-model="comment"
          bg-color="white"
          class="q-pa-none"
          outlined                    
          placeholder="Kommentar"
        />

        <div style="height: 340px;" class="flex flex-center q-my-lg">
          <circular-slider-component @slider-value="updateSliderValue"></circular-slider-component>
        </div>
        <div>
            <q-btn
                type="submit"
                color="green-5"
                label="Skicka formuläret"                
                class="full-width"
                unelevated
            />
        </div>
    </q-form>

  </div>
</q-page>
</template>

<script setup>
import {ref} from 'vue'
import {db} from '../boot/firebase'
import { collection, addDoc } from "firebase/firestore";
import CircularSliderComponent from 'src/components/CircularSliderComponent.vue' 

const serialNumber = ref("");
const fullName = ref("");
const productionOrder = ref("")
const comment = ref("")
const deviation = ref(0)
const form = ref(null);


const updateSliderValue = (value) => {
  deviation.value = value
}

const onSubmit = () => {
  if (form.value != null) {
    form.value.validate().then(async (success) => {
      if (success) {          
        try {
            const formData = {
                date: Date.now(),
                serialNumber: serialNumber.value,
                fullName: fullName.value,
                comment: comment.value,
                deviation: deviation.value
            }
            
            const docRef = await addDoc(collection(db, "forms"), formData);

            console.log("Document written with ID: ", docRef.id);
        } catch (err) {
          console.log(err)
        }
      }
    });
  }
};

</script>