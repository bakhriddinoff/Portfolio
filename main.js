document.getElementById("copyButton").addEventListener("click", function(event) {
    event.preventDefault(); // Linkni o'ziga yo'naltirmaslik uchun

    var link = "https://t.me/bakhriddinoff_USA";

    // Clipboardga nusxalash
    navigator.clipboard.writeText(link).then(function() {
        // Yozuvni ko'rsatish
        var notification = document.getElementById("notification");
        notification.style.display = "block";
        notification.style.color = "lightgreen"

        // 1 soniyadan keyin yozuvni yashirish
        setTimeout(function() {
            notification.style.display = "none";
        }, 1000);
    }).catch(function(err) {
        console.error("Nusxalashda xato yuz berdi: ", err);
    });
});


