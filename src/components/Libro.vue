<script setup>
defineProps({
  libro: {
    type: Object,
  },
  
});

const abrirEnlaceDrive = () => {
  /*if (libro.value.descarga) {
    window.open(libro.value.descarga, '_blank');
  } else {
    // Manejar el caso en el que el enlace de descarga no esté disponible
    console.error('El enlace de descarga no está disponible para este libro.');
  }*/
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

        <P>Autor:   {{ libro.autor }}</P>
      </v-card-text>
      <v-card-text>
        
        <P>Area: {{ libro.descarga}}</P>

      </v-card-text>

      <template v-slot:actions>
        <v-btn @click="abrirEnlaceDrive" block color="info" variant="outlined">Descargar</v-btn>
      </template>
    </v-card>
    <!-- <h2>Libro...</h2>-->
  </v-col>
</template>
