# Especificações Técnicas de Implementação
## Sistema de Avaliação de Risco Arbóreo

---

## 1. WIREFRAMES MOBILE-FIRST

### 1.1 Tela Inicial / Dashboard
```
┌─────────────────────────────────────┐
│  ≡  Avaliação Arbórea        [👤]  │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │  🌳 Nova Avaliação          │   │
│  │                             │   │
│  │  [+] Iniciar Avaliação      │   │
│  └─────────────────────────────┘   │
│                                     │
│  📊 Estatísticas Rápidas            │
│  ┌────────┬────────┬────────┐      │
│  │   15   │   3    │   42   │      │
│  │  Total │ Hoje   │ Mês    │      │
│  └────────┴────────┴────────┘      │
│                                     │
│  📂 Rascunhos (2)                   │
│  ┌─────────────────────────────┐   │
│  │ 📍 Parque Central           │   │
│  │ ⏱ Há 2 horas                │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ 📍 Av. Principal            │   │
│  │ ⏱ Ontem                     │   │
│  └─────────────────────────────┘   │
│                                     │
│  🗂 Ações Rápidas                   │
│  [Histórico] [Mapa] [Exportar]     │
│                                     │
└─────────────────────────────────────┘
```

### 1.2 Formulário - Item 1 (Avaliação dos Alvos)
```
┌─────────────────────────────────────┐
│  ← Avaliação                  [💾]  │
├─────────────────────────────────────┤
│  Progresso: ████░░░░░░░░ 25%       │
├─────────────────────────────────────┤
│                                     │
│  ITEM 1 - AVALIAÇÃO DOS ALVOS       │
│  ════════════════════════════       │
│                                     │
│  Selecione o nível de risco:        │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ⭕ 3 PONTOS                  │   │
│  │ Há risco a pessoas           │   │
│  │ (ocupação frequente)         │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ⚪ 2 PONTOS                  │   │
│  │ Há risco eventual a pessoas  │   │
│  │ (ocupação ocasional)         │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ⚪ 1 PONTO                   │   │
│  │ NÃO há risco a pessoas       │   │
│  │ Há risco a bens             │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ⚪ 0 PONTOS                  │   │
│  │ NÃO há risco a pessoas       │   │
│  │ NÃO há risco a bens         │   │
│  └─────────────────────────────┘   │
│                                     │
│  ℹ️ Devem ser considerados...       │
│  [Ver nota completa]                │
│                                     │
│  ┌─────────────────────────────┐   │
│  │    [Próximo: Árvore →]      │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### 1.3 Formulário - Item 2 (Avaliação da Árvore)
```
┌─────────────────────────────────────┐
│  ← Avaliação              💾 📊 3pts │
├─────────────────────────────────────┤
│  Progresso: ████████░░░░ 50%        │
├─────────────────────────────────────┤
│                                     │
│  ITEM 2 - CONDIÇÃO DA ÁRVORE        │
│  ════════════════════════════       │
│                                     │
│  Marque todas as condições          │
│  observadas (máx 4 pontos):         │
│                                     │
│  🔴 RISCO ALTO (4 pontos)           │
│  ┌─────────────────────────────┐   │
│  │ ☑️ Tronco degradado >30%     │   │
│  │   da circunferência          │   │
│  └─────────────────────────────┘   │
│                                     │
│  🔴 RISCO ALTO (3 pontos)           │
│  ┌─────────────────────────────┐   │
│  │ ☐ Defeito >40% da            │   │
│  │   circunferência             │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ ☐ Copa quebrada/podre >30%   │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ ☐ União fraca de galho       │   │
│  │   com rachadura              │   │
│  └─────────────────────────────┘   │
│  [+ Ver mais]                       │
│                                     │
│  🟡 RISCO MODERADO (2 pontos)       │
│  ┌─────────────────────────────┐   │
│  │ ☐ Defeito 30-40% da          │   │
│  │   circunferência             │   │
│  └─────────────────────────────┘   │
│  [+ Ver mais]                       │
│                                     │
│  🟢 RISCO BAIXO (1 ponto)           │
│  [+ Ver mais]                       │
│                                     │
│  ┌───────────────────┐              │
│  │ Pontos Item 2: 4  │              │
│  └───────────────────┘              │
│                                     │
│  [← Anterior] [Próximo →]           │
│                                     │
└─────────────────────────────────────┘
```

### 1.4 Formulário - Lista de Verificação
```
┌─────────────────────────────────────┐
│  ← Checklist              💾 📊 7pts │
├─────────────────────────────────────┤
│  Progresso: ████████████░ 75%       │
├─────────────────────────────────────┤
│                                     │
│  LISTA DE VERIFICAÇÃO               │
│  ════════════════════════            │
│  [Marcar todos] [Limpar]            │
│                                     │
│  🌱 Condições das Raízes            │
│  ┌─────────────────────────────┐   │
│  │ ☑️ Sinais de podridão        │   │
│  │ ☐ Exposição de raízes        │   │
│  └─────────────────────────────┘   │
│                                     │
│  🪵 Condições do Tronco             │
│  ┌─────────────────────────────┐   │
│  │ ☑️ Grandes fissuras          │   │
│  │ ☐ Presença de fungos         │   │
│  │ ☐ Casca solta                │   │
│  │ ☐ Fossas ou galerias         │   │
│  │ ☑️ Presença de insetos        │   │
│  └─────────────────────────────┘   │
│                                     │
│  🌿 Condições da Copa               │
│  ┌─────────────────────────────┐   │
│  │ ☐ Galhos grandes mortos      │   │
│  │ ☐ Inclinação acentuada       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⚠️ Riscos ao Entorno               │
│  ┌─────────────────────────────┐   │
│  │ ☑️ Edificações próximas      │   │
│  │ ☐ Veículos                   │   │
│  │ ☑️ Fios energizados          │   │
│  │ ☐ Pessoas                    │   │
│  │ ☐ Árvores caídas próximas    │   │
│  └─────────────────────────────┘   │
│                                     │
│  📊 5 de 17 itens marcados          │
│                                     │
│  [← Anterior] [Próximo →]           │
└─────────────────────────────────────┘
```

### 1.5 Resumo e Finalização
```
┌─────────────────────────────────────┐
│  ← Resumo                 [📄] [✓]  │
├─────────────────────────────────────┤
│                                     │
│  RESUMO DA AVALIAÇÃO                │
│  ════════════════════════            │
│                                     │
│  ┌─────────────────────────────┐   │
│  │  RISCO TOTAL: 9 PONTOS      │   │
│  │  ██████████████████░░ 90%   │   │
│  │                             │   │
│  │  🔴 RISCO ALTO              │   │
│  └─────────────────────────────┘   │
│                                     │
│  📍 Localização                     │
│  Parque Central, Zona Sul           │
│  Lat: -23.5505, Lon: -46.6333       │
│                                     │
│  🌳 Dados da Árvore                 │
│  Espécie: Tipuana tipu              │
│  Altura: 15m  |  DAP: 80cm          │
│                                     │
│  📊 Breakdown de Pontos             │
│  ┌────────┬─────────────────────┐  │
│  │ Item 1 │ ████░░░░░░ 3 pts    │  │
│  │ Item 2 │ ████░░░░░░ 4 pts    │  │
│  │ Item 3 │ ██░░░░░░░░ 2 pts    │  │
│  │ Item 4 │ ░░░░░░░░░░ 0 pts    │  │
│  └────────┴─────────────────────┘  │
│                                     │
│  ✅ Checklist: 5 itens marcados     │
│  📷 Fotos: 3 anexadas               │
│                                     │
│  💬 Observações                     │
│  Árvore apresenta podridão...       │
│  [Ver completo]                     │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   [📄 Gerar Relatório PDF]   │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │   [✓ Finalizar Avaliação]    │   │
│  └─────────────────────────────┘   │
│                                     │
│  [← Voltar e editar]                │
└─────────────────────────────────────┘
```

---

## 2. COMPONENTES REUTILIZÁVEIS

### 2.1 GlassCard Component
```jsx
// GlassCard.jsx
import React from 'react';
import './GlassCard.css';

