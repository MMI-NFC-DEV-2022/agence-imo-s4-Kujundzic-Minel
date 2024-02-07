<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue'
import { supabase } from '@/supabase'

const { data: tableauDeMaisons, error } = await supabase.from('MaisonSupa').select('*')
</script>

<template>
  <div class="p-2">
    <h2 class="text-2xl">Afficher avec Supabase</h2>
    <AfficheMaison v-for="maison in tableauDeMaisons" v-bind="maison" />
  </div>
</template>
