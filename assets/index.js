if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')
    
    let localStorageAllowed = false

    if (typeof(Storage) !== "undefined") {
        localStorageAllowed = true
        console.log('Localstorage Check Complete')
    }

    const logoImageSpinner = document.getElementById("image-spinner")
    const logoImage = document.getElementById("logo-image")
    
    logoImage.onload = function() {
        logoImageSpinner.remove()
    }

    // const lightModeButton = document.getElementById("lightModeButton")

    // lightModeButton.onClick = function() {
    //     if (lightModeButton.className == "btn btn-dark") {
    //         lightModeButton.innerHtml = "🌑"
    //         lightModeButton.className = "btn btn-light"
    //         if (localStorageAllowed == true) { localStorage.setItem("lightMode", "dark") }
    //     } else {
    //         lightModeButton.innerHtml = "☀️"
    //         lightModeButton.className = "btn btn-dark"
    //         if (localStorageAllowed == true) { localStorage.setItem("lightMode", "light") }
    //     }
    // };

} else {
    console.log('JS Running on Server')
}