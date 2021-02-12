//Define UI
const nameForm = document.querySelector('.name-form')
const newClientInput = document.querySelector('#new-client-name')
const newCallList = document.querySelector('.collection')
const containerActions = document.querySelector('.container-actions')


function loadEventListeners() {
    nameForm.addEventListener('submit', addCall)
    containerActions.addEventListener('click', removeName)

}

//Add a person to call
function addCall(e) {
    if (newClientInput.value === '') {
        return null
    }

    //Create new li element
    const li = document.createElement('li')
    //Add class to li
    li.className = 'collection-item'
    //Append input to li
    li.appendChild(document.createTextNode(newClientInput.value))
    //create a link element to "delete" a single line
    const button = document.createElement('input')
    //add a class
    button.className = 'delete-item-button'
    //add inner html
    button.type = 'submit'
    //add a value to my button
    button.value = 'delete me'
    //append to li
    li.appendChild(button)

    //append li to ul
    newCallList.appendChild(li)

    //clear input
    newClientInput.value = ''

    e.preventDefault()
}



//remove individual name
function removeName(e) {
    //select delete button
    if (e.target.className === 'delete-item-button' ) {
        //confirm delete
        if(confirm('Are you sure?')){
            //remove
            e.target.parentElement.remove()
        }
    }

}

loadEventListeners()