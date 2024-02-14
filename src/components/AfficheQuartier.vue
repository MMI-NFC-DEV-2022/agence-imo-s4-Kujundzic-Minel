<script setup lang="ts">
import Icon1 from '@/components/icons/Icon-1.vue';

import { defineProps } from 'vue';

import { supabase } from '@/supabase'
import { type Database } from '@/supabase-types';

</script>


<template>
            <hr/>
            <div class="w-full justify-between flex">
                <div class="flex py-4 gap-4"><Icon1/> {{nomQuartier}} Commune</div>
            </div>
</template>