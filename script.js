function showInfo() {
    const infoButton = document.querySelector('.infoButton');
    
    infoButton.addEventListener('click', () => {
        const infoBlock = document.getElementById('info')
        
        
        if (infoBlock.className == 'info hidden') {
            console.log('pisya');
                infoBlock.className = 'info visible;';
            } else {
                console.log(infoBlock.className);
                infoBlock.className = 'info hidden;'
            }
    })
}
showInfo();