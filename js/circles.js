$(document).ready(function () {

    $("#start").click(function () {
        //variables
        const radius = $("#width").val(); //heightxwidth
        const growth = $("#growth").val(); //increment in pixels
        const growthRate = $("#speed").val(); //interval of increment
        const numberOfCircles = $("#circles").val(); //how many circles

        console.log(radius + " " + growth + " " + growthRate + " " + numberOfCircles)
        const randCircles = [];
        makeDiv(randCircles, radius, growth, growthRate, numberOfCircles);
        console.log(randCircles);
        $(".container").append(randCircles);
    });

    // make div
    function makeDiv(randCircles, radius, growth, growthRate, numberOfCircles) {
        for (let index = 0; index < numberOfCircles; index++) {
            var divsize = 100;
            var posx = (Math.random() * ($('.container').width() - divsize)).toFixed();
            var posy = (Math.random() * ($('.container').height() - divsize)).toFixed();
            randCircles.push(
                $("<div>",
                    {
                        "css": {
                            "left": posx + "px",
                            "right": posy + "px",
                            "top": "30%",
                            "bottom": "50%",
                            // "top": posy + "px",
                            "width": radius + "px",
                            "height": radius + "px",
                            "background": generateColor(),
                            "border-radius": "50%",
                            "position": "absolute"
                        },
                        "click": function () {
                            console.log($(this).attr("timer"));
                            clearInterval($(this).attr("timer"));
                            this.remove();
                        },
                        "mouseenter": function () {
                            $(this).css("opacity", "0.5");
                        },
                        "mouseleave": function () {
                            $(this).css("opacity", "1.0");
                        }
                    }
                )
            );
            randCircles[index].attr({
                "pixel-increment": growth,
                "timer": setInterval(growCircle, growthRate, randCircles[index])
            });
        }

    }
    //growth
    function growCircle(item) {
        const size = parseInt(item.attr("pixel-increment"));
        const width = parseInt(item.css("width")) + size;
        const height = parseInt(item.css("height")) + size;

        item.css({
            "width": width,
            "height": height,
        })
    }

    //generate random color
    function generateColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;
    }
});