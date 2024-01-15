<script setup>
defineProps({
  libro: {
    type: Object,
  },
});
</script>

<template>
  <v-col cols="12" md="2" xs="1">
    <v-card>
      <v-img :src="libro.image" height="200" width="150"  cover />
   
      <v-card-text>
        <p><strong>Título: {{ libro.titulo}}</strong></p>
      </v-card-text>
     
      <v-card-text>

        <P>Autor:   {{ libro.autor }}</P>
      </v-card-text>
      <v-card-text>
        
        <P>Area: {{ libro.areas}}</P>
      </v-card-text>

      <template v-slot:actions>
        <v-btn @click="abrirEnlaceDrive" block color="info" variant="outlined">Descargar</v-btn>
      </template>
    </v-card>
    <!-- <h2>Libro...</h2>-->
  </v-col>
</template>
<script >




const abrirEnlaceDrive = () => {
  if (libro && libro.descarga) {
    window.open(libro.descarga, '_blank');
  } else {
    console.error('Enlace de Google Drive no disponible');
  }
};
</script>