<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'
import FormulaireEditOffreMaison from '@/components/FormulaireEditOffreMaison.vue'
// console.log(route.params.id)
</script>

<template>
<h2>
    Formulaire, avec le rooter push
</h2>

<FormulaireEditOffreMaison/>

</template>