<template>
    <div id="new-champion">
        <h3>New Champion</h3>
        <form @submit.prevent="saveChampion">
            <div>
                <input v-model="champion_id" required>
                <label>#Champion Id</label>
                
            </div>
             <div>
                <input v-model="name" required>
                <label>#Champion Name</label>
                
            </div>
             <div>
                <input v-model="earlypower" required>
                <label>#EarlyPower</label>
                
            </div>
             <div>
                <input v-model="midpower" required>
                <label>#MidPower</label>
                
            </div>
             <div>
                <input v-model="latepower" required>
                <label>#LatePower</label>
                
            </div>
            <button type="submit">Submit</button>
            <router-link to="/">Cancel</router-link>
        </form>
    </div>
</template>

<script>
import db from '@/helpers/firebase/firebaseInit'
export default {
    name: 'view-champion',
    data () {
        return {
            champion_id: null,
            name: null,
            earlypower: null,
            midpower: null,
            latepower: null
        }
    },
    methods: {
        saveChampion () {
            db.collection('champions').add({
                champion_id: this.champion_id,
                name: this.name,
                earlypower: this.earlypower,
                midpower: this.midpower,
                latepower: this.latepower,
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
        }
    }
}
</script>