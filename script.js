
body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #fff;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    text-align: center;
    padding: 20px;
}

h1 {
    margin: 0;
    font-size: 2em;
}

#simulation-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

#scene-container {
    flex: 1;
    background-color: #444;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

#controls {
    flex: 1;
    background-color: #444;
    padding: 20px;
    border-radius: 8px;
}

h2 {
    font-size: 1.5em;
}

input[type="range"] {
    width: 100%;
}

input[type="number"] {
    width: 80px;
    margin: 10px 0;
}

button {
    background-color: #555;
    border: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}

button:hover {
    background-color: #777;
}

#lap-time-container {
    text-align: center;
    padding: 20px;
}

select, input[type="number"] {
    margin: 10px;
    padding: 5px;
}

#lap-time-result {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
}