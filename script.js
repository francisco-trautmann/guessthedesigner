const quizData = [

    {
        image: "media/images/1.jpg",
        answers: ["John Galliano", "Rick Owens", "Karl Lagerfeld", "Rei Kawakubo"],
        correct: 1,
        description: "Rick Owens - FW 2005"
    },
    {
        image: "media/images/2.jpg",
        answers: ["Yohji Yamamoto", "Maison Margiela", "Pierre Cardin", "Issey Miyake"],
        correct: 0,
        description: "Yohji Yamamoto - Fall/Winter 2024"
    },
    {
        image: "media/images/3.jpg",
        answers: ["Lanvin", "Zegna", "Maison Margiela", "Gucci"],
        correct: 2,
        description: "Maison Margiela - Spring 2016"
    },
    {
        image: "media/images/4.jpg",
        answers: ["Balenciaga", "Comme des garçons", "Louis Vuitton", "Walter Van Beirendonck"],
        correct: 3,
        description: "Walter Van Beirendock - Fall 2020"
    },
    {
        image: "media/images/5.jpg",
        answers: ["Vivienne Westwood", "Jean Paul Gaultier", "Miu Miu", "Chanel"],
        correct: 0,
        description: "Vivienne Westwood - Fall 2011"
    },
    {
        image: "media/images/6.jpeg",
        answers: ["Dior Homme", "Celine", "Saint Laurent", "Raf Simons"],
        correct: 0,
        description: "Dior Homme by Hedi Slimane - FW 2005"
    },
    {
        image: "media/images/7.jpeg",
        answers: ["Helmut Lang", "Maison Margiela", "Zegna", "Dior Homme"],
        correct: 3,
        description: "Dior Homme by Hedi Slimane - FW 2005"
    },
    {
        image: "media/images/8.jpg",
        answers: ["Balenciaga", "Hood By Air", "Givenchy", "Diesel"],
        correct: 1,
        description: "Hood By Air - Fall 2014"
    },
    {
        image: "media/images/9.jpg",
        answers: ["Kiko Kostadinov", "Vetements", "Raf Simons", "Undercover"],
        correct: 2,
        description: "Raf Simons - Spring 2002"
    },
    {
        image: "media/images/10.jpg",
        answers: ["Issey Miyake", "Chanel", "Valentino", "Maison Margiela"],
        correct: 0,
        description: "Issey Miyake - Spring 2011"
    },
    {
        image: "media/images/11.jpg",
        answers: ["Vivienne Westwood", "Comme des garçons", "Jean Paul Gaultier", "Ann Demeulemeester"],
        correct: 1,
        description: "Comme des garçons - Spring 2010"
    },
    {
        image: "media/images/12.jpg",
        answers: ["Off-White", "Diesel", "Vetements", "Vaquera"],
        correct: 2,
        description: "Vetements - Spring 2019"
    },
    {
        image: "media/images/13.jpg",
        answers: ["Acne Studios", "Gucci", "Undercover", "Louis Vuitton"],
        correct: 3,
        description: "Louis Vuitton by Virgil Abloh - Spring 2020"
    },
    {
        image: "media/images/14.jpg",
        answers: ["Undercover", "Yohji Yamamoto", "Comme des garçons", "Alexander McQueen"],
        correct: 0,
        description: "Undercover - Fall 2009"
    },
    {
        image: "media/images/15.jpg",
        answers: ["Jacquemus", "Hermès", "Gucci", "Courrèges"],
        correct: 0,
        description: "Jacquemus - Spring 2020"
    },
    {
        image: "media/images/16.jpg",
        answers: ["Ann Demeulemeester", "Yohji Yamamoto", "Rick Owens", "Junya Watanabe"],
        correct: 0,
        description: "Ann Demeulemeester - Fall 2012"
    },
    {
        image: "media/images/17.jpg",
        answers: ["Undercover", "Balenciaga", "Yohji Yamamoto", "Rick Owens"],
        correct: 1,
        description: "Balenciaga - Fall 2020"
    },
    {
        image: "media/images/18.jpg",
        answers: ["Diesel", "Maison Margiela", "Givenchy", "Raf Simons"],
        correct: 2,
        description: "Givenchy - Fall 2022"
    },
    {
        image: "media/images/19.jpg",
        answers: ["Alyx", "Diesel", "Vetements", "Vlone"],
        correct: 3,
        description: "Vlone - Spring/Summer 2018"
    },
    {
        image: "media/images/20.jpeg",
        answers: ["Helmut Lang", "Number (N)ine", "Rick Owens", "Kiko Kostadinov"],
        correct: 1,
        description: "Number (N)ine - Autumn/Winter 2005"
    },
    {
        image: "media/images/21.jpg",
        answers: ["Burberry", "Junya Watanabe", "Raf Simons", "Balenciaga"],
        correct: 1,
        description: "Junya Watanabe - Fall 2014"
    },
    {
        image: "media/images/22.jpg",
        answers: ["Diesel", "Celine", "Burberry", "Hermès"],
        correct: 2,
        description: "Burberry - Fall 2023"
    },
    {
        image: "media/images/23.jpg",
        answers: ["Casablanca", "Saint Laurent", "Chanel", "Hermès"],
        correct: 3,
        description: "Hermès - Spring 2014"
    },
    {
        image: "media/images/24.jpg",
        answers: ["Saint Laurent", "Comme des garçons", "Rick Owens", "Givenchy"],
        correct: 0,
        description: "Saint Laurent by Hedi Slimane - Fall 2013"
    },
    {
        image: "media/images/25.jpg",
        answers: ["Yohji Yamamoto", "Enfants Riches Déprimés", "Saint Laurent", "Dries Van Noten"],
        correct: 1,
        description: "Enfants Riches Déprimés - Fall 2019"
    },
    {
        image: "media/images/26.jpg",
        answers: ["Kenzo", "Chanel", "Dries Van Noten", "Gucci"],
        correct: 2,
        description: "Dries Van Noten - Fall 2020"
    },
    {
        image: "media/images/27.jpg",
        answers: ["Lanvin", "Burberry", "Louis Vuitton", "Kenzo"],
        correct: 3,
        description: "Kenzo by Nigo - Fall 2022"
    },
    {
        image: "media/images/28.jpg",
        answers: ["TAKAHIROMIYASHITA The Soloist", "Dior Homme", "Junya Watanabe", "Dries Van Noten"],
        correct: 0,
        description: "TAKAHIROMIYASHITA The Soloist - Fall 2023"
    },
    {
        image: "media/images/29.jpg",
        answers: ["Alyx", "Helmut Lang", "Mowalola", "Diesel"],
        correct: 1,
        description: "Helmut Lang - Spring 2018"
    },
    {
        image: "media/images/30.jpg",
        answers: ["Dior Homme", "Rick Owens", "Alyx", "Balenciaga"],
        correct: 2,
        description: "Alyx - Spring 2022"
    },
    {
        image: "media/images/31.jpg",
        answers: ["Kenzo", "Hermès", "Louis Vuitton", "Loewe"],
        correct: 3,
        description: "Loewe - Spring 2022"
    },
    {
        image: "media/images/32.jpg",
        answers: ["Loewe", "Kenzo", "Casablanca", "Chanel"],
        correct: 0,
        description: "Loewe - Spring 2022"
    },
    {
        image: "media/images/33.jpg",
        answers: ["Helmut Lang", "Mowalola", "Vetements", "Walter Van Beirendock"],
        correct: 1,
        description: "Mowalola - Fall 2023"
    },
    {
        image: "media/images/34.jpg",
        answers: ["Alyx", "Enfants Riches Déprimés", "Kiko Kostadinov", "Comme des garçons"],
        correct: 2,
        description: "Kiko Kostadinov - Spring 2020"
    },
    {
        image: "media/images/35.jpg",
        answers: ["Vaquera", "Diesel", "Balenciaga", "032c"],
        correct: 3,
        description: "032c - Fall 2024"
    },
    {
        image: "media/images/36.jpg",
        answers: ["Dior Homme", "Givenchy", "Helmut Lang", "Dries Van Noten"],
        correct: 0,
        description: "Dior Homme - Pre-Fall 2019"
    },
    {
        image: "media/images/37.jpg",
        answers: ["Vaquera", "Diesel", "Balenciaga", "Miu Miu"],
        correct: 1,
        description: "Diesel - Fall 2022"
    },
    {
        image: "media/images/38.jpg",
        answers: ["Off-White", "Vetements", "Vaquera", "Helmut Lang"],
        correct: 2,
        description: "Vaquera - Spring 2019"
    },
    {
        image: "media/images/39.jpg",
        answers: ["Yohji Yamamoto", "Comme des garçons", "Rick Owens", "Marc Jacobs"],
        correct: 3,
        description: "Marc Jacobs - Spring 2023"
    },
    {
        image: "media/images/40.jpeg",
        answers: ["Gucci", "Acne Studios", "Chanel", "Marc Jacobs"],
        correct: 0,
        description: "Gucci - Autumn/Fall 2018"
    },
    {
        image: "media/images/41.jpg",
        answers: ["Louis Vuitton", "Casablanca", "Gucci", "Kenzo"],
        correct: 1,
        description: "Casablanca - Fall 2023"
    },
    {
        image: "media/images/42.jpg",
        answers: ["Mowalola", "Rick Owens", "Balenciaga", "Vaquera"],
        correct: 2,
        description: "Balenciaga - Spring 2023"
    },
    {
        image: "media/images/43.jpg",
        answers: ["Maison Margiela", "Helmut Lang", "Alyx", "Rick Owens"],
        correct: 3,
        description: "Rick Owens - Fall 2017"
    },
    {
        image: "media/images/44.jpg",
        answers: ["Maison Margiela", "Gucci", "Loewe", "Chanel"],
        correct: 0,
        description: "Maison Margiela - Spring 2014 Couture"
    },
    {
        image: "media/images/45.jpg",
        answers: ["Diesel", "Acne Studios", "Givenchy", "Balenciaga"],
        correct: 1,
        description: "Acne Studios - Spring 2024"
    },
    {
        image: "media/images/46.jpg",
        answers: ["Hermès", "Kenzo", "Gucci", "Issey Miyake"],
        correct: 2,
        description: "Gucci - Spring/Summer 2023"
    },
    {
        image: "media/images/47.jpg",
        answers: ["Burberry", "Acne Studios", "Junya Watanabe", "Off-White"],
        correct: 3,
        description: "Off-White - Fall 2019"
    },
    {
        image: "media/images/48.jpg",
        answers: ["Charles Jeffrey Loverboy", "Vivienne Westwood", "Maison Margiela", "Jacquemus"],
        correct: 0,
        description: "Charles Jeffrey Loverboy - Spring 2025"
    },
    {
        image: "media/images/49.jpg",
        answers: ["Yohji Yamamoto", "Alexander McQueen", "Saint Laurent", "Raf Simons"],
        correct: 1,
        description: "Alexander McQueen - Fall 2014"
    },
    {
        image: "media/images/50.jpg",
        answers: ["Kenzo", "Jacquemus", "Chanel", "Casablanca"],
        correct: 2,
        description: "Chanel - Spring 2017"
    }

];

