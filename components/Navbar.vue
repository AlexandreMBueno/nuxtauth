<template>
  <div class="flex justify-center items-center bg-black-900 p-2 border-none">
    <Menubar :model="items" class="border-none" />
  </div>
</template>


<script setup lang="ts">
const router = useRouter();
const { signIn, signOut } = useAuth();

type Item = {
  label: string;
  icon: string;
  command: () => void;
};

const HOME: Item = {
  label: "NeetFinance",
  icon: "pi pi-home",
  command: () => router.push("/"),
};

const EXERCICIOS: Item = { // definindo const EXERCICIOS do tipo item (obj com label, icon e command)
  label: "Exercícios", // oq o user ve
  icon: "pi pi-book", // o icone atrelado a ele   pi vem da bilbioteca PrimeIcons
  command: () => router.push("/exercicios"), // e oq acontece quando clica nele (navega para a rota)
};

const CURSOS: Item = {
  label: "Cursos",
  icon: "pi pi-briefcase",
  command: () => router.push("/cursos"),
};

const LOGIN: Item = {
  label: "Login",
  icon: "pi pi-sign-in",
  command: () => signIn("auth0"),
};

const PROFILE: Item = {
  label: "Profile",
  icon: "pi pi-user",
  command: () => router.push("/me"),
};

const LOGOUT: Item = {
  label: "Logout",
  icon: "pi pi-sign-out",
  command: () => signOut({ callbackUrl: "/" }),
};

const { status } = useAuth();
const items = ref<Item[]>([HOME, LOGIN, EXERCICIOS, CURSOS]);
if (status.value === "authenticated") {
  items.value = [HOME, PROFILE, EXERCICIOS, CURSOS, LOGOUT];
}
</script>
