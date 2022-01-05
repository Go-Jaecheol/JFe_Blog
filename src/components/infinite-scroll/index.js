import { useState, useEffect, useCallback } from 'react';

const defaultOptions = {
    root: null,
    rootMargin: '1px',
    threshold: '0.1'
}

export default function useInfiniteScroll(onIntersect, option = defaultOptions) {
    const [ref, setRef] = useState(null);

    const intersectionCallback = useCallback((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                onIntersect(entry, observer);
        });
    }, [onIntersect]);
    
    useEffect(() => {
        let observer;
        if(ref) {
            observer = new IntersectionObserver(intersectionCallback, option);
            observer.observe(ref);
        }
        return () => observer?.disconnect();
    }, [ref, option, intersectionCallback]);

    return [ref, setRef];
}