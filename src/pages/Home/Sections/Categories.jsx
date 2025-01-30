import { useTranslation } from "react-i18next";
import { categoriesArray } from "../../../data/const";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
    const { t } = useTranslation()
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
                        categoriesArray.map((category, index) => {
                            return (
                                <li key={index} className="categories__item" data-aos="fade-up">
                                    <div className="categories__item-image">
                                        <img src={category.image} alt={category.title} />
                                    </div>
                                    <div className="categories__item-content">
                                        <h5 className="h4">{category.title}</h5>
                                        <p>
                                            {category.description}
                                        </p>

                                        <a href={`/catalog/${category.link}`}>{t('more')} <FaArrowRightLong />
                                        </a>
                                    </div>

                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </section>)
}

export default Categories