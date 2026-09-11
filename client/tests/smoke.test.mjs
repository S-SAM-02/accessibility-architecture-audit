import assert from 'node:assert/strict';
const html=await (await import('node:fs/promises')).readFile(new URL('../index.html',import.meta.url),'utf8');
assert.match(html,/lang="en"/); assert.match(html,/id="root"/); console.log('client smoke test passed');