let currentQuestion = 0;

document.addEventListener("DOMContentLoaded", () => {
    shuffleArray(quizData);
    loadQuestion();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    const imgElement = document.getElementById("quiz-image");
    const answerButtons = document.getElementsByClassName("answer-btn");

    imgElement.src = question.image;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = question.answers[i];
        answerButtons[i].style.backgroundColor = ""; // Reset button background colors
        answerButtons[i].style.color = "black"; // Ensure text color is black
        answerButtons[i].style.borderColor = "black"; // Ensure border color is black
        answerButtons[i].disabled = false; // Enable buttons
    }

    document.getElementById("result-container").textContent = "";
    document.getElementById("description").textContent = ""; // Clear description
}

function checkAnswer(selected) {
    const question = quizData[currentQuestion];
    const resultContainer = document.getElementById("result-container");
    const answerButtons = document.getElementsByClassName("answer-btn");

    for (let i = 0; i < answerButtons.length; i++) {
        if (i === question.correct) {
            answerButtons[i].style.backgroundColor = "#7bff1a"; // Brighter green for correct answer
        } else {
            answerButtons[i].style.backgroundColor = "red"; // Incorrect answer
        }
        answerButtons[i].style.color = "black"; // Ensure text color remains black
        answerButtons[i].style.borderColor = "black"; // Ensure border color remains black
        answerButtons[i].disabled = true; // Disable buttons after an answer is selected
    }

    if (selected === question.correct) {
        resultContainer.textContent = "Good answer, keep going :)";
        resultContainer.style.color = "#00cf22";
    } else {
        resultContainer.textContent = "Wrong answer, try again :(";
        resultContainer.style.color = "red";
    }

    // Display the description
    document.getElementById("description").textContent = question.description;

    setTimeout(() => {
        currentQuestion = (currentQuestion + 1) % quizData.length;
        loadQuestion();
    }, 2000);
}
