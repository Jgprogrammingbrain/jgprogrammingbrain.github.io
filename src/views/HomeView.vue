<template>
  <div class="h-screen bg-[#0A0A1F] flex flex-col overflow-hidden">
    <div class="h-[70px] flex-shrink-0">
    </div>
    
    <!-- Custom Background -->
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
        ></div>
      </div>
    </div>
    
    <div class="flex-1 relative overflow-hidden">
      <div class="h-full flex flex-col items-center p-2 sm:p-4 md:p-8 text-[#D0CCE3] z-10">
        <!-- Header -->
        <div class="text-center mb-8 animate-fadeIn">
          <span class="text-3xl sm:text-[2.5rem] lg:text-[3.5rem] mb-2 text-[#DB3DCF] font-black tracking-tight">
          My Developer Portfolio - Jin Guang
          </span>
        </div>

        <!-- Personal Description Section -->
        <div class="max-w-4xl mx-auto text-center mb-8 px-4 animate-fadeIn">
          <p class="text-lg text-[#D0CCE3] opacity-80 leading-relaxed">
            Hi, my name is Jin Guang. I am a dedicated Year 3 Information Systems student from Singapore Management University (SMU), passionate about building and exploring innovative technologies. 
            I was studying computer science for my first two years of university but I find where 
            I find myself making the most impact to be towards building user-centric applications. 
            My developer portfolio highlights my expertise in web development. With hands-on experience in programming languages like CSS, JavaScript, and frameworks such as Vue.js. 
            I strive to create dynamic and responsive applications and I am continually expanding my skills to bridge the gap 
            between my innovative ideas and building impactful solutions.
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex-1 flex items-center justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6961]"></div>
        </div>

        <!-- Portfolio Carousel -->
        <div class="flex-1 w-full max-w-[1600px] relative flex items-center">
          <!-- Previous Button -->
          <button 
            class="absolute left-0 sm:left-2 md:left-8 z-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-full
              bg-[rgba(103,95,242,0.1)] backdrop-blur-md text-white cursor-pointer transition-all
              duration-300 disabled:opacity-0 disabled:cursor-default
              hover:bg-[rgba(103,95,242,0.2)] hover:scale-110 group"
            @click="prev"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-0 pointer-events-none': currentIndex === 0 }"
            aria-label="Previous projects"
          >
            <div class="flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-90">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
          </button>

          <!-- Portfolio Cards Container -->
          <div 
            class="h-full w-full overflow-hidden px-2 sm:px-4 md:px-16"
            ref="carouselRef"
          >
            <div 
              class="h-full flex items-center"
              :style="{ 
                transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
                transition: isAnimating ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }"
            >
              <!-- Portfolio Cards -->
              <div 
                v-for="project in projects" 
                :key="project.id"
                :style="{ flex: `0 0 ${100 / visibleProjects}%` }"
                class="h-[85%] px-2 sm:px-4 md:px-6 lg:px-8"
              >
                <div 
                  class="h-full relative rounded-2xl cursor-pointer overflow-hidden
                    transition-transform duration-300 ease-in-out hover:-translate-y-3 group
                    bg-[rgba(103,95,242,0.1)] backdrop-blur-md border border-[#DB3DCF]/30"
                  @click="navigateToProject(project.link)"
                >
                  <!-- Project Background Image -->
                  <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A1F] to-[#1A1A3A] opacity-80">
                    <img 
                      :src="project.backgroundImage" 
                      alt="Project background" 
                      class="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                  </div>

                  <!-- Project Content -->
                  <div class="relative z-20 h-full flex flex-col justify-end p-6">
                    <h3 class="text-2xl font-bold text-white mb-4">
                      {{ project.title }}
                    </h3>
                    <p class="text-[#D0CCE3] mb-6 opacity-70">
                      {{ project.description }}
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[#DB3DCF] font-semibold uppercase tracking-wider">
                        View Project
                      </span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6 text-[#DB3DCF] transform group-hover:translate-x-1 transition-transform"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <button 
            class="absolute right-0 sm:right-2 md:right-8 z-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-full
              bg-[rgba(103,95,242,0.1)] backdrop-blur-md text-white cursor-pointer transition-all
              duration-300 disabled:opacity-0 disabled:cursor-default
              hover:bg-[rgba(103,95,242,0.2)] hover:scale-110 group"
            @click="next"
            :disabled="currentIndex >= projects.length - visibleProjects"
            :class="{ 'opacity-0 pointer-events-none': currentIndex >= projects.length - visibleProjects }"
            aria-label="Next projects"
          >
            <div class="flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-90">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// State
const currentIndex = ref(0)
const isAnimating = ref(false)
const visibleProjects = ref(3)
const loading = ref(false)
const carouselRef = ref(null)

const cssImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
  <path fill="#1572B6" d="M41 363 0 87l451 1-41 275z"/>
  <path fill="#33A9DC" d="M226 414l145-40 34-195H226z"/>
  
  <text 
    x="226" 
    y="300" 
    text-anchor="middle" 
    font-size="120" 
    font-weight="bold" 
    fill="white"
  >
    CSS
  </text>
</svg>
`)}`

const jsImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
  <rect width="630" height="630" fill="#f7df1e"/>
  <path d="m423.2 492.19c12.69 20.72 29.21 35.98 58.4 35.98 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-55 0-90.5-26.2-108.1-60.5zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
</svg>
`)}`

const vueImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
  <path d="M161.096.001l-30.224 52.35L100.647.001H-.005l130.877 226.69L261.749.001h-100.65z" fill="#41b883"/>
  <path d="M161.096.001l-30.224 52.35L100.647.001H52.346l78.526 136.01L209.398.001h-48.302z" fill="#34495e"/>
</svg>
`)}`

// Projects Data
const projects = ref([
{
  id: 1,
  title: 'CSS',
  description: 'A collection of CSS techniques and responsive designs using Bootstrap',
  link: '/css',
  backgroundImage: cssImage
},
{
  id: 2,
  title: 'JavaScript',
  description: 'Basic JavaScript structures and interactive demos',
  link: '/javascript',
  backgroundImage: jsImage
},
{
  id: 3,
  title: 'Vue',
  description: 'Reusable Vue components and advanced state management examples',
  link: '/vue',
  backgroundImage: vueImage
}
])

// Carousel functionality remains the same as in previous version
const updateVisibleProjects = () => {
  if (!carouselRef.value) return
  
  const width = window.innerWidth
  
  if (width < 768) {
    visibleProjects.value = 1
  } else if (width < 1024) {
    visibleProjects.value = 2
  } else {
    visibleProjects.value = 3 
  }
  
  if (currentIndex.value > projects.value.length - visibleProjects.value) {
    currentIndex.value = Math.max(0, projects.value.length - visibleProjects.value)
  }
}

const next = () => {
  if (currentIndex.value < projects.value.length - visibleProjects.value) {
    isAnimating.value = true
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    isAnimating.value = true
    currentIndex.value--
  }
}

const navigateToProject = (link) => {
  router.push(link)
}

const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

onMounted(() => {
  updateVisibleProjects()
  window.addEventListener('resize', debounce(updateVisibleProjects, 250))
})

onUnmounted(() => {
  window.removeEventListener('resize', debounce(updateVisibleProjects, 250))
})
</script>

<style>
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