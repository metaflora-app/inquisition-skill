# Установка Metaflora Inquisition

Этот документ описывает несколько способов установки `metaflora-inquisition`.

## Что устанавливается

Основной файл:

```text
skills/metaflora-inquisition/SKILL.md
```

Готовый пакет:

```text
dist/metaflora-inquisition.skill
```

Полный архив релиза:

```text
dist/metaflora-inquisition-release-v0.1.0.zip
```

## Способ 1: установка `.skill`

Если среда поддерживает импорт `.skill`, используй файл:

```text
dist/metaflora-inquisition.skill
```

Можно попросить агента:

```text
Установи этот skill-пакет: dist/metaflora-inquisition.skill
```

После установки открой новый чат, чтобы skill был подхвачен заново.

## Способ 2: Codex global skill

Скопируй skill в глобальную директорию Codex:

```bash
mkdir -p ~/.codex/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md ~/.codex/skills/metaflora-inquisition/SKILL.md
```

Проверь:

```bash
test -f ~/.codex/skills/metaflora-inquisition/SKILL.md
```

Быстрая проверка имени:

```bash
rg -n "^name: metaflora-inquisition" ~/.codex/skills/metaflora-inquisition/SKILL.md
```

## Способ 3: project-local skill

Если skill должен жить внутри конкретного проекта:

```bash
mkdir -p .agents/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md .agents/skills/metaflora-inquisition/SKILL.md
```

Затем добавь в проектный `AGENTS.md` короткую инструкцию:

```md
Use `metaflora-inquisition` when the user asks to verify a claim, statistic,
quote, benchmark, forecast, competitor statement, or another AI's output.
```

## Способ 4: clone from GitHub

```bash
git clone https://github.com/metaflora-app/inquisition-skill.git
cd inquisition-skill
npm test
```

Затем выбери global или project-local установку.

## Проверка после установки

Открой новый чат и напиши:

```text
/inquisition: Reels с субтитрами получают на 40% больше охвата
```

Ожидаемые блоки:

- `ADMONITIO`;
- `INTERROGATIO`;
- `Fontium`;
- `Rationis`;
- `Contextus`;
- решение трибунала;
- `BULLA INQUISITIONIS`;
- один финальный вердикт.

## Проверка release bundle

```bash
npm test
unzip -t dist/metaflora-inquisition.skill
unzip -t dist/metaflora-inquisition-release-v0.1.0.zip
shasum -a 256 -c docs/checksums.txt
shasum -a 256 -c docs/release-bundle.sha256
```

## Частые проблемы

### Skill не подхватился

Открой новый чат или перезапусти harness. Многие среды индексируют skill-директорию при старте сессии.

### Команда `/inquisition` не сработала

Попробуй естественную фразу:

```text
инквизиция: [утверждение]
```

или:

```text
проверь под давлением: [утверждение]
```

### Веб-поиск недоступен

Skill должен продолжить работу в degraded-режиме и явно указать ограничение в булле.

### Тезис слишком широкий

Сначала разложи его на атомарные claims.

Пример:

```text
AI изменит образование
```

Лучше:

```text
К 2027 году более 50% школьников в США будут регулярно пользоваться AI-тьюторами.
```

## Удаление

Global Codex:

```bash
rm -rf ~/.codex/skills/metaflora-inquisition
```

Project-local:

```bash
rm -rf .agents/skills/metaflora-inquisition
```
