document.getElementById('themeToggle').addEventListener('change', function () {
    
    // Changetheme for a lot of elements
    document.body.classList.toggle('light-theme');
    document.querySelector('.main-header').classList.toggle('light-header');
    document.querySelector('.main-footer').classList.toggle('light-footer');
    document.querySelector('.f1logo').classList.toggle('Lf1logo');
    document.querySelector('.gamebout').classList.toggle('Lgamebout');
    document.querySelector('.minigamebutton').classList.toggle('Lminigamebutton');
    document.querySelector('.games').classList.toggle('Lgames');
    document.querySelector('.team-section').classList.toggle('Lteam-section');
    document.querySelector('.team-grid').classList.toggle('Lteam-grid');

    // Changetheme for Teammembers
    document.querySelectorAll('.team-member').forEach(member => {
        member.classList.toggle('Lteam-member');
    });

    document.querySelectorAll('.linetitle').forEach(member => {
        member.classList.toggle('Llinetitle');
    });

    document.querySelectorAll('.team-name').forEach(name => {
        name.classList.toggle('Lteam-name');
    });

    document.querySelectorAll('.team-bio').forEach(bio => {
        bio.classList.toggle('Lteam-bio');
    });

    document.querySelectorAll('.team-image').forEach(image => {
        image.classList.toggle('Lteam-image');
    });

    document.querySelectorAll('.teamlogo').forEach(logo => {
        logo.classList.toggle('Lteamlogo');
    });

    // Image change area
    const img = document.querySelector('.gameboutimage');
    if (img) {  
        const currentImage = img.src.split('/').pop(); 
        
        img.src = currentImage === 'gameboutimage.png' ? 'Lgameboutimage.png' : 'gameboutimage.png';
    }
});
