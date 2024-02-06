<script setup lang="ts">
// Importations des composants d'icônes pour une utilisation dans le template.
import Icon from '@/components/icons/Icon.vue';
import Icon1 from '@/components/icons/Icon-1.vue';
import Icon2 from '@/components/icons/Icon-2.vue';
import Icon3 from '@/components/icons/Icon-3.vue';
// Importe 'defineProps' de Vue pour définir les props du composant de manière typée avec TypeScript.
import { defineProps } from 'vue';
// Importe un type personnalisé pour s'assurer que les props passées au composant respectent une certaine structure.
import { SchemaOffreMaison } from '@/types';
// Définit les props attendues par ce composant en utilisant le type 'SchemaOffreMaison'.
defineProps<SchemaOffreMaison>()
</script>


<template>
    <!-- Structure principale du composant avec bordure et arrondis -->
    <div class="flex flex-col w-fulls rounded-lg border-indigo-100 border-solid overflow-hidden border-2">
        <!-- Affichage de l'image de la maison -->
        <div class="h-full w-full "><img class="object-cover w-full h-full" :src="image" alt=""></div>
        <!-- Section contenant le prix, le nom et l'icône de favori -->
        <div class="px-5 pt-5 flex flex-row justify-between">
            <div class="flex flex-col "> 
                <!-- Affichage du prix avec mise en forme spécifique -->
                <div class="text-base font-bold text-indigo-500 ">$ {{ prix }} <span class="text-base font-normal text-gray-500">/month</span></div>
                <!-- Affichage du nom de la maison -->
                <div class="text-base font-bold text-black py-2">{{nomMaison}}</div>
            </div>
            <!-- Affichage de l'icône de favori avec condition pour changer la couleur si 'favori' est vrai -->
            <div><Icon :class="{'fill-red-400' : favori}"/></div>
        </div>
        <!-- Section pour l'adresse, les détails et la description -->
        <div class="px-5">
            <!-- Affichage de l'adresse -->
            <div class="py-2">{{adresse}}</div>
            <hr/>
            <!-- Affichage des icônes et des informations sur les chambres, salles de bain, surface et description -->
            <div class="w-full justify-between flex">
                <div class="flex py-4 gap-4"><Icon1/> {{nbrChambres}} beds</div>
                <div class="flex py-4 gap-4"><Icon2/> {{ nbrSDB }} bathrooms</div>
                <div class="flex py-4 gap-4"><Icon-3/> {{ surface }} m2</div>
                <div class="flex py-4 gap-4"><p>Descriptif :</p> {{ description }} </div>
            </div>
        </div>
    </div>
</template>