<template>
  <div class="addCard">

    <h1>ADD CARD PAGE Anton-M</h1>
    <CardForm />
    
  </div>
</template>

<script>
// @ is an alias to /src
import CardForm from '../components/CardForm.vue';

export default {
  name: "AddCard",
  components: {
    CardForm,
  }
};
</script>