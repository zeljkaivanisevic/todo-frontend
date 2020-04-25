<template>
    <div >
        <br><br> TODO <br><br>
    <strong> Jednostavna aplikacija</strong> <br><br><br>
 <form @submit.prevent="Objavi">
<input v-model="novaobaveza" type="text"  placeholder="Unesite obavezu">  
<input v-model="broj"   placeholder="Unesite neki broj"> 
        <div class="dugme">
                <button class="btn btn primary" style=" background-color:lightsteelblue;" type="submit">Objavi</button>
            </div>  
</form>  <br><br><br>
            <InstagramCard  :key="card.id" :info="card" v-for="card in cards" />
      
    </div>
</template>

<script>
import _ from 'lodash';
import { Posts } from '@/services';
import InstagramCard from '@/components/InstagramCard.vue';
import store from '@/store.js';

export default {
    data() {
        return {
            novaobaveza: '',
            broj: '',
            cards: []
        };
    },
  
    created() {
        this.fetchPosts();
    },
    name: 'app',
    methods: {
         
        async fetchPosts(term) {
            term = term || store.searchTerm;

            this.cards = await Posts.getAll(term);
        },
       
async Objavi() {
          
            let post = {
               obaveza: this.novaobaveza,
              broj: this.broj,
            };
            let newpost = await Posts.add(post);
            console.log('Spremljeni post', newpost.data);
            this.novaobaveza = null;
           this.broj = null;
        },

    },
    components: {
        InstagramCard
    }
};
</script>

<style scoped>

</style>
