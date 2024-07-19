function store() {
    const cars = {
        id: keys.value,
        name: brand.value,
        price: price.value,
    };
    if (cars.id === "" || cars.name === "" || cars.price === "") {
        alert("Please enter all fields");
    } else {
        if (cars.id in localStorage) {
            alert("Car already exists");
        } else {
            localStorage.setItem(cars.id, JSON.stringify(cars));
            alert(`${cars.name} added successfully`);
        }
    }
}

function retrieve() {
    let search = ret.value;
    if (!search) {
        return res.innerHTML = `<p>No items</p>`;
    }
    let cars = localStorage.getItem(search);
    if (!cars) {
        res.innerHTML = `<p>Item not found</p>`;
    } else {
        cars = JSON.parse(cars);
        res.innerHTML = `<ul>
            <li>Brand: ${cars.name}</li>
            <li>Price: ${cars.price}</li>
            <li>Key: ${cars.id}</li>
        </ul>`;
    }
}

function remove() {
    let search = rets.value;
    if (!search) {
        alert("Please enter a key to delete");
        return;
    }
    if (localStorage.getItem(search)) {
        localStorage.removeItem(search);
        alert("Record removed successfully");
    } else {
        alert("Record not found");
    }
}

function clearRecords() {
    localStorage.clear();
    alert("All records cleared");
}
