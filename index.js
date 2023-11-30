function toggleMobileMenu(menu)
{
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : 'auto';
}
