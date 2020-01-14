
let calls = [{
    number: 1,
    type: 'Inbound',
    opportunity: true

},
{
    number: 2,
    type: 'Outbound',
    opportunity: true
},
{
    number: 3,
    type: 'Inbound',
    opportunity: false
}]

const getSavedCalls = function () {
    let callsJSON = localStorage.getItem('calls')

    if (callsJSON !== 0) {
        return JSON.parse('callsJSON')
    } else {
        []
    }
}

//Current Call total (inbound + outbound)
let totalNumberCalls = 0 //Default 0
let currentCallTotal = function (inbound, outbound) {
    totalNumberCalls = inbound + outbound
    let counter = document.createElement('h1') //create an element with number of calls
    counter.textContent = totalNumberCalls //sets our number of calls to our display
    document.querySelector('#call-stats').appendChild(counter) //renders to the bottom of our body
}

//Filter for good opportunities coming from calls
let goodOpportunities = calls.filter(function (call) {
    return call.opportunity
})

//Display the number of good opps that came from calls in a sentence
let opportunitiesSummery = document.createElement('p')
opportunitiesSummery.textContent = `You recieved ${goodOpportunities.length} good opportunities today`
document.querySelector('#call-stats').appendChild(opportunitiesSummery)

//Clear Calls----------------- Double check this works
//document.querySelector('#clear-call').innerHTML = ''

