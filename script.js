document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("generateJoke");
    const clearButton = document.getElementById("clearJoke");
    const jokeText = document.getElementById("joke");
    const themeToggle = document.getElementById("themeToggle");
    const chuckNorrisImage = document.getElementById("chuckNorrisImage");
    const customJokeForm = document.getElementById("customJokeForm");
    const customJokeInput = document.getElementById("customJokeInput");

    
    const apiUrl = "http://localhost:3000/jokes";

    
    jokeButton.addEventListener("click", () => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                jokeText.textContent = data.text;
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

