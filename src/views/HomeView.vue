<script setup>
import { ref, watch } from 'vue';
import useLibros from "../composables/useLibros";
import Libro from "../components/Libro.vue";

const { areasSeleccionadas, librosFiltradosPorArea } = useLibros();

const areas = [
  "Ingenieria",
  "Financiera",
  "Administrativa",
  "Legal",
  "Educacion",
  "Diseño",
  "Tecnologia",
  "Salud",
  "Empresarial",
  "Social",
];
const items = ref([
  "Ingenieria",
  "Financiera",
  "Administrativa",
  "Legal",
  "Educacion",
  "Diseño",
  "Tecnologia",
  "Salud",
  "Empresarial",
  "Social",
]);
const model = ref(["Seleccionar un área"]);
const search = ref(null);

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
watch(areasSeleccionadas, (newAreas, oldAreas) => {
  console.log('Nuevas áreas seleccionadas:', newAreas);
});

watch(librosFiltradosPorArea, (newLibros, oldLibros) => {
  console.log('Libros filtrados:', newLibros);
});

</script>

<template>
  <main>
    <h1 class="text-center text-h3 font-weight-bold my-5">Biblioteca</h1>
    <v-card flat class="py-10">
      <v-card-title class="text-h5">
        Búsqueda
        <v-row>
          <v-container fluid>
            <v-combobox
              v-model="areasSeleccionadas"
              :hide-no-data="false"
              :items="areas"
              hide-selected
              hint="Máximo de 5 etiquetas"
              label="Agrega algunas etiquetas"
              multiple
              persistent-hint
              small-chips
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-title>
                    No results matching "<strong>{{ search }}</strong
                    >". Press <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-combobox>
          </v-container>
        </v-row>
      </v-card-title>
      <v-row>
        <Libro
          v-for="libro in librosFiltradosPorArea"
          :key="libro.id"
          :libro="libro"
        />
      </v-row>
    </v-card>
  </main>
</template>

<script>

</script>