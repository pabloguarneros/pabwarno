import { createRoot } from 'react-dom/client';
import { collection, display, gallery, image } from "./gallery";
import React, { useRef, useState } from "react";
import { Vec2 } from "./usePhysicsImages";

// AN IMAGE CLASS

let xBounds = window.screenX;
let yBounds = window.screenY;

window.addEventListener("resize", () => {
    xBounds = window.screenX;
    yBounds = window.screenY;
})

const getImagesFromGallery = (c: collection[]): image[]=> {
    return c.reduce((acc: image[], _c: collection) => {
        acc.push(..._c.displays.map((_d: display) => { return _d.images }).flat(1));
        return acc
    }, [])
}


const Nav= (): React.ReactElement => (
    <div id="nav-bar">
        <h1>pabwarno</h1>
    </div>
);

const ImageMenu = ({
    hasDescription,
    hasAudio,
    onDescriptionClick,
    onAudioClick,
}: {
    hasDescription: boolean;
    hasAudio: boolean;
    onDescriptionClick: () => void;
    onAudioClick: () => void;
}) => (
    <div className="image-menu">
        {hasDescription && (
            <button className="menu-btn" onClick={onDescriptionClick}>
                Description
            </button>
        )}
        {hasAudio && (
            <button className="menu-btn" onClick={onAudioClick}>
                Play Audio
            </button>
        )}
    </div>
);

const Image = ({ img, pos }: { img: image, pos: Vec2 }): React.ReactElement => {
    const imgRef = useRef<HTMLDivElement>(null);
    const [loadHighRes, setLoadHighRes] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [augmented, setAugmented] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [showDescription, setShowDescription] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    // Drag logic
    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
    };

    const handleMouseUp = () => {
        setDragging(false);
        document.body.style.userSelect = "";
    };

    React.useEffect(() => {
        if (dragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
        // eslint-disable-next-line
    }, [dragging, offset]);

    // Only move the grabbed image with the mouse
    const handleMouseMove = (e: MouseEvent) => {
        if (dragging && imgRef.current && !augmented) {
            const leftScroll: number = document.getElementById("daffodil")?.scrollLeft || 0;
            const bcr = imgRef.current.getBoundingClientRect();
            imgRef.current.style.left = `${e.clientX - bcr.width / 2 + leftScroll}px`;
            imgRef.current.style.top = `${e.clientY - bcr.height / 2}px`;
        }
    };

    const handleAudioClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleDescriptionClick = () => {
        setShowDescription((prev) => !prev);
    };

    const handleDoubleClick = () => {
        setAugmented((prev) => !prev);
        setLoadHighRes(true);
    };

    return (
        <div
            className={`image${dragging ? " dragging" : ""}${augmented ? " augmented" : ""}`}
            ref={imgRef}
            style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                cursor: dragging ? "grabbing" : "grab",
                zIndex: dragging ? 1000 : undefined,
                transition: dragging ? "none" : "box-shadow 0.2s, left 0.7s cubic-bezier(.5,1.5,.5,1), top 0.7s cubic-bezier(.5,1.5,.5,1)",
            }}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
        >
            {loadHighRes ? (
                <img src={`media/photos/${img.src}`} draggable={false} />
            ) : (
                <img src={`media/photos_low_res/${img.src}`} draggable={false} />
            )}
            {img.audio && (
                <audio ref={audioRef} src={`media/sounds/${img.audio}`} preload="auto" />
            )}
            <div
                className={`image-menu-container${menuVisible ? " active" : ""}`}
            >
                <ImageMenu
                    hasDescription={!!img.description}
                    hasAudio={!!img.audio}
                    onDescriptionClick={handleDescriptionClick}
                    onAudioClick={handleAudioClick}
                />
            </div>
            {showDescription && img.description && (
                <div className="image-description">
                    {img.description}
                </div>
            )}
        </div>
    );
};

const InMemory: {[id: string]: typeof Image} = {
    
}

// get the size of the window window.screenX, window.screenY
// place the left_size of an image between the window boundaries, starting from width/2, height/2

const toggle = (classToToggle: string, element: HTMLElement, ) => {
    if (element.classList.contains(classToToggle)) {
        element.classList.remove(classToToggle);
    } else {
        element.classList.add(classToToggle);
    }
}

const Gallery = (): React.ReactElement => {

    const imgWidth = 250, imgHeight = 250, xPad = 5, yPad = 5;
    const maxHeight = window?.innerHeight - yPad | 1000;
    let x = xPad * 4; // 20
    let y = yPad * 4; // 20
    let elements: React.ReactElement[] = [];
    gallery.forEach((col: collection, cIdx: number) => {
        let colStartX = x;
        let displayXArrow = 0;
        y = yPad;
        col.displays.forEach((disp, dIdx) => {
            if (y * 2 + imgHeight > maxHeight) {
                x += displayXArrow;
                displayXArrow = 0;
                y = yPad;
            }
            let localX = 0;
            disp.images.forEach((img, iIdx) => {
                elements.push(
                    <Image
                        img={img}
                        key={`c${cIdx}-d${dIdx}-i${iIdx}`}
                        pos={{ x: x + localX, y }}
                    />
                );
                localX += imgWidth + 10;
            });
            // Add space between displays
            y += imgHeight + yPad;
            displayXArrow = Math.max(localX, displayXArrow);
        });
        x += displayXArrow + xPad * 4;
        y = yPad * 4; // 20
    });
    return <>{elements}</>;
};

const ALifeTime = (): React.ReactElement => (
    <>
        <Nav />
        <Gallery />
    </>
)


const germinate = () => {
    const daffodil = document.getElementById('daffodil');
    if (daffodil) {
        const meadow = createRoot(daffodil)
        meadow.render(<ALifeTime />);
    };
}


document.addEventListener("DOMContentLoaded", germinate);