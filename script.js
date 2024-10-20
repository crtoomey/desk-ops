console.log('yo');
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
const callTypes = [
    { type: 'low', details: 'A caller asks question 1' },
    { type: 'medium', details: 'A caller asks question 2' },
    { type: 'high', details: 'A caller asks question 3' },
    { type: 'critical', details: 'A caller asks question 4' }
];

function getCallFromArray(array) {
    let type = array.type;
    let details = array.details;
    return type, details;
}

let newCall = getCallFromArray(callTypes);

function showNewCall(call) {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();

}



function makeNewTicket(call) {

}
