<template>
    <div id="view-champion">
        <h3>View Champion</h3>
        <h2>Champion Name: {{name}}</h2>
        <button @click="deleteChampion">Delete</button>
    <router-link to="/">Back</router-link>
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
        beforeRouteEnter (to, from, next){
            db.collection('champions').where('champion_id',
            '==', to.params.champion_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc=> {
                    next(vm => {
                        vm.champion_id = doc.data().champion_id
                        vm.name = doc.data().name
                        vm.earlypower = doc.data().earlypower
                        vm.midpower = doc.data().midpower
                        vm.latepower = doc.data().latepower
                    })
                })
            })
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                db.collection('champions').where('champion_id', '==', this.$route.params.champion_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.champion_id = doc.data().champion_id
                        this.name = doc.data().name
                        this.earlypower = doc.data().earlypower
                        this.midpower = doc.data().midpower
                        this.latepower = doc.data().latepower
                    })
                })
            },
            deleteChampion () {
                if(confirm('Are you sure?')) {
                    db.collection('champions').where('champion_id', '==',
                    this.$route.params.champion_id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                            this.$router.push('/')
                    })
                })
                }
            }
        }
    }

</script>