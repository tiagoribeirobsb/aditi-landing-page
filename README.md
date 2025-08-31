
# 🚀 Aditi Digital Experts - Landing Page

## 📖 Sobre o Projeto

Landing page institucional da **Aditi Digital Experts**, uma holding que integra três frentes especializadas – Estratégia de Negócios, Inteligência Artificial e Marketing de Performance – para transformar o caos operacional em crescimento previsível e sustentável.

### 🎯 Objetivo
Apresentar o ecossistema de soluções digitais integradas da Aditi, com foco em conversão estratégica e captura de leads qualificados.

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 14.2.28
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **Forms:** React Hook Form
- **Notifications:** React Hot Toast
- **Scroll Detection:** React Intersection Observer

## 📁 Estrutura do Projeto

```
aditi_landing_page/
└── app/
    ├── package.json
    ├── next.config.js
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── postcss.config.js
    ├── app/
    │   ├── layout.tsx          # Layout principal
    │   ├── page.tsx            # Página home
    │   ├── globals.css         # Estilos globais
    │   ├── privacy/
    │   │   └── page.tsx        # Política de Privacidade
    │   └── terms/
    │       └── page.tsx        # Termos de Uso
    └── components/
        ├── hero-section.tsx           # Seção Hero com Gateway
        ├── about-section.tsx          # Sobre a Aditi
        ├── companies-section.tsx      # Pilares de Solução
        ├── methodology-section.tsx    # Metodologia ADITI™
        ├── social-proof-section.tsx   # Resultados e Depoimentos
        ├── faq-section.tsx           # Perguntas Frequentes
        ├── cta-section.tsx           # Call to Action Final
        ├── footer.tsx                # Rodapé
        └── lead-capture-widget.tsx   # Widget de Captura de Leads
```

## 🎨 Seções da Landing Page

### 1. 🏠 **Hero Section**
- **Título:** Aditi Digital Experts
- **Subtítulo:** Um ecossistema de inteligência digital para empresas que querem crescer com clareza, automação e performance
- **Descrição:** Somos uma holding que integra três frentes especializadas – Estratégia de Negócios, Inteligência Artificial e Marketing de Performance
- **Gateway:** "Qual solução você está buscando hoje?"
- **Botões de Acesso:**
  - 🚀 **Ciclo Lucrativo** - Estratégia e Vendas com método validado
  - 🤖 **IA Bridge** - Automação, Dados e Inteligência Artificial
  - 📣 **Performance Digital** - Marketing com propósito e performance

### 2. 🏢 **About Section**
- **Título:** Mais que uma empresa: uma arquitetura de crescimento para negócios que querem ir além
- **Descrição:** Com mais de 20 anos de experiência corporativa e centenas de negócios atendidos
- **Stats:**
  - +300 empresas atendidas
  - Metodologia própria
  - Ecossistema 100% integrado
  - Foco em execução e resultado

### 3. 🔧 **Pilares de Solução**
#### 🚀 **Ciclo Lucrativo**
- Estratégia, estrutura e vendas com metodologia validada
- Diagnóstico sistêmico e reposicionamento comercial
- Estruturação de operação e processos de venda
- Acompanhamento prático com foco em performance

#### 🤖 **IA Bridge**
- Automação, dados e inteligência artificial aplicada
- Gestão documental, funil e cobrança automatizada
- Dashboards em tempo real e workflows integrados
- Atendimento e e-commerce no WhatsApp com IA

#### 📣 **Performance Digital**
- Marketing com propósito e impacto real
- Posicionamento de marca e conteúdo estratégico
- Tráfego pago e orgânico em sinergia
- Presença digital que atrai, engaja e converte

### 4. 🧠 **Metodologia ADITI™**
- **A** - Análise Profunda
- **D** - Direcionamento de Valor
- **I** - Impulso Comercial
- **T** - Trave Mestra Operacional
- **I** - Implementação com Ritmo

### 5. 📊 **Prova Social - Resultados**
- +R$ 60 milhões em vendas geradas
- +80% de tarefas automatizadas
- Clientes no Brasil, Portugal, EUA e Espanha
- Redução de no-show em 72% nas operações comerciais

### 6. 💬 **Depoimentos**
- "A Aditi foi o divisor de águas na nossa estrutura de vendas." - Diretor Comercial
- "Implementamos a IA Bridge e cortamos 30 horas semanais de tarefas manuais." - COO, Startup de Serviços

### 7. ❓ **FAQ**
- A Aditi atende empresas de qual porte?
- Preciso contratar todas as empresas?
- Vocês trabalham com tecnologia própria?
- Qual a duração média de um projeto?

### 8. 📞 **CTA Final**
- **Título:** Pronto para destravar o crescimento da sua empresa?
- **Texto:** Converse com um dos nossos especialistas
- **Botão:** Fale com um Especialista

### 9. 🦶 **Footer**
- Logo e manifesto da empresa
- Links rápidos: Sobre, Empresas, Metodologia, Resultados, Contato
- Contatos: WhatsApp (+55 11 5286-8424), LinkedIn, E-mail
- CNPJ: 59.390.921/0001-50

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- NPM ou Yarn

### Instalação

1. **Clone ou baixe o projeto**
2. **Navegue para a pasta:**
```bash
cd aditi_landing_page/app
```

3. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

4. **Execute em modo desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse:** `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## 🎨 Design System

### Cores Principais
- **Primária:** Purple (#7C3AED)
- **Secundária:** Cyan (#06B6D4)
- **Gradientes:** Purple to Cyan, Green to Emerald, Blue to Cyan

### Tipografia
- **Fonte Principal:** Inter (sistema)
- **Fonte Títulos:** Poppins
- **Tamanhos:** Responsivos com breakpoints sm, md, lg, xl

### Componentes
- **Cards:** Bordas sutis, hover effects
- **Botões:** Gradientes, animações suaves
- **Animations:** Framer Motion para scroll reveals
- **Layout:** Clean, minimalista, fundo branco

## 🌟 Funcionalidades

### 📱 **Responsivo**
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### 🎭 **Animações**
- Scroll-triggered animations
- Hover effects
- Smooth transitions
- Loading states

### 📧 **Captura de Leads**
- Widget de contato integrado
- Validação de formulário
- Integração com WhatsApp
- Notificações de sucesso/erro

### 🔗 **Navegação**
- Menu fixo no topo
- Scroll suave entre seções
- Links âncora funcionais
- Botão "voltar ao topo"

## 📞 Contato

- **WhatsApp:** +55 11 5286-8424
- **CNPJ:** 59.390.921/0001-50
- **Website:** [Aditi Digital Experts](https://aditi-digital-experts.com)

## 📝 Licença

© 2025 Aditi Digital Experts. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para transformar o caos operacional em crescimento previsível e sustentável.**
