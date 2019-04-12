function check_phone_number (phoneNumber) {
    var regexp = /[0-9]{2}$\-[0-9]{10}$/;
    return regexp.test(phoneNumber)? true : false;
}