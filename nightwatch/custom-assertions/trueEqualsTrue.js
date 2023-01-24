export default {
  assertion: function trueEqualsTrue() {
    this.command = (callback) => callback(true);
    this.evaluate = (value) => value === this.expected;
    this.expected = true;
    this.message = 'true equals true';
    this.value = (result) => result;
  }
}
