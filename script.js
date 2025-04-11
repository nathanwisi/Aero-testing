document.addEventListener("DOMContentLoaded", () => {
  const wingAngle = document.getElementById("wing-angle");
  const airSpeed = document.getElementById("air-speed");
  const airDensity = document.getElementById("air-density");

  const wingAngleValue = document.getElementById("wing-angle-value");
  const airSpeedValue = document.getElementById("air-speed-value");
  const airDensityValue = document.getElementById("air-density-value");
  const resultBox = document.getElementById("lap-time-result");

  function updateValues() {
    wingAngleValue.textContent = wingAngle.value;
    airSpeedValue.textContent = airSpeed.value;
    airDensityValue.textContent = airDensity.value;
  }

  [wingAngle, airSpeed, airDensity].forEach(input => {
    input.addEventListener("input", updateValues);
  });

  document.getElementById("run-simulation").addEventListener("click", () => {
    const angle = parseFloat(wingAngle.value);
    const speed = parseFloat(airSpeed.value);
    const density = parseFloat(airDensity.value);

    const downforce = 0.5 * density * Math.pow(speed / 3.6, 2) * Math.sin(angle * Math.PI / 180);
    alert(`Estimated Downforce: ${downforce.toFixed(2)} N`);
  });

  document.getElementById("calculate-lap-time").addEventListener("click", () => {
    const track = document.getElementById("track-select").value;
    const tires = document.getElementById("tires-select").value;
    const power = parseFloat(document.getElementById("engine-power").value);
    const rpm = parseFloat(document.getElementById("engine-rpm").value);
    const mass = parseFloat(document.getElementById("engine-mass").value);

    let baseTime = track === "kart" ? 55 : 105;

    if (tires === "semi-slicks") baseTime *= 0.97;
    else if (tires === "slicks") baseTime *= 0.94;

    baseTime -= (power / 1000);
    baseTime += (mass / 1000);

    const lapTime = Math.max(baseTime, 30).toFixed(2);
    resultBox.innerHTML = `Lap Time Estimate: ${lapTime}s`;
  });

  updateValues();
});