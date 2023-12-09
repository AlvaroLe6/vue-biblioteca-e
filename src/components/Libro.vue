<script setup>
defineProps({

    libro:{
        type:Object
    }
})
</script>

<template>
    <v-col
    cols="12"
    md="2"
    >
    <v-card>

        <v-img :src="libro.image" height="200" cover/>
            
        <v-card-title>
        {{ libro.titulo }}
        </v-card-title>  
        <v-card-text>
        {{ libro.autor }}
        </v-card-text> 

        <template 
        v-slot:actions>
        <v-btn
        block
        color="info"
        variant="outlined"
        >Descargar</v-btn>

        </template>
    </v-card>
       <!-- <h2>Libro...</h2>-->
    </v-col>
</template>
