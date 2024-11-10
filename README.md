# interactive-speaker-cards
An interactive, responsive carousel displaying speaker cards with details like name, title, company, and image. Users can navigate through the cards and click to view detailed information in a modal. Built with HTML, CSS, and JavaScript, offering a seamless experience for showcasing speakers.

# Featured Speakers Carousel

This project is a simple HTML, CSS, and JavaScript implementation of a carousel showcasing featured speakers for an event. It displays a selection of speakers with their names, titles, and companies. Users can click on a speaker to view more details in a modal window.

## Features
- **Speaker Carousel**: A carousel displaying multiple speaker cards that users can scroll through.
- **Modal Popup**: When a speaker card is clicked, a modal popup appears with detailed information about the speaker.
- **Responsive Design**: The layout adjusts for different screen sizes, making it mobile-friendly.
- **CSS Transitions**: Smooth transitions for carousel movement and modal display.
- **Dynamic Content**: The modal content updates dynamically based on the selected speaker.

## Demo

You can check out the live demo of the project. (https://github.com/SiddheshGajare15/interactive-speaker-cards/blob/main/index.html).



How It Works
Carousel
The carousel displays a list of speaker cards. Each card contains:

Speaker's photo
Name
Title
Company
When a user clicks on a speaker's card, a modal is triggered displaying additional information about the speaker.

Modal
The modal window contains the following:

Speaker's image
Name
Title
Company
Description
JavaScript Functions
showSpeakerInfo(name, title, company, image): This function dynamically updates the modal content with the information passed to it.
closeModal(): This function closes the modal when the close button is clicked.
moveToNextCard(): This function handles the carousel navigation to the next speaker card.
