# Customer 360 - Comprehensive Customer Analytics Platform

## 📋 Overview

**Customer 360** is an advanced customer analytics platform designed to gain a 360-degree view of customer behavior, preferences, and purchasing patterns. The project combines **descriptive, diagnostic, and predictive analytics** to enable data-driven decision-making for customer engagement, retention, and revenue optimization.

### Key Objectives:
- **Understand** customer behavior and purchasing patterns
- **Identify** customer segments and lookalike profiles
- **Predict** churn risk and purchase propensity
- **Optimize** marketing campaigns and customer engagement strategies
- **Monitor** KPIs and business metrics in real-time

---

## 🏗️ Project Architecture

```
Customer-360/
├── Codes/                          # Data processing & analytics notebooks
├── Datasets/                       # Raw and cleaned data files
├── Modelling Test/                 # Predictive models & results
├── Clustering Output/              # Customer segmentation results
├── Front End/                      # React/TypeScript dashboard
├── Config File/                    # Configuration files
├── Filters/                        # Data filtering templates
└── Documentation/                  # Project reports & documentation
```

---

## 📊 Project Workflow

### **Phase 1: Data Ingestion & Preparation**
- **Input**: Raw customer transaction data
- **Process**: Data cleaning, validation, and feature engineering
- **Output**: `cleaned_data.csv`, `formatted_data.csv`
- **Tools**: Python (Pandas, NumPy)

### **Phase 2: Descriptive Analytics**
- **Metrics Calculated**:
  - Total Consumers & Active Customers
  - Repeat Purchase Rate (RPR)
  - Average Order Value (AOV) & Basket Size (ABS)
  - Total Revenue & Gross Profit
  - Churn Rate & Customer Lifetime Value (CLV)
  - Net Promoter Score (NPS)

- **Dimensions**:
  - Channel Performance (Web, Mobile, In-Store)
  - Regional Analysis
  - Product Category Insights
  - Customer Segmentation (New, Returning, Loyal)

- **Visualizations**: KPI dashboards with charts and trends

### **Phase 3: Diagnostic Analytics**
- **Analysis Areas**:
  - Revenue trends by category, region, and channel
  - Purchase frequency patterns
  - Consumer segmentation distribution
  - Channel preference analysis
  - Geo-wise customer distribution
  - Category switching behavior (Sankey diagram)
  - AOV patterns across dimensions

- **Output**: Interactive charts and detailed reports

### **Phase 4: Predictive Modeling**
- **Models Built**:
  1. **Churn Prediction Model** (XGBoost)
     - Predicts customers likely to churn
     - Identifies churn risk factors
     - Enables proactive retention campaigns
  
  2. **Propensity-to-Purchase Model**
     - Scores customers by purchase likelihood
     - Identifies high-value prospects
     - Optimizes marketing spend allocation

- **Model Parameters**:
  ```json
  {
    "type": "XGBoost",
    "learning_rate": 0.1,
    "max_depth": 4,
    "n_estimators": 100,
    "scale_pos_weight": 9
  }
  ```

- **Features**: 50+ proxy features including:
  - Purchase behavior (frequency, value, stage)
  - Engagement metrics (clicks, impressions, page views)
  - Product interactions (ratings, wishlist, views)
  - Marketing exposure (campaigns, discounts, coupons)
  - Support quality metrics
  - Loyalty indicators

### **Phase 5: Customer Segmentation**
- **Clustering Algorithm**: K-Means
- **Number of Clusters**: 4
- **Output**: Customer clusters with distinct characteristics
- **Use Case**: Targeted marketing campaigns per segment

### **Phase 6: Data Visualization & Front-end**
- **Technology Stack**:
  - Framework: React 18.3.1
  - Language: TypeScript
  - Build Tool: Vite
  - Styling: Tailwind CSS
  - UI Components: Lucide React Icons

- **Dashboard Features**:
  - Real-time KPI metrics
  - Interactive charts and graphs
  - Customer segmentation visualizations
  - Promo sensitivity analysis
  - Time-of-day purchase patterns
  - Summary cards with key metrics

---

## 📁 Detailed File Structure

### **Codes/** - Analytics Notebooks
- `C360_Descriptive_KPI_Calculations.ipynb` - Main KPI calculation engine
- `C360_Diagnostic_KPI_Calculations_with_Charts.ipynb` - Diagnostic analysis & visualizations
- `modeling_test.ipynb` - Model development and testing
- `Corelation.ipynb` - Feature correlation analysis

### **Datasets/** - Data Files
- `formatting_data.csv` - Raw transaction data
- `cleaned_data.csv` - Cleaned and processed data
- `Descriptive KPI details.xlsx` - KPI summary sheet
- `Diagnostics KPI's Data.csv` - Diagnostic metrics

### **Modelling Test/** - Predictive Models
- `C360_Propensity_Model_*.ipynb` - Propensity model notebooks
- `Customer_360_Modelling_Test.ipynb` - Full model pipeline
- `*_predictions.csv` - Model output files
- `*.pkl` - Serialized model files

### **Clustering Output/** - Segmentation Results
- `clustered_data.csv` - Customer segments with cluster assignments

### **Front End/** - Dashboard Application
- `consumer_behaviour_analysis/project/` - React application
  - `src/components/` - Reusable UI components
  - `src/App.tsx` - Main application component
  - Configuration files (Vite, Tailwind, TypeScript)

### **Config File/**
- `config.json` - ML model and dataset configuration
- `config.py` - Python configuration for data processing

---

## 🎯 Key Metrics & KPIs

