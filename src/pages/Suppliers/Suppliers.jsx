import React from 'react'
import { Link } from 'react-router'

const partialArray = [
    {
        id: 0,
        title_ru: 'Механические части',
        title_uz: 'Mexanik qismlar',
        title_en: 'Mechanical parts',
        items: [
            {
                id: 0,
                title_ru: 'Подшипники европейские и японские бренды',
                title_uz: 'Podshipniklar Yevropa va yapon brendlari',
                title_en: 'Bearings European and Japanese brands',
            },
            {
                id: 1,
                title_ru: 'Приводные цепи Европейские и японские бренды',
                title_uz: 'Drayv zanjirlari Yevropa va yapon brendlari',
                title_en: 'Drive chains European and Japanese brands',
            },
            {
                id: 2,
                title_ru: 'Метизная продукция',
                title_uz: 'Uskuna mahsulotlari',
                title_en: 'Hardware products',
            }
        ]
    },
    {
        id: 1,
        title_ru: 'Электрика, Электроника, Автоматика',
        title_uz: 'Elektr, elektronika, avtomatlashtirish',
        title_en: 'Electrics, Electronics, Automation',
        items: [
            {
                id: 0,
                title_ru: 'Приводная техника - европейские бренды',
                title_uz: 'Drayv texnologiyasi - Evropa brendlari',
                title_en: 'Drive technology - European brands',
            },
            {
                id: 1,
                title_ru: 'Приводная техника - европейские бренды электрические компоненты для шкафов управления',
                title_uz: 'Boshqaruv kabinetlari uchun elektr komponentlar',
                title_en: 'Electrical components for control cabinets',
            },
        ]
    },
    {
        id: 2,
        title_ru: 'Изготовление по чертежам ',
        title_uz: 'Chizmalarga muvofiq ishlab chiqarish',
        title_en: 'Manufacturing according to drawings',
        items: [
            {
                id: 0,
                title_ru: 'Токарные и фрезерные работы',
                title_uz: 'Payvandlash va frezalash ishlari',
                title_en: 'Turning and milling work',
            },
            {
                id: 1,
                title_ru: 'РЛазерная резка, гибка, окраска',
                title_uz: 'Lazer bilan kesish, bükme, bo`yash',
                title_en: 'Laser cutting, bending, painting',
            },
        ]
    },
    {
        id: 3,
        title_ru: 'Услуги',
        title_uz: 'Xizmatlar',
        title_en: 'Services',
        items: [
            {
                id: 0,
                title_ru: 'Монтаж и пусконаладка, сервисные работы, Оцинковка, воронение, Автоматизация конвейерных линий ',
                title_uz: 'O`rnatish va ishga tushirish, xizmat ko`rsatish ishlari, Galvanizatsiya, ko`klash,Konveyer liniyalarini avtomatlashtirish',
                title_en: 'Installation and commissioning, service work, Galvanizing, bluing, Automation of conveyor lines',
            },
            {
                id: 1,
                title_ru: 'Электроинструмент',
                title_uz: 'Elektr asboblari',
                title_en: 'Power tools',
            },
        ]
    }
]
const Service = () => {
    return (
        <section className='suppliers'>
            <div className='container'>
                <div className='title'>
                    <span>ЗАКУПКИ КОМПЛЕКТУЮЩИХ И МАТЕРИАЛОВ</span>
                </div>
                <p className='suppliers__text'>
                    Наша компания ставит перед собой цель стать
                    ведущим поставщиком оборудования и решений
                    для автоматизации складских и производственных
                    процессов в Узбекистане. Для достижения своей цели
                    мы всегда ищем качественных и надежных поставщиков.
                    Поставщики, с которыми мы работаем, являются лучшими
                    в своих областях.
                </p>

                <div className="suppliers__title">
                    НАМ НЕОБХОДИМЫ СЛЕДУЮЩИЕ КОМПЛЕКТУЮЩИЕ И МАТЕРИАЛЫ
                </div>
                <ul className='suppliers__list'>
                    {
                        partialArray.map((item) => (
                            <li key={item.id} className='suppliers__list-item'>
                                <span>{item.title_ru}</span>
                                <ul className='suppliers__list-subitems'>
                                    {
                                        item.items.map((subItem) => (
                                            <li key={subItem.id}>
                                                <a href={subItem.to}>{subItem.title_ru}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>

                <p className='suppliers__text'>
                    Хотите стать нашим поставщиком? Заполните анкету о своей
                    компании о продукции, которую Ваша компания предлагает. <br />

                    <strong>
                        Внимание! Не присылайте коммерческие предложения
                        на почту, внесите Ваше предложение в форму обратной связи.
                    </strong>
                </p>

                <Link to="/suppliers-inner" className='forms__btn suppliers__link'>Стать поставщиком</Link>
            </div>
        </section>
    )
}

export default Service