# Sistema de Avaliação de Risco Arbóreo
## Requisitos Técnicos e User Stories

---

## 1. VISÃO GERAL DO PRODUTO

### 1.1 Descrição
Sistema web para avaliação expedita de risco arbóreo, permitindo que avaliadores realizem inspeções de campo e registrem dados sobre condições de árvores e riscos associados.

### 1.2 Objetivos
- Digitalizar o processo de avaliação de risco arbóreo
- Facilitar coleta de dados em campo (responsivo mobile)
- Calcular automaticamente pontuação de risco
- Gerar relatórios de avaliação
- Manter histórico de avaliações

---

## 2. REQUISITOS FUNCIONAIS

### RF01 - Avaliação dos Alvos (Item 1)
**Descrição:** Sistema deve permitir avaliação de risco a pessoas com base na ocupação do local
- Pontuação: 3, 2, 1 ou 0 pontos
- Critérios claramente definidos para cada pontuação
- Nota informativa sobre consideração de tráfego/falha de árvore

### RF02 - Avaliação da Árvore (Item 2)
**Descrição:** Sistema deve avaliar condições de risco do tronco e galhos
- Múltiplas situações de risco (4, 3, 2, 1 ponto)
- Permitir seleção múltipla de condições
- Cálculo automático (máximo 4 pontos)
- Categorias:
  - Situações de risco alto (4 pontos)
  - Situações de risco alto (3 pontos)
  - Situações de risco moderado (2 pontos)
  - Situações de risco baixo (1 ponto)

### RF03 - Diâmetro da Parte Defeituosa (Item 3)
**Descrição:** Registro do maior diâmetro da parte defeituosa
- Pontuação: 3, 2 ou 1 ponto
- Critérios: >51cm, 10-51cm, <10cm

### RF04 - Outros Fatores de Risco (Item 4)
**Descrição:** Registro de fatores adicionais (opcional)
- Acréscimo de até 2 pontos
- Campo de observações livre

### RF05 - Cálculo de Risco Total
**Descrição:** Sistema deve calcular automaticamente o somatório
- Soma dos itens 1, 2, 3 e 4
- Máximo de 10 pontos
- Classificação de risco baseada na pontuação

### RF06 - Lista de Verificação
**Descrição:** Checklist de condições da árvore e local
- 18 itens verificáveis
- Formato checkbox
- Campos:
  - Sinais de podridão das raízes
  - Exposição de raízes
  - Grandes fissuras e cavidades
  - Presença de fungos na base
  - Edificações que podem ser atingidas
  - Veículos que podem ser atingidos
  - Pregos e arames
  - Galhos grandes mortos
  - Inclinação acentuada
  - Proximidade com fios energizados
  - Presença de animais
  - Presença de plantas tóxicas
  - Riscos de atingir pessoas
  - Casca solta
  - Presença de fossas ou galerias
  - Presença de insetos
  - Há árvores próximas caídas ou podres

### RF07 - Dados Complementares
**Descrição:** Informações adicionais da avaliação
- Data e hora da avaliação
- Localização/endereço
- Coordenadas GPS (se disponível)
- Nome do avaliador
- Espécie da árvore
- Altura estimada
- DAP (Diâmetro à Altura do Peito)
- Campo de observações gerais

### RF08 - Gestão de Avaliações
**Descrição:** CRUD de avaliações
- Criar nova avaliação
- Salvar rascunho
- Editar avaliação existente
- Visualizar histórico
- Exportar relatório (PDF)

### RF09 - Validações
**Descrição:** Sistema deve validar entrada de dados
- Campos obrigatórios
- Formato de dados (números, datas)
- Limites de pontuação
- Alertas de inconsistências

---

## 3. REQUISITOS NÃO FUNCIONAIS

### RNF01 - Usabilidade
- Interface intuitiva e responsiva
- Otimizado para tablets e smartphones (uso em campo)
- Tempo de carregamento < 3 segundos
- Suporte offline (progressive web app)