### Consumer 360 Metrics
| Metric | Description |
|--------|-------------|
| **Total Consumers** | Unique customer count |
| **Repeat Consumers** | Customers with multiple purchases |
| **New Consumers MoM** | New customer acquisitions (month-over-month) |
| **Active Customers** | Non-churned customers |
| **Churn Rate** | % of customers who stopped purchasing |
| **AOV** | Average Order Value |
| **ABS** | Average Basket Size |
| **RPR** | Repeat Purchase Rate |
| **CLV** | Customer Lifetime Value |
| **NPS** | Net Promoter Score |

### Business Metrics by Dimension
- **Channel**: Revenue, AOV, RPR, Churn Rate per channel
- **Region**: Geographic performance, customer concentration
- **Category**: Revenue contribution, growth trends, switching behavior
- **Segment**: Behavior patterns for New/Returning/Loyal customers

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- Pandas, NumPy, Scikit-learn, XGBoost
- React, TypeScript

### Backend Setup (Analytics)
```bash
# Install dependencies
pip install pandas numpy matplotlib seaborn scikit-learn xgboost

# Run Jupyter notebooks
jupyter notebook Codes/C360_Descriptive_KPI_Calculations.ipynb
```

### Frontend Setup (Dashboard)
```bash
cd "Front End/consumer_behaviour_analysis/project"

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📈 Data Pipeline

```
Raw Data
   ↓
[Data Cleaning & Preparation]
   ↓
Cleaned Dataset
   ↓
┌─→ [Descriptive Analytics] → KPI Reports
├─→ [Diagnostic Analytics] → Visualizations
├─→ [Predictive Models] → Churn & Propensity Scores
├─→ [Clustering] → Customer Segments
└─→ [Frontend Dashboard] → Business Insights
```

---

## 🔍 Feature Engineering

### Proxy Features for Prediction
The models utilize 50+ carefully selected features grouped into:

1. **Purchase Behavior** (11 features)
   - Purchase frequency, total value, stage, order count, etc.

2. **Engagement** (8 features)
   - Page views, time spent, engagement score, clicks, impressions

3. **Product Interactions** (6 features)
   - Product views, ratings, wishlist adds, search behavior

4. **Marketing** (7 features)
   - Campaign exposure, discounts, coupons, email opens

5. **Loyalty** (5 features)
   - Program membership, repeat rate, reactivation

6. **Support & Service** (3 features)
   - Support quality, response time, satisfaction

7. **Financial** (6 features)
   - AOV, revenue, profit margin, CPA, etc.

8. **Delivery & Returns** (5 features)
   - Delivery delays, return rate, defects

---

## 📊 Model Performance

### Churn Prediction Model
- **Algorithm**: XGBoost
- **Target Variable**: Churn Risk
- **Data Split**: Train/Test split with stratification
- **Feature Selection**: Non-predictive features removed via config

### Propensity Model
- **Method**: Min-Max scaling on Purchase Frequency
- **Output**: Propensity score (0-1 range)
- **Use Case**: Targeting high-intent customers

---

## 🎨 Dashboard Features

### Summary Cards
- Total Consumers
- Revenue Metrics
- Churn Rate
- NPS Score

### Interactive Charts
- **Promo Sensitivity Chart**: Campaign impact analysis
- **Time of Day Chart**: Purchase pattern trends
- **Segmentation Chart**: Customer distribution
- **Channel Performance**: Sales by channel

### Data Filtering
- By customer segment
- By region/channel
- By product category
- By time period

---

## 📝 Configuration

### Model Configuration (`config.json`)
```json
{
  "dataset": {
    "input_file": "formatting_data.xlsx",
    "output_file": "cleaned_data.csv",
    "target_variable": "Churn_Risk"
  },
  "model": {
    "type": "XGBoost",
    "parameters": {
      "learning_rate": 0.1,
      "max_depth": 4,
      "n_estimators": 100
    }
  },
  "clustering": {
    "n_clusters": 4,
    "random_state": 42
  }
}
```

---

## 🔧 Technologies Used

### Backend
- **Python**: Data processing and ML
- **Pandas**: Data manipulation
- **Scikit-learn**: ML algorithms
- **XGBoost**: Advanced gradient boosting
- **Matplotlib/Seaborn**: Visualizations

### Frontend
- **React**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Styling
- **Vite**: Fast build tool
- **Lucide React**: Icon library

---

## 📚 Project Outputs

### Reports
- Descriptive KPI Dashboard
- Diagnostic Analysis Report
- Predictive Model Results
- Customer Segmentation Report

### Data Artifacts
- Cleaned datasets
- Model predictions (CSV files)
- Serialized models (PKL files)
- Cluster assignments

### Visualizations
- KPI charts and graphs
- Trend analysis plots
- Segmentation heatmaps
- Interactive dashboards

---

## 🎯 Use Cases

1. **Customer Retention**: Identify and target at-risk customers with retention offers
2. **Campaign Optimization**: Target high-propensity customers for maximum ROI
3. **Lookalike Modeling**: Find new customers similar to best performers
4. **Segment-specific Offers**: Tailor marketing by customer segment
5. **Channel Optimization**: Allocate budget to best-performing channels
6. **Regional Strategy**: Customize approach by geographic performance

---

## 📅 Project Roadmap

- [x] Data collection and cleaning
- [x] Descriptive analytics & KPI calculations
- [x] Diagnostic analysis & visualizations
- [x] Predictive model development
- [x] Customer segmentation
- [x] Frontend dashboard development
- [ ] Real-time data integration
- [ ] Advanced ML models (deep learning)
- [ ] Mobile app version
- [ ] API development for integrations

---

## 📄 License

This project is open source and available for use and modification.

---

## 👥 Contributors

- **Project Owner**: @jeevaklonare01

---

**Last Updated**: June 2026  
**Repository**: https://github.com/jeevaklonare01/Customer-360
