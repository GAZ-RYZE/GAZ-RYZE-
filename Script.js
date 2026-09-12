// ---------- ДАННЫЕ УСЛУГ ----------
const servicesData = [
    {
        name: "Лендинг",
        price: "от 2 500 ₽",
        description: "Одностраничный сайт для презентации продукта или услуги.",
        fullDescription: "Идеальное решение для запуска рекламных кампаний, сбора заявок и тестирования гипотез. Включает форму захвата, аналитику, быструю загрузку и адаптив под все устройства. Оптимизирован для конверсии.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M7 13h6"/><path d="M7 17h4"/><circle cx="17" cy="15" r="2"/></svg>`,
        category: "Базовые"
    },
    {
        name: "Сайт-визитка (5 стр.)",
        price: "от 3 500 ₽",
        description: "Небольшой сайт о компании, услугах и контактах.",
        fullDescription: "5 информативных страниц: главная, услуги, портфолио, о нас, контакты. Быстрое создание, чистый код, адаптивный дизайн и SEO-оптимизация для быстрого старта.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h6"/></svg>`,
        category: "Базовые"
    },
    {
        name: "Корпоративный (10–15 стр.)",
        price: "от 5 000 ₽",
        description: "Полноценный сайт для бизнеса с развитой структурой.",
        fullDescription: "До 15 страниц, включая новости, блог, галерею, каталог, отзывы. Адаптив, SEO-оптимизация, удобная админка для самостоятельного управления контентом.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>`,
        category: "Бизнес"
    },
    {
        name: "Интернет-магазин (до 100 товаров)",
        price: "15 000–25 000 ₽",
        description: "Магазин с корзиной, оплатой и администрированием.",
        fullDescription: "Готовое решение для продаж. Интеграция с платёжными системами (ЮKassa, Robokassa), управление заказами, товарами, скидками и остатками. Адаптивный дизайн.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 7H6"/></svg>`,
        category: "Магазины"
    },
    {
        name: "Интернет-магазин (до 500 товаров)",
        price: "от 50 000 ₽",
        description: "Масштабируемый магазин с расширенным функционалом.",
        fullDescription: "Поддерживает большие каталоги, сложные фильтры, быстрый поиск, интеграцию с 1С и системами учёта. Возможность импорта товаров из CSV/Excel.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>`,
        category: "Магазины"
    },
    {
        name: "Каталог с фильтрами",
        price: "5 000–25 000 ₽",
        description: "Продвинутый каталог товаров с фильтрацией.",
        fullDescription: "Удобный интерфейс для поиска товаров, динамическая загрузка, сортировка по цене/популярности, адаптив под мобильные устройства. Фильтры по характеристикам, брендам, цене.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18"/><path d="M6 12h12"/><path d="M10 19h4"/></svg>`,
        category: "Функциональность"
    },
    {
        name: "CRM-интеграция (в т.ч. 1С)",
        price: "5 000–30 000 ₽",
        description: "Настройка интеграции с CRM-системами.",
        fullDescription: "Синхронизация заказов, клиентов, остатков с 1С, Битрикс24, АмоCRM, RetailCRM и другими системами. Автоматизация процессов, уменьшение ручной работы.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6a3 3 0 1 0 0 .01"/><path d="M15 6a3 3 0 1 0 0 .01"/><path d="M9 18a3 3 0 1 0 0 .01"/><path d="M15 18a3 3 0 1 0 0 .01"/><path d="M9 9v6"/><path d="M15 9v6"/><path d="M9 12h6"/></svg>`,
        category: "Интеграции"
    },
    {
        name: "Доработка сайта",
        price: "1 500 ₽/час",
        description: "Любые доработки, изменения дизайна и функционала.",
        fullDescription: "Поможем улучшить ваш текущий сайт: добавим модули, исправим ошибки, ускорим загрузку, обновим дизайн, настроим SEO. Работаем с любыми CMS и фреймворками.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.7-2.7z"/></svg>`,
        category: "Поддержка"
    },
    {
        name: "ChatGPT-бот для сайта",
        price: "от 8 000 ₽",
        description: "Интеграция AI-чатбота на ваш сайт.",
        fullDescription: "Интеграция ChatGPT на ваш сайт для круглосуточного общения с клиентами. Бот отвечает на вопросы, помогает с выбором товара, принимает заявки. Настраивается под ваш бизнес.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.5-5A8 8 0 1 1 21 12z"/><circle cx="9" cy="12" r="0.8" fill="currentColor"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/><circle cx="15" cy="12" r="0.8" fill="currentColor"/></svg>`,
        category: "Искусственный интеллект"
    },
    {
        name: "Генерация контента (AI)",
        price: "от 3 000 ₽",
        description: "Создание текстов и изображений с помощью ИИ.",
        fullDescription: "Генерация уникального контента для сайта: SEO-тексты, описания товаров, статьи для блога, изображения для соцсетей. Используем современные нейросети (GPT, Midjourney).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="M5.6 5.6l2.1 2.1"/><path d="M16.3 16.3l2.1 2.1"/><path d="M5.6 18.4l2.1-2.1"/><path d="M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.2"/></svg>`,
        category: "Искусственный интеллект"
    },
    {
        name: "Рекомендательная система",
        price: "от 12 000 ₽",
        description: "Персонализированные рекомендации товаров.",
        fullDescription: "Внедрение рекомендательного движка на основе поведенческих данных. «Вам также может понравиться», «С этим покупают» — увеличиваем средний чек и продажи.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7z"/></svg>`,
        category: "Искусственный интеллект"
    },
    {
        name: "Аналитика голоса (Voice AI)",
        price: "от 20 000 ₽",
        description: "Анализ звонков и голосовых сообщений нейросетью.",
        fullDescription: "Расшифровка и анализ звонков, определение эмоций, ключевых фраз, оценка качества работы менеджеров. Автоматическая отчётность по каждому диалогу.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/><path d="M8 21h8"/></svg>`,
        category: "Искусственный интеллект"
    }
];

