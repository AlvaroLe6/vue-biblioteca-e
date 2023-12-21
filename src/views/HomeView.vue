<script setup>

import { ref } from 'vue';

import  useLibros from '../composables/useLibros'
import Libro from '../components/Libro.vue'

const { areasSeleccionadas, librosFiltradosPorArea } = useLibros(); // Obtiene los resultados de useLibros

/* Variables para manejar el estado de los checkboxes
const areaSalud = computed(() => areasSeleccionadas.value.includes('Salud'));
const areaEmpresarial = computed(() => areasSeleccionadas.value.includes('Empresarial'));
const areaLegal = computed(() => areasSeleccionadas.value.includes('Legal'));
*/

// Variables reactivas para manejar el estado de los checkboxes
const areaSalud = ref(false);
const areaEmpresarial = ref(false);
const areaLegal = ref(false);


// Funciones para manejar cambios en las áreas seleccionadas
// Función para manejar cambios en las áreas seleccionadas
const toggleArea = (area) => {
  const index = areasSeleccionadas.value.indexOf(area);
  if (index !== -1) {
    areasSeleccionadas.value.splice(index, 1); // Eliminar el área si ya está seleccionada
    if (area === 'Salud') {
      areaSalud.value = false;
    } else if (area === 'Empresarial') {
      areaEmpresarial.value = false;
    } else if (area === 'Legal') {
      areaLegal.value = false;
    }
  } else {
    areasSeleccionadas.value.push(area); // Agregar el área si no está seleccionada
    if (area === 'Salud') {
      areaSalud.value = true;
    } else if (area === 'Empresarial') {
      areaEmpresarial.value = true;
    } else if (area === 'Legal') {
      areaLegal.value = true;
    }
  }
};

// Observar cambios en las áreas seleccionadas para actualizar el estado de los checkboxes
areasSeleccionadas.value.forEach(area => {
  if (area === 'Salud') {
    areaSalud = true;
  } else if (area === 'Empresarial') {
    areaEmpresarial = true;
  } else if (area === 'Legal') {
    areaLegal = true;
  }
});

</script>

<template>
  <main>
   <h1 class="text-center text-h3 font-weight-bold my-5"> Biblioteca</h1>
  <v-card flat class ="py-10">

<v-card-title class="text-h5">
  Búsqueda
  <v-row>
          <v-col cols="4">
            <v-checkbox label="Salud" v-model="areaSalud" @change="toggleArea('Salud')" class="mr-4"/>
          </v-col>
          <v-col cols="4">
            <v-checkbox label="Empresarial" v-model="areaEmpresarial"  @change="toggleArea('Empresarial')" class="mr-4"/>
          </v-col>
          <v-col cols="4">
            <v-checkbox label="Legal" v-model="areaLegal" @change="toggleArea('Legal')" class="mr-4"/>
          </v-col>
        </v-row>
</v-card-title>
      <v-row>
        <Libro
        v-for = "libro in /*librosFiltradosPorArea*/ areasSeleccionadas"
        :key="libro.id"
        :libro ="libro"
        />
      </v-row>
  </v-card>
  
  </main>
</template>
