<template>
  <nav class="w-full bg-gray-800 py-0 fixed top-0 left-0">
    <ul class="flex justify-center list-none p-0 m-0">
      <li class="mx-4">
        <router-link to="/register" class="text-white font-bold hover:underline">Login</router-link>
      </li>
      <li class="mx-4">
        <router-link to="/" class="text-white font-bold hover:underline">NeetFinance</router-link>
      </li>
      <li class="mx-4">
        <router-link to="/exercicios" class="text-white font-bold hover:underline">Exercícios</router-link>
      </li>
      <li class="mx-4">
        <router-link to="/cursos" class="text-white font-bold hover:underline">Cursos</router-link>
      </li>
    </ul>
  </nav>

  <div class="flex flex-col justify-center items-center mt-24"> <!-- mt 24 eh espacamento    margin top   mb margin  bottom-->
    <h1 class="text-5xl font-bold mb-4">NeetFinance</h1> 
    <h2 class="text-2xl font-bold leading-tight text-center"> <!--leadin eh espaco entre linhas e tight eh que eh menor q o normal -->
      O melhor lugar para aprender finanças, <br /> do zero.
    </h2>
  </div>

  <!-- botao de versao tp get pro -->
  <div class="flex justify-center mt-12"> 
    <button class="border-2 border-sky-500 text-sky-500 bg-transparent font-bold text-[15px] py-4 px-6 rounded-md cursor-pointer hover:bg-sky-500 hover:text-white transition duration-500">
      Get Pro
    </button>
  </div>
</template>

<script>
</script>

<style>
.my-cursor-pointer {
  cursor: pointer;
}
</style>
