<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue'
import { supabase } from '@/supabase'

const { data: AfficherMaison, error } = await supabase.from('MaisonSupa').select('*')
</script>

<template>
  <div class="p-2">
    <h2 class="text-2xl">Afficher avec Supabase</h2>
    <AfficheMaison v-for="maison in AfficherMaison" v-bind="maison" />
  </div>
</template>
