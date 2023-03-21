const Helper = {
    // getDaysDifference
    getDaysDifference: function (dateString1, dateString2) {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);

        // Convert both dates to milliseconds
        const date1ms = date1.getTime();
        const date2ms = date2.getTime();

        // Calculate the difference in milliseconds
        const differenceMs = date2ms - date1ms;

        // Convert the difference to days and return it
        return Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    },

    // validatePassword
    //  ^ - Matches the beginning of the string.
    // (?=.*[a-z]) - Positive lookahead to ensure that the password contains at least one lowercase letter.
    // (?=.*[A-Z]) - Positive lookahead to ensure that the password contains at least one uppercase letter.
    // (?=.*\d) - Positive lookahead to ensure that the password contains at least one digit.
    // (?=.*[@$!%*?&]) - Positive lookahead to ensure that the password contains at least one special character.
    // [A-Za-z\d@$!%*?&]{8,} - Matches any combination of uppercase and lowercase letters, digits, and special characters, with a minimum length of 8 characters.
    // $ - Matches the end of the string.
    validatePassword: function (password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    },

    // get today's date
    getTodaysDate: function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return today = `${yyyy}-${mm}-${dd}`;
    }
}

export default Helper;