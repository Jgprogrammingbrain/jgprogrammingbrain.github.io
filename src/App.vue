<template>
  <div id="app" class="min-h-screen bg-[#0A0A1F] text-[#D0CCE3]">

    <!-- Router View -->
    <div class="pt-0">
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
