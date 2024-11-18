const Filters = ({
    onFilter,
    onSelectCategory,
    onSort
}: {
    onFilter: (query: string) => void;
    onSelectCategory: (query: string) => void;
    onSort: (query: string) => void;
}) => {

    const categoryOptions = [{ value: "Electronics" }, { value: "Fitness" }, { value: "Home Appliances" }, { value: "Furniture" }, { value: "Bags" }, { value: "Kitchen" }, { value: "Sports" }, { value: "Outdoor Gear" }]
    const sortingOption = [
        { value: "price-asc", name: "Price: Low to High" },
        { value: "price-desc", name: "Price: High to Low" },
        { value: "name-asc", name: "Name: A to Z" },
        { value: "name-desc", name: "Name: Z to A" },

    ]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilter(event.target.value);
    };

    const handleFilterProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectCategory(event.target.value)
    }
    const handleSortProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSort(event.target.value);
    };
    return (
        <div className="mb-4 mx-20 mt-4 flex">
            <input
                type="text"
                placeholder="Search Products.."
                onChange={handleChange}
                className="border p-2 w-[500px]"
            />
            <select className="border rounded ml-2 px-2" name="category" id="category" onChange={handleFilterProduct}>
                <option value="">Select Category</option>
                {categoryOptions?.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.value}</option>
                    )
                })}

            </select>
            <select
                className="border rounded ml-2 px-2"
                name="sort"
                id="sort"
                onChange={handleSortProducts}
            >
                <option value="">Sort By</option>
                {sortingOption?.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.name}</option>
                    )
                })}
            </select>
        </div>
    );
};

export default Filters;
