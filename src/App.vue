<script setup>
import { RouterView } from "vue-router"

import { useAuthStore} from'./stores/auth'


const auth = useAuthStore()


</script>

<template>
  <v-card 
    elevate="3" 
    max-width="1200" 
    class="mx-auto"
  >
    <v-layout>
    
      <v-app-bar app
        color="#162D4B"
      >
      <v-toolbar-title>
        <router-link 
        :to="{ name: 'home' }">
        <img 
        src="@/assets/ESCUELA DE NEGOCIOS_HORIZONTAL BLANCO.png" alt="80" height="80" />
      </router-link>
      </v-toolbar-title>
        
        <template v-slot:append> 
          <div v-if="auth.isAuth">
            <v-btn :to="{name:'admin-propiedades'}">
          Admin
        </v-btn> 
        <v-btn :to="{name:'home'}">
          Inicio
        </v-btn>   
        <v-btn @click="auth.logout" >
          cerrar Sesión
        </v-btn>   
          </div>
          <div v-else>
             
        <v-btn :to="{name:'home'}">
          Inicio
        </v-btn>   
        <v-btn :to="{name:'login'}">
          Iniciar Sesión
        </v-btn>  
          </div>
        </template>
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
