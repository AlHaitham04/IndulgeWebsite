import "./Shop.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "../imageSlider/imageSlider";
import { FaShoppingBasket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Shop({ basket, setBasket }) {
    const initialProducts = [
        { id: 1, name: "E01", price: 26, category: "Abaya", material: "Crepe", stock: true, images: ["/E01/E01.1.jpg", "/E01/E01.3.jpg"], description: "Code: E01. Simple cut crepe abaya Available in different colors" },
        { id: 2, name: "B01", price: 20, category: "Set", material: "Other", colors: ["Black", "Beige"], stock: true, images: ["/B01/B01.1.jpg", "/B01/B01.2.jpg", "/B01/B01.3.jpg"], description: "Top & Trousers set. Available in different sizes" },
        { id: 3, name: "E02", price: 26, category: "Abaya", material: "Crepe", colors: ["Black", "Beige"], stock: false, images: ["/E02/E02.1.jpg", "/E02/E02.2.jpg", "/E02/E02.3.jpg", "/E02/E02.4.jpg"], description: "Code: E02. Coat cut crepe abaya Available in different colors" },
        { id: 4, name: "B02", price: 20, category: "Set", material: "Linen", colors: ["Black", "Beige"], stock: false, images: ["/B02/B02.1.jpg", "/B02/B02.2.jpg", "/B02/B02.3.jpg"], description: "Code: B02. Linen set - vest with comfortable elastic trousers Comes in different sizes" },
        { id: 5, name: "E03", price: 26, category: "Abaya", material: "Crepe", colors: ["Black", "Beige"], stock: false, images: ["/E03/E03.1.jpg", "/E03/E03.2.jpg", "/E03/E03.3.jpg", "/E03/E03.4.jpg"], description: "Code: E03. Simple cut crepe abaya Comes in different colors" },
        { id: 6, name: "B03", price: 20, category: "Set", material: "Linen", colors: ["Black", "Beige"], stock: false, images: ["/B03/B03.1.jpg", "/B03/B03.2.jpg", "/B03/B03.3.jpg"], description: "Code: B03. Cropped vest with comfortable elastic trousers. Comes in different sizes" },
        { id: 7, name: "E04", price: 26, category: "Abaya", material: "Crepe", colors: ["Black", "Beige"], stock: false, images: ["/E04/E04.1.jpg"], description: "Code: E04. Coat cut crepe abaya Perfect light layerable coat also suitable for travel Available in different colors" },
        { id: 8, name: "B04", price: 16, category: "Other", material: "Crepe", colors: ["Black", "Beige"], stock: false, images: ["/B04/B04.1.jpg"], description: "Code: B04. Under abaya dress that can be worn in multiple different ways or alone Available in different colors" },
        { id: 9, name: "E05", price: 37, category: "Abaya", material: "Crepe", stock: false, images: ["/E05/E05.1.jpg", "/E05/E05.2.jpg"], description: "Code: E05. Luxurious black Abaya." },
        { id: 10, name: "C01", price: 37, category: "Jalabiya", material: "Chiffon", stock: true, images: ["/C01/C01.1.jpg", "/C01/C01.2.jpg"], description: "Code: C01. Luxurious 2 layer jalabiya, outter layer made from chiffon and inner layer made from silk with delicate embroidery." },
        { id: 11, name: "C02", price: 49, category: "Jalabiya", material: "Chiffon", stock: true, images: ["/C02/C02.1.jpg", "/C02/C02.2.jpg", "/C02/C02.3.jpg"], description: "Code: C02. Luxurious 2 layer jalabiya, outter layer made from chiffon and inner layer made from silk with delicate embroidery." },
        { id: 12, name: "B05", price: 27, category: "Set", material: "Linen", colors: ["Black", "Beige", "Brown"], stock: true, images: ["/B05/B05.1.jpg", "/B05/B05.2.jpg", "/B05/B05.3.jpg"], description: "Code: B05. From sunrise to sunset, linen keeps you fresh, comfortable, and effortlessly chic. Also available in different Colors. Sizes: S to XXL" },
        { id: 13, name: "E06", price: 44, category: "Abaya", material: "Crepe", showColorSelector: true, colors: Array.from({ length: 21 }, (_, i) => `Color ${i + 1}`), stock: true, images: ["/E09/E09.3.jpg", "/E09/E09.1.jpg", "/E09/E09.2.jpg", "/E08/E08.4.jpg"], description: "Code: E06. A luxurious abaya in elegant black that catches the eye, decorated with high-quality glass beads with a crystal-like shine. Available in different colors." },
        { id: 14, name: "E07", price: 35, category: "Abaya", material: "Crepe", showColorSelector: true, colors: Array.from({ length: 21 }, (_, i) => `Color ${i + 1}`), stock: true, images: ["/E10/E10.3.jpg", "/E10/E10.1.jpg", "/E10/E10.2.jpg", "/E10/E10.4.jpg", "/E08/E08.4.jpg"], description: "Code: E07. A luxurious abaya in elegant black that catches the eye, decorated with high-quality glass beads with a crystal-like shine. Available in different colors." },
        { id: 15, name: "E08", price: 39, category: "Abaya", material: "Crepe", showColorSelector: true, colors: Array.from({ length: 21 }, (_, i) => `Color ${i + 1}`), stock: true, images: ["/E06/E06.3.jpg", "/E06/E06.1.jpg", "/E06/E06.2.jpg", "/E08/E08.4.jpg"], description: "Code: E08. An elegantly designed abaya, complemented by beautiful hand-beading on the sleeves, where shiny black beads are precisely distributed to give you a soft touch and a comfortable cut. Available in different colors." },
        { id: 16, name: "E09", price: 49, category: "Abaya", material: "Crepe", showColorSelector: true, colors: Array.from({ length: 21 }, (_, i) => `Color ${i + 1}`), stock: true, images: ["/E07/E07.1.jpg", "/E07/E07.3.jpg", "/E07/E07.2.jpg", "/E08/E08.4.jpg"], description: "Code: E09. An abaya with hand embroidery on the chest and sleeves, adorned with shimmering black beads meticulously distributed to add an elegant and eye-catching touch. Available in different colors." },
        { id: 17, name: "E10", price: 44, category: "Abaya", material: "Crepe", showColorSelector: true, colors: Array.from({ length: 21 }, (_, i) => `Color ${i + 1}`), stock: true, images: ["/E08/E08.1.jpg", "/E08/E08.3.jpg", "/E08/E08.2.jpg", "/E08/E08.4.jpg"], description: "Code: E10. An off-white abaya that is an ideal choice for special occasions and stylish outings. Available in different colors." },
    ];

    const [products, setProducts] = useState([...initialProducts].sort((a, b) => b.id - a.id));
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const [productsPerPage, setProductsPerPage] = useState(window.innerWidth <= 768 ? 6 : 9);
    const [activeProduct, setActiveProduct] = useState(null);
    const [stockFilter, setStockFilter] = useState("all");
    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedColors, setSelectedColors] = useState({});
    const [customMeasurements, setCustomMeasurements] = useState({});
    const [showMeasurements, setShowMeasurements] = useState({});
    const [selectedQuantities, setSelectedQuantities] = useState({});
    const [includeDress, setIncludeDress] = useState({});
    const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL"];

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        const handleResize = () => setProductsPerPage(window.innerWidth <= 768 ? 6 : 9);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    let filteredProducts = products.filter(p =>
        (selectedCategories.length === 0 || selectedCategories.includes(p.category)) &&
        (selectedMaterials.length === 0 || selectedMaterials.includes(p.material)) &&
        (stockFilter === "all" || (stockFilter === "in" && p.stock) || (stockFilter === "out" && !p.stock))
    );

    if (stockFilter === "all") {
        const inStock = filteredProducts.filter(p => p.stock);
        const outStock = filteredProducts.filter(p => !p.stock);
        filteredProducts = [...inStock, ...outStock];
    }

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    const handleCardClick = (id) => setActiveProduct(activeProduct === id ? null : id);
    const handleSizeChange = (id, size) => setSelectedSizes(prev => ({ ...prev, [id]: size }));
    const handleColorChange = (id, color) => setSelectedColors(prev => ({ ...prev, [id]: color }));

    const getProductPrice = (product) => {
        if (product.name === "B05") {
            const qty = selectedQuantities[product.id] || 1;
            if (qty === 1) return 27;
            if (qty === 2) return 23;
            return 20;
        }
        return product.price + (includeDress[product.id] ? 8 : 0);
    };

    const handleAddToBasket = (product) => {
        const quantity = selectedQuantities[product.id] || 1;
        const selectedColor = selectedColors[product.id] || "default";
        const dressIncluded = includeDress[product.id] || false;
        const priceToUse = getProductPrice(product);

        if (product.category === "Set") {
            const selectedSize = selectedSizes[product.id];
            if (!selectedSize) {
                alert("Please select a size before adding to basket.");
                return;
            }

            setBasket(prev => {
                const existingIndex = prev.findIndex(item =>
                    item.id === product.id &&
                    item.size === selectedSize &&
                    item.color === selectedColor &&
                    item.includeDress === dressIncluded
                );
                if (existingIndex >= 0) {
                    const updated = [...prev];
                    updated[existingIndex].quantity += quantity;
                    sessionStorage.setItem("basket", JSON.stringify(updated));
                    return updated;
                } else {
                    const updated = [...prev, {
                        ...product,
                        size: selectedSize,
                        color: selectedColor,
                        quantity,
                        includeDress: dressIncluded,
                        price: priceToUse
                    }];
                    sessionStorage.setItem("basket", JSON.stringify(updated));
                    return updated;
                }
            });
        } else {
            const measurements = customMeasurements[product.id];
            if (!measurements || Object.values(measurements).some(v => !v)) {
                alert("Please fill in all measurements before adding to basket.");
                return;
            }

            setBasket(prev => {
                const existingIndex = prev.findIndex(item =>
                    item.id === product.id &&
                    JSON.stringify(item.measurements) === JSON.stringify(measurements) &&
                    item.color === selectedColor &&
                    item.includeDress === dressIncluded
                );
                if (existingIndex >= 0) {
                    const updated = [...prev];
                    updated[existingIndex].quantity += quantity;
                    sessionStorage.setItem("basket", JSON.stringify(updated));
                    return updated;
                } else {
                    const updated = [...prev, {
                        ...product,
                        measurements,
                        color: selectedColor,
                        quantity,
                        includeDress: dressIncluded,
                        price: priceToUse
                    }];
                    sessionStorage.setItem("basket", JSON.stringify(updated));
                    return updated;
                }
            });
            setShowMeasurements(prev => ({ ...prev, [product.id]: false }));
        }
    };

    const toggleMeasurements = (id) => setShowMeasurements(prev => ({ ...prev, [id]: !prev[id] }));


    return (
        <div>
            <h1 data-aos="fade-down" data-aos-duration="800">
                <span className="snell">I</span>
                <span className="basker">ndulge</span>
            </h1>

            <div className="top-controls" data-aos="fade-down" data-aos-duration="600">
                <div className="control-buttons top-row">
                    <Link to="/" className="btn-control">Home</Link>
                    <Link to="/SizeChart" className="btn-control">Size Chart</Link>
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
                <div
                    className={`shop-Filter ${showFilter ? "show" : ""}`}
                    data-aos="fade-right"
                    data-aos-duration="600"
                >

                    <nav>
                        <h2>Category</h2>
                        <ul className="Category">
                            {["Abaya", "Set", "Jalabiya", "Other"].map(cat => (
                                <label key={cat}>{cat}<input type="checkbox" className="checkbox" onChange={() => handleCheckboxChange("category", cat)} /></label>
                            ))}
                        </ul>
                        <h2>Material</h2>
                        <ul className="Category">
                            {["Crepe", "Chiffon", "Linen", "Other"].map(mat => (
                                <label key={mat}>{mat}<input type="checkbox" className="checkbox" onChange={() => handleCheckboxChange("material", mat)} /></label>
                            ))}
                        </ul>
                        <h2>Stock</h2>
                        <div className="StockFilter">
                            <label><input type="radio" name="stock" value="all" checked={stockFilter === "all"} onChange={() => setStockFilter("all")} /> All</label>
                            <label><input type="radio" name="stock" value="in" checked={stockFilter === "in"} onChange={() => setStockFilter("in")} /> In Stock</label>
                            <label><input type="radio" name="stock" value="out" checked={stockFilter === "out"} onChange={() => setStockFilter("out")} /> Out of Stock</label>
                        </div>
                        <h2>Sort By</h2>
                        <div className="SortBy">
                            <button className="SButton" onClick={() => handleSort("price-high")}>Price (High to Low)</button>
                            <button className="SButton" onClick={() => handleSort("price-low")}>Price (Low to High)</button>
                            <button className="SButton" onClick={() => handleSort("a-z")}>A-Z</button>
                            <button className="SButton" onClick={() => handleSort("z-a")}>Z-A</button>
                        </div>
                    </nav>
                </div>

                <div className="Products">
                    {currentProducts.map(p => (
                        <div key={p.id} className={`ProductCard ${activeProduct === p.id ? "active" : ""} ${!p.stock ? "out-of-stock" : ""}`} onClick={() => handleCardClick(p.id)} data-aos="fade-up" data-aos-duration="700">
                            <div className="Media">
                                <ImageSlider images={p.images} />
                                <div className="description">{p.description}</div>
                            </div>
                            <p><strong>{p.name}</strong></p>
                            {p.stock ? (
                                <>
                                    <p>{getProductPrice(p)} OMR</p>
                                    <small>{p.category} / {p.material}</small>

                                    {p.name === "E10" && (
                                        <div className="with-dress">
                                            <label>
                                                <small>With Dress (+8 OMR)</small>
                                                <input
                                                    type="checkbox"
                                                    checked={includeDress[p.id] || false}
                                                    onChange={(e) =>
                                                        setIncludeDress(prev => ({ ...prev, [p.id]: e.target.checked }))
                                                    }
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </label>
                                        </div>
                                    )}

                                    {p.colors && p.showColorSelector && (
                                        <div className="color-select special-color">
                                            <label>Color (Last Image):</label>
                                            <select
                                                value={selectedColors[p.id] || "default"}
                                                onChange={(e) => handleColorChange(p.id, e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <option value="default">Color in Image</option>
                                                {Array.from({ length: 21 }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>Color {i + 1}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}


                                    {p.colors && !p.showColorSelector && (
                                        <div className="size-select">
                                            <label>Color: </label>
                                            <select
                                                value={selectedColors[p.id] || ""}
                                                onChange={(e) => handleColorChange(p.id, e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <option value="">Select</option>
                                                {p.colors.map(color => (
                                                    <option key={color} value={color}>{color}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}




                                    <div className="size-select">
                                        {p.category === "Set" ? (
                                            <>
                                                <label>Size: </label>
                                                <select value={selectedSizes[p.id] || ""} onChange={(e) => handleSizeChange(p.id, e.target.value)}>
                                                    <option value="">Select</option>
                                                    {clothingSizes.map(size => <option key={size} value={size}>{size}</option>)}
                                                </select>
                                            </>
                                        ) : (
                                            <div className="custom-measurements-wrapper">
                                                <button onClick={() => toggleMeasurements(p.id)} className="custom-measurements-toggle">
                                                    {showMeasurements[p.id] ? "Hide Measurements" : "Enter Measurements"}
                                                </button>
                                                {showMeasurements[p.id] && (
                                                    <div className="custom-measurements">
                                                        {["Shoulder", "Chest", "Underarm", "Hand", "Length"].map(field => (
                                                            <div key={field}>
                                                                <label>{field} (cm): </label>
                                                                <input type="number" min="0" value={customMeasurements[p.id]?.[field] || ""} onChange={(e) => setCustomMeasurements(prev => ({ ...prev, [p.id]: { ...prev[p.id], [field]: e.target.value } }))} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="size-select quantity-select">
                                        <label>Qty: </label>
                                        <select
                                            value={selectedQuantities[p.id] || 1}
                                            onClick={e => e.stopPropagation()}
                                            onChange={e => setSelectedQuantities(prev => ({ ...prev, [p.id]: Number(e.target.value) }))}
                                        >
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button className="addButton" onClick={e => { e.stopPropagation(); handleAddToBasket(p); }}>Add to Cart</button>
                                </>
                            ) : (
                                <div className="out-of-stock-text">Out of Stock</div>
                            )}
                        </div>
                    ))}
                    <div className="Pagination" data-aos="fade-up" data-aos-duration="700">
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
