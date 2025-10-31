// Sidebar Functions
const navbar = document.getElementById('navbar')

//open mobile view nav button functions
function openSidebar(){
    navbar.classList.add('show')
}
//close mobile view nav button functions
function closeSidebar(){
    navbar.classList.remove('show')
}



//customer newsletter function
function sub() {
    //the message element and the email input
    const messageElement = document.getElementById('newsletterMessage');
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value; //the text the user typed

    //check if the email field is empty
    if (!email) {
        //error message
        messageElement.textContent = 'Please fill out your Email.';
        messageElement.style.color = 'red';
        return;
    }
    else {
        //success message
        messageElement.textContent = `Thank you! You are now subscribed with ${email}.`;
        messageElement.style.color = "#7a863b";
        
        // Clear the input
        emailInput.value = '';
    }
}







// 3 in 1 booking system
//show and hide different sets of form fields based on dropdown
function updateBookingForm() {
//get booking type selection
const bookingType = document.getElementById('bookingType').value;

//get the different form structures
const tableFields = document.getElementById('tableBookingFields');
const venueFields = document.getElementById('venueBookingFields');
const cateringFields = document.getElementById('cateringBookingFields');

//get the submit info from the button click
const submitButton = document.getElementById('submitData')

//hide all sections first
tableFields.style.display = 'none';
venueFields.style.display = 'none';
cateringFields.style.display = 'none';

//if statements to select the booking type chosen by the user
if (bookingType === 'table') {
        tableFields.style.display = 'block';
        submitButton.textContent = 'Check Availability';

    }
    else if (bookingType === 'venue'){
        venueFields.style.display = 'block';
        submitButton.textContent = 'Submit Venue Inquiry';
    }
    else if (bookingType === 'catering')
        cateringFields.style.display = 'block';
        submitButton.textContent = 'Submit Catering Inquiry';
}




/*Shows/hides forms using booking type dropdown*/
function updateBookingForm() {
    const bookingType = document.getElementById('bookingType').value;
    const tableFields = document.getElementById('tableBookingFields');
    const venueFields = document.getElementById('venueBookingFields');
    const cateringFields = document.getElementById('cateringBookingFields');
    const submitButton = document.getElementById('submitData');

    // Hide all form sections first
    tableFields.style.display = 'none';
    venueFields.style.display = 'none';
    cateringFields.style.display = 'none';

    // Show the relevant section and update button text
    if (bookingType === 'table') {
        tableFields.style.display = 'block';
        submitButton.textContent = 'Check Availability';
    } else if (bookingType === 'venue') {
        venueFields.style.display = 'block';
        submitButton.textContent = 'Submit Venue Inquiry';
    } else if (bookingType === 'catering') {
        cateringFields.style.display = 'block';
        submitButton.textContent = 'Submit Catering Inquiry';
    }
}


//booking system for tables, catering, venue.
//variables for booking system.
let tableAva = 10; //all the tables available.
let bookedTables = 0; //all tables that are booked out.

const eightSeaters = 3; //3 tables of 8 seaters.
let eightSeatersBooked = 0;

const fiveSeaters = 5; //5 tables of 5 seaters.
let fiveSeatersBooked = 0;

const fourSeaters = 2; //2 tables of 4 seaters.
let fourSeatersBooked = 0;

/*it handels all three booking types*/
function submitBooking() {
    const bookingType = document.getElementById('bookingType').value;
    const messageElement = document.getElementById('bookingMessage');
    messageElement.style.color = '#50311b';

    switch (bookingType) {
        case 'table':
            //logic for Table Booking
            const needPartySize = parseInt(document.getElementById('partySize').value);

            if (isNaN(needPartySize) || needPartySize < 1) {
                messageElement.textContent = 'Please enter a valid number of guests.';
                messageElement.style.color = 'red';
                return;
            }

            if (needPartySize >= 1 && needPartySize <= 4)// if needPartySize is 1 or more but 4 or less.
            {
                if (fourSeatersBooked < fourSeaters)
                {
                    fourSeatersBooked++ //increases the amount booked by 1
                    messageElement.textContent = `Great, Your table for ${needPartySize} is confirmed. We have placed you at a 4-seater.`
                }
                else
                {
                    messageElement.textContent = 'Sorry, all of our 4-seater tables are currently booked.';
                }
            }
            else if (needPartySize == 5) 
            {
                if (fiveSeatersBooked < fiveSeaters)
                {
                    fiveSeatersBooked++ 
                    messageElement.textContent = `Great, Your table for ${needPartySize} is confirmed. We have placed you at a 5-seater.`
                }
                else
                {
                    messageElement.textContent = 'Sorry, all of our 5-seater tables are currently booked.';
                }        
            }
            else if (needPartySize >= 6 && needPartySize <= 8)
            {
                if (eightSeatersBooked < eightSeaters)
                {
                    eightSeatersBooked++
                    messageElement.textContent = `Great, Your table for ${needPartySize} is confirmed. We have placed you at an 8-seater.`
                }
                else
                {
                    messageElement.textContent = 'Sorry, all of our 8-seater tables are currently booked.';
                }
            }
            else
            {
                messageElement.textContent = 'Sorry, we cannot accommodate a party of that size (1-8 guests). Please call for special arrangements.';
            }
            break;

        case 'venue':
            //logic for Venue
            const venueName = document.getElementById('venueName').value;
            const venueEmail = document.getElementById('venueEmail').value;
            const venueDate = document.getElementById('venueDate').value;

            if (!venueName || !venueEmail || !venueDate) {
                messageElement.textContent = 'Please fill out your Name, Email, and Event Date.';
                messageElement.style.color = 'red';
                return;
            }
            
            messageElement.textContent = `Thank you, ${venueName}! Your venue inquiry for ${venueDate} has been received. We will contact you at ${venueEmail} shortly to discuss the details.`;
            
            document.getElementById('venueGuests').value = '';
            document.getElementById('venueDate').value = '';
            document.getElementById('venueEventType').value = '';
            document.getElementById('venueName').value = '';
            document.getElementById('venueEmail').value = '';
            document.getElementById('venueDetails').value = '';
            break;

        case 'catering':
            //logic for Catering
            const cateringName = document.getElementById('cateringName').value;
            const cateringEmail = document.getElementById('cateringEmail').value;
            const cateringDate = document.getElementById('cateringDate').value;
            const cateringAddress = document.getElementById('cateringAddress').value;

            if (!cateringName || !cateringEmail || !cateringDate || !cateringAddress) {
                messageElement.textContent = 'Please fill out Name, Email, Date, and Address.';
                messageElement.style.color = 'red';
                return;
            }
            
            messageElement.textContent = `Thank you, ${cateringName}! Your catering inquiry for ${cateringDate} at ${cateringAddress} has been received. We will be in touch at ${cateringEmail} soon!`;
            
            document.getElementById('cateringGuests').value = '';
            document.getElementById('cateringDate').value = '';
            document.getElementById('cateringAddress').value = '';
            document.getElementById('cateringName').value = '';
            document.getElementById('cateringEmail').value = '';
            document.getElementById('cateringDetails').value = '';
            break;
    }
}









































































