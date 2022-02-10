<template>
<div>

  	<!--Skriver ut kort med data från cardStackArray, alltså aray med all kort data -->
    <!-- v-for is used to loop over a data usually an array or object, v-bind is used to bind one or more attributes, or a component prop to an element.  -->
    <div class="flex-container" v-for="card in this.$root.cardStackArray" v-bind:key="card.id">

		 <!-- v-on is how you run JavaScript in response to DOM events. If you want to run some code when the user clicks a button, you should use v-on -->
        <div class="flex-container" v-on:click="selectCard(card)">
            <CardItem v-bind:cardItemData="card" /> <!-- fyller varje CardItem med data från respektive card i cardStackArray (i main.js) -->
        </div>

    </div>

</div>
</template>

<script>
import CardItem from '../components/CardItem.vue'

export default {

    components: {
        
        CardItem
    },
    methods: {

        selectCard(card) {
            
            // Säger att Active card ska hämta data från det här indexet istället.
            this.$root.activeCardIndex = this.$root.cardStackArray.indexOf(card);
        },
    }
}
</script>


<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
    }

</style>