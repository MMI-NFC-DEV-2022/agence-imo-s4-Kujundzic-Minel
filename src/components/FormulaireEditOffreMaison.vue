<script setup lang="ts">
import { ref } from 'vue'
import AfficheMaison from '@/components/AfficheMaison.vue'
import { supabase } from '@/supabase'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const maison = ref({})

async function upsertMaison(dataForm, node) {
  const { data, error } = await supabase.from('MaisonSupa').upsert(dataForm).select()
  if (error) {
    node.setErrors([error.message])
  } else {
    node.setErrors([])
    console.log("id : ",data[0].id);
    
    // Mise à jour du nom de route et paramètres dans router.push
    router.push({ name: "/maison/edit/[[id]]", params: { id: data[0].id } });
  }
}

if (route.params.id) {
 // On charge les données de la maison
 let { data, error } = await supabase
 .from("MaisonSupa")
 .select("*")
 .eq("id", route.params.id);
 if (error) console.log("n'a pas pu charger le table Maison :", error);
 else maison.value = (data as any[])[0];
}

console.log("maison : ",maison.value);
</script>

<template>
  <div>
    <div class="p-2">
      <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
      <AfficheMaison v-bind="maison" />
    </div>
    <div class="p-2">
      <FormKit
        type="form"
        v-model="maison"
        @submit="upsertMaison"
        :config="{
          classes: {
            input: 'p-1 rounded border-gray-300 shadow-sm border',
            label: 'text-gray-600'
          }
        }"
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
      >
        <FormKit name="nomMaison" label="nom" />
        <FormKit name="prix" label="prix" type="number" />
        <FormKit name="description" label="Description de la maison" />
        <FormKit name="nbrSDB" label="Nombre salle de bain" type="number" />
        <FormKit name="surface" label="Surface de la maison" type="number" />
        <FormKit name="adresse" label="Adresse de la maison" />
        <FormKit name="nbrChambres" label="Nombre de chambres" type="number" />
        <FormKit name="image" label="Image de la maison" type="file" accept="image/*" />
        <FormKit name="favori" label="Mettre en valeur" type="checkbox" wrapper-class="flex" />
      </FormKit>
    </div>
  </div>
</template>