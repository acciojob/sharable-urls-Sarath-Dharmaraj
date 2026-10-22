// your code here
let button = document.getElementById('button')
let nameInput = document.getElementById('name')
let yearInput = document.getElementById('year')
let urlDisplay = document.getElementById('url')
button.addEventListener('click', (e) => {
  e.preventDefault()

  let nameParam = nameInput.value.trim()
  let yearParam = yearInput.value.trim()

  const baseUrl = 'https://localhost:8080/'

  const param = new URLSearchParams();

  if (nameParam) param.set('name', nameParam)
  if (yearParam) param.set('year', yearParam)

  const queryString = param.toString()

  console.log(urlDisplay.textContent)
  if (queryString) urlDisplay.textContent = baseUrl + '?' + queryString
  else urlDisplay.textContent = baseUrl
})