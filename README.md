# ARAON - Avaliação de Risco Arbóreo

Este é um aplicativo web progressivo (PWA) simples para avaliação de risco arbóreo, projetado para funcionar offline e ser instalado em dispositivos móveis.

## Funcionalidades

- **Avaliação Visual**: Formulário intuitivo para coleta de dados em campo.
- **Cálculo de Risco**: Algoritmo automático de pontuação de risco.
- **Relatórios PDF**: Geração de relatórios PDF com layout premium e fotos.
- **Histórico Local**: Armazenamento seguro das avaliações no dispositivo.
- **Offline First**: Funciona sem internet após o primeiro acesso.

## Como Usar

Basta abrir o arquivo `index.html` em qualquer navegador moderno.

## Deploy no GitHub Pages

Este repositório está configurado para deploy automático no GitHub Pages.

### Passos para ativar:

1. Vá até **Settings** (Configurações) do repositório no GitHub.
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como fonte (Source).
4. O workflow `static.yml` será detectado e executado automaticamente no próximo push para a branch `main`.

Alternativamente, se preferir o método clássico:
1. Em **Build and deployment**, selecione **Deploy from a branch**.
2. Escolha a branch `main` e a pasta `/ (root)`.
3. Clique em **Save**.

O app estará disponível em `https://seu-usuario.github.io/seu-repositorio/`.
