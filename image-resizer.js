const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

const imageWidth = document.getElementById("imageWidth");
const imageHeight = document.getElementById("imageHeight");

const resizeButton = document.getElementById("resizeButton");
const resizeResult = document.getElementById("resizeResult");


let selectedImage = null;


// Image select hone par
imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        imagePreview.innerHTML = `
            <img src="${event.target.result}" alt="Selected Image">
        `;

        selectedImage = new Image();

        selectedImage.onload = function () {

            imageWidth.value = selectedImage.width;
            imageHeight.value = selectedImage.height;

        };

        selectedImage.src = event.target.result;
    };

    reader.readAsDataURL(file);

});


// Resize button
resizeButton.addEventListener("click", function () {

    if (!selectedImage) {

        resizeResult.innerHTML =
            "Please choose an image first.";

        return;
    }


    const width = parseInt(imageWidth.value);
    const height = parseInt(imageHeight.value);


    if (!width || !height || width <= 0 || height <= 0) {

        resizeResult.innerHTML =
            "Please enter valid width and height.";

        return;
    }


    const canvas = document.createElement("canvas");

    const context = canvas.getContext("2d");


    canvas.width = width;
    canvas.height = height;


    context.drawImage(
        selectedImage,
        0,
        0,
        width,
        height
    );


    canvas.toBlob(function (blob) {

        const url = URL.createObjectURL(blob);


        resizeResult.innerHTML = `
            <p>Image resized successfully!</p>

            <a 
                href="${url}" 
                download="resized-image.png"
                class="download-button"
            >
                Download Resized Image
            </a>
        `;

    }, "image/png");

});