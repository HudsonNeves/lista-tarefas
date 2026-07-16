# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Aula Prática - Introdução ao React

## Objetivo

Criar uma aplicação simples de um contador utilizando React para apresentar os principais conceitos da biblioteca.

---

# 1. Criando o projeto

Criar um projeto com Vite.

```bash
npm create vite@latest contador-react
```

Selecionar:

- React
- JavaScript

Entrar na pasta:

```bash
cd contador-react
```

Instalar dependências:

```bash
npm install
```

Executar o projeto:

```bash
npm run dev
```

---

# 2. Estrutura do projeto

Mostrar a estrutura do projeto.

```
src
│
├── App.jsx
├── App.css
└── main.jsx
```

Explicar:

- main.jsx é o ponto de entrada.
- App.jsx é o componente principal.
- App.css contém os estilos.

---

# 3. Limpar o App.jsx

Apagar o código padrão e criar o componente.

```jsx
function App() {
  return (
    <div>
      <h1>Primeira Aplicação React</h1>
    </div>
  );
}

export default App;
```

### Explicar

- React trabalha com componentes.
- JSX permite escrever HTML dentro do JavaScript.
- Todo componente retorna uma interface.

---

# 4. Importar CSS

```jsx
import "./App.css";
```

Explicar:

- O CSS é importado diretamente pelo componente.

---

# 5. Criar o estado

Importar o hook.

```jsx
import { useState } from "react";
```

Criar o estado.

```jsx
const [contador, setContador] = useState(0);
```

Explicar:

- contador → valor atual.
- setContador → altera o estado.
- 0 → valor inicial.

---

# 6. Criar funções

Incrementar.

```jsx
function incrementar() {
    setContador(contador + 1);
}
```

Decrementar.

```jsx
function decrementar() {
    setContador(contador - 1);
}
```

Zerar.

```jsx
function zerar() {
    setContador(0);
}
```

Explicar:

Sempre alteramos o estado utilizando a função setContador.

---

# 7. Mostrar o valor

```jsx
<p>Valor atual: {contador}</p>
```

Explicar:

As chaves permitem inserir JavaScript dentro do JSX.

---

# 8. Criar os botões

```jsx
<button onClick={incrementar}>
+
</button>

<button onClick={decrementar}>
-
</button>

<button onClick={zerar}>
Zerar
</button>
```

Explicar:

- onClick dispara um evento.
- O React atualiza automaticamente a tela.

---

# 9. Estrutura final

```jsx
<div className="container">

<h1>Primeira Aplicação React</h1>

<h2>Contador</h2>

<p>Valor atual: {contador}</p>

<button onClick={incrementar}>+</button>

<button onClick={decrementar}>-</button>

<button onClick={zerar}>Zerar</button>

</div>
```

---

# 10. CSS

```css
body{
    margin:0;
    background:#f5f5f5;
    font-family:Arial;
}

.container{

    width:350px;

    margin:60px auto;

    text-align:center;

    background:white;

    padding:20px;

    border-radius:8px;

    box-shadow:0 0 10px #ccc;
}

button{

    margin:5px;

    padding:10px 20px;

    border:none;

    background:#0d6efd;

    color:white;

    border-radius:5px;

    cursor:pointer;
}

button:hover{

    background:#0b5ed7;

}
```

---

# Conceitos abordados

✔ React

✔ Componentes

✔ JSX

✔ Hook useState

✔ Eventos

✔ Atualização de estado

✔ Renderização automática

✔ CSS

---

# Perguntas para fazer aos alunos

O que é um componente?

Por que usamos useState?

O que acontece quando alteramos o estado?

Qual a diferença entre uma variável comum e um estado?

O que faz o onClick?

---

# Encerramento

Hoje criamos uma aplicação simples, mas vimos os conceitos fundamentais do React.

A partir desse mesmo conhecimento podemos evoluir para:

- Lista de tarefas
- Calculadora
- Formulários
- Consumo de APIs
- CRUD completo

---

# Código final do App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {

  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function zerar() {
    setContador(0);
  }

  return (
    <div className="container">

      <h1>Primeira Aplicação React</h1>

      <h2>Contador</h2>

      <p>Valor atual: {contador}</p>

      <button onClick={incrementar}>+</button>

      <button onClick={decrementar}>-</button>

      <button onClick={zerar}>Zerar</button>

    </div>
  );
}

export default App;
```
