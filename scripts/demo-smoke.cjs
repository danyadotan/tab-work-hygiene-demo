// Playwright is intentionally not an app dependency. Install it outside the app, e.g.:
//   npm install --prefix /tmp/pw playwright && npx --prefix /tmp/pw playwright install chromium
//   npm run build && npm start   # in another shell
//   NODE_PATH=/tmp/pw/node_modules node scripts/demo-smoke.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({headless:true, args:['--no-sandbox']});
  const page = await browser.newPage({ viewport:{width:1440,height:1000} });
  const errors=[]; page.on('pageerror', e=>errors.push(e.message));
  await page.goto(process.env.DEMO_URL || 'http://localhost:3000/demo');
  await page.getByRole('heading',{name:/Bouncer keeps/}).waitFor();
  assert.equal(await page.getByRole('button',{name:'Run authorized delivery simulation',exact:true}).count(),0);
  await page.getByRole('button',{name:'Check ten outputs',exact:true}).click();
  assert.equal(await page.getByRole('button',{name:'Authorize Client A SLA',exact:true}).isDisabled(),true);
  await page.getByRole('button',{name:'Restore approved wording',exact:true}).click();
  await page.getByRole('button',{name:'Authorize Client A SLA',exact:true}).click();
  assert.match(await page.getByRole('status').innerText(),/Execution still pending/);
  await page.getByRole('button',{name:'Run authorized delivery simulation',exact:true}).click();
  assert.match(await page.getByRole('status').innerText(),/Closure awaits/);
  await page.getByRole('button',{name:'Compare fixture receipts',exact:true}).click();
  assert.match(await page.getByRole('status').innerText(),/Verified closure in simulation: 10 \/ 10/);
  const verifiedRecord = await page.getByLabel('Fixture delivery record').textContent();
  assert.match(verifiedRecord,/^DOC-09:sent:approved-v3$/m);
  assert.match(verifiedRecord,/^DOC-10:sent:approved-v3\+A-001$/m);
  await page.screenshot({path:'/tmp/bouncer-verified.png',fullPage:true});
  await page.getByRole('button',{name:'Reset demo',exact:true}).click();
  await page.getByRole('button',{name:'Check ten outputs',exact:true}).click();
  await page.getByRole('button',{name:'Restore approved wording',exact:true}).click();
  await page.getByRole('button',{name:'Authorize Client A SLA',exact:true}).click();
  await page.getByText('Run record and verification drill',{exact:true}).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button',{name:'Run authorized delivery simulation',exact:true}).click();
  await page.getByRole('button',{name:'Compare fixture receipts',exact:true}).click();
  assert.match(await page.getByRole('status').innerText(),/Closure blocked: 9 \/ 10/);
  await page.reload();
  assert.match(await page.getByRole('status').innerText(),/No checks or delivery performed/);
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'/tmp/bouncer-mobile.png',fullPage:true});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth),false);
  assert.deepEqual(errors,[]);
  await browser.close();
  console.log('PASS: approval gate, staged execution, receipt match, mismatch block, reset on reload, mobile overflow, no page errors');
})().catch(e=>{console.error(e);process.exit(1)});
