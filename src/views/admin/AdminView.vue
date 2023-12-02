<script setup>

   import useLibros from '@/composables/useLibros'

   const { librosCollection} = useLibros()


</script>
    
<template>


 <h2 Class = "text-center" text-h3 my-5 font-weight-bold> Admin Panel</h2>

 <v-btn
    color = "blue"
    variant="flat"
    :to="{name:'nueva-propiedad'}"
 >
Nuevo Libro

 </v-btn>
<v-card class = "mx-auto mt-10" flat>
   <v-list>
      <v-list-item
         v-for="libro in librosCollection"
         :key = "libro.id"
         >
         <template v-slot:prepend>
            <v-list-item-media start = "true">
               <img width="180" :src="libro.image"/>
            </v-list-item-media>
         </template>
         <v-list-item-title>{{ libro.titulo}}</v-list-item-title>
         <v-list-item-subtitle>{{ libro.autor}}</v-list-item-subtitle>
         <template v-slot:append>
            <v-btn
               color ="info"
               flat
               class="mr-2"
               >
               Editar
            </v-btn>

           
            <v-btn
               color ="red"
               flat
               >
               Eliminar
            </v-btn>
         </template>

      </v-list-item>

   </v-list>
</v-card>


</template>



