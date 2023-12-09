
import {computed, ref } from 'vue'
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function useLibros(){

    const areaSalud = ref(false)
    const areaEmpresarial = ref(false)
    const areaLegal = ref(false)


    const db = useFirestore()
    const librosCollection = useCollection(collection(db, 'libro'))
   
    const librosFiltrados = computed(()=>{
        return librosCollection.value.filter(libro => {
            // Aplicar filtros según las áreas seleccionadas
            if ((areaSalud.value && libro.areaSalud) ||
                (areaEmpresarial.value && libro.areaEmpresarial) ||
                (areaLegal.value && libro.areaLegal)) {
                return true;
            }
            // Si no hay filtro activo o no coincide con ningún filtro, se incluye en el resultado
            return !areaSalud.value && !areaEmpresarial.value && !areaLegal.value;
        });
    })
    
    return{
        areaSalud,
        areaLegal,
        areaEmpresarial,
        librosFiltrados,
        librosCollection
    }
    
}