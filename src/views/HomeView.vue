<script setup>

import  useLibros from '../composables/useLibros'
import Libro from '../components/Libro.vue'

const {librosCollection } = useLibros()
</script>

<template>
  <main>
   <h1 class="text-center text-h3 font-weight-bold my-5"> Biblioteca</h1>
  <v-card flat class ="py-10">


      <v-row>
        <Libro
        v-for = "libro in librosCollection"
        :key="libro.id"
        :libro ="libro"
        />
      </v-row>
  </v-card>
  
  </main>
</template>
