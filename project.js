document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");

    // Function to open the sidebar
    function openSidebar() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }

    // Event Listeners
    menuBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
});
