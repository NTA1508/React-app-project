export default function EditProduct() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-title">
                    <div className="contact-fix">
                        <a href="/admin">Home</a>
                        &nbsp;/&nbsp;
                        <a href="/all_products">All Products</a>
                        &nbsp;/&nbsp;
                        <p>Edit product</p>
                    </div>
                </div>
                <div style={{ width: "100%", textAlign: "center" }}><h4 style={{ fontSize: "20px" }}>Edit Product</h4></div>
                <form style={{ margin: 20 }}>
                    <div style={{ marginBottom: 20 }}>
                        <label
                            htmlFor="exampleInputEmail1"
                            style={{ display: "block", marginBottom: 5 }}
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="exampleInputEmail1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ display: "inline-block", marginRight: 20, marginBottom: 20, width: "100%" }}>
                        <label htmlFor="inputState" style={{ display: "block", marginBottom: 5 }}>
                            Product type
                        </label>
                        <select
                            id="inputState"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                        >
                            <option value={"phones"}>Mobile phones</option>
                            <option value={"laptops"}>Laptops and Tablets</option>
                            <option value={"tv"}>Televisions and Monitors</option>
                            <option value={"audios"}>Audio and Headphones</option>
                            <option value={"cameras"}>Cameras and Camcorders</option>
                            <option value={"consoles"}>Game consoles</option>
                            <option value={"printers"}>Printers and Scanners</option>
                            <option value={"smart"}>Smart home appliances</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label htmlFor="exampleInputPassword1" style={{ display: "block", marginBottom: 5 }}>
                            Description
                        </label>
                        <textarea
                            id="exampleInputPassword1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                            rows="4"
                        ></textarea>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label
                            htmlFor="exampleInputPassword1"
                            style={{ display: "block", marginBottom: 5 }}
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="exampleInputPassword1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label htmlFor="exampleInputPassword1" style={{ display: "block", marginBottom: 5 }}>
                            Sales
                        </label>
                        <input
                            type="number"
                            id="exampleInputPassword1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                            min="0"
                            max="100"
                        />
                    </div>
                    <div style={{ display: "inline-block", marginRight: 20, marginBottom: 20 }}>
                        <label htmlFor="inputState" style={{ display: "block", marginBottom: 5 }}>
                            Promotion type
                        </label>
                        <select
                            id="inputState"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                        >
                            <option value={"no"}>No</option>
                            <option value={"day"}>Day</option>
                            <option value={"month"}>Month</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label
                            htmlFor="exampleInputPassword1"
                            style={{ display: "block", marginBottom: 5 }}
                        >
                            Storage Address
                        </label>
                        <input
                            type="text"
                            id="exampleInputPassword1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label
                            htmlFor="exampleInputPassword1"
                            style={{ display: "block", marginBottom: 5 }}
                        >
                            Stock Number
                        </label>
                        <input
                            type="number"
                            id="exampleInputPassword1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "black",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}