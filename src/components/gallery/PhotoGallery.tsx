import React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

const PhotoGallery = ({ slides }: any) => {
    const [index, setIndex] = React.useState(-1);

    return (
        <section className="container mx-auto mt-[100px] lg:mt-[48px] px-8">
            <PhotoAlbum
                columns={(containerWidth) => {
                    if (containerWidth < 500) return 1;
                    if (containerWidth < 800) return 2;
                    return 3;
                }}
                // columns={4}
                layout="rows"
                photos={slides}
                targetRowHeight={250}
                caption={Captions}
                onClick={({ index }) => setIndex(index)}
                className="rounded-xl  "
                style={{ borderRadius: 30 }}
            />

            {/* react-spring-lightbox */}
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
            />
        </section>
    );
};

export default PhotoGallery;
