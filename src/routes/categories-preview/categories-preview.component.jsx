import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Footer from '../../components/footer/footer.component';

import Spinner from '../../components/spinner/spinner.component'

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);

  return (
    <Fragment>
      {loading ? (
        <Spinner/>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
          }
        )
      )}
      <Footer />
    </Fragment>
  );
};

export default CategoriesPreview;
