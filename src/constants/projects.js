import portfolioImages from "./portfolio-images";

const manage = {
  images: {
    desktop: portfolioImages.desktopManageImage,
    mobile: portfolioImages.mobileManageImage,
    tablet: portfolioImages.tabletManageImage,
  },
  description: 'Manage project',
  title: "Manage",
  text: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  link: "/portfolio/manage",
};
const bookmark = {
  images: {
    desktop: portfolioImages.desktopBookmarkImage,
    mobile: portfolioImages.mobileBookmarkImage,
    tablet: portfolioImages.tabletBookmarkImage,
  },
  description: 'Bookmark project',
  title: "Bookmark",
  text: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  link: "/portfolio/bookmark",
};

const insure = {
  images: {
    desktop: portfolioImages.desktopInsureImage,
    mobile: portfolioImages.mobileInsureImage,
    tablet: portfolioImages.tabletInsureImage,
  },
  description: 'Insure project',
  title: "Insure",
  text: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  link: "/portfolio/insure",
};

const fylo = {
  images: {
    desktop: portfolioImages.desktopFyloImage,
    mobile: portfolioImages.mobileFyloImage,
    tablet: portfolioImages.tabletFyloImage,
  },
  description: 'Fylo project',
  title: "Fylo",
  text: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  link: "/portfolio/fylo",
};

export default { manage, bookmark, insure, fylo };
