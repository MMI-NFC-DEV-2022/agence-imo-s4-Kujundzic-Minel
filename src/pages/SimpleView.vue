<script setup lang="ts">
// Importe un type personnalisé pour définir la structure des données de maison.
import { SchemaOffreMaison } from '@/types';
// Importe le composant Vue pour afficher les détails d'une maison.
import AfficheMaison from '../components/AfficheMaison.vue';
// Importation commentée d'un fichier JSON directement. Cette ligne est remplacée par une récupération asynchrone ci-dessous.
// import donneesMaisons from '@/assets/data.json';

// Effectue une requête asynchrone pour récupérer les données des maisons depuis un fichier JSON.
const res = await fetch('/data.json')
// Convertit la réponse en JSON et assure que le tableau respecte le type TypeScript `SchemaOffreMaison[]`.
const tableauDeMaisons: SchemaOffreMaison[] = await res.json();
// Alternative commentée pour charger les données à partir d'un fichier statique importé.
// const tableauDeMaisons:SchemaOffreMaison[] = donneesMaisons;
</script>

<template>
        <div class="flex">
                <!-- Boucle v-for pour itérer sur chaque maison dans le tableau 'tableauDeMaisons'. -->
                <!-- Pour chaque maison, le composant 'AfficheMaison' est utilisé pour l'affichage, en passant la maison courante comme prop. -->
                <!-- La propriété 'key' est essentielle pour optimiser la mise à jour du DOM par Vue.js, en utilisant l'identifiant unique de chaque maison. -->
                <AfficheMaison v-for="maison2 in tableauDeMaisons" v-bind="maison2" :key="maison2.id" />
        </div>
</template>