### RNF02 - Design
- Estilo glassmorfismo minimalista
- Paleta de cores profissional
- Tipografia legível
- Alto contraste para uso externo
- Modo escuro/claro

### RNF03 - Performance
- Suporte a 100+ usuários simultâneos
- Armazenamento local para trabalho offline
- Sincronização automática quando online

### RNF04 - Segurança
- Autenticação de usuários
- Controle de acesso baseado em perfis
- Backup automático de dados
- Criptografia de dados sensíveis

### RNF05 - Compatibilidade
- Compatível com navegadores modernos
- iOS Safari, Android Chrome
- Tablets 10" e smartphones 5"+

### RNF06 - Acessibilidade
- WCAG 2.1 nível AA
- Navegação por teclado
- Leitores de tela
- Contraste adequado

---

## 4. USER STORIES

### US01 - Iniciar Nova Avaliação
**Como** avaliador de campo  
**Eu quero** iniciar uma nova avaliação rapidamente  
**Para que** eu possa registrar dados no local da árvore

**Critérios de Aceitação:**
- [ ] Botão "Nova Avaliação" visível na tela inicial
- [ ] Formulário abre em menos de 2 segundos
- [ ] Dados de localização são capturados automaticamente (GPS)
- [ ] Data/hora são preenchidas automaticamente
- [ ] Campo de nome do avaliador é preenchido com usuário logado

---

### US02 - Avaliar Risco aos Alvos
**Como** avaliador  
**Eu quero** classificar o risco de ocupação do local  
**Para que** eu possa determinar a exposição de pessoas

**Critérios de Aceitação:**
- [ ] 4 opções de pontuação visíveis (3, 2, 1, 0)
- [ ] Descrição de cada critério clara e visível
- [ ] Seleção única (radio button)
- [ ] Nota informativa sobre tráfego exibida
- [ ] Pontuação registrada automaticamente

---

### US03 - Avaliar Condição da Árvore
**Como** avaliador  
**Eu quero** registrar múltiplas condições de risco da árvore  
**Para que** eu possa documentar todos os defeitos observados

**Critérios de Aceitação:**
- [ ] Lista de condições organizadas por gravidade
- [ ] Permitir múltipla seleção (checkboxes)
- [ ] Descrição técnica de cada condição visível
- [ ] Pontuação calculada automaticamente
- [ ] Alerta se pontuação exceder 4 pontos
- [ ] Indicador visual da pontuação atual

---

### US04 - Registrar Diâmetro Defeituoso
**Como** avaliador  
**Eu quero** informar o tamanho da área defeituosa  
**Para que** a gravidade do defeito seja considerada

**Critérios de Aceitação:**
- [ ] 3 faixas de diâmetro disponíveis
- [ ] Opção de entrada manual do valor exato (cm)
- [ ] Pontuação atribuída automaticamente
- [ ] Unidade de medida (cm) claramente indicada

---

### US05 - Preencher Checklist de Verificação
**Como** avaliador  
**Eu quero** marcar rapidamente condições observadas  
**Para que** eu possa documentar todos os fatores relevantes

**Critérios de Aceitação:**
- [ ] 18 itens em formato checkbox
- [ ] Checkboxes grandes para fácil seleção em campo
- [ ] Agrupamento lógico de itens relacionados
- [ ] Opção "Marcar todos" / "Desmarcar todos"
- [ ] Contador de itens marcados

---

### US06 - Visualizar Pontuação Total
**Como** avaliador  
**Eu quero** ver a pontuação total em tempo real  
**Para que** eu compreenda o nível de risco durante a avaliação

**Critérios de Aceitação:**
- [ ] Pontuação total sempre visível (fixo no topo ou rodapé)
- [ ] Breakdown de pontos por seção
- [ ] Indicador visual de nível de risco (cores: baixo=verde, moderado=amarelo, alto=vermelho)
- [ ] Atualização automática ao alterar dados

---

### US07 - Salvar Rascunho
**Como** avaliador  
**Eu quero** salvar meu progresso sem finalizar  
**Para que** eu possa continuar depois se for interrompido

