# Metaflora Inquisition v0.1.0

Первый публичный релиз `metaflora-inquisition`: skill для проверки утверждений под давлением.

## Предисловие

Иногда факт выглядит слишком уверенно.

Цифра попадает в пост. Цитата звучит убедительно. Benchmark красиво ложится в презентацию. Конкурент пишет заявление, которое хочется быстро использовать в positioning. Другой AI выдаёт аккуратный ответ с источниками, таблицами и ровным тоном.

В этот момент нужен процесс, который заставляет утверждение пройти проверку.

`metaflora-inquisition` делает именно это: устанавливает происхождение тезиса, разбирает источники, проверяет логику, возвращает контекст, назначает точечное давление при необходимости и завершает работу буллой.

## Главный маршрут

```text
ADMONITIO -> INTERROGATIO -> DECISIO TRIBUNALIS -> TORTURA -> BULLA
```

## Что делает skill

- Устанавливает происхождение утверждения.
- Ищет первичный источник.
- Проверяет живость URL.
- Разбирает точность цитирования.
- Проверяет источник через `Fontium`.
- Проверяет логику через `Rationis`.
- Проверяет контекст через `Contextus`.
- Фиксирует одну уязвимость от каждого инквизитора.
- Передаёт выводы трибуналу.
- Назначает `TORTURA`, если глубина проверки требует давления.
- Сталкивает `Advocatus Diaboli` и `Advocatus Fidei` в одной точке.
- Выпускает `BULLA INQUISITIONIS`.
- Даёт один финальный вердикт.
- Формулирует исправленную версию для `PENITENTIA` и `ANATHEMA`.

## Когда использовать

Подходит для:

- `это правда?`;
- `перепроверь`;
- `проверь факт`;
- `fact-check`;
- `допроси это`;
- `/inquisition`;
- заявлений конкурентов;
- спорных цифр;
- цитат;
- прогнозов;
- benchmark-сравнений;
- выводов другого AI;
- research notes;
- investor materials;
- статей и постов;
- PRD и стратегических документов.

## Вердикты

| Вердикт | Значение |
| --- | --- |
| `ABSOLVO` | утверждение прошло проверку |
| `ABSOLVO CUM NOTA` | утверждение пригодно с оговорками |
| `PENITENTIA` | утверждение требует исправления |
| `ANATHEMA` | утверждение противоречит проверенным данным |
| `IGNORAMUS` | данных для проверки недостаточно |

## Что входит в релиз

- `dist/metaflora-inquisition.skill`;
- `dist/metaflora-inquisition-release-v0.1.0.zip`;
- `skills/metaflora-inquisition/SKILL.md`;
- `README.md`;
- `docs/install.md`;
- `docs/release-notes.md`;
- `docs/checksums.txt`;
- `docs/release-bundle.sha256`;
- `assets/inquisition-pipeline-sketchnote.png`;
- `assets/three-inquisitors-sketchnote.png`;
- `assets/verdicts-sketchnote.png`;
- `.codex-plugin/plugin.json`;
- `.claude-plugin/plugin.json`;
- smoke-тесты.

## Установка

### Через `.skill`

Скачай:

```text
metaflora-inquisition.skill
```

Импортируй в skill-aware среду.

### В Codex вручную

```bash
mkdir -p ~/.codex/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md ~/.codex/skills/metaflora-inquisition/SKILL.md
```

### В проект

```bash
mkdir -p .agents/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md .agents/skills/metaflora-inquisition/SKILL.md
```

## Первый запуск

```text
/inquisition: Reels с субтитрами получают на 40% больше охвата
```

```text
инквизиция: Claude лучше GPT-4o для кодинга
```

```text
проверь под давлением: этот benchmark доказывает, что модель X лучшая
```

## Проверка релиза

```bash
npm test
unzip -t dist/metaflora-inquisition.skill
unzip -t dist/metaflora-inquisition-release-v0.1.0.zip
shasum -a 256 -c docs/checksums.txt
shasum -a 256 -c docs/release-bundle.sha256
```

## SHA-256

Checksum-и лежат в:

```text
docs/checksums.txt
docs/release-bundle.sha256
```

## Скетчноуты

В релизе три картинки:

- конвейер верификации;
- три независимых инквизитора;
- пять вердиктов.

Они лежат в `assets/` и используются в README.

## Для maintainer

Перед публикацией release card:

1. Убедиться, что tag `v0.1.0` указывает на актуальный commit.
2. Вставить этот текст в GitHub Release.
3. Прикрепить `dist/metaflora-inquisition.skill`.
4. Прикрепить `dist/metaflora-inquisition-release-v0.1.0.zip`.
5. Проверить README-render на GitHub.
6. Проверить, что картинки отображаются.
