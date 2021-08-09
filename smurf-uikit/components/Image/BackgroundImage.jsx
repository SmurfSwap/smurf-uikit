import React, { useEffect, useRef } from "react";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
const BackgroundImage = ({ src, ...otherProps }) => {
    const imgRef = useRef(null);
    useEffect(() => {
        const img = imgRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const { isIntersecting } = entry;
                if (isIntersecting) {
                    img.style.backgroundImage = `url("${src}")`;
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return () => {
            observer.disconnect();
        };
    }, [src]);
    return <Wrapper ref={imgRef} {...otherProps}/>;
};
export default BackgroundImage;
