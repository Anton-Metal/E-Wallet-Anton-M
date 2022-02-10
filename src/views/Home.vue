<template>
  <div class="home">

    <TopHeader />

    <!-- Visar selectedCard -->

    <!-- this.$root = Get root data -->
    <!-- v-if is used to conditionally render a block. The block will only be rendered if the directive’s expression returns a truthy value -->
    <div v-if="this.$root.activeCardIndex !=null" class="flex-container">
		  <!-- v-bind directive used to bind one or more attributes -->
        <CardItem v-bind:cardItemData="activeCard" /> 

        <button v-on:click="removeCard(activeCard)">REMOVE CARD</button>
    </div>

    <CardStack />
    <AddCardButton />

  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '../components/TopHeader.vue'
import CardStack from '../components/CardStack.vue'
import AddCardButton from '../components/AddCardButton.vue'
import CardItem from '../components/CardItem.vue'

export default {
  name: "Home",

  components: {
    TopHeader
    , CardStack
    , AddCardButton
   , CardItem
  },
  computed: {
    activeCard: function(){
		   //this.$root hämtar data från root
      return this.$root.cardStackArray[this.$root.activeCardIndex]; // Hämtar kortdata till card
    }
  }, 
  methods: {

        removeCard(cardArgument) {
            
            // "Är-du-säker"-popup
            let confirmation = confirm("Vill du verkligen ta bort kortet???")
            if (confirmation == false) {

                return
            }

            //Hittar och tar bort card från cardStackArray
      		//splice för att ta bort(radera index)
            this.$root.cardStackArray.splice(this.$root.cardStackArray.indexOf(cardArgument), 1)
            this.$root.activeCardIndex = null;
        }
  }
};
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }
</style>