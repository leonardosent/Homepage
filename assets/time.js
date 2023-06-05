if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')

    const date = new Date()
    
    let timeDisplay = document.getElementById("timeDisplay")
    timeDisplay.classList.remove("placeholder-glow")

    setTimeout(function() {
        timeDisplay.innerHTML = date.getHours + ":" + date.getMinutes
    }, 1000);

} else {
    console.log('JS Running on Server')
}