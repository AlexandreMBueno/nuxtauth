<template>
  <div class="flex h-screen">
    <!-- sidebar com os ex -->
    <div class="w-64 bg-gray-100 border-r border-gray-300 p-5">
      <h3 class="text-xl font-semibold mb-4">Exercícios</h3>
      <ul>
        <li 
          v-for="(exercise, index) in exercises" 
          :key="index" 
          @click="selectExercise(exercise)"
          class="mb-3 cursor-pointer p-2 bg-gray-200 rounded-md hover:bg-gray-300 flex justify-between items-center"
        >
          {{ exercise.question }}
          <span 
            v-if="exercise.completed" 
            class="w-3 h-3 bg-green-400 rounded-full ml-2"
            title="Exercício completado"
          ></span>
        </li>
      </ul>
    </div>

    <!-- mostra o ex selecionado -->
    <div class="flex flex-col items-center flex-grow p-5 mt-10" v-if="selectedExercise">
      <h2 class="text-2xl font-bold mb-4">{{ selectedExercise.question }}</h2>
      <div v-for="(option, i) in selectedExercise.options" :key="i" class="mb-3">
        <label class="flex items-center">
          <input type="radio" :value="option" v-model="selectedAnswer" class="mr-2" />
          {{ option }}
        </label>
      </div>
      <button 
        @click="submitAnswer" 
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Enviar
      </button>
      <p class="mt-4 text-lg">{{ responseMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercicios',
  data() {
    return {
      exercises: [
        { 
          id: 1, 
          question: "O que é uma ação?", 
          options: ["A) Um título de dívida", "B) Parte do capital de uma empresa", "C) Um título governamental", "D) Um tipo de empréstimo"], 
          completed: false 
        },
        { 
          id: 2, 
          question: "O que é um dividendo?", 
          options: ["A) Parte dos lucros de uma empresa distribuída aos acionistas", "B) Um imposto sobre investimentos", "C) Um tipo de ação", "D) Uma taxa de corretagem"], 
          completed: false 
        },
        { 
          id: 3, 
          question: "O que significa taxa de juros?", 
          options: ["A) O valor cobrado pelo uso do dinheiro", "B) Um tipo de investimento", "C) Uma taxa para comprar ações", "D) O valor das ações de uma empresa"], 
          completed: false 
        },
      ],
      selectedExercise: null,
      selectedAnswer: '',
      responseMessage: '',
    };
  },
  methods: {
    selectExercise(exercise) {
      this.selectedExercise = exercise;
      this.selectedAnswer = '';
      this.responseMessage = '';
    },
    submitAnswer() {
      if (!this.selectedAnswer) {
        this.responseMessage = "Por favor, selecione uma resposta.";
        return;
      }
      this.responseMessage = `Resposta enviada!`;
      this.selectedExercise.completed = true;
    }
  }
};
</script>

<style>
</style>
