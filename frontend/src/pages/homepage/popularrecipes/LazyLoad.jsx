import { useEffect, useRef, useState } from "react";

function LazyLoad({ children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            }
        },
        {
            rootMargin: "200px",
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
        {visible && children}
        </div>
    );
}

export default LazyLoad;