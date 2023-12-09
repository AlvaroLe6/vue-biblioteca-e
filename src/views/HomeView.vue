<script setup>

import  useLibros from '../composables/useLibros'
import Libro from '../components/Libro.vue'

const { areaSalud, areaEmpresarial, areaLegal, librosFiltrados } = useLibros()
</script>

<template>
  <main>
   <h1 class="text-center text-h3 font-weight-bold my-5"> Biblioteca</h1>
  <v-card flat class ="py-10">

<v-card-title class="text-h5">
  Búsqueda
  <v-row>
          <v-col cols="4">
            <v-checkbox label="Salud" v-model="areaSalud" class="mr-4"/>
          </v-col>
          <v-col cols="4">
            <v-checkbox label="Empresarial" v-model="areaEmpresarial" class="mr-4"/>
          </v-col>
          <v-col cols="4">
            <v-checkbox label="Legal" v-model="areaLegal"/>
          </v-col>
        </v-row>
</v-card-title>
      <v-row>
        <Libro
        v-for = "libro in librosFiltrados"
        :key="libro.id"
        :libro ="libro"
        />
      </v-row>
  </v-card>
  
  </main>
</template>
