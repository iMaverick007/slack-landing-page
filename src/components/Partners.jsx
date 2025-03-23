import React from 'react';

function Partners() {
  return (
    <section className="py-16 bg-[#F7EFE8]">
      <div className="container mx-auto px-4">
        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap overflow-x-auto">
          {[
            {
              src: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png",
              srcSet: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small@2x.png",
              alt: "Airbnb",
            },
            {
              src: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png",
              srcSet: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small@2x.png",
              alt: "NASA",
            },
            {
              src: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png",
              srcSet: "https://a.slack-edge.com/9df734f/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small@2x.png",
              alt: "Uber",
            },
            {
              src: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png",
              srcSet: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small@2x.png",
              alt: "Target",
            },
            {
              src: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png",
              srcSet: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small@2x.png",
              alt: "New York Times",
            },
            {
              src: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png",
              srcSet: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small@2x.png",
              alt: "Etsy",
            },
          ].map((partner) => (
            <img
              key={partner.alt}
              src={partner.src}
              srcSet={partner.srcSet}
              alt={partner.alt}
              className="h-9"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;