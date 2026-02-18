<script setup lang="ts">
defineProps<{ 
  message: string ,
  pp_link: string,
  name: string
 }>()

</script>

<template>

  <hr>

  <div class="message_box">
    <!-- show profile img & name -->
    <img :src="pp_link" height="50">
    <h2 class="contact_name">{{ name }}</h2>

    <!-- show message -->
    <p>{{ message }}</p>
  </div>

  <hr>
  
</template>


<style scoped>
*{
  font-family:"Arial";
  color:white;
}


.message_box{
  background-image: linear-gradient(170deg, purple,rgb(60, 0, 93));
  padding:20px;
  padding-left:30px;
  border:5px solid rgb(171, 13, 228);
  border-radius: 50px;
}

</style>
