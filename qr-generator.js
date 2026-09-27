const qrText = document.getElementById("qrText");
const generateQR = document.getElementById("generateQR");
const qrResult = document.getElementById("qrResult");


generateQR.addEventListener("click", function () {

    const text = qrText.value.trim();


    if (text === "") {

        qrResult.innerHTML = `
            <p>Please enter some text or a website URL.</p>
        `;

        return;
    }


    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + encodeURIComponent(text);


    qrResult.innerHTML = `

        <img
            src="${qrURL}"
            alt="Generated QR Code"
        >

        <br>

        <a
            href="${qrURL}"
            download="quicktoolbox-qr-code.png"
            class="download-button"
        >
            Download QR Code
        </a>

    `;

});