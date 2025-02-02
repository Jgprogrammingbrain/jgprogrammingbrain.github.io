<template>
  <div id="app" class="min-h-screen bg-[#0A0A1F] text-[#D0CCE3]">
    <!-- Navigation Component -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,31,0.8)] backdrop-blur-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <router-link 
          to="/" 
          class="text-2xl font-bold text-[#DB3DCF] hover:opacity-80 transition-opacity"
        >
          Jin Guang - Portfolio Site (IS216)
        </router-link>
        
        <div class="space-x-4">
          <router-link 
            to="/" 
            class="text-[#D0CCE3] hover:text-[#DB3DCF] transition-colors"
          >
            Home
          </router-link>
          <router-link 
            to="/css" 
            class="text-[#D0CCE3] hover:text-[#DB3DCF] transition-colors"
          >
            CSS
          </router-link>
          <router-link 
            to="/javascript" 
            class="text-[#D0CCE3] hover:text-[#DB3DCF] transition-colors"
          >
            JavaScript
          </router-link>
          <router-link 
            to="/vue" 
            class="text-[#D0CCE3] hover:text-[#DB3DCF] transition-colors"
          >
            Vue
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <div class="pt-20">
      <router-view v-slot="{ Component }">
        <transition 
          name="fade" 
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <!-- Footer -->
    <footer class="bg-[rgba(10,10,31,0.6)] py-6 mt-8">
      <div class="container mx-auto text-center">
        <p class="text-[#D0CCE3] opacity-70">
          © Han Jin Guang. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(10,10,31,0.5);
}

::-webkit-scrollbar-thumb {
  background: #DB3DCF;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(219, 61, 207, 0.7);
}
</style>
