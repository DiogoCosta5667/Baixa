# Baixa - Portfolio de Arte 🎨

Um site moderno e elegante para mostrar obras de arte, desenvolvido com React.

## 🌟 Características

- **Design Moderno**: Interface elegante com cores branco e azul marinho
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Animações Suaves**: Efeitos de scroll, hover e transições elegantes
- **Galeria Interativa**: Lightbox para visualizar obras em detalhe
- **Navegação Smooth**: Scroll suave entre secções
- **Performance Otimizada**: Construído com Vite para velocidade máxima

## 🚀 Como Começar

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o browser em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os ficheiros de produção estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

```
Baixa/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Barra de navegação
│   │   ├── Hero.jsx           # Secção inicial
│   │   ├── Gallery.jsx        # Galeria de obras
│   │   ├── About.jsx          # Sobre a artista
│   │   ├── Contact.jsx        # Formulário de contacto
│   │   └── Footer.jsx         # Rodapé
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos globais
│   └── main.jsx               # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personalização

### Adicionar/Substituir Imagens da Galeria

Edita o array `artworks` em `src/components/Gallery.jsx`:

```javascript
const artworks = [
  {
    id: 1,
    title: 'Nome da Obra',
    description: 'Descrição da obra',
    image: 'URL_DA_IMAGEM',
  },
  // Adiciona mais obras...
];
```

### Alterar Cores

As cores principais estão definidas em `src/index.css`:

```css
:root {
  --navy: #0a2540;        /* Azul marinho principal */
  --navy-light: #1a3a5c;  /* Azul marinho claro */
  --white: #ffffff;       /* Branco */
}
```

### Alterar Informações de Contacto

Edita os componentes `Contact.jsx` e `Footer.jsx` com as informações corretas.

## 🌐 Deploy Online

### Opções para Colocar o Site Online:

1. **Netlify** (Recomendado - Grátis)
   - Arrasta a pasta `dist` para netlify.com/drop
   - Ou conecta o repositório Git

2. **Vercel** (Grátis)
   - Conecta o GitHub e faz deploy automático

3. **GitHub Pages** (Grátis)
   - Push para GitHub e ativa GitHub Pages

4. **Firebase Hosting** (Grátis)
   - Deploy com Firebase CLI

## 📱 Compatibilidade

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)
- Mobile browsers

## 💡 Dicas

- Usa imagens otimizadas (WebP ou JPEG otimizado)
- Mantém as imagens abaixo de 500KB para melhor performance
- Adiciona texto alternativo (alt) a todas as imagens
- Testa o site em diferentes dispositivos

## 🤝 Suporte

Para questões ou suporte, contacta através do formulário no site.

---

Desenvolvido com 💙 para Baixa
