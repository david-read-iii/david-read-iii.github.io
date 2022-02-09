/**
 * Copies the email link displayed on the Contacts page to the user's clipboard.
 */
function copyEmailToClipboard() {

    // Get the string displayed on the link.
    var emailLink = document.getElementById("email-link");
    var string = emailLink.innerHTML;

    // Copy the string to the clipboard.
    navigator.clipboard.writeText(string);

    // Alert the user that this action occurred.
    alert("Copied to clipboard!");
}