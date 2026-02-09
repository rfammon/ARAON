---
name: cerebro-link
description: >
  Interface neural para o Cerebro Notebook Atlas.
  Gatilho: Ao necessitar de conhecimento profundo, padrões de arquitetura, ou context expandido para tarefas complexas de código (React, SQL, Testing, Mobile, PM).
license: Apache-2.0
metadata:
  author: antigravity
  version: "1.0"
---

# Cerebro Link Protocol

Este skill conecta o agente à base de conhecimento expandida do **Cerebro Cortex**. Use-o para elevar a qualidade do código consultando padrões de nível sênior armazenados nos notebooks do NotebookLM.

## Workflow

1.  **Identificação do Cortex**:
    *   Leia o arquivo Atlas em: `C:\Users\vinil\.gemini\antigravity\brain\0f17f485-9f9c-4826-9d46-37ba04bfd639\Cerebro_Notebook_Atlas.md`
    *   Identifique qual "Cortex" (Notebook) é relevante para a tarefa atual (ex: *Arboria Prime* para React, *Datastream* para SQL).

2.  **Consulta Sináptica (Deep Query)**:
    *   Use a ferramenta `mcp_notebooklm_notebook_query` com o `notebook_id` identificado.
    *   Formule uma pergunta técnica específica focada em "como implementar X seguindo os melhores padrões".
    *   *Exemplo*: "Quais são os padrões de performance para listas virtuais no React/Vite?" (no Arboria Prime).

3.  **Síntese e Aplicação**:
    *   Analise a resposta do NotebookLM (baseada nas fontes de deep research).
    *   Aplique os padrões sugeridos DIRETAMENTE no código gerado.
    *   Cite a fonte do conhecimento (ex: "Aplicando padrão 'Feature-Sliced' conforme Nexus Grid").

## Mapeamento de Cortex (Referência Rápida)

*   **Arboria Prime**: React, Vite, TypeScript, Performance.
*   **Nexus Grid**: Arquitetura Frontend, Code Review, Security.
*   **Prism Design**: UI/UX Mobile, Tailwind, Design Systems.
*   **Omicron Matrix**: Playwright, Testing, QA, CI/CD.
*   **Datastream Sovereign**: PostgreSQL, PostGIS, RLS, Supabase.
*   **Alpha Command**: Agile, Management, Git Workflows.
*   **Helix Version Core**: Git Documentation, Advanced Best Practices, GitHub Actions.

## Exemplo de Uso

**Usuário**: "Crie uma tabela de auditoria segura no Supabase."

**Agente (via Cerebro Link)**:
1.  Consulta `Datastream Sovereign`.
2.  Pergunta: "Best practices for audit log tables and RLS policies in Supabase."
3.  Gera SQL usando partições e políticas RLS imutáveis sugeridas pela pesquisa.
