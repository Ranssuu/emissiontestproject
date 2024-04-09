// BAR CHART
const barChartOptions = {
  // Data series for the bar chart
  series: [
    {
      data: [10, 8, 6, 4, 2], // Data points for the 'Products' series
      name: ' ',
    },
  ],
  // Chart type and configurations
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  // Colors for the bars
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  // Plot options for the bars
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  // Other chart configurations
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  // X-axis configurations
  xaxis: {
    categories: ['Car', 'Truck', 'Bus', 'Trailer', 'Motorbike'], // Categories for the X-axis
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  // Y-axis configurations
  yaxis: {
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

// Create a new instance of ApexCharts for the bar chart
const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);

// Render the bar chart
barChart.render();

// AREA CHART
const areaChartOptions = {
  // Data series for the area chart
  series: [
    {
      name: 'Passed', // Series name
      data: [31, 40, 28, 51, 42, 109, 100], // Data points for the 'Passed' series
    },
    {
      name: 'Failed', // Series name
      data: [11, 32, 45, 32, 34, 52, 41], // Data points for the 'Failed' series
    },
  ],
  // Chart type and configurations
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  // Colors for the areas
  colors: ['#00ab57', '#d50000'],
  // Labels for the X-axis
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  // Other chart configurations
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  // X-axis configurations
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  // Y-axis configurations
  yaxis: [
    {
      title: {
        text: 'Passed', // Title for the first Y-axis
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Failed', // Title for the second Y-axis
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

// Create a new instance of ApexCharts for the area chart
const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);

// Render the area chart
areaChart.render();
