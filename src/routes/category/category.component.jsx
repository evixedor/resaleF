import { useState, useEffect, Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { CategoryContainer, Title } from "./category.styles";

const GET_CATEGORY = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      title
      id
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	const { loading, error, data } = useQuery(GET_CATEGORY, {
		variables: { title: category },
	});


	console.log("loading", loading)
  console.log("data", data)
	console.log("error2", error) 

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	// const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	if (data) {
	// 		const {
	// 			getCollectionsByTitle: { items },
	// 		} = data;
	// 		setProducts(items);
	// 	}
	// }, [category, data]);

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<Title>{category.toUpperCase()}</Title>
					<CategoryContainer>
						{products &&
							products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
					</CategoryContainer>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Category;
