"use client";

// Importer CSS filen
import "../component-style/theme-toggle-student-exercise.css";

// TODO for studerende: Importer useState fra React
import { useState } from 'react';

export default function ThemeToggleStudentExercise() {
  // TODO for studerende: Opret state variabel for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);


  // TODO for studerende: Implementer handleToggle funktionen
  const handleToggle = () => {
    console.log("Toggle knappen blev klikket!");
    // Hint: Toggle isDarkMode mellem true/false
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  // I denne opgave skal du ikke implementere conditional classes, det er NÆSTEN gjort for dig.
  // Når du har implementeret useState og handleToggle, skal du som det sidste skifter false ud med isDarkMode state variablen i alle 7 ternary operatorene i jsx'en.
  // Herefter vil du kunne skifte tema, ved at toggle switchen i UI'en.
  return (
    <div className={`exercise-container ${isDarkMode ? "dark" : ""}`}>
      <div className={`app-card ${isDarkMode ? "dark" : ""}`}>
        {/* Header */}
        <div className="app-header">
          <h1 className="exercise-title">Theme Toggle Øvelse</h1>
          <p className="exercise-description">Få toggle-knappen til at skifte mellem lys og mørk tema</p>
        </div>

        {/* App indhold */}
        <div className="app-content">
          <div className="demo-section">
            <h2 className="demo-title">
              <span className="toggle-icon">{isDarkMode ? "🌙" : "☀️"}</span>
              {false ? "Mørk Tema" : "Lys Tema"}
            </h2>
            <p className="demo-text">Dette er et eksempel på hvordan indholdet ser ud i det {false ? "mørke" : "lyse"} tema. Alle farver, baggrunde og tekst skulle skifte automatisk når du toggle mellem temaerne.</p>
          </div>
        </div>

        {/* Toggle sektion */}
        <div className="toggle-section">
          <div className="toggle-label">
            <span className="toggle-icon">🎨</span>
            {false ? "Mørk Tema" : "Lys Tema"}
          </div>

          <button className={`toggle-switch ${isDarkMode ? "active" : ""}`} onClick={handleToggle} aria-label="Toggle dark mode" />
        </div>

        {/* Hjælpe information */}
        <div className="help-section">
          <h3 className="help-title">🎯 Opgave:</h3>
          <ul className="help-list">
            <li>1. Importer useState fra React</li>
            <li>2. Opret isDarkMode state (starter på false)</li>
            <li>3. Implementer handleToggle funktionen</li>
            <li>4. Toggle isDarkMode mellem true/false</li>
            <li>5. Se hele appen skifte tema!</li>
            <li>6. Bemærk conditional classes og ikoner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Chats forklaring for linje 25-27:
//
//Lad mig forklare det trin for trin:
//"skal du ikke implementere conditional classes, det er NÆSTEN gjort for dig":
// De betingede klasser (conditional classes) er allerede sat op i koden som ${false ? "dark" : ""}
// Du skal ikke lave nye - bare erstatte false med din state
// "skifter false ud med isDarkMode state variablen i alle 7 ternary operatorene":

// En ternary operator er den her struktur: condition ? "værdi hvis true" : "værdi hvis false"
// I din kode er der 7 steder hvor der står false ? noget : noget
// Du skal finde alle disse steder og ændre false til isDarkMode

// "Herefter vil du kunne skifte tema":
// Når du har erstattet alle false med isDarkMode, vil hele temaet (farver, ikoner, tekst) ændre sig når du klikker på knappen