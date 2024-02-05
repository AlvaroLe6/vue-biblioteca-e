<template>
  <div v-if="libros && libros.length > 0">
</div>
    <div>
      <h1>Consulta de OpenLibrary API</h1>
      <button @click="consultarLibros">Consultar Libros</button>
      <div v-if="libros.length > 0">
        <h2>Resultados:</h2>
        <ul>
          <li v-for="libro in libros" :key="libro.key">
            {{ libro.title }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        libros: [],
      };
    },
    methods: {
      consultarLibros() {
        // URL de la API de OpenLibrary
        const url = 'https://openlibrary.org/api/books';
        
        // Parámetros de ejemplo (puedes ajustar según tus necesidades)
        const params = { q: 'harry potter' };
  
        // Realizar la solicitud HTTP con Axios
        axios.get(url, { params })
  .then(response => {
    // Actualizar la lista de libros con los resultados si existen
    this.libros = response.data?.docs || [];
  })
  .catch(error => {
    console.error(error);
    // Puedes agregar algún manejo de errores adicional si es necesario
  });
      },
    },
  };
  </script>