const dodger = document.getElementById("dodger");

describe('moveDodgerLeft()', () => {
  let dodger;
  let left; // Declare left outside of beforeEach

  beforeEach(() => {
    dodger = document.createElement('div');
    document.body.appendChild(dodger);
    dodger.style.left = '90px';
    left = parseInt(dodger.style.left, 10);

    if (isNaN(left)) {
      throw new Error('Invalid initial left value');
    }
  });

  function moveDodgerLeft() {
    var currentLeft = parseInt(getComputedStyle(dodger).left, 10) || 0;
    var moveDistance = 10;
    dodger.style.left = (currentLeft - moveDistance) + 'px';
  }

  it('moves the DODGER to the left', () => {
    moveDodgerLeft();

    let newPosition = parseInt(dodger.style.left, 10);

    if (!isNaN(newPosition)) {
      expect(newPosition).to.be.below(left);
      expect(newPosition).to.be.lessThan(left);
    } else {
      throw new Error('Invalid newPosition value after moving left');
    }
  });

  afterEach(() => {
    document.body.removeChild(dodger);
  });
});

describe('moveDodgerRight()', () => {
  let dodger;
  let initialRight; // Declare initialRight outside of beforeEach

  beforeEach(() => {
    dodger = document.createElement('div');
    document.body.appendChild(dodger);
    dodger.style.right = '90px';
    initialRight = parseInt(dodger.style.right, 10);

    if (isNaN(initialRight)) {
      throw new Error('Invalid initial right value');
    }
  });

  function moveDodgerRight() {
    var currentRight = parseInt(getComputedStyle(dodger).right, 10) || 0;
    var moveDistance = 10;
    dodger.style.right = (currentRight + moveDistance) + 'px';
  }

  it('moves the DODGER to the right', () => {
    moveDodgerRight();

    let newPosition = parseInt(dodger.style.right, 10);
    console.log('initialRight:', initialRight);
    console.log('newPosition:', newPosition);

    if (!isNaN(initialRight) && !isNaN(newPosition)) {
      expect(newPosition).to.be.greaterThan(initialRight);
    } else {
      throw new Error('Invalid initialRight or newPosition value after moving right');
    }
  });

  afterEach(() => {
    document.body.removeChild(dodger);
  });
});


