function App() {
    return (
        <div className="container">

            <header>
                <h1>Моё резюме</h1>

                <nav>
                    <a href="#about">Обо мне</a>
                    <a href="#skills">Навыки</a>
                    <a href="#education">Образование</a>
                    <a href="#contacts">Контакты</a>
                </nav>
            </header>

            <section id="about">
                <img
                    src="/profile.svg"
                    alt="Моя фотография"
                    className="profile"
                />

                <h2>Искак</h2>
                <h3>Начинающий веб-разработчик</h3>

                <p>
                    Я студент и изучаю программирование.
                    Интересуюсь веб-разработкой, Java и созданием сайтов.
                    Хочу развивать свои навыки и работать над интересными проектами.
                </p>
            </section>

            <section id="skills">
                <h2>Мои навыки</h2>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Java — базовый уровень</li>
                    <li>Git и GitHub</li>
                    <li>React — изучаю</li>
                </ul>
            </section>

            <section id="education">
                <h2>Образование</h2>

                <p>
                    Студент. Изучаю программирование,
                    веб-технологии, базы данных и компьютерные сети.
                </p>
            </section>

            <section id="contacts">
                <h2>Контакты</h2>

                <p>
                    GitHub:
                    <a
                        href="https://github.com/dominikdekoko1745"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Мой профиль GitHub
                    </a>
                </p>
            </section>

            <footer>
                <p>Моё резюме, 2026</p>
            </footer>

        </div>
    );
}

export default App;
