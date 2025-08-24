<template>
  <div class="min-h-screen bg-[#0A0A1F] flex flex-col overflow-hidden">
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
    
    <div class="flex-1 relative overflow-y-auto">
      <div class="min-h-full flex flex-col items-center p-2 sm:p-4 md:p-8 text-[#D0CCE3] z-10 relative">
        <!-- Header -->
        <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0 border-4 border-[#DB3DCF] shadow-lg shadow-[#DB3DCF]/30 flex-shrink-0">
            <img 
              src="/src/assets/personal.jpg" 
              alt="Jin Guang" 
              class="w-full h-full object-cover"
              @error="handleImageError" 
            />
          </div>
        <div class="text-center mb-4 sm:mb-6 md:mb-8 animate-fadeIn w-full px-2">
  <span class="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#DB3DCF] font-bold tracking-tight leading-tight block">
    Developer Portfolio - Han Jin Guang
  </span>
</div>

        <!-- Personal Description Section -->
        <div class="w-full max-w-4xl mx-auto text-center mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 animate-fadeIn">
          <p class="text-sm sm:text-base md:text-lg text-[#D0CCE3] opacity-80 leading-relaxed">
            Hi, my name is Jin Guang. I am a dedicated Final Year Information Systems student from Singapore Management University (SMU), passionate about exploring and building innovative technologies.
            I specialise in Smart City Management - a major focused on integrating technology to traditional processes to create sustainable and efficient solutions.
            I continuously strive to keep up-to-date with the latest technologies and expand my technical skills, to bridge the gap 
            between ideation and the development of impactful solutions.
          </p>
        </div>

        <!-- Resume and GitHub Buttons -->
        <div class="w-full max-w-4xl mx-auto text-center mb-4 sm:mb-6 md:mb-8 px-4 animate-fadeIn">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a 
              href="https://drive.google.com/file/d/1vmdrWhJku7WyS_0hNbpo_XDeC4JfEOc_/view?usp=sharing" 
              class="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold bg-[#675FF2] text-white rounded-full 
              shadow-lg shadow-[#675FF2]/30 hover:bg-[#7B74FF] hover:shadow-[#675FF2]/50 
              transition-all duration-300 transform hover:-translate-y-1 border border-[#9F9AFF]/30"
            >
              View Resume →
            </a>
            
            <a 
              href="https://github.com/Jgprogrammingbrain" 
              class="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold bg-[#1d1d1d] text-white rounded-full 
              shadow-lg shadow-black/30 hover:bg-[#2d2d2d] hover:shadow-black/50 
              transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/30"
            >
              <div class="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="inline-block">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </div>
            </a>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex-1 flex items-center justify-center">
          <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-[#FF6961]"></div>
        </div>

        <!-- Combined Skills Section Title -->
        <div class="w-full max-w-4xl mx-auto text-center mt-4 mb-4 px-3 sm:px-4 animate-fadeIn">
          <h2 class="text-lg sm:text-xl md:text-2xl text-[#DB3DCF] font-bold mb-2">
            Programming Skills & Technologies
          </h2>
          <p class="text-sm sm:text-base text-[#D0CCE3] opacity-80">
            Languages and frameworks I've worked with:
          </p>
        </div>

        <!-- Combined Project Cards Grid -->
        <div 
          class="w-full max-w-[1600px] overflow-hidden px-2 sm:px-4 md:px-12 mb-8"
          ref="carouselRef"
        >
          <div 
            class="flex flex-wrap justify-center"
            :style="{ 
              transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
              transition: isAnimating ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }"
          >
            <!-- All Project Cards -->
            <div 
              v-for="project in allProjects" 
              :key="project.id"
              :style="{ flex: `0 0 ${100 / visibleProjects}%` }"
              class="p-2 sm:p-3 md:p-4"
            >
              <div 
                class="relative rounded-xl overflow-hidden
                  transition-transform duration-300 ease-in-out hover:-translate-y-2 group
                  bg-[rgba(103,95,242,0.1)] backdrop-blur-md border border-[#DB3DCF]/30 h-[200px] sm:h-[250px]"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A1F] to-[#1A1A3A] opacity-80">
                  <img 
                    :src="project.backgroundImage" 
                    alt="Project background" 
                    class="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                </div>
                <div class="relative z-20 h-full flex flex-col justify-center items-center p-4 text-center">
                  <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
                  <p class="text-sm text-[#D0CCE3] mb-4 opacity-70">
                    {{ project.description }}
                  </p>
                  <span class="text-xs text-[#DB3DCF] font-semibold uppercase tracking-wider">
                    {{ project.skillLevel }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
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

// Adding new icons for additional languages
const pythonImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110">
  <path d="M55 0A55 55 0 110 55a55 55 0 0155-55z" fill="#366A96"/>
  <path d="M55 13c-21 0-19.7 9-19.7 9l.1 9.5h20v3H26c-10 0-18 6-18 18.5S13 73 22.2 73h8.5v-9c0-8 7-15 15.5-15h19.8c7 0 12-5.5 12-12.5V22c0-6.5-5.5-9-13-9zm-11.5 5c2 0 3.5 1.5 3.5 3.5S45.5 25 43.5 25 40 23.5 40 21.5s1.5-3.5 3.5-3.5z" fill="white"/>
  <path d="M55 97c21 0 19.7-9 19.7-9l-.1-9.5h-20v-3h29.3c10 0 18-6 18-18.5S93.5 37 84.4 37h-8.5v9c0 8-7 15-15.5 15H40.6c-7 0-12 5.5-12 12.5V88c0 6.5 5.5 9 13 9zm11.5-5c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5 3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5z" fill="white"/>
</svg>
`)}`

const phpImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill="#777BB3"/>
  <text 
    x="50" 
    y="65" 
    text-anchor="middle" 
    font-size="50" 
    font-weight="bold" 
    fill="white"
  >
    PHP
  </text>
</svg>
`)}`

const vbaImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#217346"/>
  <text 
    x="50" 
    y="65" 
    text-anchor="middle" 
    font-size="40" 
    font-weight="bold" 
    fill="white"
  >
    VBA
  </text>
</svg>
`)}`

const sqlImage = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill="#F29111"/>
  <text 
    x="50" 
    y="65" 
    text-anchor="middle" 
    font-size="40" 
    font-weight="bold" 
    fill="white"
  >
    SQL
  </text>
</svg>
`)}`

// Combine all projects into a single array
const allProjects = ref([
{
  id: 1,
  title: 'CSS',
  description: 'Created modern and flexible layouts using CSS, Tailwind, and Bootstrap in coursework and real-world settings.',
  skillLevel: 'Advanced',
  backgroundImage: cssImage
},
{
  id: 2,
  title: 'JavaScript',
  description: 'Built interactive web applications using JavaScript in hackathons and coursework.',
  skillLevel: 'Advanced',
  backgroundImage: jsImage
},
{
  id: 7,
  title: 'SQL',
  description: 'Designed efficient database structures and executed advanced queries using SQL in coursework and real-world settings.',
  skillLevel: 'Advanced',
  backgroundImage: sqlImage
},
{
  id: 3,
  title: 'Vue',
  description: 'Developed reusable components and built dynamic web applications using Vue in personal projects and coursework.',
  skillLevel: 'Intermediate',
  backgroundImage: vueImage
},
{
  id: 4,
  title: 'Python',
  description: 'Developed backend systems and scalable web applications using frameworks such as Flask in hackathons and coursework.',
  skillLevel: 'Intermediate',
  backgroundImage: pythonImage
},
{
  id: 5,
  title: 'PHP',
  description: 'Built websites and integrated backend functionality using PHP in coursework.',
  skillLevel: 'Intermediate',
  backgroundImage: phpImage
},
{
  id: 6,
  title: 'VBA',
  description: 'Automated tasks and streamlined workflows using Visual Basic for Applications (VBA) in real-world settings.',
  skillLevel: 'Intermediate',
  backgroundImage: vbaImage
}
])

// Improved updateVisibleProjects function with more breakpoints
const updateVisibleProjects = () => {
  if (!carouselRef.value) return
  
  const width = window.innerWidth
  
  if (width < 640) {
    // Mobile: show 1 project
    visibleProjects.value = 1
  } else if (width < 1024) {
    // Tablet: show 2 projects
    visibleProjects.value = 2
  } else if (width < 1280) {
    // Small desktop: show 3 projects
    visibleProjects.value = 3
  } else {
    // Large desktop: show 4 projects
    visibleProjects.value = 4
  }
  
  // Ensure we don't have an invalid index when resizing
  if (currentIndex.value > allProjects.value.length - visibleProjects.value) {
    currentIndex.value = Math.max(0, allProjects.value.length - visibleProjects.value)
  }
}

const next = () => {
  if (currentIndex.value < allProjects.value.length - visibleProjects.value) {
    isAnimating.value = true
    currentIndex.value++
    // Reset animation state after transition completes
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    isAnimating.value = true
    currentIndex.value--
    // Reset animation state after transition completes
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }
}

const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const debouncedResize = debounce(updateVisibleProjects, 250)

onMounted(() => {
  updateVisibleProjects()
  window.addEventListener('resize', debouncedResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', debouncedResize)
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