function submitBooking() {
    const bookingType = document.getElementById('bookingType').value;
    const messageElement = document.getElementById('bookingMessage');
    messageElement.style.color = '#50311b';
    switch (bookingType) {
        case 'table':
            //logic for Table Booking
            const needPartySize = parseInt(document.getElementById('partySize').value);
            if (isNaN(needPartySize) || needPartySize < 1) {
                messageElement.textContent = 'Please enter a valid number of guests.';
                messageElement.style.color = 'red';
                return;
            }
            if (needPartySize >= 1 && needPartySize <= 4)// if needPartySize is 1 or more but 4 or less.
            {
                if (fourSeatersBooked < fourSeaters)
                {
                    fourSeatersBooked++ //increases the amount booked by 1
                    messageElement.textContent = `Great, Your table for ${needPartySize} is confirmed. We have placed you at a 4-seater.`
                }
                else
                {
                    messageElement.textContent = 'Sorry, all of our 4-seater tables are currently booked.';
                }
            }
            else if (needPartySize == 5) 
            {
                if (fiveSeatersBooked < fiveSeaters)
                {
                    fiveSeatersBooked++ 
                    messageElement.textContent = `Great, Your table for ${needPartySize} is confirmed. We have placed you at a 5-seater.`
                }
                else
                {
                    messageElement.textContent = 'Sorry, all of our 5-seater tables are currently booked.';
                }        
            }
            else if (needPartySize >= 6 && needPartySize <= 8)
            {
                if (eightSeatersBooked < eightSeaters)
                {
                    eightSeatersBooked++
                    messageElement.textContent = `Great, Your table for ${needPartySize} is confirmed. We have placed you at an 8-seater.`
                }
                else
                {
                    messageElement.textContent = 'Sorry, all of our 8-seater tables are currently booked.';
                }
            }
            else
            {
                messageElement.textContent = 'Sorry, we cannot accommodate a party of that size (1-8 guests). Please call for special arrangements.';
            }
            break;
        //logic for Venue    
        case 'venue':
            const venueName = document.getElementById('venueName').value;
            const venueEmail = document.getElementById('venueEmail').value;
            const venueDate = document.getElementById('venueDate').value;

            if (!venueName || !venueEmail || !venueDate) {
                messageElement.textContent = 'Please fill out your Name, Email, and Event Date.';
                messageElement.style.color = 'red';
                return;
            }

            messageElement.textContent = `Thank you, ${venueName}! Your venue inquiry for ${venueDate} has been received. We will contact you at ${venueEmail} shortly to discuss the details.`;
            
            document.getElementById('venueGuests').value = '';
            document.getElementById('venueDate').value = '';
            document.getElementById('venueEventType').value = '';
            document.getElementById('venueName').value = '';
            document.getElementById('venueEmail').value = '';
            document.getElementById('venueDetails').value = '';
            break;
        //logic for Catering
        case 'catering':
            
            const cateringName = document.getElementById('cateringName').value;
            const cateringEmail = document.getElementById('cateringEmail').value;
            const cateringDate = document.getElementById('cateringDate').value;
            const cateringAddress = document.getElementById('cateringAddress').value;

            if (!cateringName || !cateringEmail || !cateringDate || !cateringAddress) {
                messageElement.textContent = 'Please fill out Name, Email, Date, and Address.';
                messageElement.style.color = 'red';
                return;
            }
            
            messageElement.textContent = `Thank you, ${cateringName}! Your catering inquiry for ${cateringDate} at ${cateringAddress} has been received. We will be in touch at ${cateringEmail} soon!`;
            
            document.getElementById('cateringGuests').value = '';
            document.getElementById('cateringDate').value = '';
            document.getElementById('cateringAddress').value = '';
            document.getElementById('cateringName').value = '';
            document.getElementById('cateringEmail').value = '';
            document.getElementById('cateringDetails').value = '';
            break;
    }
}