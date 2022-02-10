<template>

    <div :class="'card -' + cardItemData.vendorClass">

        <!-- Skriver ut kortdatan -->
        HOLDER: {{cardItemData.holder}}

        CCV: {{cardItemData.ccv}}
        {{cardItemData.vendor}}
        {{this.displayedCardNumber}}

        <!-- Bild på chip -->
        <div class="chip-wrapper" >
            <img alt="Chip" src='../assets/chip-dark.svg' />
        </div>

        <!-- Bild på logan -->
        <div class="logo-wrapper">
            <!--Ser till att korten får rätt logga -->
      		<!-- The directive v-if is used to conditionally render a block. The block will only be rendered if the directive’s expression returns a truthy value, så show or hide -->
            <img v-if="cardItemData.vendorClass == 'bitcoin'" alt="Bitcoin logo" src='../assets/vendor-bitcoin.svg' />
            <img v-if="cardItemData.vendorClass == 'ninja-bank'" alt="Ninja Bank logo" src='../assets/vendor-ninja-bank.svg' />
            <img v-if="cardItemData.vendorClass == 'block-chain'" alt="Blockchain inc logo" src='../assets/vendor-block-chain.svg' />
            <img v-if="cardItemData.vendorClass == 'evil-corp'" alt="Evil Corp logo" src='../assets/vendor-evil-corp.svg' />
        </div>

    </div>

</template>

<script>
export default {
    props: [

        'cardItemData'
    ],
    computed: {

        displayedCardNumber(){ 
			// Det uppsplittade kortnumret

            return this.splitCardNumber(this.cardItemData.number)
        }
    },
    methods: {

        splitCardNumber(cardNumber) { 
			// Splittar kortnummret så att det blir fint
            let cardNumberString= ''

            if (cardNumber == undefined){ 
				// Deafault-empty-nummret
                return "0000 0000 0000 0000"
            } else {
                cardNumber = cardNumber.match(/.{1,4}/g) // Splittar upp strängen i en array av småsträngar
                cardNumberString = cardNumber.join(' ') // Slår ihop dem och sätter mellanrum mellan
                return cardNumberString;
            }
        }
    }

}
</script>

<style scoped>
    .card {
        height: 150px;
        width: 250px;

        padding: 10px;
        margin: 10px;
        border-radius: 25px;
        box-shadow: 2px 2px 5px grey;
    }
     
    /* Vendor-egenskaper */
    .card.-bitcoin {
        background-color: rgb(255, 238, 0);
    }
    .card.-ninja-bank {
        background-color: black;
        color: lightgray;
    }
    .card.-block-chain {
        background-color: purple;
        color: white;
    }
    .card.-evil-corp {
        background-color: red;
        color: white;
    }

    .chip-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }


</style>