**Critérios de Aceitação:**
- [ ] Botão "Salvar Rascunho" sempre acessível
- [ ] Salvamento automático a cada 30 segundos
- [ ] Notificação de salvamento confirmado
- [ ] Funciona offline (armazenamento local)
- [ ] Lista de rascunhos acessível na tela inicial

---

### US08 - Finalizar e Gerar Relatório
**Como** avaliador  
**Eu quero** finalizar a avaliação e gerar relatório  
**Para que** eu possa compartilhar os resultados

**Critérios de Aceitação:**
- [ ] Validação de campos obrigatórios antes de finalizar
- [ ] Resumo da avaliação antes de confirmar
- [ ] Geração de PDF automática
- [ ] Opção de envio por email
- [ ] Opção de download do arquivo
- [ ] Registro da avaliação no histórico

---

### US09 - Trabalhar Offline
**Como** avaliador de campo  
**Eu quero** usar o sistema sem conexão à internet  
**Para que** eu possa trabalhar em áreas sem cobertura

**Critérios de Aceitação:**
- [ ] Aplicação funciona completamente offline
- [ ] Dados salvos localmente
- [ ] Indicador de modo offline visível
- [ ] Sincronização automática quando voltar online
- [ ] Fila de sincronização transparente ao usuário

---

### US10 - Consultar Histórico
**Como** gestor  
**Eu quero** consultar avaliações anteriores  
**Para que** eu possa acompanhar evolução e tomar decisões

**Critérios de Aceitação:**
- [ ] Lista de avaliações com filtros (data, local, avaliador, risco)
- [ ] Busca por localização ou espécie
- [ ] Visualização em lista ou mapa
- [ ] Exportação de múltiplas avaliações (CSV/Excel)
- [ ] Estatísticas e dashboards

---

### US11 - Adicionar Fotos
**Como** avaliador  
**Eu quero** adicionar fotos dos defeitos  
**Para que** a documentação seja visual e completa

**Critérios de Aceitação:**
- [ ] Captura de foto diretamente pela câmera
- [ ] Upload de fotos da galeria
- [ ] Múltiplas fotos por avaliação
- [ ] Compressão automática para otimizar armazenamento
- [ ] Miniaturas nas listagens
- [ ] Visualização ampliada ao clicar

---

### US12 - Utilizar Geolocalização
**Como** avaliador  
**Eu quero** que a localização seja capturada automaticamente  
**Para que** eu não precise digitar endereços manualmente

**Critérios de Aceitação:**
- [ ] Solicitação de permissão de localização ao usuário
- [ ] Captura automática de coordenadas GPS
- [ ] Conversão de coordenadas em endereço (geocoding)
- [ ] Visualização da localização em mapa
- [ ] Opção de ajuste manual da localização

---

## 5. ESPECIFICAÇÕES DE DESIGN (GLASSMORFISMO)

### 5.1 Paleta de Cores
```
Primária: #2D5F7E (Azul petróleo profissional)
Secundária: #4A7C96 (Azul acinzentado)
Acento: #6B9B7F (Verde natural - referência arbórea)
Neutros: 
  - #F8F9FA (Fundo claro)
  - #E9ECEF (Bordas sutis)
  - #6C757D (Texto secundário)
  - #212529 (Texto principal)

Sinalizadores:
  - Risco Baixo: #28A745 (Verde)
  - Risco Moderado: #FFC107 (Amarelo)
  - Risco Alto: #DC3545 (Vermelho)
```

### 5.2 Efeitos Glassmorfismo
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-input {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(45, 95, 126, 0.2);
  border-radius: 8px;
}
```

### 5.3 Tipografia
```
Headings: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
Body: Inter, sans-serif
Monospace: "Fira Code", monospace (para coordenadas/medidas)

Tamanhos:
  - H1: 28px / 700
  - H2: 22px / 600
  - H3: 18px / 600
  - Body: 16px / 400
  - Small: 14px / 400
