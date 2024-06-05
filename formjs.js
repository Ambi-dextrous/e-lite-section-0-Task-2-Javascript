document.getElementById('Exun').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const about = document.getElementById('about').value;
    const achievements = document.getElementById('achievements').value;
    const grade = document.getElementById('grade').value;
    const notify = document.querySelector('input[name="notify"]:checked').value;

    alert(`Name: ${name}\nEmail: ${email}\nDate of Birth: ${dob}\nAbout: ${about}\nAchievements: ${achievements}\nGrade: ${grade}\nReceive Notifications: ${notify}`);
});
