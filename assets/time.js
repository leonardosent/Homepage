if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')

    const date = new Date()
    
    let timeDisplay = document.getElementById("timeDisplay")
    console.log(timeDisplay)
    // timeDisplay.classList.remove("placeholder-glow")
    console.log(date)
    console.log(date.getHours + ":" + date.getMinutes)
    setTimeout(function() {
        timeDisplay.innerHTML = date.getHours + ":" + date.getMinutes
        console.log("Updated")
    }, 1000);

} else {
    console.log('JS Running on Server')
}