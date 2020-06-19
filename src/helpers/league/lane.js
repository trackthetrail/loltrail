import db from "@/helpers/firebase/firebaseInit";

export async function topSituationHandler(ally, enemy) {
  const allyResponse = await db
    .collection("champions")
    .where("name", "==", ally)
    .get();
  const allyObject = allyResponse.docs[0].data();

  const enemyResponse = await db
    .collection("champions")
    .where("name", "==", enemy)
    .get();
  const enemyObject = enemyResponse.docs[0].data();

  const laneGuide = {
    early: allyObject.earlypower > enemyObject.earlypower,
    mid: allyObject.midpower > enemyObject.midpower,
    late: allyObject.latepower > enemyObject.latepower
  };

  return laneGuide;
}
