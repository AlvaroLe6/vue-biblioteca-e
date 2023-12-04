<script setup>

import { watch } from 'vue'
import { useRoute, useRouter} from 'vue-router'
import { useFirestore, useDocument } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'


//---------------------------
import { useField, useForm } from 'vee-validate'

import useImage from '@/composables/useImage'
import { validationSchema } from '@/validation/librosSchema'
import { update } from 'firebase/database'

const items = ["Legal", "Salud", "Empresarial"]

const { url, uploadImage, image } = useImage()

const { handleSubmit } = useForm({ validationSchema });

const titulo = useField('titulo')
const autor = useField('autor')
const imagen = useField('imagen')
const area = useField('area')
//-----------------------------------



const route = useRoute()

const router = useRouter()

//Obtener el Libro a editar
const db = useFirestore()
const docRef = doc(db,'libro',route.params.id)
const libro = useDocument(docRef)

watch(libro,(libro) =>
{
    titulo.value.value = libro.titulo
    autor.value.value = libro.autor
    area.value.value = libro.area
}
)

const submit = handleSubmit( async values =>{

    const { imagen, ...libro} = values
    if(image.value){

    }else{
        const data = {
            libro
        }
        await updateDoc(docRef, data)
    }   
    router.push({name:'admin-propiedades'})
})


</script>
    
<template>


<v-card max-width="800" flat class="mx-auto my-10">
        <v-card-title class="mt-5">
            <h1 class="text-h4 font-weight-bold">Editar Libro</h1>
        </v-card-title>
        <v-card-subtitle > 
            <p class="text-h5">Edita los detalles de los libros </p>
        </v-card-subtitle>

        <v-form class="mt-10">
            <v-text-field
                v-model="titulo.value.value"
                :error-messages="titulo.errorMessage.value"
                label="Titulo Libro"
                class="mb-5"
            ></v-text-field>

            <v-text-field
            
                v-model="autor.value.value"
                :error-messages="autor.errorMessage.value"
                label="Autor"
                class="mb-5"
            ></v-text-field>

            <v-col cols="12" md="4">
            <v-file-input
                v-model="imagen.value.value"
                :error-messages="imagen.errorMessage.value"
                accept="image/jpeg"
                prepend-icon="mdi-camera"
                label="Portada"
                class="mb-5"
                @change="uploadImage"
            ></v-file-input>

            <div class="my-5">
                <p class="font-weight-bold">Imagen Actual:</p>
                <img 
                v-if="image"
                class="w-50"
                :src="image"
                />
                <img v-else
                class="w-50"
                :src="libro?.image"
                />
            </div>
        </v-col>

        <v-col cols="12" md="8">
        <v-row>
            <v-col cols="4"> 
                <v-checkbox 
                label="Salud" 
                v-model="area.value.value"
          
                />
            </v-col>
            <v-col cols="4"> 
                <v-checkbox 
                label="Empresarial" 
                v-model="area.value.value"
              
                />
            </v-col>
            <v-col cols="4">
                <v-checkbox 
                label="Legal" 
                v-model="area.value.value"
                />
            </v-col>
        </v-row>
    </v-col>
                    <v-btn
                    color="pink-accent-3"
                    block
                    @click="submit"
                >
                    Guardar Cambios
                </v-btn>
        </v-form>
</v-card>
</template>


