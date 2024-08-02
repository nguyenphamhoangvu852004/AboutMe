var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    const socialMediaLinks = [
        { href: "https://www.facebook.com/profile.php?id=61556666886780", iconClass: "bx bxl-facebook", delay: 1 },
        { href: "https://www.youtube.com/channel/UC3mgi8-1r5pMCBPiY_Xsq4A", iconClass: "bx bxl-youtube", delay: 2 },
        { href: "https://www.tiktok.com/", iconClass: "bx bxl-tiktok", delay: 3 },
        { href: "https://github.com/nguyenphamhoangvu852004", iconClass: "bx bxl-github", delay: 4 }
    ];

    const socialMediaContainer = document.getElementById('social-media');

    socialMediaLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.style.setProperty('--i', link.delay);
        anchor.target = "_blank";  // Mở liên kết trong tab mới

        const icon = document.createElement('i');
        icon.className = link.iconClass;

        anchor.appendChild(icon);
        socialMediaContainer.appendChild(anchor);
    });
});
