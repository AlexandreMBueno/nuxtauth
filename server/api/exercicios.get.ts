// server/api/exercicios.get.ts
export default defineEventHandler(() => {
  return [
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
  ];
});

// No Nuxt 3, o defineEventHandler é uma função que define o que o servidor deve fazer quando ele recebe uma requisição em um endpoint específico.
//  Você pode pensar nele como o equivalente a um handler de rotas no FastAPI.
//    Em vez de definir uma função com um decorator como @app.get(...) no FastAPI,
//      você usa defineEventHandler diretamente no arquivo de rota em Nuxt.