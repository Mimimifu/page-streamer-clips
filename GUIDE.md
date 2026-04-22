# 📚 Guia Completo de Hospedagem Gratuita para o Projeto de Clipes

## TCC - Tutorial Completo de Configuração

```markdown
# 🎓 Guia Definitivo: Como Hospedar Seu Projeto de Clipes Gratuitamente

**Autor:** Streamer Tech Guide  
**Data:** Abril 2026  
**Plataformas:** GitHub Pages, Vercel, Netlify, Cloudflare Pages, Render, Tencent EdgeOne  
**Nível:** Iniciante a Intermediário

---

## 📋 Sumário

1. [Preparação do Projeto](#preparação)
2. [GitHub Pages (Recomendado para Iniciantes)](#github-pages)
3. [Vercel (Melhor para Performance)](#vercel)
4. [Netlify (Mais Recursos Gratuitos)](#netlify)
5. [Cloudflare Pages (Mais Rápido Globalmente)](#cloudflare)
6. [Render (Backend + Frontend)](#render)
7. [Tencent EdgeOne (Para Audiência Asiática)](#tencent)
8. [Comparativo de Plataformas](#comparativo)
9. [Dicas e Troubleshooting](#dicas)

---

## 🚀 Pré-requisitos {#preparação}

### Antes de começar, você precisa:

```bash
# 1. Estrutura do projeto pronta
streamer-clips/
├── index.html
├── admin.html
├── style.css
├── script.js
├── admin.js
└── clips.json

# 2. Contas criadas (gratuitas)
- GitHub: https://github.com
- Opcional: Vercel, Netlify, etc.

# 3. Git instalado (opcional, mas recomendado)
Windows: https://git-scm.com/download/win
Mac: brew install git
Linux: sudo apt install git
```

---

## 🌟 1. GitHub Pages {#github-pages}

**Melhor para:** Iniciantes, projetos estáticos, documentação

### Passo a Passo:

#### 📁 Passo 1: Criar repositório no GitHub

```bash
1. Acesse https://github.com/new
2. Repository name: streamer-clips
3. Descrição: Meus clipes de live
4. Public (gratuito)
5. ✅ Add a README file
6. Clique em "Create repository"
```

#### 💻 Passo 2: Upload dos arquivos

**Opção A: Via Web (Mais fácil)**
```bash
1. No repositório, clique em "Add file" → "Upload files"
2. Arraste todos os seus arquivos (index.html, style.css, etc.)
3. Commit message: "Primeira versão do projeto"
4. Clique em "Commit changes"
```

**Opção B: Via Git Terminal (Profissional)**
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/streamer-clips.git
cd streamer-clips

# Copie seus arquivos para a pasta
cp /caminho/do/seu/projeto/* .

# Envie para o GitHub
git add .
git commit -m "Adicionando projeto de clipes"
git push origin main
```

#### ⚙️ Passo 3: Ativar GitHub Pages

```bash
1. Vá em Settings (aba superior)
2. No menu lateral, clique em "Pages"
3. Em "Branch", selecione "main" ou "master"
4. Em "Folder", selecione "/ (root)"
5. Clique em "Save"
```

#### 🌐 Passo 4: Acessar seu site

```bash
# URL do seu site (exemplo)
https://SEU_USUARIO.github.io/streamer-clips/

```

✅ **Pronto! Seu site está no ar em 1-2 minutos!**

### Vantagens do GitHub Pages:
- ✅ 100% gratuito
- ✅ HTTPS automático
- ✅ Custom domain (comprar domínio separado)
- ✅ Atualiza automático ao fazer push
- ✅ 100GB de banda/mês

---

## ⚡ 2. Vercel {#vercel}

**Melhor para:** Performance, preview automático, times

### Passo a Passo:

#### 📦 Passo 1: Conectar com GitHub

```bash
1. Acesse https://vercel.com
2. Clique em "Sign Up" → "Continue with GitHub"
3. Autorize a Vercel
```

#### 🚀 Passo 2: Importar projeto

```bash
1. Clique em "Add New..." → "Project"
2. Selecione "Import Git Repository"
3. Escolha seu repositório "streamer-clips"
4. Configure:
   - Framework Preset: "Other"
   - Build Command: (deixe vazio)
   - Output Directory: (deixe vazio)
5. Clique em "Deploy"
```

