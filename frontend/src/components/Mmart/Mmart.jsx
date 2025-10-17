import React, { useState, useEffect } from "react";
import {
  FaHandshake,
  FaShippingFast,
  FaGem,
  FaPercentage,
} from "react-icons/fa";

// You'll need to add these images to your assets folder
// For now, I'm using placeholder paths - update these with your actual image paths
const headerBg =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80";
// import headerBg from "../../assets/image/mart/mart-header2.jpg";

// Client types data
const clientTypes = [
  {
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // retail placeholder
    title: "Retail Grocers",
    description:
      "Empowering Small To Medium-Sized Stores With Reliable, Diverse Product Solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // wholesaler placeholder
    title: "Wholesalers",
    description:
      "Competitive Pricing And Extensive Product Range For Maximum Market Advantage.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // restaurant placeholder
    title: "Restaurants & Caterers",
    description:
      "Premium Quality Ingredients To Elevate Your Culinary Creations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // corporate placeholder
    title: "Corporate Clients",
    description:
      "Tailored Solutions For Cafeterias And Events That Impress Stakeholders.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", // consumer placeholder
    title: "Individual Consumers",
    description:
      "Access To Trending And Diverse Products That Enhance Your Lifestyle.",
  },
];

// USP data
const uspData = [
  {
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Wide Product Range",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Diverse Customer Base",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Commitment To Quality",
  },
];

// Features data
const features = [
  {
    icon: <FaHandshake size={30} color="#FF8C00" />,
    title: "Best Price",
    description: "Our Products Are Priced With Care And Love Towards YOU.",
  },
  {
    icon: <FaShippingFast size={30} color="#FF8C00" />,
    title: "Quick Delivery",
    description: "We Deliver In Minutes. 15 Mins Is All It Takes.",
  },
  {
    icon: <FaGem size={30} color="#FF8C00" />,
    title: "Quality Assort",
    description: "We've Got The BEST. Global, Local, You Name It.",
  },
  {
    icon: <FaPercentage size={30} color="#FF8C00" />,
    title: "Offers And Deals",
    description: "Shopping Is Fun And Pocket-Friendly With Our Regular Offers.",
  },
];

