//Page1
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function showWeight() {
    // Select the arrow element
    const arrow = document.getElementById("arrow");

    // Show the arrow beneath the crucible
    arrow.style.display = "block";

    // Select the crucible and weighing machine elements
    const crucible = document.getElementById("crucible");
    const weighingMachine = document.getElementById("weighingMachine");

    // Add event listener to simulate button click when crucible is clicked
    crucible.addEventListener("click", function() {
        // Hide the arrow
        arrow.style.display = "none";

        // Move the crucible from right to left
        crucible.style.transition = "right 2s ease-in-out";
        crucible.style.right = "calc(100% - 175px)"; // Adjust as necessary

        // Once the crucible reaches the weighing machine, replace the weighing machine image
        setTimeout(function() {
            // Create a new image element
            const newImage = new Image();

            // When the new image is loaded
            newImage.onload = function() {
                // Set the width and height of the new image to match the old image
                newImage.width = weighingMachine.querySelector('img').width;
                newImage.height = weighingMachine.querySelector('img').height;

                // Replace the old image with the new image
                weighingMachine.innerHTML = '';
                weighingMachine.appendChild(newImage);

                // Add text to the right side of the screen
                const newText = document.createElement("div");
                newText.textContent = "Weight of empty petridish = 16.415g";
                newText.style.position = "absolute";
                newText.style.top = "150px"; // Adjust as necessary
                newText.style.right = "750px"; // Adjust as necessary
                newText.classList.add("section-text"); // Add a class to the text element
                document.body.appendChild(newText);

                // document.getElementById("note1").style.visibility = "visible";
                // document.getElementById("ok").onclick = function() {
                //     setTimeout(function() {
                //         document.getElementById('nextButton').style.visibility = "visible";
                //     }, 1000);
                //     document.getElementById("note1").style.display = "none";
                // }

                // Show the "Next" button after a delay of 2.5 seconds
                setTimeout(function() {
                    const nextButtonSection0 = document.getElementById('next-button-section0');
                    nextButtonSection0.style.display = 'block';
                }, 2500); // Delay of 2.5 seconds
            };

            // Set the source of the new image
            newImage.src = "images/wm2.png"; // Path to the new image
        }, 2000); // Adjust as necessary
    });

    // Remove the text when navigating away from the section
    const nextButton = document.getElementById('next-button-section0');
    nextButton.addEventListener("click", function() {
        const sectionText = document.querySelector(".section-text");
        if (sectionText) {
            sectionText.remove();
        }
    });
});


//Page 1.5

// document.addEventListener("DOMContentLoaded", function() {
//     // Select the arrow element
//     const arrow100 = document.getElementById("arrow100");

//     // Show the arrow beneath the crucible
//     arrow100.style.display = "block";

//     // Select the crucible and weighing machine elements
//     const crucible100 = document.getElementById("crucible100");
//     const weighingMachine100 = document.getElementById("weighingMachine100");

//     // Add event listener to simulate button click when crucible is clicked
//     crucible100.addEventListener("click", function() {
//         // Hide the arrow
//         arrow100.style.display = "none";

//         // Move the crucible from right to left
//         crucible100.style.transition = "right 2s ease-in-out";
//         crucible100.style.right = "calc(100% - 175px)"; // Adjust as necessary

//         // Once the crucible reaches the weighing machine, replace the weighing machine image
//         setTimeout(function() {
//             // Create a new image element
//             const newImage100 = new Image();

//             // When the new image is loaded
//             newImage100.onload = function() {
//                 // Set the width and height of the new image to match the old image
//                 newImage100.width = weighingMachine.querySelector('img').width;
//                 newImage100.height = weighingMachine.querySelector('img').height;

//                 // Replace the old image with the new image
//                 weighingMachine100.innerHTML = '';
//                 weighingMachine100.appendChild(newImage);

//                 // Add text to the right side of the screen
//                 const newText100 = document.createElement("div");
//                 newText100.textContent = "Weight of empty petridish = 17.415g";
//                 newText100.style.position = "absolute";
//                 newText100.style.top = "150px"; // Adjust as necessary
//                 newText100.style.right = "750px"; // Adjust as necessary
//                 newText100.classList.add("section-text"); // Add a class to the text element
//                 document.body.appendChild(newText100);

//                 // Show the "Next" button after a delay of 2.5 seconds
//                 setTimeout(function() {
//                     const nextButtonSection100 = document.getElementById('next-button-section100');
//                     nextButtonSection100.style.display = 'block';
//                 }, 2500); // Delay of 2.5 seconds
//             };

