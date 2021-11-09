function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList() {
    console.log('Hello World');
}

addContact(1, refreshContactList);

