<template>
    <div class="starships">
        <router-link :to="'favourites'" class='favour_link'>Favourites</router-link>
        <div class="starship_card" v-for='starship in starships.results'>
            <router-link :to="{name: 'singleStarship', params: {id: starship.url} }">
                <h2>Name: {{ starship.name }}</h2>
                <h3>Model: {{ starship.model }}</h3>
                <p>The number of films in which the starship appeared: {{ starship.films.length }}</p>
            </router-link>
        </div>
    <router-view></router-view>
    </div>
 </template>

<script>
    export default {
        data () {
            return {
                starships: {
                    results: []
                }  
            }
        },
        created: function() {
            fetch('https://swapi.co/api/starships').then((r) => r.json()).then(json => {this.starships = json});
        }
    }
</script>

<style lang='scss' scoped>

.starships {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    flex-wrap: wrap;

    .starship_card {
        flex-basis: 48%;
        margin: 10px;
        padding: 15px;
        border: 1px solid #2c3e50;
        border-radius: 10px; 
        
        a {
            color: #2c3e50;
            text-decoration: none;
        }

        h2 {
            font-size: 30px;
        }
        h3 {
           font-size: 23px;
        }
        p {
            margin: 10px;
        }
    }
    .favour_link {
        text-decoration: none;
        font-size: 30px; 
        border: 1px solid #2c3e50;
        border-radius: 10px;
        padding: 20px;
        width: 98%;
        color: #2c3e50;
    }
}
</style>
