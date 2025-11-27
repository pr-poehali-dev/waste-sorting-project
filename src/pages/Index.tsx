import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'japan', 'sweden', 'germany', 'korea', 'facts', 'actions'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const countries = [
    {
      id: 'japan',
      name: 'Япония',
      title: 'Культура сортировки как искусство',
      icon: '🇯🇵',
      facts: [
        'Более 30 категорий отходов в некоторых городах',
        'Бутылки нужно мыть, снимать этикетки и крышки',
        'Дети в школах сами убирают и сортируют мусор',
        'Уровень переработки более 80%'
      ],
      color: 'bg-red-50 border-red-200'
    },
    {
      id: 'sweden',
      name: 'Швеция',
      title: 'Страна, которая покупает мусор',
      icon: '🇸🇪',
      facts: [
        'Перерабатывает 99% своих отходов',
        'Импортирует мусор из других стран',
        'Мусоросжигательные заводы обеспечивают электроэнергией сотни тысяч домов',
        'Минимальный вред для экологии'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'germany',
      name: 'Германия',
      title: '«Зеленая точка» и строгие правила',
      icon: '🇩🇪',
      facts: [
        'Желтый контейнер: упаковка (пластик, металл, тетрапак)',
        'Коричневый: органика',
        'Синий: бумага и картон',
        'Зеленый/белый: стекло (разделено по цветам)'
      ],
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      id: 'korea',
      name: 'Южная Корея',
      title: 'Пакеты со штрих-кодом',
      icon: '🇰🇷',
      facts: [
        'Пищевые отходы запрещено выбрасывать на свалки',
        'Биоразлагаемые пакеты со штрих-кодом',
        'Штрих-код идентифицирует домохозяйство',
        'Чем больше выбрасываешь — тем больше платишь'
      ],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const globalFacts = [
    {
      country: 'Норвегия',
      icon: '♻️',
      fact: 'При сдаче пластиковых бутылок и алюминиевых банок в автоматы можно получить деньги или купоны на скидку'
    },
    {
      country: 'Бразилия (Куритиба)',
      icon: '🥬',
      fact: 'В бедных районах можно обменивать мусор на свежие овощи, фрукты или билеты на автобус'
    },
    {
      country: 'Индонезия',
      icon: '🏥',
      fact: '«Мусорный медицинский пункт» — бедные семьи оплачивают услуги врача сданным мусором'
    }
  ];

  const actions = [
    {
      title: 'Начать с малого',
      description: 'Разделять хотя бы бумагу, пластик и стекло',
      icon: 'Recycle'
    },
    {
      title: 'Изучить маркировку',
      description: 'Искать треугольник со стрелками и цифрой на упаковке',
      icon: 'Search'
    },
    {
      title: 'Сдавать в переработку',
      description: 'Батарейки, лампочки и технику — только в специальные пункты',
      icon: 'Trash2'
    },
    {
      title: 'Сокращать потребление',
      description: 'Использовать многоразовые сумки и бутылки',
      icon: 'ShoppingBag'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <span className="text-2xl mr-2">♻️</span>
            {['hero', 'problem', 'japan', 'sweden', 'germany', 'korea', 'facts', 'actions'].map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(section)}
                className="text-xs md:text-sm"
              >
                {section === 'hero' && 'Главная'}
                {section === 'problem' && 'Проблема'}
                {section === 'japan' && 'Япония'}
                {section === 'sweden' && 'Швеция'}
                {section === 'germany' && 'Германия'}
                {section === 'korea' && 'Корея'}
                {section === 'facts' && 'Факты'}
                {section === 'actions' && 'Действия'}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="text-7xl mb-6">♻️🌍</div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-primary">
            Сортировка мусора
          </h1>
          <p className="text-xl md:text-3xl mb-4 text-secondary font-semibold">
            Мир без отходов — это реально?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Интересные факты и опыт разных стран
          </p>
          <Button size="lg" onClick={() => scrollToSection('problem')} className="hover-scale">
            Узнать больше
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="problem" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-primary">
              Зачем это вообще нужно?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 hover-scale border-2">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-3 text-destructive">Проблема</h3>
                <p className="text-base md:text-lg">
                  Каждый год в мире образуется более <strong>2 миллиардов тонн</strong> твердых коммунальных отходов
                </p>
              </Card>

              <Card className="p-6 hover-scale border-2">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-3 text-orange-600">Прогноз</h3>
                <p className="text-base md:text-lg">
                  К 2050 году этот объем может вырасти на <strong>70%</strong>
                </p>
              </Card>
            </div>

            <Card className="p-6 md:p-8 bg-primary/5 border-2 border-primary">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Решение</h3>
              <p className="text-base md:text-lg mb-4">
                Сортировка и переработка — это не просто «помыть банку», это:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: 'Leaf', text: 'Экономия природных ресурсов' },
                  { icon: 'Trash2', text: 'Сокращение свалок и полигонов' },
                  { icon: 'Zap', text: 'Энергосбережение' },
                  { icon: 'Heart', text: 'Забота о здоровье планеты' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={item.icon} className="text-primary flex-shrink-0" size={24} />
                    <span className="text-base md:text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {countries.map((country) => (
        <section
          key={country.id}
          id={country.id}
          className="min-h-screen flex items-center justify-center py-20 px-4"
        >
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="text-6xl md:text-7xl mb-4">{country.icon}</div>
                <Badge className="mb-4 text-base md:text-lg px-4 py-1">{country.name}</Badge>
                <h2 className="text-2xl md:text-4xl font-bold text-primary">
                  {country.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {country.facts.map((fact, factIdx) => (
                  <Card
                    key={factIdx}
                    className={`p-5 md:p-6 hover-scale border-2 ${country.color}`}
                  >
                    <div className="flex gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm md:text-base">{fact}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="facts" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-accent/30 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-primary">
              Интересные факты со всего мира
            </h2>

            <div className="space-y-6">
              {globalFacts.map((item, idx) => (
                <Card key={idx} className="p-6 md:p-8 hover-scale border-2">
                  <div className="flex gap-4">
                    <div className="text-4xl md:text-5xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-secondary">{item.country}</h3>
                      <p className="text-base md:text-lg">{item.fact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="actions" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-primary">
              Что можем сделать мы?
            </h2>
            <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground">
              Простые шаги для каждого
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {actions.map((action, idx) => (
                <Card key={idx} className="p-6 hover-scale border-2 bg-gradient-to-br from-white to-primary/5">
                  <Icon name={action.icon} className="text-primary mb-4" size={40} />
                  <h3 className="text-lg md:text-xl font-bold mb-2">{action.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{action.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 md:p-8 bg-primary text-primary-foreground text-center">
              <div className="text-4xl md:text-5xl mb-4">🌱</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Самая лучшая упаковка — та, которую не произвели
              </h3>
              <p className="text-base md:text-lg">
                Используйте многоразовые сумки и бутылки. Каждое маленькое действие имеет значение!
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/10 py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">♻️</div>
          <p className="text-lg font-semibold mb-2">Сортировка мусора: Мир без отходов</p>
          <p className="text-muted-foreground">
            Вместе мы можем сделать планету чище!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;