//             // Set the source of the new image
//             newImage100.src = "images/wm2.png"; // Path to the new image
//         }, 2000); // Adjust as necessary
//     });

//     // Remove the text when navigating away from the section
//     const nextButton = document.getElementById('next-button-section100');
//     nextButton.addEventListener("click", function() {
//         const sectionText100 = document.querySelector(".section-text");
//         if (sectionText100) {
//             sectionText100.remove();
//         }
//     });
// });

 
//Section1.5

function handleHandClick() {
    var hand = document.getElementById("hand");
    var blinkingArrow = document.querySelector(".blinking-arrow");
    hand.style.left = "calc(30% + 200px)"; // Move hand towards the boat
    blinkingArrow.style.display = "none"; // Hide the blinking arrow
    hand.style.transform = "translateY(-50%)"; // Reset hand rotation
    setTimeout(function() {
        hand.style.transform = "translateY(-50%) rotate(45deg)"; // Tilt hand by 45 degrees clockwise
        setTimeout(function() {
            hand.style.transform = "translateY(-50%) rotate(0deg)"; // Rotate hand back to its original position
        }, 1000); // Wait for 1 second before rotating back
    }, 2000); // Wait for 2 seconds before tilting the hand

    
                // Show the "Next" button after a delay of 2.5 seconds
                setTimeout(function() {
                    const nextButtonSection0 = document.getElementById('next-button-section15');
                    nextButtonSection0.style.display = 'block';
                }, 4500); // Delay of 2.5 seconds
}





//Page 2
function startAnimation() {
    var blinkingArrow = document.querySelector(".blinking-arrow1");// Hide and remove blinking arrow
    blinkingArrow.style.opacity = "0";
    blinkingArrow.style.display = "none";
    // Start hand movement towards the furnace
    moveHand();
}

function moveHand() {
    var hand = document.getElementById("hand1");
    // Calculate initial position of hand
    var handPosition = hand.getBoundingClientRect();
    var initialTop = handPosition.top;
    var initialLeft = handPosition.left;
    var furnacePosition = document.getElementById("furnace").getBoundingClientRect();
    var furnaceTop = furnacePosition.top;
    // Calculate distance to move
    var distanceToMove = furnaceTop - initialTop;
    // Set animation properties for hand
    hand.style.transition = "top 2s ease-in-out";
    hand.style.position = "absolute";
    hand.style.top = furnaceTop + "px";

    setTimeout(function() {
        const nextButtonSection0 = document.getElementById('next-button-section1');
        nextButtonSection0.style.display = 'block';
    }, 4500); // Delay of 2.5 seconds
}

//Page3

function showWeightImage() {
    // Hide and remove blinking arrow
    var blinkingArrow = document.querySelector(".blinking-arrow");
    if (blinkingArrow) {
        blinkingArrow.style.visibility = "hidden";
    }

    // Show weighing machine with weight after a delay
    setTimeout(function () {
        var weighingMachine = document.getElementById("weighing-machine");
        if (weighingMachine) {
            weighingMachine.innerHTML = '<img src="images/machine_on.png" height="200px" margin-left="100px" alt="Weighing Machine with Weight">'; // Replace 'weighing_with_weight_image.jpg' with your weighing machine with weight image
        }
    }, 1000); // Show after 1 second

    // Show water beaker after a delay
    setTimeout(function () {
        var waterBeakerContainer = document.getElementById("water-beaker-container");
        if (waterBeakerContainer) {
            waterBeakerContainer.style.opacity = "1"; // Gradually appear
        }
    }, 6000); // Show after 5 seconds

    // Show arrow clockwise after a delay
    setTimeout(function () {
        var arrowClockwise = document.getElementById("arrow-clockwise");
        if (arrowClockwise) {
            arrowClockwise.style.opacity = "1"; // Gradually appear
        }
    }, 6000); // Show after 5 seconds
}

// function navigateToNextPage() {
//     // You can define the URLs of your pages here
//     const nextPageUrls = ["page2.html", "page3.html"]; // Add more URLs as needed

//     // Get the current URL
//     const currentUrl = window.location.href;

//     // Find the index of the current URL in the array
//     const currentIndex = nextPageUrls.indexOf(currentUrl);

//     // If the current URL is found in the array and there is a next page
//     if (currentIndex !== -1 && currentIndex < nextPageUrls.length - 1) {
//         // Navigate to the next page
//         const nextPageUrl = nextPageUrls[currentIndex + 1];
//         window.location.href = nextPageUrl;
//     } else {
//         // Optional: Handle if there is no next page or if the current URL is not found
//         console.log("No next page found or current URL not in the list.");
//     }

