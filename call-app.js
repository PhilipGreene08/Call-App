
let calls = [{
    number: 1,
    type: 'Inbound',
    oppertunity: true

},
{
    number: 2,
    type: 'Outbound',
    oppertunity: true
},
{
    number: 3,
    type: 'Inbound',
    oppertunity: false
}]



//Current Call total (inbound + outbound)
let totalNumberCalls = 0 //Default 0
let currentCallTotal = function (inbound, outbound) {
    totalNumberCalls = inbound + outbound
    let counter = document.createElement('h1') //create an element with number of calls
    counter.textContent = totalNumberCalls //sets our number of calls to our display
    document.querySelector('#call-stats').appendChild(counter) //renders to the bottom of our body
}
