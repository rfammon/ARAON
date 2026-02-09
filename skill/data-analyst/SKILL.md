---
name: data-analyst
description: >
  Expert data analyst and scientist skill for data processing, visualization, statistical analysis, and insight generation.
  Trigger: When user asks to analyze data, create charts, calculate statistics, or perform data science tasks.
license: Apache-2.0
metadata:
  author: opencode-user
  version: "1.0"
---

## When to Use

- Analyzing CSV, JSON, or SQL data dumps
- Creating visualizations (charts, graphs, plots)
- Performing statistical analysis (regression, distributions, etc.)
- Cleaning and transforming raw data
- Generating insights from datasets

## Critical Patterns

- **Data Validation**: Always validate data types and schema before analysis (use Zod if in TS).
- **Visualization**:
  - For static reports/artifacts: Use Python (Matplotlib/Seaborn) or SVG generation.
  - For web UI: Use Recharts or Nivo (React).
- **Reproducibility**: Document the analysis steps clearly.
- **Privacy**: Never expose PII in analysis outputs.

## Code Examples

### Python Data Analysis (Generic)

```python
import pandas as pd
import matplotlib.pyplot as plt

def analyze_sales(file_path):
    df = pd.read_csv(file_path)
    # Basic stats
    print(df.describe())
    # Trend
    df.groupby('date')['revenue'].sum().plot()
    plt.title('Revenue Trend')
    plt.show()
```

### React Visualization (Recharts)

```tsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const SalesTrend = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
  </LineChart>
);
```

## Resources

- **Pandas**: Data manipulation
- **Matplotlib/Seaborn**: Static plotting
- **Recharts**: React charting
