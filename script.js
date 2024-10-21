
let callPlaceholder = document.querySelector('.call-placeholder');
let ticketPlaceholder = document.querySelector('.ticket-placeholder');
let ticketContainer = document.querySelector('.ticket-container');
let offcanvasCallContainer = document.querySelector('.call-placeholder-container');
let callButton = document.querySelector('.call-button');
let callAlert = document.querySelector('.call-alert');
let clarifyButton = document.querySelector('.clarify-button');
let genTicketButton = document.querySelector('.generate-ticket-button');
let offCanvasTitle = document.querySelector('.offcanvas-title');
let resolveButton = document.querySelector('.resolve-button');
let escalateButton = document.querySelector('.escalate-button');
let currentCall = null;
let ticketCounter = 1;

const callTypes = [
    { type: 'low', question: 'A caller asks question 1', details: 'More in depth info 1' },
    { type: 'medium', question: 'A caller asks question 2', details: 'More in depth info 2' },
    { type: 'high', question: 'A caller asks question 3', details: 'More in depth info 3' },
    { type: 'critical', question: 'A caller asks question 4', details: 'More in depth info 4' }
];

function getCallFromArray(array) {
    let randIndex = Math.floor(Math.random() * array.length);
    let call = array[randIndex];
    array.splice(randIndex, 1);
    return call;
}


callButton.addEventListener('click', function () {
    currentCall = getCallFromArray(callTypes);
    callPlaceholder.innerHTML = "";
    if (currentCall != null) {
        offcanvasCallContainer.innerHTML += `<p>User asks: ${currentCall.question}</p>`;
        callPlaceholder.remove();
        clarifyButton.onclick = function () {
            offcanvasCallContainer.innerHTML += `<p>User says: ${currentCall.details}</p>`;
            clarifyButton.classList.add("d-none");
            genTicketButton.classList.remove("d-none");
        };
        genTicketButton.onclick = function () {
            ticketPlaceholder.remove();
            let typeClass = '';
            let typeBorder = '';
            if (currentCall.type === 'low') {
                typeClass = "bg-success-subtle";
                typeBorder = "border border-success";
            } else if (currentCall.type === 'medium') {
                typeClass = "bg-warning-subtle";
                typeBorder = "border border-warning";
            } else if (currentCall.type === 'high' || currentCall.type === 'critical') {
                typeClass = "bg-danger-subtle";
                typeBorder = "border border-danger";
            } else {
                console.log("Error assigning bg based on type of call")
            }
            ticketContainer.classList.remove("border");
            ticketContainer.innerHTML +=
                `<div class="ticket-card border-radius d-flex flex-column justify-content-center align-items-center gap-2 ${typeBorder}">
                <h3>Ticket ${ticketCounter}</h3>
            <h5>Severity: </h5><strong class="type-tag border-radius ${typeClass}">${currentCall.type}</strong> 
            <h5>Ticket Details: </h5><span class="caller-question">${currentCall.question}</span> <br /> <span class="caller-details">${currentCall.details}</span>
            <div class="btn-group" role="group" aria-label="Ticket buttons">
                <button type="button" class="btn btn-success resolve-button">Resolve</button>
                <button type="button" class="btn btn-danger escalate-button">Escalate</button>
            </div>
            </div>`;
            offcanvasCallContainer.innerHTML = "";
            genTicketButton.classList.add("d-none");
            clarifyButton.classList.remove("d-none");
            ticketCounter++;
        }
    } else {
        callButton.classList.add("d-none");
        callAlert.innerHTML = "No one is calling...";
        clarifyButton.classList.add("d-none");
        offCanvasTitle.innerHTML = "No Calls";
    }
});
