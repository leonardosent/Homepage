if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')
    
    let localStorageAllowed = false

    if (typeof(Storage) !== "undefined") { localStorageAllowed = true }

    const lightModeButton = document.getElementById("lightModeButton")

    lightModeButton.onclick = function() {
        if (lightModeButton.className == "btn btn-dark") {
            lightModeButton.innerHtml = "🌑"
            lightModeButton.className = "btn btn-light"
            if (localStorageAllowed == true) { localStorage.setItem("lightMode", "dark") }
        } else {
            lightModeButton.innerHtml = "☀️"
            lightModeButton.className = "btn btn-dark"
            if (localStorageAllowed == true) { localStorage.setItem("lightMode", "light") }
        }
    };

} else {
    console.log('JS Running on Server')
}