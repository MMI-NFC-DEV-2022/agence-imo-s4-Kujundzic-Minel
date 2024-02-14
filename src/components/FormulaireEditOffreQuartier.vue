<script setup lang="ts">
import { ref } from 'vue'
import AfficheMaison from '@/components/AfficheQuartier.vue'
import { supabase } from '@/supabase'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const quartier = ref({})

async function upsertQuartier(dataForm, node) {
  const { data, error } = await supabase.from('quartier').upsert(dataForm).select()
  if (error) {
    node.setErrors([error.message])
  } else {
    node.setErrors([])
    console.log("id : ",data[0].id);
    
    // Mise à jour du nom de route et paramètres dans router.push
    router.push({ name: "/quartier/edit/[[id]]", params: { id: data[0].id } });
  }
}

if (route.params.id) {
 // On charge les données de la maison
 let { data, error } = await supabase
 .from("quartier")
 .select("*")
 .eq("id", route.params.id);
 if (error) console.log("n'a pas pu charger le table quartier :", error);
 else quartier.value = (data as any[])[0];
}

console.log("quartier : ",quartier.value);



// Charger les données des communes
const { data: listeCommune, error } = await supabase
  .from("commune")
  .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.id_commune,
  label: commune.nomCommune,
}));


async function supprimerQuartier() {
  const { data, error } = await supabase
    .from("quartier")
    .delete()
    .match({ id: quartier.value.id });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      quartier.value,
      "erreur :",
      error
    );
  } else {
    router.push("/quartier");
  }
}

</script>

<template>
  <div>
    <div class="p-2">
      <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
      <AfficheQuartier v-bind="quartier" />
    </div>
    <div class="p-2">
      <FormKit
        type="form"
        v-model="quartier"
        @submit="upsertQuartier"
        :config="{
          classes: {
            input: 'p-1 rounded border-gray-300 shadow-sm border',
            label: 'text-gray-600'
          }
        }"
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
      >
        <FormKit name="nomQuartier" label="Nom Quartier"/>
        <FormKit
        type="select"
        name="id_commune"
        label="Commune"
        :options="optionsCommune"
      />
      </FormKit>
    </div>
  </div>

  <button
        type="button"
        v-if="quartier.id"
        @click="($refs.dialogSupprimer as any).showModal()"
        class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm"
      >
        Supprimer l'offre
      </button>
      <dialog
        ref="dialogSupprimer"
        @click="($event.currentTarget as any).close()"
      >
        <button
          type="button"
          class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"
        >
          Annuler</button
        ><button
          type="button"
          @click="supprimerQuartier()"
          class="focus-style rounded-md bg-red-500 p-2 shadow-sm"
        >
          Confirmer suppression
        </button>
      </dialog>
</template>