document.addEventListener("DOMContentLoaded", () => {
    const wingAngleSlider = document.getElementById("wing-angle");
    const airSpeedSlider = document.getElementById("air-speed");
    const airDensitySlider = document.getElementById("air-density");

    const wingAngleValue = document.getElementById("wing-angle-value");
    const airSpeedValue = document.getElementById("air-speed-value");
    const airDensityValue = document.getElementById("air-density-value");

    // Update the values as sliders move
    wingAngleSlider.addEventListener("input", () => {
        wingAngleValue.textContent = wingAngleSlider.value;
    });

    airSpeedSlider.addEventListener("input", () => {
        airSpeedValue.textContent = airSpeedSlider.value;
    });

    airDensitySlider.addEventListener("input", () => {
        airDensityValue.textContent = airDensitySlider.value;
    });

    // 3D Model and Airflow Simulation (Placeholder for now)
    const runSimulationButton = document.getElementById("run-simulation");
    runSimulationButton.addEventListener("click", () => {
        alert("Running simulation with current settings...");
        // Add actual simulation logic here.
    });

    // Lap Time Calculator (Placeholder for now)
    const calculateLapTimeButton = document.getElementById("calculate-lap-time");
    calculateLapTimeButton.addEventListener("click", () => {
        const track = document.getElementById("track-select").value;
        const tires = document.getElementById("tires-select").value;
        const enginePower = document.getElementById("engine-power").value;
        const engineRpm = document.getElementById("engine-rpm").value;
        const engineMass = document.getElementById("engine-mass").value;

        // Placeholder lap time calculation (simplified)
        const lapTime = 120 - (enginePower / 100) + (track === "race" ? 10 : 0);
        document.getElementById("lap-time-result").textContent = `Lap Time: ${lapTime.toFixed(2)} seconds`;
    });
});