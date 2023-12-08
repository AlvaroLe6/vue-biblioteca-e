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
    md="4"
    >
    <v-card>

        <v-img :src="libro.imagen" height="200" cover>
        <v-card-title>
{{ libro.titulo }}
        </v-card-title>  
        <v-card-title>
{{ libro.Autor }}
        </v-card-title>      
        </v-img>
    </v-card>

        <h2>Libro...</h2>
    </v-col>
</template>