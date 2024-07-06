const LINK_CERTIFICATE = document.querySelector(".certificate-link-js");
const MODAL_CETIFICATE = document.querySelector(".modal");
const CLOSE_MODAL = document.querySelector(".modal-button-js");

const closeModal = (event) => {
  MODAL_CETIFICATE.classList.toggle("modal-close");
};

const certificateHandler = (event) => {
  event.preventDefault();
  MODAL_CETIFICATE.classList.toggle("modal-close");
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
};
LINK_CERTIFICATE.addEventListener("click", certificateHandler);
CLOSE_MODAL.addEventListener("click", closeModal);