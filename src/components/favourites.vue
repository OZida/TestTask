<template>
    <div class="favourites">
        <div class="favourites_card" v-for='favourShip in favourShips'>
            <h2>Name: {{ favourShip.name }}</h2>
            <h3>Model: {{ favourShip.model }}</h3>
            <ul>
                <li>manufacturer: {{ favourShip.manufacturer }}</li>
                <li>most in credits: {{ favourShip.cost_in_credits }}</li>
                <li>length: {{ favourShip.length }}</li>
                <li>max atmosphering speed: {{ favourShip.max_atmosphering_speed }}</li>
                <li>crew: {{ favourShip.crew }}</li>
                <li>passengers: {{ favourShip.passengers }}</li>
                <li>cargo capacity: {{ favourShip.cargo_capacity }}</li>
                <li>consumables: {{ favourShip.consumables }}</li>
                <li>hyperdrive rating: {{ favourShip.hyperdrive_rating }}</li>
                <li>MGLT: {{ favourShip.MGLT }}</li>
                <li>starship class: {{ favourShip.starship_class }}</li>
                <li>pilots: {{ favourShip.pilots }}</li>
                <li>films: {{ favourShip.films }}</li>
                <li>created: {{ favourShip.created }}</li>
                <li>edited: {{ favourShip.edited }}</li>
                <li>url: <a href="favourShip.url">{{ favourShip.url }}</a></li>
            </ul>
        </div>
    </div>    
</template>

<script>
    export default {
        data () {
            return {
                favourShips: [],
            }
        },
        created: function() {
            
            for ( var i = 0, len = localStorage.length; i < len; i++ ) {
                var returnObj = JSON.parse(localStorage.getItem(localStorage.key( i )));
                if (returnObj instanceof Object){
                this.favourShips.push(returnObj);
                // console.log(this.favourShips);
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    
    .favourites {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: space-around; 
        flex-wrap: wrap;

        .favourites_card {
            flex-basis: 48%;
            height: 380px;
            margin: 10px;
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
        }
    }
</style>