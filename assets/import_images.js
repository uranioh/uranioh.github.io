const fs = require('fs');
const path = require('path');

// Directory containing your images
const imageDirectory = 'photos/concert';

// Get a list of image files
const imageFiles = fs.readdirSync(imageDirectory)
  .filter(file => file.endsWith('.jpg'));

// Generate HTML for each image
const imageElements = imageFiles.map((file, index) => `
  <div class="w-full md:w-1/2 p-1">
    <div class="overflow-hidden h-full w-full">
      <a href="${path.join("assets/", imageDirectory, file)}" data-fancybox="gallery">
        <img alt="Image ${index + 1}" class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110" src="${path.join("assets/", imageDirectory, file)}" />
      </a>
    </div>
  </div>
`).join('\n');

// Output the HTML code
console.log(imageElements);
