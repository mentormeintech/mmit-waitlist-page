function validateEmail() {
	let emailInput = document.getElementById("email");
	let invalidsmall = document.getElementsByClassName("invalid-email");
	let email = emailInput.value;
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		emailInput.style.outline = "1px solid red";
		invalidsmall[0].style.display = "block";
		invalidsmall[0].style.color = "red";
		invalidsmall[0].style.marginTop = "-1rem";
	}
}

function toggleElementVisibility(element) {
	var paragraph = element.querySelector("p"); // Get the first <p> tag inside the clicked element

	var image = element.querySelector("img"); // Get the first <img> tag inside the clicked element
	if (
		paragraph.style.display === "none" &&
		image.getAttribute("src") === "./assets/images/faq_icon.svg"
	) {
		paragraph.style.display = "block"; // Show the paragraph
		image.setAttribute("src", "./assets/images/faq-icon2.svg"); // Toggle the image source to image2.jpg
	} else {
		image.setAttribute("src", "./assets/images/faq_icon.svg"); // Toggle the image source back to image1.jpg
		paragraph.style.display = "none"; // Hide the paragraph
	}

	arrangeMargin(element);
}

function arrangeMargin(element) {
	console.log("hello");	
	var ques1 = element.querySelector("#ques1");
	var ans1 = element.querySelector("#ans1");

	if (ques1.style.marginLeft === "-1.5rem") {
		ques1.style.marginLeft = "-0.5rem";
		ans1.style.marginLeft = "-0.3rem";
	} else {
		ques1.style.marginLeft = "-1.5rem";
	}
}