// ---------- ОТОБРАЖЕНИЕ ДЕТАЛЕЙ УСЛУГИ ----------
function showServiceDetail(serviceIndex) {
    const service = servicesData[serviceIndex];
    if (!service) return;

    document.getElementById('serviceIcon').innerHTML = service.icon;
    document.getElementById('serviceName').textContent = service.name;
    document.getElementById('productCodeDisplay').textContent = service.price;
    document.getElementById('productInfoDisplay').textContent = service.fullDescription;

    const modal = document.getElementById('productCodeModal');
    modal.classList.add('active');

    document.getElementById('copyCodeBtn').dataset.index = serviceIndex;
}

function showNotice(msg) {
    const notice = document.getElementById('syncNotice');
    notice.textContent = msg;
    notice.classList.add('show');
    setTimeout(() => notice.classList.remove('show'), 2000);
}

// ---------- БЛОК ПРЕИМУЩЕСТВ ----------
function renderBenefits() {
    const container = document.getElementById('orderInstructionsContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="order-steps">
            <div class="steps-title">ПОЧЕМУ GAZ-RYZE</div>
            <div class="steps-container">
                <div class="step-card">
                    <div class="step-number">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <div class="step-title">Быстро</div>
                    <div class="step-desc">Сроки от 3 рабочих дней</div>
                </div>
                <div class="step-card">
                    <div class="step-number">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
                    </div>
                    <div class="step-title">Под ключ</div>
                    <div class="step-desc">Дизайн, вёрстка, программирование, SEO</div>
                </div>
                <div class="step-card">
                    <div class="step-number">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
                    </div>
                    <div class="step-title">Приватно</div>
                    <div class="step-desc">Полная скрытность информации о клиентах</div>
                </div>
                <div class="step-card">
                    <div class="step-number">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>
                    </div>
                    <div class="step-title">Портфолио</div>
                    <div class="step-desc">Более 50 успешных проектов</div>
                </div>
                <div class="step-card">
                    <div class="step-number">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                    </div>
                    <div class="step-title">Поддержка</div>
                    <div class="step-desc">Бесплатное сопровождение 30 дней</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <div class="bot-contact">
                    <span>Мы гарантируем полную конфиденциальность и скрытность информации о клиентах. <a href="https://t.me/GAZ_RYZE_manager" target="_blank">@GAZ_RYZE_manager</a> — свяжитесь с нами</span>
                </div>
            </div>
        </div>
    `;
}

// ---------- ГЕРОЙ ----------
function renderHero() {
    return `
        <div class="hero-section">
            <div class="hero-badge">✦ ВЕБ-СТУДИЯ</div>
            <h1>Создаём сайты,<br><span>которые работают</span></h1>
            <p>Разработка от лендинга до интернет-магазина. Индивидуальный подход, современный дизайн и высокое качество.</p>
            <div class="hero-tags">
                <span>✦ <strong>АДАПТИВ</strong></span>
                <span>✦ <strong>СЕО-ГОТОВ</strong></span>
                <span>✦ <strong>БЕЗОПАСНО</strong></span>
            </div>
        </div>
    `;
}

// ---------- ГЛАВНАЯ СТРАНИЦА ----------
function showMainPage() {
    let servicesHtml = '<div class="categories-grid">';
    servicesData.forEach((service, index) => {
        servicesHtml += `
            <div class="category-card service-card" onclick="showServiceDetail(${index})">
                <div class="category-icon">${service.icon}</div>
                <div class="category-name">${service.name}</div>
                <div class="service-description">${service.description}</div>
                <div class="service-price">${service.price}</div>
                <button class="view-code-btn" onclick="event.stopPropagation(); showServiceDetail(${index})">ЗАКАЗАТЬ</button>
            </div>
        `;
    });
    servicesHtml += '</div>';

    document.getElementById('mainContent').innerHTML = `
        ${renderHero()}
        <div class="catalog">
            <div class="section-title">
                <span>НАШИ УСЛУГИ</span>
                <span class="view-all">ВСЕ ПРОЕКТЫ →</span>
            </div>
            ${servicesHtml}
        </div>
    `;
    renderBenefits();
    window.scrollTo(0, 0);
}

// ---------- МОДАЛКА ДЕТАЛЕЙ УСЛУГИ ----------
function initServiceModal() {
    const modal = document.getElementById('productCodeModal');
    const closeBtn = document.getElementById('closeCodeBtn');
    const copyBtn = document.getElementById('copyCodeBtn');

    closeBtn.onclick = () => modal.classList.remove('active');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };

    copyBtn.onclick = () => {
        const contactsModal = document.getElementById('contactsModal');
        contactsModal.classList.add('active');
        modal.classList.remove('active');
    };
}

// ---------- МОДАЛКА КОНТАКТОВ ----------
function initContactsModal() {
    const modal = document.getElementById('contactsModal');
    const closeBtn = document.getElementById('closeContactsBtn');
    closeBtn.onclick = () => modal.classList.remove('active');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
}

// ---------- СКРОЛЛ ШАПКИ ----------
function initScrollEffect() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

// ---------- ЗАПУСК ----------
document.addEventListener('DOMContentLoaded', () => {
    showMainPage();
    initServiceModal();
    initContactsModal();
    initScrollEffect();
    renderBenefits();

    document.getElementById('homeLink').onclick = (e) => { e.preventDefault(); showMainPage(); };
    document.getElementById('catalogLink').onclick = (e) => { e.preventDefault(); showMainPage(); };
    document.getElementById('contactsMenuLink').onclick = (e) => {
        e.preventDefault();
        document.getElementById('contactsModal').classList.add('active');
    };
    document.getElementById('footerCatalog').onclick = (e) => {
        e.preventDefault();
        showMainPage();
        setTimeout(() => {
            const catalog = document.querySelector('.catalog');
            if (catalog) catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    };
    document.getElementById('footerContacts').onclick = (e) => {
        e.preventDefault();
        document.getElementById('contactsModal').classList.add('active');
    };
});

window.showServiceDetail = showServiceDetail;
window.showMainPage = showMainPage;
