// this is for showing/hiding the image if clicked!!


function show () {
    const image = document.getElementById("Project1");
    if (image.style.display === "none" || image.style.display === "") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
};

//