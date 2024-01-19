<script setup>

import Footer from "@/views/Footer.vue"
import { RouterView } from "vue-router"
import { useAuthStore} from'./stores/auth'

const auth = useAuthStore()
</script>
<template>
  <v-app>
  <v-card 
    elevate="3" 
    max-width="1200" 
    class="mx-auto"
  >

    
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

        <v-btn append-icon="$dropdown" >
        Videos
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="redirectToView(item.route)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
        <v-btn :to="{name:'login'}">
          Iniciar Sesión
        </v-btn>  
          </div>
        </template>
      </v-app-bar>
      <v-main style="margin-bottom: 50px;">
        <v-container>
          <router-view />
        </v-container>      
      </v-main>
</v-card>
<Footer />
</v-app>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Curos', route:'cursos' },
        { title: 'Webinar',route:'webinar' },
      ],
    }),
    methods: {
    redirectToView(route) {
      this.$router.push({ name: route });
    },
  },
}; 
</script>

