console.log('Client side javascript file is loaded!')

// getLocation = (location) => {
//     fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
//         response.json().then( data => {
//             if(data.error){
//                 return data.error
//             }
//             else {
//                 // return ({ data.forecastData, data.address})
//                 console.log(data)
//                 return data
//             }
//         })
//     })
// }


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
messageOne.textContent = ''

const messageTwo = document.querySelector('#message-2')
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = '...Loading'
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then( data => {
            console.log(data)
            if(data.error){
                messageOne.textContent = ''
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = ''
                messageTwo.textContent=data.forecastData
            }
        })
    })
})