```

### 5.4 Componentes UI

#### Botões
- Primário: Preenchido, cor primária, sombra suave
- Secundário: Outline, glassmorfismo
- Terciário: Texto apenas

#### Cards
- Glassmorfismo com bordas arredondadas
- Espaçamento interno generoso (24px)
- Sombra suave para profundidade

#### Inputs
- Fundo translúcido
- Bordas sutis
- Focus state com borda da cor primária
- Labels flutuantes

#### Checkboxes/Radio
- Tamanho grande (24x24px) para uso em campo
- Efeito de preenchimento suave
- Estado checked com cor de acento

---

## 6. ARQUITETURA TÉCNICA RECOMENDADA

### 6.1 Frontend
- **Framework:** React.js ou Vue.js
- **PWA:** Workbox para funcionalidade offline
- **UI Library:** Tailwind CSS (custom config para glassmorfismo)
- **Formulários:** React Hook Form ou Formik
- **Estado:** Zustand ou Pinia
- **Mapas:** Leaflet.js
- **Geração PDF:** jsPDF ou pdfMake

### 6.2 Backend
- **API:** Node.js (Express) ou Python (FastAPI)
- **Banco de Dados:** PostgreSQL + PostGIS (dados geográficos)
- **Storage:** AWS S3 ou similar (fotos)
- **Autenticação:** JWT

### 6.3 Hospedagem
- **Frontend:** Vercel, Netlify
- **Backend:** Heroku, Railway, AWS
- **Banco:** Supabase, Render

---

## 7. FLUXO DE NAVEGAÇÃO

```
[Login] 
   ↓
[Dashboard]
   ├→ [Nova Avaliação]
   │     ├→ Dados Iniciais
   │     ├→ Item 1: Alvos
   │     ├→ Item 2: Árvore
   │     ├→ Item 3: Diâmetro
   │     ├→ Item 4: Outros Fatores
   │     ├→ Lista de Verificação
   │     ├→ Fotos
   │     ├→ Observações
   │     └→ [Finalizar] → [PDF Gerado]
   │
   ├→ [Histórico]
   │     ├→ Filtros
   │     ├→ Lista
   │     └→ [Visualizar Detalhes]
   │
   ├→ [Rascunhos]
   │     └→ [Continuar Avaliação]
   │
   └→ [Mapa de Avaliações]
```

---

## 8. PRIORIZAÇÃO (MVP)

### Fase 1 - MVP (Mínimo Viável)
- [ ] US01: Iniciar avaliação
- [ ] US02: Avaliar alvos
- [ ] US03: Avaliar árvore
- [ ] US04: Registrar diâmetro
- [ ] US05: Checklist
- [ ] US06: Pontuação total
- [ ] US08: Gerar relatório PDF

### Fase 2 - Essencial
- [ ] US07: Salvar rascunho
- [ ] US09: Modo offline
- [ ] US11: Adicionar fotos
- [ ] US12: Geolocalização

### Fase 3 - Avançado
- [ ] US10: Histórico completo
- [ ] Dashboard e estatísticas
- [ ] Exportação em massa
- [ ] Mapa de avaliações
- [ ] Notificações

---

## 9. MÉTRICAS DE SUCESSO

- **Tempo médio de avaliação:** < 10 minutos
- **Taxa de conclusão:** > 90%
- **Uso offline:** > 60% das avaliações
- **Satisfação do usuário:** NPS > 50
- **Adoção:** 80% dos avaliadores usando em 3 meses
- **Erro de formulário:** < 5%

---

## 10. RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Falta de conectividade em campo | Alta | Alto | PWA com modo offline robusto |
| Bateria de dispositivos | Média | Médio | Otimização de performance, modo de economia |
| GPS impreciso em áreas arborizadas | Alta | Médio | Permitir ajuste manual, usar Wi-Fi positioning |
| Resistência à adoção digital | Média | Alto | Treinamento, interface intuitiva |
| Perda de dados | Baixa | Alto | Backup automático, sincronização |

---

**Documento preparado em:** Fevereiro 2026  
**Versão:** 1.0  
**Próximos passos:** Prototipação, validação com usuários, desenvolvimento MVP
