<script setup lang="ts">
import Icon1 from '@/components/icons/Icon-1.vue';

import { defineProps } from 'vue';

import { supabase } from '@/supabase'
import { type Tables } from '@/supabase-types';

// Charger les données des communes
const { data: listeCommune, error } = await supabase
  .from("Commune")
  .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.id_Commune,
  label: commune.nomCommune,
}));

</script>


<template>
            <hr/>
            <div class="w-full justify-between flex">
                <div class="flex py-4 gap-4"><Icon1/> {{nomQuartier}} Commune </div>
            </div>
</template>