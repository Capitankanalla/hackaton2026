let marketChart = null;
let currentSymbol = null;

// Inicialitza la gràfica quan el component es carrega
export function initChart(symbol) {
  currentSymbol = symbol;
  refreshChart();
}

// Refresca dades i actualitza la gràfica
export async function refreshChart() {
  if (!currentSymbol) return;

  try {
    const res = await fetch(`/api/prices/${currentSymbol}`);
    const data = await res.json();

    const labels = data.map(p => p.t);
    const values = data.map(p => p.c);

    const ctx = document.getElementById("marketChart").getContext("2d");

    // Si la gràfica ja existeix → actualitzar dades
    if (marketChart) {
      marketChart.data.labels = labels;
      marketChart.data.datasets[0].data = values;
      marketChart.update();
      return;
    }

    // Si no existeix → crear-la
    marketChart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Preu",
            data: values,
            borderColor: "#0ecb81",
            backgroundColor: "rgba(14,203,129,0.15)",
            tension: 0.25,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { display: true },
          y: { display: true }
        }
      }
    });

  } catch (err) {
    console.error("Error carregant dades de la gràfica:", err);
  }
}

// Refresc automàtic cada 60 segons
setInterval(() => {
  if (currentSymbol) refreshChart();
}, 60000);
