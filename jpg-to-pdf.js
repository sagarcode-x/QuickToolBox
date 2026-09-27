const jpgInput = document.getElementById("jpgInput");
const jpgPreview = document.getElementById("jpgPreview");

const convertPDF = document.getElementById("convertPDF");
const pdfResult = document.getElementById("pdfResult");


let selectedImage = null;


// Image select hone par
jpgInput.addEventListener("change", function () {

    const file = jpgInput.files[0];


    if (!file) {
        return;
    }


    const reader = new FileReader();


    reader.onload = function (event) {

        selectedImage = event.target.result;


        jpgPreview.innerHTML = `
            <img
                src="${selectedImage}"
                alt="Selected JPG Image"
            >
        `;

    };


    reader.readAsDataURL(file);

});


// Convert JPG to PDF
convertPDF.addEventListener("click", function () {

    if (!selectedImage) {

        pdfResult.innerHTML = `
            <p>Please choose a JPG image first.</p>
        `;

        return;
    }


    const { jsPDF } = window.jspdf;


    const image = new Image();


    image.onload = function () {

        const pdf = new jsPDF({
            orientation: image.width > image.height ? "landscape" : "portrait",
            unit: "px",
            format: [image.width, image.height]
        });


        pdf.addImage(
            selectedImage,
            "JPEG",
            0,
            0,
            image.width,
            image.height
        );


        pdf.save("quicktoolbox-image.pdf");


        pdfResult.innerHTML = `
            <p>PDF created successfully!</p>
        `;

    };


    image.src = selectedImage;

});