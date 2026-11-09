import { readFileSync } from 'node:fs';

export const name = 'technical-terms-en-zh';
export const inject = ['systemPrompt'];

export function apply(ctx) {
  const text = readFileSync(new URL('../terminology.md', import.meta.url), 'utf8');

  // Cordis removes this registration when the plugin unloads.
  // Cordis 会在插件卸载时移除此注册。
  ctx.systemPrompt.section({
    name: 'technical-terms-en-zh:rules',
    order: 100,
    text,
    interpolate: false,
  });
}
