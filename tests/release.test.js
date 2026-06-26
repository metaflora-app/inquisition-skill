const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

test('skill package has the expected archive member', () => {
  const listing = execFileSync('unzip', ['-l', 'dist/metaflora-inquisition.skill'], {
    cwd: root,
    encoding: 'utf8'
  });

  assert.match(listing, /metaflora-inquisition\/SKILL\.md/);
});

test('skill source declares release identity and tribunal stages', () => {
  const skill = read('skills/metaflora-inquisition/SKILL.md');

  assert.match(skill, /^name: metaflora-inquisition/m);
  for (const stage of ['ADMONITIO', 'INTERROGATIO', 'DECISIO', 'TORTURA', 'BULLA']) {
    assert.match(skill, new RegExp(stage));
  }
});

test('all verdicts are documented in the skill', () => {
  const skill = read('skills/metaflora-inquisition/SKILL.md');

  for (const verdict of ['ABSOLVO', 'ABSOLVO CUM NOTA', 'PENITENTIA', 'ANATHEMA', 'IGNORAMUS']) {
    assert.match(skill, new RegExp(verdict));
  }
});

test('release assets exist', () => {
  for (const asset of [
    'assets/inquisition-pipeline-sketchnote.png',
    'assets/three-inquisitors-sketchnote.png',
    'assets/verdicts-sketchnote.png'
  ]) {
    const stat = fs.statSync(path.join(root, asset));
    assert.ok(stat.size > 100_000, `${asset} should be a real generated image`);
  }
});

test('README links the distributable and sketchnotes', () => {
  const readme = read('README.md');

  assert.match(readme, /dist\/metaflora-inquisition\.skill/);
  assert.match(readme, /assets\/inquisition-pipeline-sketchnote\.png/);
  assert.match(readme, /assets\/three-inquisitors-sketchnote\.png/);
  assert.match(readme, /assets\/verdicts-sketchnote\.png/);
});

