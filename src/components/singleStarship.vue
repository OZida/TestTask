<template>
    <div class="singleStarship">
        <div class="singleStarship_card" v-if='singleStarship'>
            <h2>Name: {{ singleStarship.name }}</h2>
            <h3>Model: {{ singleStarship.model }}</h3>
            <ul>
                <li>manufacturer: {{ singleStarship.manufacturer }}</li>
                <li>most in credits: {{ singleStarship.cost_in_credits }}</li>
                <li>length: {{ singleStarship.length }}</li>
                <li>max atmosphering speed: {{ singleStarship.max_atmosphering_speed }}</li>
                <li>crew: {{ singleStarship.crew }}</li>
                <li>passengers: {{ singleStarship.passengers }}</li>
                <li>cargo capacity: {{ singleStarship.cargo_capacity }}</li>
                <li>consumables: {{ singleStarship.consumables }}</li>
                <li>hyperdrive rating: {{ singleStarship.hyperdrive_rating }}</li>
                <li>MGLT: {{ singleStarship.MGLT }}</li>
                <li>starship class: {{ singleStarship.starship_class }}</li>
                <li>pilots: {{ singleStarship.pilots }}</li>
                <li>films: {{ singleStarship.films }}</li>
                <li>created: {{ singleStarship.created }}</li>
                <li>edited: {{ singleStarship.edited }}</li>
                <li>url: <a href="singleStarship.url">{{ singleStarship.url }}</a></li>
            </ul>
            <br>
            <i class="fa fa-heart" 
            v-bind:class="{strike: isActive}" 
            v-on:click='clickMe'></i>
        </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                starships: {
                    results: []
                },
                singleStarship: null,
                isActive: false
            }
        },
        created: function() {
            var starshipId = this.$route.params.id;
            this.singleStarship = this.starships.results[starshipId];
            
            fetch(starshipId).then((r) => r.json()).then(json => {this.singleStarship = json});
        },
        methods: {
            clickMe: function(){
                if (!this.isActive) {
                    this.isActive = true;

                    var serialObj = JSON.stringify(this.singleStarship);
                    window.localStorage.setItem(this.singleStarship.name, serialObj );
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    
    .singleStarship {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        display: flex;
        align-items: center;
        justify-content: center;

        .singleStarship_card {
            padding: 15px;
            border: 1px solid #2c3e50;
            border-radius: 10px;

            h2 {
            font-size: 30px;
            }
            h3 {
               font-size: 23px;
            }
            ul {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
            }
            .fa-heart {
                font-size: 30px;
                color: #2c3e50;
                cursor: pointer;
            }
            .strike {
                color: red;  
            }  
        }
    }
</style>