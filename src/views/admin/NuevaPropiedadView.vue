<script setup>

import { useForm, useField } from 'vee-validate'
import { collection,addDoc } from 'firebase/firestore' 
import { useFirestore } from 'vuefire'
import { useRouter } from 'vue-router'
import { validationSchema, imageSchema } from'@/validation/librosSchema'
import useImage from '@/composables/useImage'

const items = ["Legal", "Salud", "Empresarial"]

const  {url, uploadImage, image } = useImage()

const router = useRouter()
const db = useFirestore()

const {handleSubmit} = useForm({
    validationSchema:{
        ...validationSchema,
        ...imageSchema
    }
})

const titulo = useField('titulo')
const autor = useField('autor')
const imagen = useField('imagen')
const areaSalud = useField('areaSalud', null, { initialValue: false })
const areaEmpresarial = useField('areaEmpresarial', null, { initialValue: false })
const areaLegal = useField('areaLegal', null, { initialValue: false })
const area = useField('area',null,

{
    initialValue:  false
}
)


const submit = handleSubmit(async(values) =>{
    const { imagen, ...libro} = values
    
const docRef = await addDoc(collection(db, "libro"),{
   ...libro,
   image : url.value
});
if(docRef.id){
    router.push({name:'admin-propiedades'})
}
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
            v-model="autor.value.value"
            :error-messages="autor.errorMessage.value" 
            />
            <v-row>
    <!-- Columna de la imagen -->
    <v-col cols="12" md="4">
        <v-file-input 
            accept="image/jpeg" 
            label="Portada" 
            prepend-icon="mdi-camera" 
            class="mb-5"
            v-model="imagen.value.value"
            :error-messages="imagen.errorMessage.value" 
            @change="uploadImage"
            />
            <div v-if="image" class="my-5">
                <p class="font-weight-bold"> Imagen Libro</p>
                <img class = "w-50" :src="image">
            </div>
    </v-col>
    
    <!-- Columnas de los checkboxes -->
    <v-col cols="12" md="8">
        <v-row>
            <v-col cols="4"> 
                <v-checkbox 
                label="Salud" 
                v-model="areaSalud.value.value"
                :error-messages="area.errorMessage.value" 
                />
            </v-col>
            <v-col cols="4"> 
                <v-checkbox 
                label="Empresarial" 
                v-model="areaEmpresarial.value.value"
                :error-messages="area.errorMessage.value" 
                />
            </v-col>
            <v-col cols="4">
                <v-checkbox 
                label="Legal" 
                v-model="areaLegal.value.value"
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


