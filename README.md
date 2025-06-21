# 📝 Mini Blog

Projeto de um **mini blog interativo** desenvolvido com **React.js**, **Firebase** e **CSS Modules**, com funcionalidades de autenticação, criação e gerenciamento de postagens em tempo real.

---

## 🚀 Funcionalidades principais

- 🧑‍💻 Cadastro e login de usuários (Firebase Authentication)
- 📝 Criação, edição e exclusão de posts
- 🔍 Busca de postagens por palavra-chave
- 📑 Página com detalhes completos de cada post
- 🗂 Dashboard com posts do usuário logado
- 📜 Histórico de alterações (experimental)
- 🎯 Página de promoções (extra)
- 📁 Interface separada por componentes e hooks reutilizáveis

---

## 🛠️ Tecnologias utilizadas

- ⚛️ React.js
- 🔥 Firebase (Firestore + Auth)
- 🧠 React Context API
- 🎣 Custom Hooks (CRUD com Firestore)
- 💅 CSS Modules
- 📦 React Router DOM

---

## 🧱 Estrutura de Pastas
src/ ├── components/ # Componentes reutilizáveis (Navbar, Footer, PostDetail) 
              ├── context/ # Contexto global (auth) 
              ├── firebase/ # Configuração do Firebase 
              ├── hooks/ # Hooks customizados para interagir com o Firestore 
              ├── pages/ # Telas principais  
              ├── About/ # Página sobre 
              ├── CreatePost/ # Criação de posts 
              ├── Dashboard/ # Painel do usuário  
              ├── Edit/ # Edição de post  
              ├── Historico/ # Histórico de ações 
              ├── Home/ # Página inicial 
              ├── Login/ # Tela de login  
              ├── Post/ # Detalhes do post 
              ├── Promocao/ # Página de promoções 
              ├── Register/ # Tela de registro  
              └── Search/ # Página de busca 
              ├── App.js # Componente raiz 
              ├── index.js # Ponto de entrada da aplicação
