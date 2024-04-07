document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('.facebook-posts iframe');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const postsPerPage = 2;
    let currentPage = 1;

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;

        iframes.forEach((iframe, index) => {
            if (index >= startIndex && index < endIndex) {
                iframe.style.display = 'block';
            } else {
                iframe.style.display = 'none';
            }
        });
    }

    function updatePaginationButtons() {
        if (currentPage === 1) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (currentPage === Math.ceil(iframes.length / postsPerPage)) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    showPage(currentPage);
    updatePaginationButtons();

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < Math.ceil(iframes.length / postsPerPage)) {
            currentPage++;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });
});
