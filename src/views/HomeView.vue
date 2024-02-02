<script setup>
import { ref, watch } from "vue";
import useLibros from "../composables/useLibros";
import Libro from "../components/Libro.vue";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

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

const model = ref(["Seleccionar un área"]);
const search = ref(null);

const toggleArea = (area) => {
  const index = areasSeleccionadas.value.indexOf(area);
  if (index !== -1) {
    areasSeleccionadas.value.splice(index, 1); // Eliminar el área si ya está seleccionada
    if (area === "Salud") {
      areaSalud.value = false;
    } else if (area === "Empresarial") {
      areaEmpresarial.value = false;
    } else if (area === "Legal") {
      areaLegal.value = false;
    }
  } else {
    areasSeleccionadas.value.push(area); // Agregar el área si no está seleccionada
    if (area === "Salud") {
      areaSalud.value = true;
    } else if (area === "Empresarial") {
      areaEmpresarial.value = true;
    } else if (area === "Legal") {
      areaLegal.value = true;
    }
  }
};
watch(areasSeleccionadas, (newAreas, oldAreas) => {
  console.log("Nuevas áreas seleccionadas:", newAreas);
});

watch(librosFiltradosPorArea, (newLibros, oldLibros) => {
  console.log("Libros filtrados:", newLibros);
});
</script>

<template>
  <main>
    <v-row justify="center">
      <h1 class="text-center text-h3 font-weight-bold my-5">Biblioteca</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="2">
        <v-list class="custom-list-item" v-model:opened="open">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> <v-icon
                size="large"
                color="green-darken-2"
                icon="mdi-dialpad"
              ></v-icon>Categorias</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Lista area ingenieria-->
          <v-list-item @click="toggleArea('Ingenieria')">
            <v-list-item-content>
            <v-list-item-title><v-icon
                class="custom-list-icon"
                size="large"
                color="green-darken-2"
                icon="mdi-domain"
              ></v-icon>Área de ingeniería</v-list-item-title>
          </v-list-item-content>
          </v-list-item>

          <!-- Lista area financiera-->
          <v-list-item @click="toggleArea('Financiera')">
            <v-list-item-content>
              <v-list-item-title><svg-icon type="mdi" :path="path"></svg-icon>Área de financiera</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          

          <!-- Lista area administrativa-->
          <v-list-item @click="toggleArea('Administrativa')">
            <v-list-group value="area_administrativa">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Área de administrativa"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area legal-->
          <v-list-item @click="toggleArea('Legal')">
            <v-list-group value="area_legal">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Área de legal"></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area educacion-->
          <v-list-item @click="toggleArea('Educacion')">
            <v-list-group value="area_educacion">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Área de educacion"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area diseño-->
          <v-list-item @click="toggleArea('Diseño')">
            <v-list-group value="area_diseno">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Área de diseño"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area tecnologia-->
          <v-list-item @click="toggleArea('Tecnologia')">
            <v-list-group value="area_tecnologia">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Área de tecnologia"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area salud-->
          <v-list-item @click="toggleArea('Salud')">
            <v-list-group value="area_salud">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Área de salud"></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area empresarial-->
          <v-list-item @click="toggleArea('Empresarial')">
            <v-list-group value="area_empresarial">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Área de empresarial"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>

          <!-- Lista area social-->
          <v-list-item @click="toggleArea('Social')">
            <v-list-group value="area_social">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Área de social"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list-item>
        </v-list>
        <!-- ------------------------------------ -->
      </v-col>
      <v-col cols="12" md="10">
        <v-card flat class="card_libros py-10">
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
      </v-col>
    </v-row>
  </main>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount } from '@mdi/js';
export default {
	name: "my-cool-component",

	components: {
		SvgIcon
	},

	data() {
		return {
	  		path: mdiAccount,
		}
	}
}
</script>
<style scoped>
.custom-list-item {
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: #162d4b; /* Fondo a la lista */
  color: #fff; /* Texto blanco de la lista*/
}

.custom-list-item:hover {
  background-color: #264978; /* Cambio de color al pasar el ratón por la lista*/
}

.custom-list-icon {
  margin-right: 8px;
}

.card_libros {
  border: 2px solid #162d4b;
  padding: 2px;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>