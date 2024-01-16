
import {computed, ref } from 'vue'
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function useLibros(){



    const db = useFirestore()
    const librosCollection = useCollection(collection(db, 'libro'))

  // Áreas disponibles
  const areas = [
    "Ingenieria",
    "Financiera",
    "Administrativa",
    "Legal",
    "Educacion",
    "Diseño",
    "Tecnologia",
    "Salud",
    "Empresarial",
    "Social",
  ];

  // Estado de las áreas seleccionadas
  const areasSeleccionadas = ref([]);

  // Función para filtrar libros por áreas seleccionadas
  const librosFiltradosPorArea = computed(() => {
    const libros = librosCollection.value
    console.log("link de descarga de los libros..........."+ libros.descarga)

    if (!libros || libros.length === 0 || areasSeleccionadas.value.length === 0) {
      return libros;
    }
  
    return libros.filter(libro => areasSeleccionadas.value.includes(libro.areas));
  });

    return{  

        areas,
        areasSeleccionadas,
        librosFiltradosPorArea,
        librosCollection
    }
    
}