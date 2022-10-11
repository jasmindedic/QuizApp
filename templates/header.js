// Get needed elements
let header = document.querySelector(".header");

// Function to generate header
function generateHeader() {
  header.innerHTML += createHeaderContent();
}

// Function to create header content
function createHeaderContent() {
  return /* html */`
         <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">QuizApp</h5>
          <span class="text-muted">Have fun and enjoy the game!</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    `;
}