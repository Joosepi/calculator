// Get the canvas element and set its context
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');

// Prompt user for input
const sleepHours = prompt("How many hours are you going to sleep today?");
const gameHours = prompt("How many hours are you going to play games for?");
const studyHours = prompt("How many hours are you going to study today?");
const relaxHours = prompt("How many hours are you going to relax and take a shower for?");

// Calculate total time
const totalTime = parseInt(sleepHours) + parseInt(gameHours) + parseInt(studyHours) + parseInt(relaxHours);

// Set up data for chart
const data = {
  labels: ['Sleep', 'Game', 'Study', 'Relax'],
  datasets: [{
    label: 'Time Spent on Activities',
    data: [sleepHours, gameHours, studyHours, relaxHours],
    backgroundColor: [
      'var(--primary-color)',
      'var(--secondary-color)',
      'var(--tertiary-color)',
      'var(--quaternary-color)'
    ],
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1
  }]
};

// Set up options for chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      },
      scaleLabel: {
        display: true,
        labelString: 'Hours'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Activities'
      }
    }]
  }
};

// Create the chart
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

// Update total time
document.getElementById('sleep-time').innerHTML = sleepHours;
document.getElementById('game-time').innerHTML = gameHours;
document.getElementById('study-time').innerHTML = studyHours;
document.getElementById('relax-time').innerHTML = relaxHours;
document.getElementById('total-time').innerHTML = totalTime;
