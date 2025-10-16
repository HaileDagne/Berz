import React from "react";

export default function Banner({ type = "home" }) {
  const getBannerContent = () => {
    switch (type) {
      case "home":
        return {
          title: "Welcome to Berz Restaurant",
          subtitle:
            "Experience the authentic flavors of Ethiopia in every bite. From traditional injera to spicy wots, discover the rich culinary heritage of Ethiopia.",
          cta: [
            { text: "Explore Our Menu", href: "#menu", primary: true },
            { text: "Order Online", href: "/order", primary: false },
          ],
        };
      case "services":
        return {
          title: "Our Premium Services",
          subtitle:
            "From intimate dine-in experiences to grand catering events, we bring authentic Ethiopian cuisine to every occasion. Professional service, traditional flavors, modern convenience.",
          cta: [
            { text: "Book a Table", href: "/contact", primary: true },
            { text: "View Menu", href: "/#menu", primary: false },
          ],
        };
      case "sister-company":
        return {
          title: "Our Business Family",
          subtitle:
            "Beyond the restaurant, we're building a network of businesses that celebrate Ethiopian culture. From mini markets to consulting services, discover our commitment to community and quality.",
          cta: [
            { text: "Explore Companies", href: "#companies", primary: true },
            { text: "Visit Restaurant", href: "/", primary: false },
          ],
        };
      case "about":
        return {
          title: "Our Story & Heritage",
          subtitle:
            "Founded in 2010 with a passion for authentic Ethiopian cuisine, Berz Restaurant has been serving the community with traditional recipes passed down through generations. Meet the people and values behind our success.",
          cta: [
            { text: "Read Our Story", href: "#story", primary: true },
            { text: "Meet Our Team", href: "#team", primary: false },
          ],
        };
      case "contact":
        return {
          title: "Get In Touch",
          subtitle:
            "Ready to experience authentic Ethiopian cuisine? Contact us for reservations, catering inquiries, or simply to share your feedback. We're here to make your dining experience exceptional.",
          cta: [
            { text: "Make Reservation", href: "#reservation", primary: true },
            { text: "Call Us Now", href: "tel:+251911864340", primary: false },
          ],
        };
      case "order":
        return {
          title: "Order Your Favorites",
          subtitle:
            "Craving authentic Ethiopian flavors? Order now for quick delivery or pickup. From traditional injera to spicy wots, we bring the taste of Ethiopia directly to you.",
          cta: [
            { text: "Call to Order", href: "tel:+251911864340", primary: true },
            { text: "Browse Menu", href: "/#menu", primary: false },
          ],
        };
      default:
        return {
          title: "Welcome to Berz Restaurant",
          subtitle:
            "Experience the authentic flavors of Ethiopia in every bite. From traditional injera to spicy wots, discover the rich culinary heritage of Ethiopia.",
          cta: [
            { text: "Explore Our Menu", href: "#menu", primary: true },
            { text: "Order Online", href: "/order", primary: false },
          ],
        };
    }
  };

  const content = getBannerContent();

  return (
    <section className={`banner banner-${type}`}>
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">{content.title}</h1>
          <p className="banner-subtitle">{content.subtitle}</p>
          <div className="banner-cta">
            {content.cta.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`cta-button ${
                  button.primary ? "primary" : "secondary"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
