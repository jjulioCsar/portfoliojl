import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: observer.unobserve(entry.target) to animate only once
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // 15% of item must be visible to trigger
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elementsToReveal = document.querySelectorAll('.reveal');

        elementsToReveal.forEach(el => observer.observe(el));

        return () => {
            elementsToReveal.forEach(el => observer.unobserve(el));
        };
    }, []);
};

export default useScrollReveal;
