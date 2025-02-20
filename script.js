let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

function flipPage() {
    if (currentPage < totalPages) {
        pages[currentPage].style.zIndex = totalPages - currentPage;
        pages[currentPage].classList.add("flipped");
        currentPage++;
    } else {
        pages.forEach((page, index) => {
            page.style.zIndex = totalPages - index;
            page.classList.remove("flipped");
        });
        currentPage = 0;
    }
}

document.getElementById("flipbook").addEventListener("click", flipPage);
