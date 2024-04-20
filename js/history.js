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


 // ARC CHART
const opacity = 1; // Opacity level (0 to 1)
const angle = 80 * Math.PI * opacity; // Calculate the angle for the circular line

const arcChartOptions = {
  series: [opacity * 100], // Data points for the arc chart
  chart: {
    type: 'radialBar',
    background: 'transparent',
    height: 350,
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: angle - Math.PI / 2,
      hollow: {
        margin: 0,
        size: '70%',
      },
      track: {
        background: 'transparent',
        strokeWidth: '100%',
        margin: 0,
      },
      dataLabels: {
        showOn: 'always',
        value: {
          offsetY: -20,
          color: '#fff',
          fontSize: '24px',
          formatter: function (val) {
            return `${val}%`;
          },
        },
      },
    },
  },
  fill: {
    opacity: 1,
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Opacity'],
  tooltip: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 300,
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: -90,
            endAngle: angle - Math.PI / 2,
            hollow: {
              margin: 0,
              size: '70%',
            },
            track: {
              background: 'transparent',
              strokeWidth: '100%',
              margin: 0,
            },
            dataLabels: {
              showOn: 'always',
              value: {
                offsetY: -20,
                color: '#fff',
                fontSize: '24px',
                formatter: function (val) {
                  return `${val}%`;
                },
              },
            },
          },
        },
      },
    },
  ],
};

// Create a new instance of ApexCharts for the arc chart
const arcChart = new ApexCharts(
  document.querySelector('#arc-chart'),
  arcChartOptions
);

// Render the arc chart
arcChart.render();
