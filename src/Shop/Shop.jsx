import "./Shop.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "../imageSlider/imageSlider";
import { FaShoppingBasket } from "react-icons/fa";

function Shop({ basket, setBasket }) {
    const initialProducts = [
        { id: 1, name: "E01", price: 26, category: "Abaya", material: "Cotton", images: ["/IndulgeWebsite/E01/E01.1.jpg", "/IndulgeWebsite/E01/E01.3.jpg"], description: "Code: E01. Simple cut crepe abaya Available in different colors" },
        { id: 2, name: "B01", price: 20, category: "Set", material: "Linen", images: ["/IndulgeWebsite/B01/B01.1.jpg", "/IndulgeWebsite/B01/B01.2.jpg", "/IndulgeWebsite/B01/B01.3.jpg"], description: "Top & Trousers set. Available in different sizes" },
        { id: 3, name: "E02", price: 26, category: "Abaya", material: "Cotton", images: ["/IndulgeWebsite/E02/E02.1.jpg", "/IndulgeWebsite/E02/E02.2.jpg", "/IndulgeWebsite/E02/E02.3.jpg", "/IndulgeWebsite/E02/E02.4.jpg"], description: "Code: E02. Coat cut crepe abaya Available in different colors" },
        { id: 4, name: "B02", price: 20, category: "Set", material: "Linen", images: ["/IndulgeWebsite/B02/B02.1.jpg", "/IndulgeWebsite/B02/B02.2.jpg", "/IndulgeWebsite/B02/B02.3.jpg"], description: "Code: B02. Linen set - vest with comfortable elastic trousers Comes in different sizes" },
        { id: 5, name: "E03", price: 26, category: "Abaya", material: "Cotton", images: ["/IndulgeWebsite/E03/E03.1.jpg", "/IndulgeWebsite/E03/E03.2.jpg", "/IndulgeWebsite/E03/E03.3.jpg", "/IndulgeWebsite/E03/E03.4.jpg"], description: "Code: E03. Simple cut crepe abaya Comes in different colors" },
        { id: 6, name: "B03", price: 20, category: "Set", material: "Linen", images: ["/IndulgeWebsite/B03/B03.1.jpg", "/IndulgeWebsite/B03/B03.2.jpg", "/IndulgeWebsite/B03/B03.3.jpg"], description: "Code: B03. Cropped vest with comfortable elastic trousers. Comes in different sizes" },
        { id: 7, name: "E04", price: 26, category: "Abaya", material: "Cotton", images: ["/IndulgeWebsite/E04/E04.1.jpg"], description: "Code: E04. Coat cut crepe abaya Perfect light layerable coat also suitable for travel Available in different colours" },
        { id: 8, name: "B04", price: 16, category: "Other", material: "Cotton", images: ["/IndulgeWebsite/B04/B04.1.jpg"], description: "Code: B04. Under abaya dress that can be worn in multiple different ways or alone Available in different colors" },
        { id: 9, name: "E05", price: 37, category: "Jalabiya", material: "Cotton", images: ["/IndulgeWebsite/E05/E05.1.jpg", "/IndulgeWebsite/E05/E05.2.jpg"], description: "Code: E05. Luxurious black Abaya." },
        { id: 10, name: "E06", price: 37, category: "Jalabiya", material: "Cotton", images: ["/IndulgeWebsite/E06/E06.1.jpg", "/IndulgeWebsite/E06/E06.2.jpg"], description: "Code: E06. Luxurious 2 layer jalabiya, outter layer made from chiffon and inner layer made from silk with delicate embroidery." },
        { id: 11, name: "E07", price: 49, category: "Jalabiya", material: "Cotton", images: ["/IndulgeWebsite/E07/E07.1.jpg"], description: "Code: E07. Luxurious 2 layer jalabiya, outter layer made from chiffon and inner layer made from silk with delicate embroidery." },
        { id: 12, name: "B05", price: 20, category: "Set", material: "Cotton", images: ["/IndulgeWebsite/B05/B05.1.jpg", "/IndulgeWebsite/B05/B05.2.jpg", "/IndulgeWebsite/B05/B05.3.jpg"], description: "Code: B05. From sunrise to sunset, linen keeps you fresh, comfortable, and effortlessly chic. Also available in black. Sizes: S to XXL" },
        { id: 13, name: "E08", price: 26, category: "Abaya", material: "Cotton", images: ["/IndulgeWebsite/E08/E08.1.jpg", "/IndulgeWebsite/E08/E08.2.jpg", "/IndulgeWebsite/E08/E08.3.jpg", "/IndulgeWebsite/E08/E08.4.jpg", "/IndulgeWebsite/E08/E08.5.jpg", "/IndulgeWebsite/E08/E08.6.jpg"], description: "Code: E08." },
        { id: 14, name: "B06", price: 20, category: "Set", material: "Cotton", images: ["/IndulgeWebsite/B06/B06.1.jpg", "/IndulgeWebsite/B06/B06.2.jpg"], description: "Code: B06." },
    ];

    const [products, setProducts] = useState(initialProducts);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const [productsPerPage, setProductsPerPage] = useState(window.innerWidth <= 768 ? 6 : 9);
    const [activeProduct, setActiveProduct] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setProductsPerPage(window.innerWidth <= 768 ? 6 : 9);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const storedBasket = sessionStorage.getItem("basket");
        if (storedBasket) setBasket(JSON.parse(storedBasket));
    }, [setBasket]);

    useEffect(() => {
        sessionStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);

    const handleCheckboxChange = (type, value) => {
        if (type === "category") setSelectedCategories(prev => prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]);
        if (type === "material") setSelectedMaterials(prev => prev.includes(value) ? prev.filter(m => m !== value) : [...prev, value]);
        setCurrentPage(1);
    };

    const handleSort = (type) => {
        let sorted = [...products];
        switch (type) {
            case "popular": sorted.sort((a, b) => a.id - b.id); break;
            case "price-high": sorted.sort((a, b) => b.price - a.price); break;
            case "price-low": sorted.sort((a, b) => a.price - b.price); break;
            case "a-z": sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
            case "z-a": sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
        }
        setProducts(sorted);
    };

    const filteredProducts = products.filter(
        p => (selectedCategories.length === 0 || selectedCategories.includes(p.category)) &&
            (selectedMaterials.length === 0 || selectedMaterials.includes(p.material))
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    const handleCardClick = (id) => {
        setActiveProduct(activeProduct === id ? null : id);
    };

    const handleAddToBasket = (product) => {
        const selectedSize = selectedSizes[product.id];
        if (!selectedSize) { alert("Please select a size before adding to basket."); return; }
        setBasket(prev => [...prev, { ...product, size: selectedSize }]);
    };

    const handleSizeChange = (id, size) => {
        setSelectedSizes(prev => ({ ...prev, [id]: size }));
    };

    return (
        <div>
            <h1>Indulge Oman</h1>
            <div className="top-controls">
                <div className="control-buttons top-row">
                    <Link to="/" className="btn-control">Home</Link>
                </div>
                <div className="control-buttons bottom-row">
                    <button className="btn-control btn-showfilter" onClick={() => setShowFilter(!showFilter)}>
                        {showFilter ? "Hide Filters" : "Show Filters"}
                    </button>
                    <Link to="/Basket" className="btn-control basket-btn">
                        <FaShoppingBasket className="basket-icon" />
                        <span className="basket-text">Basket</span>
                        {basket.length > 0 && <span className="basket-count">{basket.length}</span>}
                    </Link>
                </div>
            </div>
            <div className="shop-FS">
                <div className={`shop-Filter ${showFilter ? "show" : ""}`}>
                    <nav>
                        <h2>Category</h2>
                        <ul className="Category">
                            {["Abaya", "Set", "Jalabiya", "Other"].map(cat => (
                                <label key={cat}>{cat} <input type="checkbox" className="checkbox" onChange={() => handleCheckboxChange("category", cat)} /></label>
                            ))}
                        </ul>
                        <h2>Material</h2>
                        <ul className="Category">
                            {["Cotton", "Linen"].map(mat => (
                                <label key={mat}>{mat} <input type="checkbox" className="checkbox" onChange={() => handleCheckboxChange("material", mat)} /></label>
                            ))}
                        </ul>
                        <h2>Sort By</h2>
                        <div className="SortBy">
                            <button className="SButton" onClick={() => handleSort("popular")}>Most Popular</button>
                            <button className="SButton" onClick={() => handleSort("price-high")}>Price (High to Low)</button>
                            <button className="SButton" onClick={() => handleSort("price-low")}>Price (Low to High)</button>
                            <button className="SButton" onClick={() => handleSort("a-z")}>A-Z</button>
                            <button className="SButton" onClick={() => handleSort("z-a")}>Z-A</button>
                        </div>
                    </nav>
                </div>
                <div className="Products">
                    {currentProducts.map(p => (
                        <div key={p.id} className={`ProductCard ${activeProduct === p.id ? "active" : ""}`} onClick={() => handleCardClick(p.id)}>
                            <div className="Media">
                                <ImageSlider images={p.images} />
                                <div className="description">{p.description}</div>
                            </div>
                            <p><strong>{p.name}</strong></p>
                            <p>{p.price} OMR</p>
                            <small>{p.category} / {p.material}</small>
                            <div className="size-select">
                                <label>Size: </label>
                                <select value={selectedSizes[p.id] || ""} onChange={(e) => handleSizeChange(p.id, e.target.value)}>
                                    <option value="">Select</option>
                                    {["XS", "S", "M", "L", "XL", "XXL"].map(size => <option key={size} value={size}>{size}</option>)}
                                </select>
                            </div>
                            <button className="addButton" onClick={(e) => { e.stopPropagation(); handleAddToBasket(p); }}>Add to Cart</button>
                        </div>
                    ))}
                    <div className="Pagination">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button key={i + 1} className={`page-btn ${currentPage === i + 1 ? "active" : ""}`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
