<template>
  <div class="h-screen bg-[#0A0A1F] flex flex-col overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute bg-gradient-to-br from-[#0A0A1F] to-[#1A1A3A] inset-0 opacity-80"></div>
      <div 
        v-for="n in 20" 
        :key="n" 
        class="absolute bg-[rgba(219,61,207,0.05)] rounded-full animate-float"
        :style="{
          width: '100px',
          height: '100px',
          top: `${n * 5}%`,
          left: `${n * 5}%`
        }"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 relative overflow-hidden z-10 text-[#D0CCE3]">
      <div class="container mx-auto px-4 py-8 h-full flex flex-col">
        <!-- Header -->
        <div class="text-center mb-8 animate-fadeIn">
          <h1 class="text-3xl sm:text-[2.5rem] lg:text-[3.5rem] text-[#DB3DCF] font-black tracking-tight">
            Vue.js Learning Journey
          </h1>
        </div>

        <!-- Section Selector -->
        <div class="flex justify-center mb-8 space-x-4">
          <button
            v-for="(section, key) in sections"
            :key="key"
            class="px-4 py-2 rounded-full transition-all duration-300"
            :class="{
              'bg-[#DB3DCF] text-white': activeSection === key,
              'bg-[rgba(103,95,242,0.1)] text-[#D0CCE3] hover:bg-[rgba(103,95,242,0.2)]': activeSection !== key
            }"
            @click="activeSection = key"
          >
            {{ section.title }}
          </button>
        </div>

        <!-- Content Area -->
        <div class="flex-1 grid md:grid-cols-2 gap-8 overflow-auto">
          <!-- Left Panel - Description -->
          <div class="bg-[rgba(103,95,242,0.1)] backdrop-blur-md rounded-2xl p-6">
            <h2 class="text-2xl text-[#DB3DCF] mb-4">
              {{ sections[activeSection].title }}
            </h2>
            <p class="text-[#D0CCE3] opacity-80 mb-6">
              {{ sections[activeSection].description }}
            </p>

            <!-- Core Concepts -->
            <div v-if="activeSection === 'core'">
              <h3 class="text-xl text-[#DB3DCF] mb-2">Core Example</h3>
              <pre class="bg-[#0A0A1F] p-4 rounded text-sm overflow-auto">{{ coreCodeSnippet }}</pre>
            </div>

            <!-- Advanced Features -->
            <div v-if="activeSection === 'advanced'">
              <h3 class="text-xl text-[#DB3DCF] mb-2">Computed Property</h3>
              <pre class="bg-[#0A0A1F] p-4 rounded text-sm overflow-auto">{{ advancedCodeSnippet }}</pre>
            </div>

            <!-- Components -->
            <div v-if="activeSection === 'components'">
              <h3 class="text-xl text-[#DB3DCF] mb-2">Component Example</h3>
              <pre class="bg-[#0A0A1F] p-4 rounded text-sm overflow-auto">{{ componentCodeSnippet }}</pre>
            </div>
          </div>

          <!-- Interactive Demo -->
          <div class="bg-[rgba(103,95,242,0.1)] backdrop-blur-md rounded-2xl p-6">
            <h2 class="text-2xl text-[#DB3DCF] mb-4">
              Interactive Demo
            </h2>

            <!-- Task List for Components Section -->
            <div v-if="activeSection === 'components'">
              <h3 class="text-xl mb-2">Revision for Finals</h3>
              <div 
                v-for="task in tasks" 
                :key="task.id"
                class="flex justify-between items-center p-2 mb-2 rounded"
                :class="{
                  'bg-green-900/30 text-green-300': task.completed,
                  'bg-[#1A1A3A] text-[#D0CCE3]': !task.completed
                }"
              >
                <span :class="{ 'line-through': task.completed }">
                  {{ task.name }}
                </span>
                <div>
                  <button 
                    @click="toggleTaskCompletion(task.id)"
                    class="mr-2 text-sm bg-[#DB3DCF] px-2 py-1 rounded"
                  >
                    {{ task.completed ? 'Undo' : 'Complete' }}
                  </button>
                  <button 
                    @click="removeTask(task.id)"
                    class="text-sm bg-red-600 px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <!-- Form Demo for Advanced Section -->
            <form v-if="activeSection === 'advanced'" @submit.prevent="submitForm" class="space-y-4">
              <input
                type="text"
                v-model="formData.name"
                placeholder="Name"
                class="w-full p-2 bg-[#1A1A3A] rounded text-[#D0CCE3] border border-[#DB3DCF]/30"
              />
              <input
                type="email"
                v-model="formData.email"
                placeholder="Email"
                class="w-full p-2 bg-[#1A1A3A] rounded text-[#D0CCE3] border border-[#DB3DCF]/30"
              />
              <textarea
                v-model="formData.message"
                placeholder="Your message"
                class="w-full p-2 bg-[#1A1A3A] rounded text-[#D0CCE3] border border-[#DB3DCF]/30 h-32"
              ></textarea>
              <button
                type="submit"
                class="w-full p-2 bg-[#DB3DCF] text-white rounded hover:bg-[#DB3DCF]/80 transition-colors"
              >
                Submit
              </button>
            </form>

            <!-- Core Concepts Demo -->
            <div v-if="activeSection === 'core'" class="space-y-4">
              <div class="bg-[#1A1A3A] p-4 rounded">
                <h3 class="text-xl text-[#DB3DCF] mb-2">
                  Reactive Data Binding
                </h3>
                <p class="text-[#D0CCE3] mb-2">
                  Vue's reactivity in action:
                </p>
                <div class="flex items-center space-x-4">
                  <span class="text-[#D0CCE3]">Counter:</span>
                  <button 
                    @click="incrementCounter"
                    class="bg-[#DB3DCF] px-3 py-1 rounded mr-2"
                  >
                    Increment
                  </button>
                  <span class="text-white">{{ counter }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'core',
      counter: 0,
      sections: {
        core: {
          title: 'Vue.js Core Concepts',
          description: 'Fundamental building blocks of Vue.js applications'
        },
        advanced: {
          title: 'Advanced Vue Features',
          description: 'Powerful techniques for complex applications'
        },
        components: {
          title: 'Vue Components',
          description: 'Reusable and composable UI elements'
        }
      },
      tasks: [
        { id: 1, name: 'Revise Vue Basics', completed: false },
        { id: 2, name: 'Master Components', completed: false },
        { id: 3, name: 'Practice Axios', completed: false }
      ],
      formData: {
        name: '',
        email: '',
        message: ''
      },
      coreCodeSnippet: `const app = Vue.createApp({
  data() {
    return { message: 'Hello Vue!' }
  },
  methods: {
    updateMessage() {
      this.message = 'Vue is awesome!'
    }
  }
})`,
      advancedCodeSnippet: `computed: {
  fullName() {
    return \`\${this.firstName} \${this.lastName}\`
  }
}`,
      componentCodeSnippet: `app.component('task-list', {
  props: ['tasks'],
  template: \`
    <div>
      <div v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </div>
    </div>
  \`
})`
    }
  },
  methods: {
    incrementCounter() {
      this.counter++
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    },
    toggleTaskCompletion(taskId) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) {
        task.completed = !task.completed
      }
    },
    submitForm() {
      // Simple form submission logic
      console.log('Form submitted', this.formData)
      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
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
