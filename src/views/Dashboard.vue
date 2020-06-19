<template>
  <div id="dashboard">
    <h3>Champions</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Early</th>
        <th>Mid</th>
        <th>Late</th>
      </tr>
      <tr v-for="champion in champions" v-bind:key="champion.id">
        <td>{{ champion.name }}</td>
        <td>{{ champion.earlypower }}</td>
        <td>{{ champion.midpower }}</td>
        <td>{{ champion.latepower }}</td>
        <router-link
          v-bind:to="{
            name: 'view-champion',
            params: { champion_id: champion.champion_id }
          }"
        >
          <i>View</i>
        </router-link>
      </tr>
    </table>

    <router-link to="/new">New</router-link>

    <div>
      <input v-model="allyTopInput" required />
      <label>Ally Toplaner</label>
    </div>
    <div>
      <input v-model="enemyTopInput" required />
      <label>Enemy Toplaner</label>
    </div>

    <button @click="handleTopSituation" type="submit">Submit</button>
  </div>
</template>

<script>
import db from "@/helpers/firebase/firebaseInit";
import { topSituationHandler } from "@/helpers/league/lane";

export default {
  name: "dashboard",
  data() {
    return {
      allyTopInput: "",
      enemyTopInput: "",
      topGuide: undefined,
      champions: []
    };
  },
  methods: {
    handleTopSituation() {
      this.topGuide = topSituationHandler(
        this.allyTopInput,
        this.enemyTopInput
      );
    }
  },
  created() {
    db.collection("champions")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            champion_id: doc.data().champion_id,
            name: doc.data().name,
            earlypower: doc.data().earlypower,
            midpower: doc.data().midpower,
            latepower: doc.data().latepower
          };
          this.champions.push(data);
        });
      });
  }
};
</script>
