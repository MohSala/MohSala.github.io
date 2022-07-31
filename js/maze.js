$(function () {
    //variables
    const initialText = $('#status').text();
    let startStatus = false;

    $('#start').click(function () {
        if (!startStatus) {
            startStatus = true;
        } else {
            reset();
        }
    });
    $(".boundary").mouseenter(youLose);

    $('#end').mouseover(youWin);

    $("#maze").mouseleave(youLose);

    //lose
    function youLose() {
        if (startStatus) {
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, you lost. ☹️ Click the \"S\" to try again.");
            startStatus = false;
        }
    }

    //reset
    function reset() {
        $(".boundary").removeClass("youlose");
        $("#status").text(initialText);
        startStatus = true;
    }

    //win
    function youWin() {
        if (startStatus) {
            $(".boundary").removeClass("youlose");
            $("#status").text("You win! 😁 Click the \"S\" to play again.");
            startStatus = false;
        }
    }

});
