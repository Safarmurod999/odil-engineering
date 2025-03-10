import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLanguage } from 'utils/context';
import { selectCategoriesData } from "store/selectors/categories";
import { fetchCategoriesDetail } from "store/slices/categoriesSlice";
import { selectProductsData } from "store/selectors/products";
import { fetchProducts } from "store/slices/productsSlice";
import { BASE_URL } from '../../../data/const';
import { useTranslation } from 'react-i18next';
import { SkeletonCard } from '../../../components/ui/Skeletons/Skeleton';
const Main = () => {
    const { id } = useParams();
    const { lang } = useLanguage();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { categoriesData, loading } = useSelector(selectCategoriesData);
    const products = useSelector(selectProductsData);
    const filteredProducts = products.productsList?.data.filter(product => product.category_id == id);

    useEffect(() => {
        dispatch(fetchCategoriesDetail(id));
        dispatch(fetchProducts({}));
    }, [dispatch, id])

    return (
        <section className="catalog">
            <div className="container">
                {
                    !loading ? categoriesData ? <>
                        <div className="catalog__title title">
                            <span>
                                {categoriesData["name_" + lang]}
                            </span>
                        </div>
                        <p className='catalog__text'>
                            {categoriesData["description_" + lang]}
                        </p>
                        <div className="catalog__list">
                            {
                                !loading && filteredProducts.length ? filteredProducts.map((product, index) => {
                                    if (product.is_active) {
                                        return (
                                            <div key={product?.id} className="catalog__item">
                                                <div className="catalog__item-img">
                                                    <img src={`${BASE_URL}/${product?.image}`} alt="product image" />
                                                </div>

                                                <div className='catalog__item-content'>
                                                    <div className="catalog__item-title h6">
                                                        {
                                                            product["name_" + lang]
                                                        }
                                                    </div>
                                                    <p className='catalog__item-text'>
                                                        {
                                                            product["description_" + lang]
                                                        }
                                                    </p>
                                                    <Link aria-label='product-link' to={`/catalog/${categoriesData?.id}/products/${product?.id}`} className="catalog__link">{t('more')}</Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                }) : loading ? <SkeletonCard /> : "No data"
                            }
                        </div>
                    </> : "No data" : <div>Loading...</div>
                }
            </div>

        </section>
    )
}

export default Main