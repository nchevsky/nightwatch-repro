test('ESM import of custom assertion', async function() {
  await browser.assert.trueEqualsTrue();
});
