import conveyor from "../../../assets/images/about/conveyor.png";
import { useTranslation } from 'react-i18next';
const Conveer = () => {
    const { t } = useTranslation()
    return (
        <section className='conveer'>
            <div className="container">
                <img src={conveyor} alt="conveer" data-aos="zoom-out"/>
                <div className="h3">
                    {t('about_title')}
                </div>
            </div>
        </section>)
}

export default Conveer