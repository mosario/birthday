;(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getNewProduct() {
    return {
      name: Math.random().toString(36).substring(3),
      stack: ['angular', 'vue', 'angular' , 'react', 'angular'][getRandomInt(0,4)],
    }
  }
  function HappyBirthDay() {
    this.congratulations = {
      health: Number.MAX_VALUE,
      happiness: Number.MAX_VALUE,
      teamProductivity: Number.POSITIVE_INFINITY,
      success: true,
      money: Number.MAX_VALUE,
      message:'we love you!!!',
      newProduct: getNewProduct()
    }
  }

  return new HappyBirthDay(config);

})(config);
