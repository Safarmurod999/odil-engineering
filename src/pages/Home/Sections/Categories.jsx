import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../data/const";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from 'utils/context';
import { selectCategoriesData } from "store/selectors/categories";
import { fetchCategories } from "store/slices/categoriesSlice";
import { SkeletonCategory } from "components/ui/Skeletons/Skeleton";
const Categories = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const categories = useSelector(selectCategoriesData);
    const { lang } = useLanguage();
    useEffect(() => {
        dispatch(fetchCategories({}));
    }, [dispatch])
    return (
        <section className='categories'>
            <div className="container">
                <div className="h3 title">
                    <span>
                        {t('categories')}
                    </span>
                </div>
                <ul className="categories__list">
                    {
                        !categories.loading && categories?.categoriesList?.data.length ?
                            categories?.categoriesList?.data.map((category, index) => {
                                if (category.is_active) {
                                    {
                                        return (
                                            <li key={index} className="categories__item" data-aos="fade-up">
                                                <div className="categories__item-image">
                                                    <img src={`${BASE_URL}/${category.image}`} alt={category.title} />
                                                </div>
                                                <div className="categories__item-content">
                                                    <h5 className="h4">{category["name_" + lang]}</h5>
                                                    <p>
                                                        {category["description_" + lang]}
                                                    </p>
                                                    <a href={`/catalog/${category.id}`}>{t('more')} <FaArrowRightLong />
                                                    </a>
                                                </div>

                                            </li>

                                        )
                                    }

                                }
                            }) : categories.loading ? <SkeletonCategory /> : ""
                    }
                </ul>
            </div>
        </section>)
}

export default Categories