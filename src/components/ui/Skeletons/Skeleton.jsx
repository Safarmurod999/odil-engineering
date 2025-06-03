const SkeletonCategory = () => {
    return (
        <>
            <div className="skeleton-category">
                <div className="skeleton-image"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-button"></div>
            </div>
            <div className="skeleton-category">
                <div className="skeleton-image"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-button"></div>
            </div>
            <div className="skeleton-category">
                <div className="skeleton-image"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-button"></div>
            </div>
        </>
    );
};
const SkeletonCard = () => {
    return (
        <>
            <div className="skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-button"></div>
                </div>
            </div>
            <div className="skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-button"></div>
                </div>
            </div>
            <div className="skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-button"></div>
                </div>
            </div>
        </>
    );
};

const SkeletonProduct = () => {
    return (
        <div className="skeleton-product">
            <div className="skeleton-gallery">
                <div className="skeleton-main-image"></div>
                <div className="skeleton-thumbnails">
                    <div className="skeleton-thumb"></div>
                    <div className="skeleton-thumb"></div>
                    <div className="skeleton-thumb"></div>
                </div>
            </div>

            <div className="skeleton-description">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
            </div>

            {/* Media */}
            <div className="skeleton-media">
                <div className="skeleton-media-title"></div>
                <div className="skeleton-media-img"></div>
            </div>
        </div>
    );
};
const SkeletonLogos = () => {
    return (
        <>
            <div className="skeleton-logo"></div>
            <div className="skeleton-logo"></div>
            <div className="skeleton-logo"></div>
            <div className="skeleton-logo"></div>
        </>
    );
};

const SkeletonCarousel = () => {
    return (
        <div className="skeleton-carousel">
            <div className="skeleton-slide"></div>
            <div className="skeleton-slide"></div>
            <div className="skeleton-slide"></div>
            <div className="skeleton-slide"></div>
        </div>
    );
};

const SkeletonTestimonials = () => {
    return (
        <div></div>
    )
}

export { SkeletonCategory, SkeletonCard, SkeletonProduct, SkeletonLogos, SkeletonCarousel };