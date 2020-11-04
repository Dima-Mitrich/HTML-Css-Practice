const ShowModal = () => {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
};

const CloseModal = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.height = '';
    body.style.overflowY = '';
};