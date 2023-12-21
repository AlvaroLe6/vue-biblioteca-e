
import {computed, ref } from 'vue'
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";
import { query, where } from "firebase/firestore";

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

/// Función para filtrar libros por áreas seleccionadas
const librosFiltradosPorArea = computed(() => {
    const libros = librosCollection.value;
  
    if (!libros || libros.length === 0 || areasSeleccionadas.value.length === 0) {
      return libros;
    }
  
    let librosFiltrados = libros;
  
    // Filtrar libros por áreas seleccionadas
    areasSeleccionadas.value.forEach(area => {
      librosFiltrados = librosFiltrados.filter(libro => libro.area === area);
    });
  
    return librosFiltrados;
  });

    return{  

        areas,
        areasSeleccionadas,
        librosFiltradosPorArea,
        librosCollection
    }
    
}