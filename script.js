document.addEventListener('DOMContentLoaded', function() {
    const totalItems = 100;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function createPagination(totalPages) {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i;
            a.addEventListener('click', function(event) {
                event.preventDefault();
                loadPage(i);
            });
            li.appendChild(a);
            pagination.appendChild(li);
        }
    }

    function loadPage(pageNumber) {
        const content = document.getElementById('content');
        content.innerHTML = `Content for page ${pageNumber}`;

        const links = document.querySelectorAll('.pagination a');
        links.forEach(link => link.classList.remove('active'));
        links[pageNumber - 1].classList.add('active');
    }

    createPagination(totalPages);
    loadPage(1);
});
