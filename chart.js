//Line chart
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
      datasets: [{ 
          data: [,114,106,106,107,111,133,221,783,2478],
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          fill: false
        }
      ]
    },
  });
  



// radar-chart
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Sales", "Marketing", "Development", "Customer Support", "Information Technology", "Adminstration"],
      datasets: [
        {
          label: "Allocated Budget",
          fill: true,
          backgroundColor: "rgb(84 112 198)",
          borderColor: "rgb(84 112 198)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(84 112 198)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "Actual Spending",
          fill: true,
          backgroundColor: "rgb(145 204 117)",
          borderColor: "rgb(145 204 117)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(145 204 117)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});




// doughnut-chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["rgb(84 112 198)", "rgb(145 204 117)","rgb(250 200 88)","rgb(238 102 102)","rgb(115 192 222)"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});