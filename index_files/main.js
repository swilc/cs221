$(document).ready(function () {

    // Make it so the jump to assignments button scrolls rather than instantly snap
    $('#jumpToAssignmentsButton').click(function () {
        var $assignmentsAnchor = $('#assignments');
        $('html, body').animate({ scrollTop: $assignmentsAnchor.offset().top + 50 }, 'fast');
    });

    $('#calculatePinModal').modal(); // Set up the modal

    // Called when the "Calculate Your PIN" button is clicked
    $('#calculatePinButton').click(function () {
        $('#calculatePinModal').modal('show');
        $('#calculatePinInput').val('');
        $('#calculatePinNotification').hide();
        $('#calculatePinError').hide();
    });

    // Called when the "Generate" button is clicked
    $('#generatePinButton').click(function () {
        var studentId = $('#calculatePinInput').val().trim();
        if (!/^\d+$/.test(studentId)) { // Make sure it is only numbers
            $('#calculatePinError').fadeIn();
            return;
        } else {
            $('#calculatePinError').fadeOut();
        }
        studentId = parseInt(studentId);
        
        $('#calculatePinPin').text(studentId % 747 + studentId % 10); // This is where the PIN calculation is done
        $('#calculatePinNotification').transition('flash');
    });

});