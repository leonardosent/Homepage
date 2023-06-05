if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')

    const date = new Date()
    
    let timeDisplay = document.getElementById("timeDisplay")
    setTimeout(function() {
        document.getElementById("timeDisplay").innerHTML = date.getHours() + ":" + date.getMinutes()
        console.log("Updated")
    }, 1000);

} else {
    console.log('JS Running on Server')
}