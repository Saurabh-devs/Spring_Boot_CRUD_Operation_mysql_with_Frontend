const BASE = "http://localhost:8081";

// Common API function
async function api(url, method = "GET", body = null) {
    try {
        const res = await fetch(BASE + url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : null
        });

        if (!res.ok) {
            const error = await res.text();
            alert("Error: " + error);
            return null;
        }

        return res.json();
    } catch (err) {
        alert("Request Failed: " + err);
        return null;
    }
}


// Render Table
function renderProducts(list) {
    const tbody = document.querySelector("#productsTable tbody");
    tbody.innerHTML = "";
    list.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.quantity}</td>
                <td>${p.price}</td>
                <td>
                    <button onclick="deleteProduct(${p.id})" class="action-btn delete">Delete</button>
                    <button onclick="editProduct(${p.id})" class="action-btn edit">Edit</button>
                </td>
            </tr>`;
    });
}


// Load All Products
async function loadAll() {
    const data = await api("/products");
    if (data) renderProducts(data);
}

document.getElementById("btnRefresh").onclick = loadAll;


// ADD PRODUCT
document.getElementById("addForm").onsubmit = async (e) => {
    e.preventDefault();

    const body = {
        name: addName.value,
        quantity: Number(addQuantity.value),
        price: Number(addPrice.value)
    };

    await api("/addProduct", "POST", body);
    e.target.reset();
    loadAll();
};


// UPDATE PRODUCT
document.getElementById("updateForm").onsubmit = async (e) => {
    e.preventDefault();

    const body = {
        id: Number(updId.value),
        name: updName.value,
        quantity: Number(updQuantity.value),
        price: Number(updPrice.value)
    };

    await api("/update", "PUT", body);
    e.target.reset();
    loadAll();
};


// SEARCH BY ID
btnSearchId.onclick = async () => {
    const id = searchById.value;
    if (!id) return alert("Enter ID");

    const data = await api("/productById/" + id);
    if (data) renderProducts([data]);
};


// SEARCH BY NAME
btnSearchName.onclick = async () => {
    const name = searchByName.value;
    if (!name) return alert("Enter Name");

    const data = await api("/product/" + name);
    if (data) renderProducts([data]);
};


// DELETE
async function deleteProduct(id) {
    await api("/delete/" + id, "DELETE");
    loadAll();
}


// EDIT AUTO-FILL
async function editProduct(id) {
    const p = await api("/productById/" + id);
    updId.value = p.id;
    updName.value = p.name;
    updQuantity.value = p.quantity;
    updPrice.value = p.price;
}


// Load all on startup
loadAll();
