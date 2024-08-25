function calculateAge() {
    // Get the input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Get today's date
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1; // Months are zero-based in JavaScript
    const todayDay = today.getDate();

    // Calculate the age
    let age = todayYear - year;

    // Adjust if the birthday hasn't occurred yet this year
    if (todayMonth < month || (todayMonth === month && todayDay < day)) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = `You are ${age} years old.`;
}
