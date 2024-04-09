<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="CSS/home.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
  <!-- Sidebar -->
  <div class="sidebar">
    <div class="sidebar-header">
      <i class="fas fa-user-circle fa-2x"></i>
      <span class="user-name">USER</span>
    </div>
    <div class="menu-section">
      <span class="section-title">Menu</span>
      <ul>
        <li class="active"><a href="#"><i class="fas fa-tachometer-alt"></i>Dashboard</a></li>
        <li><a href="userlist.php"><i class="fas fa-info-circle"></i><a>User Information</a></li>
        <li><a href="#"><i class="fas fa-print"></i>Print Result</a></li>
        <li><a href="#"><i class="fas fa-eye"></i>Customer View</a></li>
      </ul>
    </div>
    <div class="other-section">
      <span class="section-title">Others</span>
      <ul>
        <li><a href="#"><i class="fas fa-cog"></i>Settings</a></li>
        <li><a href="#"><i class="fas fa-user-alt"></i>Account</a></li>
        <li><a href="#"><i class="fas fa-question-circle"></i>Help</a></li>
      </ul>
    </div>
  </div>

  <!-- Content Area -->
  <div class="main-content">
    <div class="main-title">
      <h2>DASHBOARD</h2>
    </div>

    <div class="main-cards">
          <div class="card">
            <div class="card-inner">
              <h3>TOTAL NO. USERS</h3>
            </div>
            <h1>249</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>TOTAL NO. VEHICLES</h3>
            </div>
            <h1>25</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>TOTAL PASSED</h3>
            </div>
            <h1>1500</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>TOTAL FAILED</h3>
            </div>
            <h1>56</h1>
          </div>
    </div>

        <div class="charts">

          <div class="charts-card">
            <h2 class="chart-title">Top Belching Vehicle Type</h2>
            <div id="bar-chart"></div>
          </div>

          <div class="charts-card">
            <h2 class="chart-title">Monthly Emission Test</h2>
            <div id="area-chart"></div>
          </div>

        </div>
  </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.5/apexcharts.min.js"></script>
    <!-- Custom JS -->
    <script src="JS/scripts.js"></script>

</body>
</html>
