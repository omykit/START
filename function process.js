function processQuestionnaire() {
    const deviceUsage = parseInt(document.getElementById('deviceUsage').value) || 0;
    const screenBrightness = document.getElementById('screenBrightness').value.toLowerCase();
    const streaming = document.getElementById('streaming').value.toLowerCase();
    const travelMethod = document.getElementById('travelMethod').value.toLowerCase();

    const suggestions = [];

    // Analyze device usage
    if (deviceUsage > 8) {
        suggestions.push("Consider reducing your screen time or taking breaks during the day to save energy.");
    } else {
        suggestions.push("Your device usage is within a healthy range. Keep it up!");
    }

    // Analyze screen brightness
    if (screenBrightness === 'yes') {
        suggestions.push("Lower your screen brightness to conserve energy and reduce eye strain.");
    } else {
        suggestions.push("Great! Keeping your screen brightness low helps save energy.");
    }

    // Analyze streaming habits
    if (streaming === 'yes') {
        suggestions.push("Try to reduce video streaming or watch at lower resolutions to conserve data and energy.");
    } else {
        suggestions.push("Good job! Avoiding excessive video streaming is eco-friendly.");
    }

    // Analyze transportation
    if (travelMethod === 'car') {
        suggestions.push("Consider carpooling or using public transportation to reduce your carbon footprint.");
    } else if (travelMethod === 'bike') {
        suggestions.push("Awesome! Using a bike is one of the best ways to reduce your carbon footprint.");
    } else if (travelMethod === 'public transport') {
        suggestions.push("Great! Public transport is a more eco-friendly choice than driving alone.");
    }

    // Display the suggestions
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
    });

    // Show the suggestions section
    document.getElementById('suggestions').style.display = 'block';
}