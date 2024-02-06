<script setup>
import { ref } from 'vue';
defineProps({
  libro: {
    type: Object,
  },
  
});
const abrirEnlaceDescarga = (url) => {
  window.open(url, '_blank'); // Abre la URL en una nueva pestaña
};
</script>
<template>
  
<v-col cols="12" lg="2" md="3" sm="4" xs="6">
    <v-card class="card-img">
      <v-img  :src="libro.image" height="200" width="150"  class="mx-auto" cover />
   
      <v-card-text>
        <p><strong>Título: {{ libro.titulo}}</strong></p>
      </v-card-text>
     
      <v-card-text>

        <p>Autor:   {{ libro.autor }}</p>
      </v-card-text>
      <v-card-text>
        <p>Area: {{ libro.areas}}</p>

      </v-card-text>

      <template v-slot:actions>
        <v-btn  @click="abrirEnlaceDescarga(libro.descarga)" block color="orange" variant="tonal">Descargar</v-btn>
      </template>
    </v-card>
  </v-col>
  
</template>
<style scoped>
.card-img {
  background-color: #ffd78d10;
  margin: 4px; /* Ajusta el margen según lo necesites */
  border: 1px solid #ffa500;
  padding: 2px;
  border-radius: 8px;
  margin-bottom: 8px;
}

</style>