#### 🌍 Passo 3: Acessar

```bash
# URL gerada automaticamente
https://streamer-clips.vercel.app

# Domínios customizados (gratuitos)
Settings → Domains → Adicionar seu domínio
```

### Recursos Extras Vercel:

```bash
# Preview de cada commit
- Cada push gera URL de preview
- Perfeito para testar antes de publicar

# Analytics (limitado free)
- 100 eventos/dia gratuitos

# Serverless Functions (backend grátis)
- 100GB-h/mês
```

---

## 🎨 3. Netlify {#netlify}

**Melhor para:** Forms, autenticação, funções serverless

### Passo a Passo:

#### 🔧 Passo 1: Drag and Drop (Mais fácil do mundo!)

```bash
1. Acesse https://netlify.com
2. Crie conta (GitHub ou email)
3. Arraste sua PASTA inteira para o quadrado pontilhado
4. Pronto! Site no ar em 10 segundos!
```

#### 🔄 Para atualizações automáticas:

```bash
1. Clique em "Connect to Git"
2. Escolha GitHub
3. Selecione streamer-clips
4. Deploy automático ativado!
```

#### 📝 Configuração extra (Netlify Forms):

Crie um arquivo `netlify.toml` na raiz:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Recursos Grátis Netlify:
- ✅ 100GB de banda/mês
- ✅ 300 minutos de build/mês
- ✅ Forms (100 submissions/mês)
- ✅ Identity (usuários)
- ✅ Functions (125k requests/mês)

---

## 🌐 4. Cloudflare Pages {#cloudflare}

**Melhor para:** Velocidade global, CDN integrada

### Passo a Passo:

```bash
1. Acesse https://pages.cloudflare.com
2. Clique em "Create a project"
3. Conecte com GitHub
4. Selecione streamer-clips
5. Build settings:
   - Build command: (deixe vazio)
   - Output directory: /
6. Clique em "Save and Deploy"
```

### URL gerada:
```bash
https://streamer-clips.pages.dev
```

### Vantagens Cloudflare:
- 🚀 Rede global em 275+ cidades
- 🔒 DDoS protection incluso
- 📊 Analytics grátis
- 🎯 Workers (10ms limite)

---

## 🖥️ 5. Render {#render}

**Melhor para:** Backend + Frontend junto

### Passo a Passo:

```bash
1. Acesse https://render.com
2. Sign up com GitHub
3. Dashboard → "New +" → "Static Site"
4. Conecte repositório streamer-clips
5. Configurações:
   - Build Command: (vazio)
   - Publish Directory: ./
6. Clique em "Create Static Site"
```

### URL:
```bash
https://streamer-clips.onrender.com
```

### Plano Grátis:
- ✅ 100GB de banda/mês
- ✅ 15 minutos de build/hora
- ✅ SSL automático
- ✅ 500 MB de storage

---

## 🌏 6. Tencent EdgeOne {#tencent}

**Melhor para:** Público Asiático (China, Japão, Coreia)

### Passo a Passo:

```bash
1. Acesse https://edgeone.ai (versão internacional)
2. Crie conta (email ou WeChat)
3. Vá para "EdgeOne Pages"
4. Clique em "Create Project"
5. Conecte GitHub ou upload manual
```

### Configuração específica:

```yaml
# edgeone.yaml (criar na raiz)
name: streamer-clips
region: ap-shanghai
framework:
  type: static
build:
  command: echo "Static site"
output: /
```

### URL gerada:
```bash
https://streamer-clips.edgeone.app

# Ou domínio .cn para China
https://streamer-clips.edgeone.cn
```

### Características:
- 🇨🇳 Rápido na China (aceleração)
- 🆓 1GB de banda/mês (grátis)
- 📈 Expansível para planos pagos

---

## 📊 Comparativo de Plataformas {#comparativo}

