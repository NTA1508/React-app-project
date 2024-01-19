export default function AddProduct() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-title">
                    <div className="contact-fix">
                        <a href="/admin">Home</a>
                        &nbsp;/&nbsp;
                        <p>Add product</p>
                    </div>
                </div>
                <div style={{ width: "100%", textAlign: "center" }}><h4 style={{ fontSize: "20px" }}>Add Product</h4></div>
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
                            <option value={"Mobile phones"}>Mobile phones</option>
                            <option value={"Laptops and Tablets"}>Laptops and Tablets</option>
                            <option value={"Televisions and Monitors"}>Televisions and Monitors</option>
                            <option value={"Audio and Headphones"}>Audio and Headphones</option>
                            <option value={"Cameras and Camcorders"}>Cameras and Camcorders</option>
                            <option value={"Game consoles"}>Game consoles</option>
                            <option value={"Printers and Scanners"}>Printers and Scanners</option>
                            <option value={"Smart home appliance"}>Smart home appliances</option>
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
                    <div style={{ marginBottom: 20 }}>
                        <label
                            htmlFor="exampleFormControlFile1"
                            style={{ display: "block", marginBottom: 5 }}
                        >
                            Product Pictures
                        </label>
                        <input
                            type="file"
                            id="exampleFormControlFile1"
                            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                            multiple="true"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}