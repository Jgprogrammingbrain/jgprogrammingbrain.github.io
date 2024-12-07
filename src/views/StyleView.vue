<template>
  <div class="h-screen bg-[#0A0A1F] flex flex-col overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute bg-gradient-to-br from-[#0A0A1F] to-[#1A1A3A] inset-0 opacity-80"></div>
      
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div 
          v-for="n in 20" 
          :key="n"
          class="absolute bg-[rgba(219,61,207,0.05)] rounded-full animate-float"
          :style="{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }"
        />
      </div>
    </div>

    <!-- Content Container -->
    <div class="flex-1 relative overflow-hidden">
      <div class="h-full flex flex-col items-center p-2 sm:p-4 md:p-8 text-[#D0CCE3] z-10">
        <!-- Header -->
        <div class="text-center mb-8 animate-fadeIn">
          <span class="text-3xl sm:text-[2.5rem] lg:text-[3.5rem] mb-2 text-[#DB3DCF] font-black tracking-tight">
            Web Dev Cheatsheets
          </span>
        </div>

        <!-- Tab Navigation -->
        <div class="flex mb-8 bg-[rgba(103,95,242,0.1)] rounded-full p-2">
          <button 
            class="px-6 py-2 rounded-full transition-all duration-300"
            :class="activeTab === 'css' 
              ? 'bg-[#DB3DCF] text-white' 
              : 'text-[#D0CCE3] hover:bg-[rgba(103,95,242,0.2)]'"
            @click="activeTab = 'css'"
          >
            CSS
          </button>
          <button 
            class="px-6 py-2 rounded-full transition-all duration-300"
            :class="activeTab === 'bootstrap' 
              ? 'bg-[#DB3DCF] text-white' 
              : 'text-[#D0CCE3] hover:bg-[rgba(103,95,242,0.2)]'"
            @click="activeTab = 'bootstrap'"
          >
            Bootstrap
          </button>
        </div>

        <!-- Content -->
        <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="(section, index) in currentCheatsheet" 
            :key="index"
            class="bg-[rgba(103,95,242,0.1)] backdrop-blur-md rounded-2xl p-6 border border-[#DB3DCF]/30 hover:-translate-y-2 transition-transform"
          >
            <h2 class="text-2xl font-bold text-white mb-4">{{ section.title }}</h2>
            <div 
              v-for="(item, itemIndex) in section.content" 
              :key="itemIndex" 
              class="mb-4"
            >
              <h3 class="text-[#DB3DCF] font-semibold mb-2">{{ item.name }}</h3>
              <pre class="bg-[#1A1A3A] rounded-lg p-3 text-sm overflow-x-auto">
                <code class="text-[#D0CCE3]">{{ item.code }}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('css')

const cssCheatsheet = [
  {
    title: 'CSS Implementation',
    content: [
      { name: 'Inline CSS', code: '<h2 style="color: red;">Text</h2>' },
      { name: 'Internal CSS', code: '<style>\n    h2 { color: red; }\n</style>' },
      { name: 'External CSS', code: '<link rel="stylesheet" href="styles.css">' }
    ]
  },
  {
    title: 'Selectors',
    content: [
      { name: 'Element', code: 'p { }' },
      { name: 'ID', code: '#myId { }' },
      { name: 'Class', code: '.myClass { }' },
    ]
  }
]

const bootstrapCheatsheet = [
  {
    title: 'Grid System',
    content: [
      { name: 'Container Types', code: '<div class="container">\n<div class="container-fluid">\n<div class="container-lg">' },
      { name: 'Basic Grid', code: '<div class="row">\n  <div class="col">Column</div>\n  <div class="col">Column</div>\n</div>' }
    ]
  },
  {
    title: 'Buttons',
    content: [
      { name: 'Button Styles', code: '<button class="btn btn-primary">Primary</button>' },
      { name: 'Button Group', code: '<div class="btn-group">\n  <button class="btn btn-primary">1</button>\n  <button class="btn btn-primary">2</button>\n</div>' }
    ]
  }
]

const currentCheatsheet = computed(() => 
  activeTab.value === 'css' ? cssCheatsheet : bootstrapCheatsheet
)
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>