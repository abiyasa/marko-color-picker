/* global test */
const expect = require('chai').expect;
const sinon = require('sinon');

test('color-picker-selection color', function (context) {
  const output = context.render({
    color: '#ff8080'
  });

  expect(output.$('div').attr('style')).to.contain('background-color:#ff8080');
});

test('color-picker-selection when clicked should emit colorSelected event', function (context) {
  const output = context.render({
    color: '#ff8080'
  });

  var component = output.component;
  var spyOnEvent = sinon.spy();
  component.on('colorSelected', spyOnEvent);

  var componentEl = component.el;
  componentEl.click();

  expect(spyOnEvent.calledOnce).to.equal(true);
});
