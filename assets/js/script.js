//codes of main section start from here----------------------------------------------------------------------------

//the function is for handling ticket booking
function handleTicketBooking(ticket, isIncrease) {
    const ticketCount = getInput(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    if (isIncrease == true) {

        ticketNewCount = ticketCount + 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'first-class') {

        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {

        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = ticketTotal;
    totalCalculation();
}

// calculation for sub total charges and grand total
function totalCalculation() {

    const ticketCount = getInput('first-class');
    const economyCount = getInput('economy');

    const totalPrice = ticketCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = totalPrice;

    const charge = Math.round(totalPrice * 0.1);
    document.getElementById('charge-amount').innerText = charge;

    const grandTotal = totalPrice + charge;
    document.getElementById('grand-total').innerText = grandTotal;
}

// gei input for integer value 
function getInput(ticket) {
    const ticketCount = document.getElementById(ticket + '-count');
    const ticketCountNumber = parseInt(ticketCount.value);
    return ticketCountNumber;
}
//codes of main section end here----------------------------------------------------------------------------


//codes of modal popup box start from here----------------------------------------------------------------------

// checking for the innerText property
function handleInnerText(count, cost) {
    const amount = document.getElementById(count).innerText;
    return document.getElementById(cost).innerText = amount;
}

//checking for the value property
function handleValue(count, cost) {
    const amount = document.getElementById(count).value;
    return document.getElementById(cost).innerText = amount;
}

//toggle operation for individual id
function toggleIndividualId(id) {
    return document.getElementById(id).classList.toggle('active');
}
//modal popup box
function toggle() {

    // calling for the toggle value for individual id
    toggleIndividualId('blur');
    toggleIndividualId('popup');

    //calling for the innerText property
    handleInnerText('first-class-total', 'first-class-ticket-costs');
    handleInnerText('economy-total', 'economy-ticket-costs');
    handleInnerText('charge-amount', 'charges-amount');
    handleInnerText('grand-total', 'grand-total-amount');

    // calling for the value property 
    handleValue('first-class-count', 'first-class-ticket');
    handleValue('economy-count', 'economy-ticket');
}

//codes of modal popup box end here----------------------------------------------------------------------

