<template>
<div>

    <!-- Display-kort(vissa kortet) -->
    <div class="flex-container">
	<!-- v-bind is used to bind one or more attributes, or a component prop to an element.-->
        <CardItem v-bind:cardItemData.sync="card" /> <!-- sync är en tvåvägsbindning -->
    </div>

    <!-- inputformulär -->
    <!-- v-on is how you run JavaScript in response to DOM events. If you want to run some code when the user clicks a button, you should use v-on -->
    <form v-on:submit.prevent="addCard">
        <!--
			"required" ser till så att fältet måste vara infyllt innan commit.<template>
			"pattern" ser till att det bara kan skrivas siffror.<template>
			"v-model" ser till att allt som skrivs i fältet laddas in i ett variabelnamn.
			
			"v-model" v-model is a common directive used in almost every Vue application. It's typically used to enable two-way data binding on form elements
		-->

        <h4>CARD NUMBER</h4>
        <input type="text" class="number-input" placeholder="xxxx xxxx xxxx xxxx"
        v-on:input="createCard()" v-model="inputNumber" required pattern="^[0-9]*$"> 

        <h4>CARD HOLDER </h4>
        <input type="text" class="holder-input" placeholder="xxxx xxxx xxxx xxxx"
        v-on:input="createCard()" v-model="inputHolder" required>

        <span>CCV</span>
        <input type="text" class="ccv-input" placeholder="xxxx xxxx xxxx xxxx"
        v-on:input="createCard()" v-model="inputCCV" required pattern="^[0-9]*$">

        <span>VENDOR</span>
        <select v-model="inputVendor" class="vendor-input" v-on:change="createCard()" required>
            <option disabled value="">Please select one</option>
            <option>Bitcoin</option>
            <option>Ninja Bank</option>
            <option>Blockchain inc</option>
            <option>Evil Corp</option>
        </select>

        <button>SUBMIT!!</button> <!-- Knappen autofunkar eftersom att den ligger i en form-tag -->

    </form>

</div>
</template>
 
<script>
import CardItem from '../components/CardItem.vue'

export default {

    data: function(){
        return { 
			// Deklarerar variabler för att kunna använda v-bind //
            inputNumber: '',
            inputHolder: '',
            inputCCV: '',
            inputVendor: '',
            id:'',
        }
    },
    computed: {
        cardStackArray: function(){ 
			//hämtar cardStackArray från main.js //
     		//för att få/hämta data från root komponenten
            return this.$root.$data.cardStackArray
        },
        vendorClass: function(){
            return this.getVendorClass(this.inputVendor)
        },  
    },
    methods: {
        getVendorClass(vendor) { 
			// Ser till att kortet får vendor som CSS-klass
            switch(vendor) {
                case "Bitcoin": return "bitcoin";
                case "Ninja Bank": return "ninja-bank";
                case "Blockchain inc": return "block-chain";
                case "Evil Corp": return "evil-corp";
            }
        },
        addCard() { 
			// Pushar fixad data från inputfälten till main.js

            //ger ett id och pushar datan till cardStackArray
      		//toSting = convert an object to a string
            this.card.id = Date.now().toString()
            this.$root.cardStackArray.push(this.card)

            // Tömmer display-kortet
            this.card = {}

            // Tömmer input-fälten
            this.inputNumber= ''
            this.inputHolder= ''
            this.inputCCV= ''
            this.inputVendor= ''
        },
        createCard() { 
			// Skriver in fixad data från input i displaykortet i realtid
            this.card = {
                vendorClass: this.vendorClass,
                number: this.inputNumber,
                holder: this.inputHolder,
                ccv: this.inputCCV,
                vendor: this.inputVendor,
            }
        }
    },
    components: {
        CardItem
    },
    created: function() { 
		// Ser till att this.card inte är undefined?
        this.card = {};
    }
}
</script>

<style scoped>

    .flex-container {
        display: flex;
        justify-content: center;
    }

</style>