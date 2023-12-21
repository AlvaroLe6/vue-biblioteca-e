<script setup>

import { ref, computed } from 'vue';
import useLibros from "../composables/useLibros";
import Libro from "../components/Libro.vue";

const { areasSeleccionadas, librosFiltradosPorArea, librosCollection } = useLibros();

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


// Modelos para el v-combobox
const model = ref([]);

// Propiedad de búsqueda para el v-combobox
const search = ref(null);

// Filtrar libros según áreas seleccionadas
const filteredLibros = computed(() => {
  const libros = librosCollection.value;
  const selectedAreas = areasSeleccionadas.value;

  if (!libros || libros.length === 0 || selectedAreas.length === 0) {
    return libros; // Si no hay áreas seleccionadas, mostrar todos los libros
  }

  return libros.filter(libro => selectedAreas.includes(libro.area));
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
              v-model="model"
              v-model:search="search"
              :hide-no-data="false"
              :items="items"
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
          v-for="libro in filteredLibros"
          :key="libro.id"
          :libro="libro"
        />
      </v-row>
    </v-card>
  </main>
</template>
<script>
export default {
  data: () => ({
    items: [
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
    ],
    model: ["Seleccionar un área"],
    search: null,
  }),

  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    },
  },
};


</script>