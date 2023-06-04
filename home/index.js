if (typeof window !== 'undefined') {
    console.log('JS Running on Browser')

    document.getElementById("lightModeButton").onclick = function() {
        document.getElementByID("lightModeButton").innerHtml = "🌑"
    };
    
  } else {
    console.log('JS Running on Server')
    location.reload()
  }