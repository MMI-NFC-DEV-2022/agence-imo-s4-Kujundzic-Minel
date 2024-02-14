<script setup lang="ts">
import { supabase } from "../../supabase";
const { data, error } = await supabase.from("quartiercommune").select("*");
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="listeQuartier in (data as any[])">
        {{ listeQuartier.nomCommune }} - 
        {{ listeQuartier.nomQuartier }}
      </li>
    </ul>
  </section>

  <section>
    <h3>Liste avec groupby</h3>
    <ul>
      <li v-for="(listeQuartiers, nomCommune) in Object
      //@ts-ignore
      .groupBy( data, 
      //@ts-ignore
      v=>v.nomCommune  )">
        {{ nomCommune }}
        <p class="ml-5" v-for="quartierObject in listeQuartiers">
          <RouterLink :to="{ name:'/quartier/edit/[[id]]', params:{id:quartierObject.id} }">{{ quartierObject.nomQuartier }}</RouterLink>
        </p>
      </li>
    </ul>
  </section>
</template>