| Plataforma | Banda Grátis | Builds | Domínio | HTTPS | Facilidade | Melhor Para |
|------------|--------------|---------|---------|-------|------------|--------------|
| **GitHub Pages** | 100GB/mês | Ilimitado | .github.io | ✅ | ⭐⭐⭐⭐⭐ | Iniciantes |
| **Vercel** | 100GB/mês | 100/mês | .vercel.app | ✅ | ⭐⭐⭐⭐ | Performance |
| **Netlify** | 100GB/mês | 300/mês | .netlify.app | ✅ | ⭐⭐⭐⭐⭐ | Recursos extras |
| **Cloudflare** | Ilimitado | 500/mês | .pages.dev | ✅ | ⭐⭐⭐⭐ | Velocidade |
| **Render** | 100GB/mês | 15/hora | .onrender.com | ✅ | ⭐⭐⭐ | Backend |
| **Tencent** | 1GB/mês | 10/mês | .edgeone.app | ✅ | ⭐⭐ | Público Asiático |

---

## 🎯 Recomendações por Perfil

### 🎮 Streamer Iniciante:
```bash
✅ GitHub Pages (mais simples e confiável)
URL: SEUUSUARIO.github.io/streamer-clips
```

### 🚀 Streamer com Audiência Grande:
```bash
✅ Vercel + GitHub Pages (fallback)
- Melhor performance global
- Analytics integrado
```

### 🌍 Streamer Internacional (Brasil/EUA/Europa):
```bash
✅ Cloudflare Pages
- Rede mais rápida
- Proteção DDoS grátis
```

### 🇨🇳 Streamer com Público Asiático:
```bash
✅ Tencent EdgeOne
- Acesso rápido da China
- .cn disponível
```

---

## 🔧 Dicas e Troubleshooting {#dicas}

### Problema 1: "404 - Arquivo não encontrado"

**Solução:**
```bash
# Verifique se o arquivo clips.json está na PASTA RAIZ
streamer-clips/
├── index.html ✅
├── clips.json ✅ (tem que estar aqui!)
└── admin.html ✅
```

### Problema 2: Vídeos não carregam

**Solução:**
```javascript
// No script.js, adicione parent para Twitch
function getVideoEmbed(url) {
    if (url.includes('twitch.tv')) {
        return `<iframe src="...&parent=${window.location.hostname}"></iframe>`;
    }
}
```

### Problema 3: GitHub Pages não atualiza

**Solução:**
```bash
1. Vá em Settings → Pages
2. Em "Branch", mude para "none" e salve
3. Volte para "main" e salve novamente
4. Espere 2 minutos
```

### Problema 4: CORS no JSON

**Solução:**
```bash
# O JSON é carregado localmente, não precisa de CORS
# Use fetch('./clips.json') com caminho relativo
```

### Problema 5: Domínio próprio

**Como configurar (GitHub Pages):**
```bash
1. Compre domínio (ex: meusclipes.com)
2. No GitHub: Settings → Pages → Custom domain
3. Adicione: meusclipes.com
4. No DNS do seu domínio, adicione:
   - Type: CNAME
   - Host: @
   - Value: SEUUSUARIO.github.io
```

---

## 📈 Bônus: CI/CD Automático

### GitHub Actions (atualização automática):

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## ✅ Checklist Final

Antes de publicar, verifique:

```markdown
☐ index.html e admin.html funcionam localmente
☐ clips.json está na raiz do projeto
☐ Todos os caminhos são relativos (./style.css)
☐ Testou em diferentes navegadores
☐ Fez commit de todos os arquivos
☐ Configurou GitHub Pages/Vercel/etc
☐ Testou o link público
☐ Adicionou meta tags para compartilhamento
```

---

## 🎉 Conclusão

**Para 90% dos streamers, recomendo: GitHub Pages**

```bash
Prós:
✅ 5 minutos para configurar
✅ 100% gratuito
✅ HTTPS automático
✅ Atualiza com git push

URL final: 
https://seuusuario.github.io/streamer-clips/
```

**Pronto! Seu sistema de clipes está no ar, de graça, para o mundo todo! 🚀**

---

## 📚 Links Úteis

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)
- [Tencent EdgeOne](https://edgeone.ai/docs)

---

**Desenvolvido com 💜 e DeepSeek AI | Tutorial Livre para Uso e Distribuição**
```

## 🎯 Resumo Rápido (Para você usar agora)

Se quer o **MAIS SIMPLES E RÁPIDO**:

```bash
# 1. Crie conta no GitHub
# 2. Crie repositório "streamer-clips"
# 3. Faça upload dos arquivos
# 4. Settings → Pages → Branch: main → Save
# 5. Acesse: https://SEUUSUARIO.github.io/streamer-clips/
```

**Pronto em 5 minutos!** 🎉

