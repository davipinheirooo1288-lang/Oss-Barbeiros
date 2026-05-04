# Oss Barbeiros — Website Premium

Este é um site **100% estático** (HTML/CSS/JS). Isso significa que:

- você pode abrir o `index.html` direto no navegador
- o deploy no Vercel é **bem simples** (sem build, sem Node obrigatório)

## Rodar local (pra testar antes de publicar)

### Opção A (mais simples): abrir o arquivo
- Abra o arquivo `index.html` com duplo clique.

### Opção B (recomendado): servidor local (evita problemas com caminhos/recursos)
No PowerShell, dentro desta pasta, rode um dos comandos abaixo:

**Com Python** (se você tiver instalado):

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

**Com Node** (se você tiver instalado):

```bash
npx serve .
```

## 🚀 Publicar no GitHub + Vercel (passo a passo)

### Passo 1: GitHub
1. Crie um repositório novo no GitHub chamado `oss-barbeiros` (sem adicionar README pelo site, porque já temos um aqui).
2. No PowerShell, dentro desta pasta, rode:

```bash
git init
git add .
git commit -m "Deploy: site oss-barbeiros"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/oss-barbeiros.git
git push -u origin main
```

### Passo 2: Vercel (Hospedagem Grátis)
1. Acesse [Vercel](https://vercel.com/) e faça login com o GitHub.
2. Clique em **Add New → Project** e importe o repositório `oss-barbeiros`.
3. Em **Framework Preset**, selecione **Other**.
4. Garanta estas configurações:
   - **Build Command**: (deixe vazio)
   - **Output Directory**: `.`
5. Clique em **Deploy**.

Pronto: o Vercel vai te entregar uma URL do tipo `https://...vercel.app`.

## 🛠️ Estrutura do Projeto
- `index.html`: Estrutura principal do site.
- `style.css`: Estilização e design (Dark Mode, Responsividade).
- `script.js`: Lógicas de abas, filtros e carrossel.
- `images/`: Todos os ativos visuais e fotos em alta qualidade.

---
Desenvolvido com foco em excelência e precisão.
