# Air Pollution and Life Expectancy Visualization

This project visualizes the relationship between air pollution (PM2.5 concentration) and life expectancy across countries from 2010-2019 using interactive data visualizations.

## Data Sources

- **Life Expectancy**: Country-level life expectancy data by year ([Our World in Data](https://ourworldindata.org/life-expectancy))
- **Air Pollution**: PM2.5 concentration measurements in micrograms/m³ ([Our World in Data](https://ourworldindata.org/outdoor-air-pollution))  
- **World Map**: Country boundary data for geographic visualization ([World Atlas](https://github.com/topojson/world-atlas))

Data was filtered to the overlapping time period of 2010-2019 where both metrics were available. Countries missing data for any year in this range were excluded.

## Visualizations

### Choropleth Map
- Interactive world map showing air pollution concentration by country
- Time slider to navigate between years 2010-2019
- Quantile-based red color scale for pollution levels
- Hover tooltips displaying country name and pollution values
- Countries without data shown in gray

### Scatterplot  
- Scatter plot showing relationship between PM2.5 concentration (x-axis) and life expectancy (y-axis)
- Time slider synchronized with the map
- Hover tooltips with detailed country information
- Linear scales for direct data interpretation

### Line Plots
- Dual line plots tracking the 10 countries with highest PM2.5 concentration
- One plot for life expectancy trends over time
- One plot for PM2.5 concentration trends over time
- Shared color coding and legend
- Hover tooltips showing values for both metrics

## Interactive Features

- **Time Slider**: Navigate through years 2010-2019, updates all visualizations simultaneously
- **Hover Tooltips**: Display detailed information for countries and data points
- **Color Coordination**: Consistent color scheme across all visualizations
- **Map Highlighting**: Countries highlighted on hover with soft yellow outline

## Technical Implementation

- Python used for data preprocessing and filtering
- Interactive web-based visualizations
- Real-time updates across linked views
- Responsive design with clear axis labeling and legends

## Contributors

*Yama Bazger, Aleksandra Marjanovic, Rigel Wafford, and Shreya Tuli (Fall 2024).*
