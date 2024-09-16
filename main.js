document.getElementById("generateBtn").addEventListener("click", function() {
    const userName = document.getElementById("userName").value;
    if (userName.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    // HTML content to be generated
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For ${userName}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="wrapper">
            <h2 class="question">Hi ${userName}, I love you! Do you love me too?</h2>
            <div class="btn-group">
                <button class="yes-btn">Yes</button>
                <button class="no-btn">No</button>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>
    `;

    // Create a downloadable HTML file with the generated content
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `love_message_for_${userName}.html`;
    link.click();
});
