console.log('yo');
let offcanvasCallDetails = document.querySelector('.call-placeholder');
let ticketPlaceholder = document.querySelector('.ticket-placeholder');
let ticketContainer = document.querySelector('.ticket-container');
let offcanvasCallContainer = document.querySelector('.call-placeholder-container');
let callButton = document.querySelector('.call-button');
let clarifyButton = document.querySelector('.clarify-button');
let genTicketButton = document.querySelector('.generate-ticket-button');
const callTypes = [
    { type: 'low', question: 'A caller asks question 1', details: 'More in depth info 1' },
    { type: 'medium', question: 'A caller asks question 2', details: 'More in depth info 2' },
    { type: 'high', question: 'A caller asks question 3', details: 'More in depth info 3' },
    { type: 'critical', question: 'A caller asks question 4', details: 'More in depth info 4' }
];

function getCallFromArray(array) {
    let randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}


callButton.addEventListener('click', function () {
    let newCall = getCallFromArray(callTypes);
    offcanvasCallDetails.remove();
    offcanvasCallContainer.innerHTML += `<p>User asks: ${newCall.question}</p>`;
    clarifyButton.addEventListener('click', function () {
        offcanvasCallContainer.innerHTML += `<p>User asks: ${newCall.details}</p>`;
        clarifyButton.remove();
        genTicketButton.classList.remove("d-none");
    });
    genTicketButton.addEventListener('click', function () {
        ticketPlaceholder.remove();
        ticketContainer.innerHTML += `<strong>${newCall.type}</strong> <span class="caller-question">${newCall.question}</span> <br /> <span class="caller-details">${newCall.details}</span>`;
    })
});
