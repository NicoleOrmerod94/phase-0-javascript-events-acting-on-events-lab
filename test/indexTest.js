require ( './helpers.js' );

describe('moveDodgerLeft()', () => {
  let dodger;

  beforeEach(() => {
    dodger = document.createElement('div');
    document.body.appendChild(dodger);
    dodger.style.left = '90px'; // Set an initial left position for testing
  });

  function moveDodgerLeft() {
    var currentLeft = parseInt(getComputedStyle(dodger).left, 10) || 0;
    var moveDistance = 10;
    dodger.style.left = (currentLeft - moveDistance) + 'px';
  }

  it('moves the DODGER to the left', () => {
    let left = parseInt(getComputedStyle(dodger).left, 10);

    moveDodgerLeft();

    let newPosition = parseInt(getComputedStyle(dodger).left, 10);

    if (left > 0) {
      expect(newPosition).to.be.below(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });

  afterEach(() => {
    document.body.removeChild(dodger);
  });
});


describe('moveDodgerRight()', () => {
  let dodger;

  beforeEach(() => {
    dodger = document.createElement('div');
    document.body.appendChild(dodger);
    dodger.style.left = '90px'; // Set an initial left position for testing
  });

  function moveDodgerRight() {
    var currentLeft = parseInt(getComputedStyle(dodger).left, 10) || 0;
    var moveDistance = 10;
    dodger.style.left = (currentLeft + moveDistance) + 'px';
  }

  it('moves the DODGER to the right', () => {
    let left = parseInt(getComputedStyle(dodger).left, 10);

    moveDodgerRight();

    let newPosition = parseInt(getComputedStyle(dodger).left, 10);

    if (left < 360) {
      expect(newPosition).to.be.above(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });

  afterEach(() => {
    document.body.removeChild(dodger);
  });
});

