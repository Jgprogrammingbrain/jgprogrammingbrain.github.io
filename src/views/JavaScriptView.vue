<template>
  <div class="h-screen bg-[#0A0A1F] flex flex-col overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute bg-gradient-to-br from-[#0A0A1F] to-[#1A1A3A] inset-0 opacity-80"></div>
      
      <div class="absolute inset-0 overflow-hidden">
        <div 
          v-for="n in 15" 
          :key="n"
          class="absolute bg-[rgba(219,61,207,0.05)] rounded-full animate-float"
          :style="{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }"
        ></div>
      </div>
    </div>

    <div class="relative z-10 flex-1 flex flex-col p-4 md:p-8">
      <h1 class="text-3xl md:text-4xl font-black text-center text-[#DB3DCF] mb-8">
        JavaScript Learning Journey
      </h1>

      <!-- Navigation -->
      <div class="flex justify-center mb-8 space-x-2 sm:space-x-4">
        <button
          v-for="(section, key) in sections"
          :key="key"
          @click="activeSection = key"
          class="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
          :class="[
            activeSection === key 
              ? 'bg-[#DB3DCF] text-white' 
              : 'bg-[rgba(103,95,242,0.1)] text-[#D0CCE3] hover:bg-[rgba(103,95,242,0.2)]'
          ]"
        >
          <component :is="section.icon" class="w-8 h-8 text-[#DB3DCF]" />
          {{ section.title }}
        </button>
      </div>

      <!-- Content Display -->
      <div class="flex-1 bg-[rgba(103,95,242,0.1)] rounded-2xl p-6 overflow-auto">
        <component :is="sections[activeSection].content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'

// Custom SVG Icons

const CodeIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  class: 'w-8 h-8 text-[#DB3DCF]'
}, [
  h('polyline', { points: '16 18 22 12 16 6' }),
  h('polyline', { points: '8 6 2 12 8 18' })
])

const ServerIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  class: 'w-8 h-8 text-[#DB3DCF]'
}, [
  h('rect', { x: '2', y: '2', width: '20', height: '8', rx: '2', ry: '2' }),
  h('rect', { x: '2', y: '14', width: '20', height: '8', rx: '2', ry: '2' }),
  h('line', { x1: '6', y1: '6', x2: '6.01', y2: '6' }),
  h('line', { x1: '6', y1: '18', x2: '6.01', y2: '18' })
])

const BarChartIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  class: 'w-8 h-8 text-[#DB3DCF]'
}, [
  h('line', { x1: '18', y1: '20', x2: '18', y2: '10' }),
  h('line', { x1: '12', y1: '20', x2: '12', y2: '4' }),
  h('line', { x1: '6', y1: '20', x2: '6', y2: '14' })
])

// Reactive state
const activeSection = ref('basics')

// Sections content
const sections = {
  basics: {
    icon: BarChartIcon,
    title: "JavaScript Fundamentals",
    content: () => h('div', { class: "grid grid-cols-1 md:grid-cols-2 gap-4 text-[#D0CCE3]" }, [
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Basic Syntax"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Variables & Types
let name = "Jin Guang";  // String
const age = 23;          // Number
let isStudent = true;    // Boolean

// Function Example
function greet(name) {
  return \`Hello, \${name}!\`;
}`)
      ]), h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Functional Programming"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Arrow Functions
const double = x => x * 2;

// Higher Order Functions
const numbers = [1, 2, 3, 4];
const squared = numbers.map(x => x ** 2);`)
      ]),
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Control Structures"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Conditional Logic
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Looping
for (let i = 0; i < 5; i++) {
  console.log(i);
}`)
      ])
    ])
  },
  dom: {
    icon: CodeIcon,
    title: "DOM & Event Handling",
    content: () => h('div', { class: "grid grid-cols-1 md:grid-cols-2 gap-4 text-[#D0CCE3]" }, [
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Element Selection"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Selecting Elements
const button = document.querySelector('#myBtn');
const divs = document.getElementsByTagName('div');

// Modifying Elements
button.innerText = 'Click Me';
button.classList.add('active');`)
      ]),
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Event Handling"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Event Listener
button.addEventListener('click', (event) => {
  console.log('Button clicked!');
  event.preventDefault();
});

// Form Validation
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
}`)
      ])
    ])
  },
  api: {
    icon: ServerIcon,
    title: "API & Async Operations",
    content: () => h('div', { class: "grid grid-cols-1 md:grid-cols-2 gap-4 text-[#D0CCE3]" }, [
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Axios GET Request"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Fetching User Data
axios.get('/api/users')
  .then(response => {
    const users = response.data;
    displayUsers(users);
  })
  .catch(error => {
    console.error('Error fetching users', error);
  });`)
      ]),
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "Promises & Async/Await"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// Async Function
async function fetchData() {
  try {
    const response = await axios.get('/data');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}`)
      ]),
      h('div', [
        h('h3', { class: "text-xl font-bold text-white mb-3" }, "JSON Handling"),
        h('pre', { class: "bg-[rgba(103,95,242,0.1)] p-4 rounded-lg text-sm" }, `
// JSON Parsing
const userData = {
  "name": "Jin Guang",
  "skills": ["JavaScript", "Vue", "Python", "CSS"],
  "experience": null
};

// Convert to string
const jsonString = JSON.stringify(userData);`)
      ])
    ])
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>