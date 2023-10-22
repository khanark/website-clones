const sections = document.getElementsByTagName("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        root: null,
        rootMargin: "-50px",
        threshold: 0.5,
    }
);

[...sections].forEach((section) => {
    observer.observe(section);
});
