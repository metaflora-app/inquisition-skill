# Установка Metaflora Inquisition

## Быстрый путь

Готовый пакет лежит здесь:

```text
dist/metaflora-inquisition.skill
```

Если среда умеет импортировать `.skill`, открой файл или попроси агента установить его.

## Ручная установка в Codex

```bash
mkdir -p ~/.codex/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md ~/.codex/skills/metaflora-inquisition/SKILL.md
```

Проверка:

```bash
test -f ~/.codex/skills/metaflora-inquisition/SKILL.md
```

## Ручная установка в проект

Если скилл нужен только внутри конкретного репозитория:

```bash
mkdir -p .agents/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md .agents/skills/metaflora-inquisition/SKILL.md
```

После этого добавь упоминание в проектный `AGENTS.md`, если harness сам не индексирует `.agents/skills`.

## Проверка после установки

Открой новый чат и дай атомарное утверждение:

```text
инквизиция: Reels с субтитрами получают на 40% больше охвата
```

Хороший запуск должен пройти минимум:

- `ADMONITIO`;
- `INTERROGATIO` с Fontium, Rationis, Contextus;
- решение трибунала;
- `BULLA INQUISITIONIS`.

Если веб-поиск недоступен, скилл должен честно пометить режим как degraded и ограничить выводы по источникам.

