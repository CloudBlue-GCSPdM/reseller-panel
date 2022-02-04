// TODO:

// Return months of year
// normalize data
// standarize data



const months = () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov" ,"Dec"]

const thisReseller = () => Array.from({length: 12}, () => Math.floor(Math.random() * 40));
const bestReseller = () => Array.from({length: 12}, () => Math.floor(Math.random() * (80-20) + 20   ));


const connectOrderColors = () =>  [
    'rgba(54, 162, 235, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(255, 99, 132, 0.5)',
]

const getLabelrequest = () =>  ['Purchased', 'Changed', 'Cancellation'];

export {
    months,
    thisReseller,
    bestReseller,
    connectOrderColors,
    getLabelrequest
}