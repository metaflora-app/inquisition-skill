# Metaflora Inquisition v0.1.0

Первый релиз `metaflora-inquisition` — skill для проверки утверждений под давлением.

Он запускает процесс:

```text
ADMONITIO -> INTERROGATIO -> DECISIO -> TORTURA -> BULLA
```

## Что делает

- Находит происхождение утверждения.
- Проверяет источники через `Fontium`.
- Проверяет логику через `Rationis`.
- Проверяет контекст через `Contextus`.
- Решает, нужна ли точечная `TORTURA`.
- Выдаёт финальную `BULLA INQUISITIONIS`.
- Даёт один из пяти вердиктов: `ABSOLVO`, `ABSOLVO CUM NOTA`, `PENITENTIA`, `ANATHEMA`, `IGNORAMUS`.
- При `PENITENTIA` и `ANATHEMA` обязательно формулирует исправленную версию утверждения.

## Когда использовать

- `это правда?`
- `перепроверь`
- `проверь факт`
- `fact-check`
- `допроси это`
- `/inquisition`
- утверждение другого AI;
- статистика без понятного источника;
- цитата, которую нужно сверить;
- продуктовый или модельный benchmark;
- прогноз, который выглядит слишком уверенно.

## Assets

В релиз входят:

- `metaflora-inquisition.skill`;
- `SKILL.md`;
- три release sketchnotes;
- checksum-и;
- установка и подробные release notes.

## SHA-256

См. `docs/checksums.txt` в репозитории или release bundle.

## Install

Скачать `metaflora-inquisition.skill` из assets релиза и импортировать в skill-aware harness.

Ручная установка:

```bash
mkdir -p ~/.codex/skills/metaflora-inquisition
cp skills/metaflora-inquisition/SKILL.md ~/.codex/skills/metaflora-inquisition/SKILL.md
```

