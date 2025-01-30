import { Link, useParams } from 'react-router';
import { categoriesArray } from '../../../data/const';
import cornered from "../../../assets/images/products/conveyer-cornered/image.png";
import lentochnaya from "../../../assets/images/products/conveyer-lentochnaya/image.png";
import rounded from "../../../assets/images/products/conveyer-rounded/image.png";
import straight from "../../../assets/images/products/conveyer-straight/image.png";

const Main = () => {
    const { title } = useParams();
    const data = categoriesArray.find(item => item.link === title);

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__title title">
                    <span>
                        {data.title}
                    </span>
                </div>
                <p className='catalog__text'>
                    Изготовлено более 7000 конвейеров. Для отдельных продуктов,
                    ящиков, поддонов. Рекомендуем подходящее оборудование,
                    технологию и схему движения, 3D моделирование для
                    визуализации и надежности.
                </p>
                <div className="catalog__list">
                    <div className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={lentochnaya} alt="lentochnaya" />
                        </div>

                        <div>
                            <div className="catalog__item-title h6">
                                Конвейеры прямые разные
                            </div>
                            <p className='catalog__item-text'>
                                Перемещение по прямой любых продуктов для
                                всех отраслей, различных нагрузок и любой
                                производительности.
                            </p>
                            <Link to={`/catalog/${title}/cornered`} className="catalog__link">Подробнее</Link>
                        </div>
                    </div>
                    <div className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={rounded} alt="rounded" />
                        </div>
                        <div>
                            <div className="catalog__item-title h6">
                                Конвейеры прямые разные
                            </div>
                            <p className='catalog__item-text'>
                                Перемещение по прямой любых продуктов для
                                всех отраслей, различных нагрузок и любой
                                производительности.
                            </p>
                            <Link to={`/catalog/${title}/cornered`} className="catalog__link">Подробнее</Link>
                        </div>
                    </div>
                    <div className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={straight} alt="straight" />
                        </div>
                        <div>
                            <div className="catalog__item-title h6">
                                Конвейеры прямые разные
                            </div>
                            <p className='catalog__item-text'>
                                Перемещение по прямой любых продуктов для
                                всех отраслей, различных нагрузок и любой
                                производительности.
                            </p>
                            <Link to={`/catalog/${title}/cornered`} className="catalog__link">Подробнее</Link>
                        </div>
                    </div>
                    <div className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={cornered} alt="cornered" />
                        </div>
                        <div>
                            <div className="catalog__item-title h6">
                                Конвейеры прямые разные
                            </div>
                            <p className='catalog__item-text'>
                                Перемещение по прямой любых продуктов для
                                всех отраслей, различных нагрузок и любой
                                производительности.
                            </p>
                            <Link to={`/catalog/${title}/cornered`} className="catalog__link">Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Main