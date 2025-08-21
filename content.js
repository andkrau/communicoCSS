//STUDY ROOM TOGGLE BUTTON
setInterval(function(){
    if (!document.getElementById("discussionToggle") && document.querySelector('.amnp-picker-header')) {
        var toggleRooms = `(function(){
            if (document.querySelector('#discussionToggle').getAttribute('status') == 'hidden') {
                document.querySelector('#discussionToggle').setAttribute('status', 'visible');
                document.querySelector('#discussionToggle').textContent='Hide Meeting Rooms';
            } else {
                document.querySelector('#discussionToggle').setAttribute('status', 'hidden');
                document.querySelector('#discussionToggle').textContent='Show Meeting Rooms';
            }
        })();`
        document.querySelector('.amnp-picker-header').innerHTML += '<button id="discussionToggle" status="hidden" onclick="' + toggleRooms + '">Show Meeting Rooms</button>';
    }
    if (document.querySelector("#discussionToggle") && document.querySelector("#discussionToggle").getAttribute('status') == "hidden" && document.querySelector('[data-locationid="468"]')) {
        document.querySelectorAll('.amnp-room-holder').forEach(el => {
            if (!(el.innerHTML.includes("Study") || el.innerHTML.includes("Studio") || el.innerHTML.includes("Conference"))) {
                el.style.display = 'none';
            }
        });
    } else if (document.querySelector("#discussionToggle") && document.querySelector("#discussionToggle").getAttribute('status') == "visible" && document.querySelector('[data-locationid="468"]')) {
        document.querySelectorAll('.amnp-room-holder').forEach(el => {
            if (!(el.innerHTML.includes("Study") || el.innerHTML.includes("Studio") || el.innerHTML.includes("Conference"))) {
                el.style.display = 'block';
            }
        });
    }
}, 1000);

//DISPLAY TIME RANGE WHEN HOVERING
setInterval(function(){
    (function() {
        if (document.querySelector(".amnp-segment.amnp-segment-open")) {
            document.querySelectorAll(".amnp-segment.amnp-segment-open").forEach(el => {
                var start = new Date("2000-01-01 " + el.dataset.time);
                var end = new Date(start.getTime() + 900000);
                el.setAttribute('title', start.toLocaleTimeString() + ' - ' + end.toLocaleTimeString());
            });
        };
    })();
}, 1000);

//DISPLAY SEATS REMAINING FOR HYBRID EVENT
setInterval(function(){
    var tickets = document.getElementById("ticket-dd");
    if(tickets){
        var html = "<span style='font-size:20px'><b>Seats Remaining:</b></span><br><big>";
        for(i = 0; i < tickets.length; i++) {
            var ticket = tickets[i];
            var type = ticket.text;
            var left = ticket.dataset.available;
        console.log(type);
        console.log(left);
            if (typeof left != 'undefined') {
        if (left == 0) {
            left = '<span style="color:red;"><b>0</b></span>';
        }
                html += type + ': ' + left + '<br>';
            }
        }
        html += '</big><br>';
        document.querySelector(".events2-reg-details").innerHTML = html;
    }
}, 1000);