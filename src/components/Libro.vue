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

  
<v-col cols="12" md="2" xs="1">
    <v-card>
      <v-img :src="libro.image" height="200" width="150"  cover />
   
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
<<<<<<< HEAD
        <v-btn  @click="abrirEnlaceDescarga(libro.descarga)" block color="info" variant="tonal">Descargar</v-btn>
=======
        <v-btn  @click="abrirEnlaceDescarga(libro.descarga)" block color="info" variant="outlined">Descargar</v-btn>
>>>>>>> 7ac7ffc201421fd5a76aa08f83919b617a4d38ac
      </template>
    </v-card>
  </v-col>
  
</template>
