import React, { useState } from 'react';

function Banner() {
    // State to manage banner visibility
    const [isVisible, setIsVisible] = useState(true);

    // Function to handle close button click
    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="bg-[#F7EFE8] py-4">
                <div className="relative bg-[#0064A0] text-white text-center py-3 px-4 rounded-3xl mx-4 md:mx-auto md:w-3/4">
                    {/* Banner Message */}
                    <p className="text-lg font-semibold">
                        Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. Let's go!
                    </p>

                    {/* Close Icon */}
                    <button
                        className="absolute top-2 right-2 text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#0064A0] transition"
                        onClick={handleClose}
                        aria-label="Close Banner"
                    >
                        ✕
                    </button>
                </div>
            </div>
        )
    );
}

export default Banner;