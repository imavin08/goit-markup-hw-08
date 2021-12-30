(() => {
  const refs = {
    openMobBtn: document.querySelector("[data-mob-open]"),
    closeMobBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob-modal]"),
  };

  refs.openMobBtn.addEventListener("click", toggleModal);
  refs.closeMobBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
