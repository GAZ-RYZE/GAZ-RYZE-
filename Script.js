// ---------- ДАННЫЕ УСЛУГ ----------
const servicesData = [
    {
        name: "Лендинг",
        price: "от 2 500 ₽",
        description: "Одностраничный сайт для презентации продукта или услуги.",
        fullDescription: "Идеальное решение для запуска рекламных кампаний, сбора заявок и тестирования гипотез. Включает форму захвата, аналитику, быструю загрузку и адаптив под все устройства. Оптимизирован для конверсии.",
        icon: `<img src="./Images/Images5.png" alt="Лендинг">`,
        category: "Базовые"
    },
    {
        name: "Сайт-визитка (5 стр.)",
        price: "от 3 500 ₽",
        description: "Небольшой сайт о компании, услугах и контактах.",
        fullDescription: "5 информативных страниц: главная, услуги, портфолио, о нас, контакты. Быстрое создание, чистый код, адаптивный дизайн и SEO-оптимизация для быстрого старта.",
        icon: `<img src="./Images/Images6.png" alt="Сайт-визитка">`,
        category: "Базовые"
    },
    {
        name: "Корпоративный (10–15 стр.)",
        price: "от 5 000 ₽",
        description: "Полноценный сайт для бизнеса с развитой структурой.",
        fullDescription: "До 15 страниц, включая новости, блог, галерею, каталог, отзывы. Адаптив, SEO-оптимизация, удобная админка для самостоятельного управления контентом.",
        icon: `<img src="./Images/Images7.png" alt="Корпоративный сайт">`,
        category: "Бизнес"
    },
    {
        name: "Интернет-магазин (до 100 товаров)",
        price: "15 000–25 000 ₽",
        description: "Магазин с корзиной, оплатой и администрированием.",
        fullDescription: "Готовое решение для продаж. Интеграция с платёжными системами (ЮKassa, Robokassa), управление заказами, товарами, скидками и остатками. Адаптивный дизайн.",
        icon: `<img src="./Images/Images8.png" alt="Интернет-магазин до 100">`,
        category: "Магазины"
    },
    {
        name: "Интернет-магазин (до 500 товаров)",
        price: "от 50 000 ₽",
        description: "Масштабируемый магазин с расширенным функционалом.",
        fullDescription: "Поддерживает большие каталоги, сложные фильтры, быстрый поиск, интеграцию с 1С и системами учёта. Возможность импорта товаров из CSV/Excel.",
        icon: `<img src="./Images/Images1.png" alt="Интернет-магазин до 500">`,
        category: "Магазины"
    },
    {
        name: "Каталог с фильтрами",
        price: "5 000–25 000 ₽",
        description: "Продвинутый каталог товаров с фильтрацией.",
        fullDescription: "Удобный интерфейс для поиска товаров, динамическая загрузка, сортировка по цене/популярности, адаптив под мобильные устройства. Фильтры по характеристикам, брендам, цене.",
        icon: `<img src="./Images/Images2.png" alt="Каталог с фильтрами">`,
        category: "Функциональность"
    },
    {
        name: "CRM-интеграция (в т.ч. 1С)",
        price: "5 000–30 000 ₽",
        description: "Настройка интеграции с CRM-системами.",
        fullDescription: "Синхронизация заказов, клиентов, остатков с 1С, Битрикс24, АмоCRM, RetailCRM и другими системами. Автоматизация процессов, уменьшение ручной работы.",
        icon: `<img src="./Images/Images3.png" alt="CRM-интеграция">`,
        category: "Интеграции"
    },
    {
        name: "Доработка  сайта",
        price: "1 500 ₽/час",
        description: "Любые доработки, изменения дизайна и функционала.",
        fullDescription: "Поможем улучшить ваш текущий сайт: добавим модули, исправим ошибки, ускорим загрузку, обновим дизайн, настроим SEO. Работаем с любыми CMS и фреймворками.",
        icon: `<img src="./Images/Images4.png" alt="Доработка сайта">`,
        category: "Поддержка"
    },
    // === НОВЫЕ УСЛУГИ НА ОСНОВЕ LLM ===
    {
        name: "ChatGPT-бот для сайта",
        price: "от 8 000 ₽",
        description: "Интеграция AI-чатбота на ваш сайт.",
        fullDescription: "Интеграция ChatGPT на ваш сайт для круглосуточного общения с клиентами. Бот отвечает на вопросы, помогает с выбором товара, принимает заявки. Настраивается под ваш бизнес.",
        icon: `<img src="./Images/Images9.png" alt="ChatGPT-бот">`,
        category: "Искусственный интеллект"
    },
    {
        name: "Генерация контента ()",
        price: "от 3 000 ₽",
        description: "Создание текстов и изображений с помощью ИИ.",
        fullDescription: "Генерация уникального контента для сайта: SEO-тексты, описания товаров, статьи для блога, изображения для соцсетей. Используем современные нейросети (GPT, Midjourney).",
        icon: `<img src="./Images/Images10.png" alt="Генерация контента">`,
        category: "Искусственный интеллект"
    },
    {
        name: "Рекомендательная система",
        price: "от 12 000 ₽",
        description: "Персонализированные рекомендации товаров.",
        fullDescription: "Внедрение рекомендательного движка на основе поведенческих данных. «Вам также может понравиться», «С этим покупают» — увеличиваем средний чек и продажи.",
        icon: `<img src="./Images/Images11.png" alt="Рекомендательная система">`,
        category: "Искусственный интеллект"
    },
    {
        name: "Аналитика голоса (Voice AI)",
        price: "от 20 000 ₽",
        description: "Анализ звонков и голосовых сообщений нейросетью.",
        fullDescription: "Расшифровка и анализ звонков, определение эмоций, ключевых фраз, оценка качества работы менеджеров. Автоматическая отчётность по каждому диалогу.",
        icon: `<img src="./Images/Images12.png" alt="Voice AI аналитика">`,
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
                    <div class="step-number">⚡</div>
                    <div class="step-title">Быстро</div>
                    <div class="step-desc">Сроки от 3 рабочих дней</div>
                </div>
                <div class="step-card">
                    <div class="step-number">🎯</div>
                    <div class="step-title">Под ключ</div>
                    <div class="step-desc">Дизайн, вёрстка, программирование, SEO</div>
                </div>
                <div class="step-card">
                    <div class="step-number">📞</div>
                    <div class="step-title">Поддержка</div>
                    <div class="step-desc">Бесплатное сопровождение 30 дней</div>
                </div>
                <div class="step-card">
                    <div class="step-number">💼</div>
                    <div class="step-title">Портфолио</div>
                    <div class="step-desc">Более 50 успешных проектов</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <div class="bot-contact">
                    <span>📲 <a href="https://t.me/GAZ_RYZE_manager" target="_blank">@GAZ_RYZE_manager</a> — свяжитесь с нами</span>
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
                <button class="view-code-btn" onclick="event.stopPropagation(); showServiceDetail(${index})">📞 ЗАКАЗАТЬ</button>
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
