if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')
    
    let localStorageAllowed = false

    if (typeof(Storage) !== "undefined") { localStorageAllowed = true }

    const lightModeButton = document.getElementById("lightModeButton")

    lightModeButton.onclick = function() {
        if (lightModeButton.className == "btn btn-dark") {
            lightModeButton.innerHtml = "🌑"
            lightModeButton.className = "btn btn-light"
        } else {
            lightModeButton.innerHtml = "☀️"
            lightModeButton.className = "btn btn-dark"
        }
    };
    
    
} else {
    console.log('JS Running on Server')
}