let discount = 5;
function ProductFeatures(name, price, currency) {
  (this.name = name), (this.price = price), (this.currency = currency);
}
function ProductMethods() {
  this.showInfo = function () {
    return `${this.name}, ${this.price} ${this.currency}`;
  };
  this.setDiscount = function () {
    let newPrice = this.price - discount;
    return newPrice;
  };
}
ProductFeatures.prototype = new ProductMethods();
const product = new ProductFeatures("Cake", 25, "uah");
