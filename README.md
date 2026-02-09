# ARAON - Avaliação de Risco Arbóreo Online

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-deploy-green)](https://rfammon.github.io/ARAON/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Sistema de avaliação de risco arbóreo online, desenvolvido para engenheiros florestais, arboristas e profissionais de jardinagem realizarem vistorias técnicas em árvores urbanas com eficiência e padronização.

## 🌳 Visão Geral

O ARAON é uma aplicação web progressiva que permite:

- **Avaliação completa** de árvores urbanas seguindo protocolos técnicos
- **Cálculo automático** de pontuação de risco (0-10 pontos)
- **Geolocalização** precisa das árvores avaliadas
- **Geração de relatórios** em PDF para documentação técnica
- **Histórico de avaliações** para acompanhamento e gestão

## 🚀 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages.

### Acessar a Aplicação

Acesse: **[https://rfammon.github.io/ARAON/](https://rfammon.github.io/ARAON/)**

### Deploy Manual (se necessário)

```bash
git checkout main
git push origin main
```

O GitHub Pages será atualizado automaticamente após o push.

## 📋 Itens de Avaliação

A metodologia ARAON avalia 4 itens principais:

### Item 1 - Avaliação dos Alvos (0-3 pontos)
- Risco Alto (3 pts): Pessoas presentes frequentemente
- Risco Moderado (2 pts): Presença eventual
- Risco a Bens (1 pt): Apenas bens materiais
- Sem Risco (0 pts): Áreas desabitadas

### Item 2 - Condição da Árvore (0-4 pontos)
- Degradação Severa do Tronco (4 pts)
- Defeitos Significativos/Copa Danificada/União de Galhos (3 pts)
- Defeitos Moderados/Inclinação/Galhos Mortos (2 pts)
- Defeitos Leves/Copa Levemente Danificada (1 pt)
- Condição Saudável (0 pts)

### Item 3 - Diâmetro Afetado (0-3 pontos)
- > 51 cm (3 pts)
- 31-50 cm (2 pts)
- 16-30 cm (1 pt)
- ≤ 15 cm (0 pts)

### Item 4 - Fatores Adicionais (0-3 pontos)
- Estruturas sob a copa (2 pts)
- Topografia/Fisiografia/Solo (1 pt)
- Condições Saudáveis (0 pts)

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **Ícones**: Lucide Icons
- **PDF**: jsPDF + jsPDF-AutoTable
- **Fontes**: Outfit + Playfair Display (Google Fonts)
- **Hospedagem**: GitHub Pages

## 📱 Estrutura do Projeto

```
ARAON/
├── index.html              # Aplicação principal
├── README.md               # Documentação
├── .gitignore              # Arquivos ignorados
├── especificacoes_tecnicas.md  # Especificações técnicas
├── requisitos_formulario_arboreo.md  # Requisitos do sistema
└── TimeTrackerApp/         # App móvel (React Native/Expo)
```

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💼 Autor

**Rafael Ammon**
- GitHub: [@rfammon](https://github.com/rfammon)
- Site: [rfammon.github.io/StRafaelAmmon](https://rfammon.github.io/StRafaelAmmon/)

---

**ARAON** - Avaliação de Risco Arbóreo Online © 2024