const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'normal'
}) => {
  const variantClasses = {
    default: 'glass-card',
    elevated: 'glass-card glass-card--elevated',
    flat: 'glass-card glass-card--flat'
  };
  
  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    normal: 'p-4',
    large: 'p-6'
  };
  
  return (
    <div className={`
      ${variantClasses[variant]} 
      ${paddingClasses[padding]} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;
```

```css
/* GlassCard.css */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.glass-card--elevated {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

.glass-card--flat {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

### 2.2 RiskScoreDisplay Component
```jsx
// RiskScoreDisplay.jsx
import React from 'react';
import './RiskScoreDisplay.css';

const RiskScoreDisplay = ({ 
  score, 
  maxScore = 10,
  showBreakdown = false,
  breakdown = null
}) => {
  const percentage = (score / maxScore) * 100;
  
  const getRiskLevel = (score) => {
    if (score >= 7) return { level: 'ALTO', color: 'danger', icon: '🔴' };
    if (score >= 4) return { level: 'MODERADO', color: 'warning', icon: '🟡' };
    return { level: 'BAIXO', color: 'success', icon: '🟢' };
  };
  
  const risk = getRiskLevel(score);
  
  return (
    <div className="risk-score-display">
      <div className={`risk-badge risk-badge--${risk.color}`}>
        <span className="risk-icon">{risk.icon}</span>
        <div className="risk-text">
          <div className="risk-score">{score} PONTOS</div>
          <div className="risk-level">RISCO {risk.level}</div>
        </div>
      </div>
      
      <div className="risk-progress">
        <div 
          className={`risk-progress-bar risk-progress-bar--${risk.color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {showBreakdown && breakdown && (
        <div className="risk-breakdown">
          {breakdown.map((item, index) => (
            <div key={index} className="breakdown-item">
              <span className="breakdown-label">{item.label}</span>
              <span className="breakdown-value">{item.value} pts</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RiskScoreDisplay;
```

### 2.3 CheckboxGroup Component
```jsx
// CheckboxGroup.jsx
import React from 'react';
import './CheckboxGroup.css';

const CheckboxGroup = ({ 
  title,
  items,
  selectedItems,
  onChange,
  variant = 'default',
  showCount = true
}) => {
  const handleToggle = (itemId) => {
    const newSelected = selectedItems.includes(itemId)
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId];
    onChange(newSelected);
  };
  
  const handleSelectAll = () => {
    onChange(items.map(item => item.id));
  };
  
  const handleClearAll = () => {
    onChange([]);
  };
  
  return (
    <div className="checkbox-group">
      <div className="checkbox-group-header">
        <h3 className="checkbox-group-title">{title}</h3>
        {showCount && (
          <span className="checkbox-count">
            {selectedItems.length} de {items.length}
          </span>
        )}
      </div>
      
      <div className="checkbox-group-actions">
        <button 
          onClick={handleSelectAll}
          className="btn-text btn-sm"
        >
          Marcar todos
        </button>
        <button 
          onClick={handleClearAll}
          className="btn-text btn-sm"
        >
          Limpar
        </button>
      </div>
      
      <div className="checkbox-list">
        {items.map(item => (
          <label 
            key={item.id}
            className={`checkbox-item ${variant === 'card' ? 'checkbox-item--card' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleToggle(item.id)}
              className="checkbox-input"
            />
            <span className="checkbox-label">{item.label}</span>
            {item.description && (
              <span className="checkbox-description">{item.description}</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
```

---

## 3. ESTRUTURA DE DADOS

### 3.1 Schema do Banco de Dados (PostgreSQL)

```sql
-- Tabela de Usuários
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'avaliador',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Avaliações
CREATE TABLE assessments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'draft', -- draft, completed
    
    -- Dados de localização
    location_name VARCHAR(255),
    address TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    geom GEOMETRY(Point, 4326), -- PostGIS
    
    -- Dados da árvore
    species VARCHAR(255),
    height DECIMAL(5, 2),
    dbh DECIMAL(6, 2), -- Diâmetro à Altura do Peito (cm)
    
    -- Pontuações
    item1_score INTEGER, -- Alvos (0-3)
    item2_score INTEGER, -- Árvore (0-4)
    item3_score INTEGER, -- Diâmetro (0-3)
    item4_score INTEGER, -- Outros fatores (0-2)
    total_score INTEGER, -- Soma (0-10)
    
    -- Outros dados
    observations TEXT,
    
    -- Metadados
    assessment_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Condições Selecionadas (Item 2)
CREATE TABLE assessment_conditions (
    id SERIAL PRIMARY KEY,
    assessment_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
    condition_code VARCHAR(50) NOT NULL,
    condition_category VARCHAR(50), -- alto_4, alto_3, moderado_2, baixo_1
    points INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Checklist
CREATE TABLE assessment_checklist (
    id SERIAL PRIMARY KEY,
    assessment_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
    checklist_item VARCHAR(100) NOT NULL,
    is_checked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Fotos
CREATE TABLE assessment_photos (
    id SERIAL PRIMARY KEY,
    assessment_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
    file_url TEXT NOT NULL,
    file_name VARCHAR(255),
    file_size INTEGER,
    caption TEXT,
    order_index INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_assessments_user_id ON assessments(user_id);
CREATE INDEX idx_assessments_status ON assessments(status);
CREATE INDEX idx_assessments_date ON assessments(assessment_date);
CREATE INDEX idx_assessments_location ON assessments USING GIST(geom);
CREATE INDEX idx_assessment_conditions_assessment_id ON assessment_conditions(assessment_id);
CREATE INDEX idx_assessment_checklist_assessment_id ON assessment_checklist(assessment_id);
```

### 3.2 Estrutura JSON de Avaliação

```json
{
  "id": "uuid-v4",
  "userId": "user-id",
  "status": "draft" | "completed",
  
  "location": {
    "name": "Parque Central",
    "address": "Av. Principal, 123",
    "coordinates": {
      "latitude": -23.5505,
      "longitude": -46.6333
    }
  },
  
  "tree": {
    "species": "Tipuana tipu",
    "height": 15.5,
    "dbh": 80.3
  },
  
  "scores": {
    "item1": {
      "value": 3,
      "description": "Há risco a pessoas (ocupação frequente)"
    },
    "item2": {
      "value": 4,
      "conditions": [
        {
          "code": "degraded_trunk_30",
          "category": "alto_4",
          "description": "Tronco degradado >30% da circunferência",
          "points": 4
        }
      ]
    },
    "item3": {
      "value": 2,
      "diameter": 35,
      "range": "10-51cm"
    },
    "item4": {
      "value": 0,
      "notes": ""
    },
    "total": 9
  },
  
  "checklist": {
    "raizes_podridao": true,
    "raizes_expostas": false,
    "fissuras_cavidades": true,
    "fungos_base": false,
    "edificacoes": true,
    "veiculos": false,
    "pregos_arames": false,
    "galhos_mortos": false,
    "inclinacao": false,
    "fios_energizados": true,
    "animais": false,
    "plantas_toxicas": false,
    "risco_pessoas": false,
    "casca_solta": false,
    "fossas_galerias": false,
    "insetos": true,
    "arvores_proximas_caidas": false
  },
  
  "photos": [
    {
      "id": "photo-1",
      "url": "https://storage.../photo1.jpg",
      "caption": "Vista geral da árvore",
      "order": 1
    }
  ],
  
  "observations": "Árvore apresenta sinais de podridão na base...",
  
  "metadata": {
    "assessmentDate": "2026-02-09T14:30:00Z",
    "createdAt": "2026-02-09T14:00:00Z",
    "updatedAt": "2026-02-09T14:45:00Z",
    "syncStatus": "synced" | "pending" | "offline"
  }
}
```

---

## 4. API ENDPOINTS

### 4.1 Autenticação
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/refresh-token
```

### 4.2 Avaliações
```
GET    /api/assessments              # Listar todas
POST   /api/assessments              # Criar nova
GET    /api/assessments/:id          # Buscar por ID
PUT    /api/assessments/:id          # Atualizar
DELETE /api/assessments/:id          # Deletar
PATCH  /api/assessments/:id/status   # Atualizar status

# Filtros e busca
GET    /api/assessments?status=draft
GET    /api/assessments?user_id=123
GET    /api/assessments?date_from=2026-01-01&date_to=2026-12-31
GET    /api/assessments?risk_level=alto
GET    /api/assessments?search=tipuana
```

### 4.3 Fotos
```
POST   /api/assessments/:id/photos   # Upload foto
GET    /api/assessments/:id/photos   # Listar fotos
DELETE /api/photos/:photo_id         # Deletar foto
```

### 4.4 Relatórios
```
GET    /api/assessments/:id/pdf      # Gerar PDF
GET    /api/assessments/:id/export   # Exportar JSON
POST   /api/assessments/export-batch # Exportar múltiplos (CSV)
```

### 4.5 Estatísticas
```
GET    /api/stats/summary            # Resumo geral
GET    /api/stats/by-month           # Por mês
GET    /api/stats/by-risk-level      # Por nível de risco
GET    /api/stats/by-species         # Por espécie
```

### 4.6 Exemplo de Request/Response

```javascript
// POST /api/assessments
// Request
{
  "location": {
    "name": "Parque Central",
    "coordinates": {
      "latitude": -23.5505,
      "longitude": -46.6333
    }
  },
  "tree": {
    "species": "Tipuana tipu",
    "height": 15.5
  },
  "scores": {
    "item1": 3,
    "item2_conditions": ["degraded_trunk_30"],
    "item3": 2
  }
}

// Response 201 Created
{
  "success": true,
  "data": {
    "id": "uuid-v4",
    "status": "draft",
    "total_score": 9,
    "created_at": "2026-02-09T14:00:00Z"
  }
}
```

---

## 5. LÓGICA DE CÁLCULO DE PONTUAÇÃO

### 5.1 Algoritmo de Cálculo

```javascript
// calculateRiskScore.js

export const calculateRiskScore = (assessment) => {
  const scores = {
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0
  };
  
  // Item 1: Alvos (0-3 pontos)
  scores.item1 = assessment.item1 || 0;
  
  // Item 2: Condições da árvore (0-4 pontos, máximo)
  if (assessment.item2_conditions && assessment.item2_conditions.length > 0) {
    const conditionScores = assessment.item2_conditions.map(c => c.points);
    scores.item2 = Math.max(...conditionScores);
    scores.item2 = Math.min(scores.item2, 4); // Limitar a 4 pontos
  }
  
  // Item 3: Diâmetro (0-3 pontos)
  if (assessment.diameter) {
    if (assessment.diameter > 51) scores.item3 = 3;
    else if (assessment.diameter >= 10) scores.item3 = 2;
    else scores.item3 = 1;
  }
  
  // Item 4: Outros fatores (0-2 pontos, opcional)
  scores.item4 = Math.min(assessment.item4 || 0, 2);
  
  // Total (máximo 10 pontos)
  const total = Math.min(
    scores.item1 + scores.item2 + scores.item3 + scores.item4,
    10
  );
  
  return {
    ...scores,
    total,
    riskLevel: getRiskLevel(total)
  };
};

export const getRiskLevel = (score) => {
  if (score >= 7) return 'ALTO';
  if (score >= 4) return 'MODERADO';
  return 'BAIXO';
};

// Validação
export const validateScores = (scores) => {
  const errors = [];
  
  if (scores.item1 < 0 || scores.item1 > 3) {
    errors.push('Item 1 deve estar entre 0 e 3');
  }
  
  if (scores.item2 < 0 || scores.item2 > 4) {
    errors.push('Item 2 deve estar entre 0 e 4');
  }
  
  if (scores.item3 < 0 || scores.item3 > 3) {
    errors.push('Item 3 deve estar entre 0 e 3');
  }
  
  if (scores.item4 < 0 || scores.item4 > 2) {
    errors.push('Item 4 deve estar entre 0 e 2');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
```

---

## 6. FUNCIONALIDADE OFFLINE (PWA)

### 6.1 Service Worker Strategy

```javascript
// service-worker.js

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache de assets estáticos
precacheAndRoute(self.__WB_MANIFEST);

// Cache-first para imagens
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
      }),
    ],
  })
);

// Network-first para API
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 5 * 60, // 5 minutos
      }),
    ],
  })
);

// Stale-while-revalidate para fontes e CSS
registerRoute(
  ({ request }) => 
    request.destination === 'style' ||
    request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'assets',
  })
);

// Background sync para envio de avaliações offline
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-assessments') {
    event.waitUntil(syncAssessments());
  }
});

async function syncAssessments() {
  // Buscar avaliações pendentes do IndexedDB
  const pendingAssessments = await getPendingAssessments();
  
  for (const assessment of pendingAssessments) {
    try {
      await fetch('/api/assessments', {
        method: 'POST',
        body: JSON.stringify(assessment),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // Marcar como sincronizado
      await markAsSynced(assessment.id);
    } catch (error) {
      console.error('Erro ao sincronizar:', error);
    }
  }
}
```

### 6.2 IndexedDB Schema

```javascript
// db.js
import { openDB } from 'idb';

const DB_NAME = 'arboreal-assessment';
const DB_VERSION = 1;

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Store de avaliações
      if (!db.objectStoreNames.contains('assessments')) {
        const assessmentStore = db.createObjectStore('assessments', {
          keyPath: 'id',
          autoIncrement: false
        });
        assessmentStore.createIndex('status', 'status');
        assessmentStore.createIndex('syncStatus', 'metadata.syncStatus');
        assessmentStore.createIndex('userId', 'userId');
      }
      
      // Store de fotos (blobs)
      if (!db.objectStoreNames.contains('photos')) {
        const photoStore = db.createObjectStore('photos', {
          keyPath: 'id',
          autoIncrement: false
        });
        photoStore.createIndex('assessmentId', 'assessmentId');
      }
    }
  });
};

// Operações
export const saveAssessmentOffline = async (assessment) => {
  const db = await initDB();
  await db.put('assessments', {
    ...assessment,
    metadata: {
      ...assessment.metadata,
      syncStatus: 'pending'
    }
  });
};

export const getPendingAssessments = async () => {
  const db = await initDB();
  const tx = db.transaction('assessments', 'readonly');
  const index = tx.store.index('syncStatus');
  return index.getAll('pending');
};
```

---

## 7. GERAÇÃO DE PDF

### 7.1 Template do Relatório

```javascript
// pdfGenerator.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateAssessmentPDF = (assessment) => {
  const doc = new jsPDF();
  
  // Cabeçalho
  doc.setFontSize(20);
  doc.text('RELATÓRIO DE AVALIAÇÃO DE RISCO ARBÓREO', 20, 20);
  
  doc.setFontSize(10);
  doc.text(`Data: ${formatDate(assessment.metadata.assessmentDate)}`, 20, 30);
  doc.text(`Avaliador: ${assessment.user.name}`, 20, 35);
  
  // Linha separadora
  doc.line(20, 40, 190, 40);
  
  // Dados da Localização
  doc.setFontSize(14);
  doc.text('1. LOCALIZAÇÃO', 20, 50);
  doc.setFontSize(10);
  doc.text(`Local: ${assessment.location.name}`, 20, 58);
  doc.text(`Endereço: ${assessment.location.address}`, 20, 63);
  doc.text(`Coordenadas: ${assessment.location.coordinates.latitude}, ${assessment.location.coordinates.longitude}`, 20, 68);
  
  // Dados da Árvore
  doc.setFontSize(14);
  doc.text('2. DADOS DA ÁRVORE', 20, 80);
  doc.setFontSize(10);
  doc.text(`Espécie: ${assessment.tree.species}`, 20, 88);
  doc.text(`Altura: ${assessment.tree.height}m`, 20, 93);
  doc.text(`DAP: ${assessment.tree.dbh}cm`, 20, 98);
  
  // Pontuação de Risco
  doc.setFontSize(14);
  doc.text('3. AVALIAÇÃO DE RISCO', 20, 110);
  
  // Tabela de pontuação
  const scoreData = [
    ['Item 1 - Avaliação dos Alvos', assessment.scores.item1.value, assessment.scores.item1.description],
    ['Item 2 - Condição da Árvore', assessment.scores.item2.value, getConditionsText(assessment.scores.item2.conditions)],
    ['Item 3 - Diâmetro Defeituoso', assessment.scores.item3.value, `Diâmetro: ${assessment.scores.item3.diameter}cm (${assessment.scores.item3.range})`],
    ['Item 4 - Outros Fatores', assessment.scores.item4.value, assessment.scores.item4.notes || '-'],
    ['TOTAL', assessment.scores.total, getRiskLevelText(assessment.scores.total)]
  ];
  
  doc.autoTable({
    startY: 115,
    head: [['Item', 'Pontos', 'Descrição']],
    body: scoreData,
    theme: 'striped',
    headStyles: { fillColor: [45, 95, 126] },
    styles: { fontSize: 9 }
  });
  
  // Checklist
  let yPos = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(14);
  doc.text('4. LISTA DE VERIFICAÇÃO', 20, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  const checkedItems = Object.entries(assessment.checklist)
    .filter(([key, value]) => value)
    .map(([key]) => formatChecklistItem(key));
  
  checkedItems.forEach(item => {
    doc.text(`☑ ${item}`, 25, yPos);
    yPos += 5;
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
  });
  
  // Observações
  if (yPos > 240) {
    doc.addPage();
    yPos = 20;
  } else {
    yPos += 10;
  }
  
  doc.setFontSize(14);
  doc.text('5. OBSERVAÇÕES', 20, yPos);
  yPos += 8;
  doc.setFontSize(10);
  const splitObservations = doc.splitTextToSize(assessment.observations || 'Nenhuma observação', 170);
  doc.text(splitObservations, 20, yPos);
  
  // Rodapé
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(`Página ${i} de ${pageCount}`, 180, 287);
    doc.text('Gerado por Sistema de Avaliação Arbórea', 20, 287);
  }
  
  return doc;
};

// Salvar ou baixar
export const downloadPDF = (assessment, filename) => {
  const pdf = generateAssessmentPDF(assessment);
  pdf.save(filename || `avaliacao-${assessment.id}.pdf`);
};

export const getPDFBlob = (assessment) => {
  const pdf = generateAssessmentPDF(assessment);
  return pdf.output('blob');
};
```

---

## 8. TESTES

### 8.1 Testes Unitários

```javascript
// calculateRiskScore.test.js
import { describe, it, expect } from 'vitest';
import { calculateRiskScore, getRiskLevel } from './calculateRiskScore';

describe('calculateRiskScore', () => {
  it('deve calcular corretamente a pontuação total', () => {
    const assessment = {
      item1: 3,
      item2_conditions: [
        { code: 'trunk_degraded', points: 4 }
      ],
      diameter: 35,
      item4: 0
    };
    
    const result = calculateRiskScore(assessment);
    
    expect(result.item1).toBe(3);
    expect(result.item2).toBe(4);
    expect(result.item3).toBe(2);
    expect(result.item4).toBe(0);
    expect(result.total).toBe(9);
    expect(result.riskLevel).toBe('ALTO');
  });
  
  it('deve limitar Item 2 a 4 pontos máximo', () => {
    const assessment = {
      item1: 0,
      item2_conditions: [
        { code: 'condition1', points: 4 },
        { code: 'condition2', points: 3 }
      ],
      diameter: 5,
      item4: 0
    };
    
    const result = calculateRiskScore(assessment);
    expect(result.item2).toBe(4);
  });
  
  it('deve limitar total a 10 pontos máximo', () => {
    const assessment = {
      item1: 3,
      item2_conditions: [{ code: 'cond', points: 4 }],
      diameter: 60,
      item4: 2
    };
    
    const result = calculateRiskScore(assessment);
    expect(result.total).toBe(10);
  });
});

describe('getRiskLevel', () => {
  it('deve retornar BAIXO para pontuação < 4', () => {
    expect(getRiskLevel(0)).toBe('BAIXO');
    expect(getRiskLevel(3)).toBe('BAIXO');
  });
  
  it('deve retornar MODERADO para pontuação 4-6', () => {
    expect(getRiskLevel(4)).toBe('MODERADO');
    expect(getRiskLevel(6)).toBe('MODERADO');
  });
  
  it('deve retornar ALTO para pontuação >= 7', () => {
    expect(getRiskLevel(7)).toBe('ALTO');
    expect(getRiskLevel(10)).toBe('ALTO');
  });
});
```

---

## 9. DEPLOYMENT

### 9.1 Variáveis de Ambiente

```bash
# .env.example

# API
NODE_ENV=production
PORT=3000
API_URL=https://api.arboreal-assessment.com

# Database
DATABASE_URL=postgresql://user:password@host:5432/arboreal_db
DATABASE_SSL=true

# Auth
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# Storage
AWS_S3_BUCKET=arboreal-photos
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1

# Email (opcional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@arboreal.com
SMTP_PASS=your-password

# Maps
GOOGLE_MAPS_API_KEY=your-maps-api-key
```

### 9.2 Docker Configuration

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/arboreal
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgis/postgis:15-3.3
    environment:
      - POSTGRES_DB=arboreal
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

volumes:
  postgres_data:
```

---

**Fim do Documento Técnico**
