import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const news = [
    {
      title: "Обновление 2.1: Глубины Забвения",
      date: "15 августа 2024",
      description: "Новые подземелья, босс-рейд и система гильдий в самом мрачном обновлении.",
    },
    {
      title: "Турнир Теней",
      date: "8 августа 2024", 
      description: "PvP событие с уникальными наградами для самых отважных воинов.",
    },
    {
      title: "Баланс классов",
      date: "1 августа 2024",
      description: "Переработка системы заклинаний и новые способности для некромантов.",
    },
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Мгновенный Action Combat",
      description: "Динамичные бои без автоатаки — каждый удар под твоим контролем",
    },
    {
      icon: "Users",
      title: "Массовые PvP битвы",
      description: "Сражения до 200 игроков на огромных аренах с разрушаемым окружением",
    },
    {
      icon: "Crown",
      title: "Политика и интриги",
      description: "Создавай альянсы, предавай врагов и борись за контроль над мирами",
    },
    {
      icon: "Skull",
      title: "Permadeath режим",
      description: "Режим высокого риска где смерть персонажа означает полную потерю",
    },
  ];

  const gameplayFeatures = [
    {
      title: "Исследование Бездны",
      description: "Погружайся в бесконечные слои подземного мира, каждый со своими опасностями",
    },
    {
      title: "Крафт Артефактов",
      description: "Создавай легендарное оружие из душ поверженных врагов",
    },
    {
      title: "Тёмная Магия",
      description: "Овладевай запретными заклинаниями ценой собственной души",
    },
  ];

  const classes = [
    {
      name: "Теневой Ассассин",
      icon: "Dagger",
      description: "Мастер скрытности и мгновенных убийств",
      abilities: ["Невидимость", "Критический удар", "Теневой прыжок"],
    },
    {
      name: "Некромант",
      icon: "Skull",
      description: "Повелитель мёртвых и тёмной магии",
      abilities: ["Воскрешение", "Проклятия", "Костяная броня"],
    },
    {
      name: "Берсерк",
      icon: "Axe",
      description: "Яростный воин, не знающий страха",
      abilities: ["Ярость", "Кровожадность", "Железная воля"],
    },
    {
      name: "Чумной Доктор",
      icon: "Beaker",
      description: "Распространяет болезни и исцеляет союзников",
      abilities: ["Чума", "Регенерация", "Ядовитый туман"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-abyss-mystic to-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" className="text-abyss-purple" size={32} />
              <h1 className="text-2xl font-oswald font-bold text-abyss-purple">ABYSS MMORPG</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-abyss-purple transition-colors">Главная</a>
              <a href="#news" className="hover:text-abyss-purple transition-colors">Новости</a>
              <a href="#advantages" className="hover:text-abyss-purple transition-colors">Преимущества</a>
              <a href="#gameplay" className="hover:text-abyss-purple transition-colors">Геймплей</a>
              <a href="#classes" className="hover:text-abyss-purple transition-colors">Классы</a>
            </div>
            <Button className="bg-abyss-purple hover:bg-abyss-violet">
              Играть сейчас
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-abyss-mystic/20 via-transparent to-abyss-mystic/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-abyss-red text-white">Бета-версия доступна</Badge>
            <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6 bg-gradient-to-r from-white via-abyss-purple to-white bg-clip-text text-transparent">
              СПУСТИСЬ В БЕЗДНУ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мрачная MMORPG где каждое решение имеет цену, а смерть - это только начало твоего путешествия в тёмный мир
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-abyss-purple hover:bg-abyss-violet text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Начать приключение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-abyss-purple hover:bg-abyss-purple">
                <Icon name="Youtube" size={20} className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 text-abyss-purple">
              ПОСЛЕДНИЕ НОВОСТИ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Следи за обновлениями из глубин бездны
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur border-abyss-purple/20">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-abyss-purple text-abyss-purple">
                      {item.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-oswald text-abyss-purple">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-6 bg-gradient-to-r from-abyss-mystic/10 via-transparent to-abyss-mystic/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 text-abyss-purple">
              НАШИ ПРЕИМУЩЕСТВА
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему Abyss MMORPG отличается от других игр
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300 bg-card/30 backdrop-blur border-abyss-purple/20">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-abyss-purple/20 w-16 h-16 flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-abyss-purple" />
                  </div>
                  <CardTitle className="text-lg font-oswald text-abyss-purple">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 text-abyss-purple">
              ГЕЙМПЛЕЙ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Погрузись в мир, где каждое решение влияет на твою судьбу
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {gameplayFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-abyss-purple/20 mt-1">
                    <Icon name="Hexagon" size={20} className="text-abyss-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-oswald font-semibold text-abyss-purple mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-abyss-mystic/20 to-abyss-purple/20 backdrop-blur border border-abyss-purple/30 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" size={64} className="text-abyss-purple mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">Геймплей трейлер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 px-6 bg-gradient-to-r from-abyss-mystic/10 via-transparent to-abyss-mystic/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 text-abyss-purple">
              КЛАССЫ ПЕРСОНАЖЕЙ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери свой путь в мрачном мире бездны
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classes.map((cls, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 bg-card/30 backdrop-blur border-abyss-purple/20 hover:border-abyss-purple/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-6 rounded-full bg-abyss-purple/20 w-20 h-20 flex items-center justify-center">
                    <Icon name={cls.icon as any} size={40} className="text-abyss-purple" />
                  </div>
                  <CardTitle className="text-xl font-oswald text-abyss-purple">
                    {cls.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {cls.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-abyss-purple mb-3">Способности:</p>
                    {cls.abilities.map((ability, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2 border-abyss-purple/50 text-abyss-purple">
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Flame" className="text-abyss-purple" size={24} />
              <span className="font-oswald font-bold text-abyss-purple">ABYSS MMORPG</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-abyss-purple transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-abyss-purple transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-abyss-purple transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border text-muted-foreground">
            <p>&copy; 2024 Abyss MMORPG. Все права защищены. Погрузись в бездну на свой страх и риск.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}