<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ 
  message: string ,
  pp_link: string,
  name: string
 }>()

const count = ref(0)
</script>

<template>

  <hr>

  <!-- show profile img & name -->
  <img :src="pp_link" height="50">
  <h2 class="contact_name">{{ name }}</h2>

  <!-- show message -->
  <p>{{ message }}</p>

  <hr>

</template>


<style scoped>
*{
  font-family:"Arial";
}


.message_box{
  margin-bottom:50px;
  margin-top:50px;
}

</style>
