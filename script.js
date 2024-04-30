function showMenPrices() {
    // Hide women's price sections
    for (let i = 1; i <= 7; i++) {
        document.getElementById("women-price" + i).style.display = "none";
    }
    // Show men's price sections
    for (let i = 1; i <= 7; i++) {
        document.getElementById("men-price" + i).style.display = "block";
    }
}

function showWomenPrices() {
    // Hide men's price sections
    for (let i = 1; i <= 7; i++) {
        document.getElementById("men-price" + i).style.display = "none";
    }
    // Show women's price sections
    for (let i = 1; i <= 7; i++) {
        document.getElementById("women-price" + i).style.display = "block";
    }
}

