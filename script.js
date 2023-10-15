document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("generateJoke");
    const clearButton = document.getElementById("clearJoke");
    const fetchButton = document.getElementById("fetchExternalJoke");
    const jokeText = document.getElementById("joke");
    const themeToggle = document.getElementById("themeToggle");
    const chuckNorrisImage = document.getElementById("chuckNorrisImage");
    const customJokeForm = document.getElementById("customJokeForm");
    const customJokeInput = document.getElementById("customJokeInput");

    const apiUrl = 'https://chuck-norris-by-api-ninjas.p.rapidapi.com/v1/chucknorris';

    jokeButton.addEventListener("click", () => {
        // Fetch a joke from the external API
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '02ca7eb96fmsh2013083d0c694fap1c285ejsne311ba695e74',
                'X-RapidAPI-Host': 'chuck-norris-by-api-ninjas.p.rapidapi.com'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok, status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            jokeText.textContent = data.joke;
            chuckNorrisImage.src = "new-chuck-norris.jpg";
        })
        .catch((error) => {
            jokeText.textContent = `Oops! Something went wrong. ${error.message}`;
            console.error(error);
        });
    });

    clearButton.addEventListener("click", () => {
        jokeText.textContent = "";
        chuckNorrisImage.src = "chuck-norris.jpg";
    });

    fetchButton.addEventListener("click", () => {
        // Trigger the jokeButton click event to fetch an external joke
        jokeButton.click();
    });

    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
    });

    customJokeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const customJoke = customJokeInput.value;
        if (customJoke) {
            jokeText.textContent = customJoke;
            customJokeInput.value = "";
        }
    });
});
