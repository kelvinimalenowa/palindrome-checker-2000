//button to check
document.querySelector('#checkButton').addEventListener('click', checkPal)

//check if the palindrome is true
async function checkPal() {
    
    const input = document.querySelector('#nameInput').value

    fetch(`palindrome?palindrome=${input}`)
    .then ((response) => response.text())
    .then (data => {
        document.querySelector('h3').innerText = data
    })
}