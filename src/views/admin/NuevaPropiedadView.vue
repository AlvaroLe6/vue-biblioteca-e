<script setup>

import { useForm, useField } from 'vee-validate'
import {validationSchema, imageSchema} from'@/validation/librosSchema'

const items = ["Legal", "Salud", "Empresarial"]
const {handleSubmit} = useForm({
    validationSchema:{
        ...validationSchema,
        ...imageSchema
    }
})

const titulo = useField('titulo')
const area = useField('area')


const submit = handleSubmit((values) =>{
console.log(values)
})
</script>
    
<template>

    <v-card max-width="800" flat class ="mx-auto my-10">
        <v-card-title 
        class="text-h4 font-weight-bold" 
        tag="h3">
            Nuevo Libro
        </v-card-title>
        
        <v-card-subtitle class="text-h5 py-5">
            Agrega un nuevo libro llenando el siguiente formulario
        </v-card-subtitle>

        <v-form 
        class="mt-10"
        >
            <v-text-field 
            class="mb-5" 
            label="Titulo Libro"
            v-model="titulo.value.value"
            :error-messages="titulo.errorMessage.value" 
            />
            <v-text-field 
            class="mb-5" 
            label="Autor" 
            />
            <v-row>
    <!-- Columna de la imagen -->
    <v-col cols="12" md="4">
        <v-file-input 
            accept="image/jpeg" 
            label="Portada" 
            prepend-icon="mdi-camera" 
            class="mb-5"
        />
    </v-col>
    
    <!-- Columnas de los checkboxes -->
    <v-col cols="12" md="8">
        <v-row>
            <v-col cols="4"> 
                <v-checkbox 
                label="Salud" 
                v-model="area.value.value"
                :error-messages="area.errorMessage.value" 
                />
            </v-col>
            <v-col cols="4"> 
                <v-checkbox 
                label="Empresarial" 
                v-model="area.value.value"
                :error-messages="area.errorMessage.value" 
                />
            </v-col>
            <v-col cols="4">
                <v-checkbox 
                label="Legal" 
                v-model="area.value.value"
                :error-messages="area.errorMessage.value" 
                />
            </v-col>
        </v-row>
    </v-col>
</v-row>
<v-btn
    color="pink-accent-3"
    block
    @click="submit"
    >
Agregar Libro
</v-btn>
          
        </v-form>
    </v-card>

</template>


