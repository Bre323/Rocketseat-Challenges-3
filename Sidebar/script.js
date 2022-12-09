function changeSize() {
    const nav = document.querySelector('nav');
    const vetLogo = document.querySelector('.vet-logo');
    const userInfo = document.querySelector('.user-info');
    const navItems = document.querySelectorAll('.item-text');

    navItems.forEach((item) => {
        item.classList.toggle('add-element')
    })

    nav.classList.toggle('add-nav');
    vetLogo.classList.toggle('add-element');
    userInfo.classList.toggle('add-info');
}
