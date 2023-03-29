//Variables
const dogBar = document.getElementById("dog-bar")
const dogInfo = document.getElementById("dog-info")
const filterButton = document.getElementById("good-dog-filter")

//Fetch
fetch("http://localhost:3000/pups") 
.then(function (res) {
    return res.json();
})
.then(function(data) {
    renderDogs(data);
})

function renderDogs(data) {

const image = document.createElement("img")
const dogName = document.createElement("h2")
const button = document.createElement("button")

dogInfo.append(image, dogName)

    for (const dog of data) {
        const name = document.createElement("span")
        name.textContent = dog.name
        dogBar.append(name)

        name.addEventListener("click", function() {
            console.log("this has been clicked!")

            image.src = dog.image
            dogName.textContent = dog.name
            dogInfo.append(button)

            if (dog.isGoodDog === true) {
                button.textContent = "Good Dog!"
            } else {
                button.textContent = "Bad Dog!"
            }
        })
    }
}

filterButton.addEventListener("click", function() {
    console.log("filter button has been clicked")

    if (filterButton.textContent === "Filter good dogs: OFF") {
        filterButton.textContent = "Filter good dogs: ON"
        
    } else {
        filterButton.textContent = "Filter good dogs: OFF"
        
    }
})

