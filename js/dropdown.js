const dropdownButton = document.querySelector('.course-header__dropdown-btn');

function openDropdown(e) {
    if (dropdownButton.classList.contains('open')) return;

    dropdownButton.classList.add('open');
    dropdownButton.removeEventListener('click', openDropdown);
    window.addEventListener('keydown', closeDropdownOnEsc);
    setTimeout(() => {
        document.addEventListener('click', closeDropdown);
    }, 0);
}

function closeDropdown(e) {
    if (!dropdownButton.classList.contains('open')) return;
    if (e.target.closest('.dropdown')) return;

    dropdownButton.classList.remove('open');
    document.removeEventListener('click', closeDropdown);
    window.removeEventListener('keydown', closeDropdownOnEsc);
    setTimeout(() => {
        dropdownButton.addEventListener('click', openDropdown);
    }, 0);
}

function closeDropdownOnEsc(e) {
    if (e.code !== 'Escape') return;
    closeDropdown(e);
}

dropdownButton.addEventListener('click', openDropdown);
