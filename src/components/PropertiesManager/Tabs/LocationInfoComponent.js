import React from "react"

import ItemForm from "./ItemForm"

const Address = ({ setForm, formData }) => {
    const { street, city, province, region, country } = formData

    return (

        <form>
            <div className="row">
                <ItemForm label="Street Address" name="street" value={street} onChange={setForm} />
                <ItemForm label="City" name="city" value={city} onChange={setForm} />
                <ItemForm label="Province" name="province" value={province} onChange={setForm} />
                <ItemForm label="Region" name="region" value={region} onChange={setForm} />
                <ItemForm label="Country" name="country" value={country} onChange={setForm} />
            </div>
        </form>

    )
}

export default Address