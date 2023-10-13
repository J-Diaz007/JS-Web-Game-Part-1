let greenCharacter = document.createElement('img')

// * Tells the browser what to display
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'

// * Adds the image to the page. Without this line the img tag would be created,
// *  but it wouldn't visible in the browser (only the tag in the console).
document.body.append(greenCharacter)