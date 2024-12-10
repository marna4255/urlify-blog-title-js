// Function to convert a blog post title into a URL-friendly version
function urlifyTitle(blogPostTitle) {
  let lowerCase = blogPostTitle.toLowerCase(); // Convert the title to lowercase
  let cleanTitle = lowerCase.replace(/[^a-z0-9\s]/g, ""); //Remove all non-alphanumeric characters (except spaces)
  let hypgenatedTitle = cleanTitle.split(" ").join("-"); //Replace spaces with hyphens
  return hypgenatedTitle; //Return the final URL-friendly title
}

// Add an event listener to the "Convert" button
document.getElementById("convertButton").addEventListener("click", function () {
  const inputTitle = document.getElementById("blogTitle").value; //Get the value entered by the user in the input field
  const output = urlifyTitle(inputTitle); // Pass the input value to the `urlifyTitle` function and get the result
  document.getElementById("output").textContent = `URLified: ${output}`; // Display the URL-friendly title in the output paragraph
});
