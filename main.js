// Wenn auf den Button geklickt wird, ändert sich der Text
  document.querySelector('.follow-btn').addEventListener('click', function () {
    this.textContent = this.textContent === 'Follow' ? 'Following' : 'Follow';
  });

  document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.querySelector(".profile-img");
  
    // Optional: Start animation on hover
    profileImg.addEventListener("mouseenter", () => {
      profileImg.classList.add("spin");
    });
  
    profileImg.addEventListener("mouseleave", () => {
      profileImg.classList.remove("spin");
    });
  
    // Always spin on load:
    profileImg.classList.add("spin");
  });
  