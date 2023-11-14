const footer = document.createElement('footer')
const content = `
    <p class="p_footer">Page logo by <span>Freepik</span></p>
    <p class="p_footer developer">Developed by <a class="github_link" href="https://github.com/Burin2301" target="_blank">Burin2301</a> </p>
    <p class="p_footer">Menu icon by <span>Md Tanvirul Haque</span></p>
`;

footer.innerHTML = content;

export { footer as footer_main }