// AnnouncementsTitle Component
const AnnouncementsTitle = ({
  title = "ANNOUNCEMENTS",
  subtitle = "LATEST",
  description = "DHAMMANJALI FOUNDATION, At, our gallery captures the essence of our journey—showcasing our commitment to quality, community engagement, and innovation.",
  arrowWidth = 180,
  arrowHeight = 16,
  arrowColor = "#FFA500",
  className = "",
}) => (
  <div
    className={`w-full flex flex-col md:flex-row justify-between gap-6 px-2 md:px-0 mb-8 ${className}`}
  >
    <div className="flex flex-col w-full md:w-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
        {title}
      </h2>
      <div className="flex items-center mt-1">
        {subtitle && (
          <span className="text-lg font-semibold text-gray-500 tracking-widest uppercase mr-2">
            {subtitle}
          </span>
        )}
        <svg
          className="ml-10 md:ml-24 hidden md:inline"
          width={arrowWidth}
          height={arrowHeight}
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10H114M114 10L106 2M114 10L106 18"
            stroke={arrowColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    {description && (
      <div className="md:pt-1 pt-2 max-w-3xl text-gray-700 text-base leading-relaxed text-left">
        {description}
      </div>
    )}
  </div>
);

// MartDynamic Component (simplified version)
const MartDynamic = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample mart items (replace with your Firebase data)
  const sampleItems = [
    {
      id: 1,
      title: "Fresh Vegetables",
      description: "Farm-fresh organic vegetables",
      imageUrl:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "Dairy Products",
      description: "Pure and healthy dairy products",
      imageUrl:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Bakery Items",
      description: "Fresh baked goods daily",
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setItems(sampleItems);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="pt-0 pb-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Mart Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col items-center bg-white shadow"
          >
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-32 w-32 object-cover mb-4 rounded"
              />
            )}
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// USPs Component
const USPs = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  const getArrangedUSPs = () => {
    const arranged = [...uspData];
    if (selectedIndex !== 1) {
      const selectedItem = arranged[selectedIndex];
      const centerItem = arranged[1];
      arranged[1] = selectedItem;
      arranged[selectedIndex] = centerItem;
    }
    return arranged;
  };

  const arrangedUSPs = getArrangedUSPs();

  return (
    <section className="bg-[#4a90a4] py-16 px-4 text-center font-montserrat overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 tracking-wide text-center">
        OUR UNIQUE SELLING POINTS
      </h2>

      <div className="flex flex-wrap justify-center items-start gap-16 md:gap-24 max-w-6xl mx-auto">
        {arrangedUSPs.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center group transform transition-all duration-300 cursor-pointer ${
              idx === 1 ? "md:-mt-14" : "hover:-translate-y-2"
            }`}
            onClick={() =>
              handleCardClick(uspData.findIndex((u) => u.title === item.title))
            }
          >
            <div
              className={`w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 bg-white shadow-lg overflow-hidden flex items-center justify-center transition-all duration-300 ${
                idx === 1
                  ? "border-orange-400 shadow-xl scale-110"
                  : "border-gray-300 hover:border-orange-300"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="mt-5 text-xl sm:text-2xl font-semibold text-gray-900 max-w-xs text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// FeatureCards Component
const FeatureCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-8 bg-white">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-amber-50 p-8 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] min-w-[200px] max-w-[320px] shadow-sm transition-transform duration-300 hover:-translate-y-1 rounded-xl"
        >
          <div className="w-16 h-16 border-4 border-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center bg-amber-50">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[220px] mx-auto">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

// Main Mmart Component
function Mmart() {
  return (
    <div className="text-gray-800 pt-16 md:pt-20 font-montserrat">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-80 relative flex items-center justify-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide bg-black/70 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg text-center">
          SHOPPING MART & MALL
        </h1>
      </div>

      {/* Specialities Section */}
      <div className="m-10">
        <AnnouncementsTitle
          title="Shopping Mart & Mall"
          subtitle="Specialities"
          description="Established in 2020 and headquartered in Prayagraj, Uttar Pradesh, Dhammanjali India Private Limited is a private, non-government company engaged in the food and beverages industry. The company focuses on creating lasting value not only through its products but also through meaningful contributions to the communities it serves."
          arrowWidth={180}
          arrowHeight={16}
          arrowColor="#FFA500"
        />
        <div className="h-12"></div>
        <MartDynamic />
      </div>

      {/* Serving Section */}
      <div className="bg-white pt-2 pb-20 px-4 sm:px-6 md:px-[10%] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Serving Every Need, Exceeding Every Expectation
        </h2>
        <div className="flex items-center justify-center text-lg text-gray-600 mb-10 gap-3 flex-wrap">
          <span>Your Premier Partner in Quality Grocery Solutions</span>
        </div>

        <div className="flex flex-col gap-16 items-center">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clientTypes.slice(0, 3).map((client, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-xl w-full max-w-[350px] p-6 shadow-sm transform transition-transform duration-300 hover:-translate-y-1 text-center"
              >
                <img
                  src={client.image}
                  alt={client.title}
                  className="h-12 mb-4 mx-auto object-cover rounded"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {client.title}
                </h3>
                <p className="text-sm text-gray-600 leading-tight">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clientTypes.slice(3).map((client, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-xl w-full max-w-[350px] p-6 shadow-sm transform transition-transform duration-300 hover:-translate-y-1 text-center"
              >
                <img
                  src={client.image}
                  alt={client.title}
                  className="h-12 mb-4 mx-auto object-cover rounded"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {client.title}
                </h3>
                <p className="text-sm text-gray-600 leading-tight">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <USPs />
      <FeatureCards />
    </div>
  );
}

export default Mmart;
