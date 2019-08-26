for (let i = 0; i < 10; i++) {
  let p = new Promise((res, rej) => {
    console.log(rej);
    rej('1');

    if (i) {
      console.log(true);
    }

    switch (i) {
      case 1: {
        console.log(1);
      }
    }

    let fn = (b, a) => b + a;
    console.log(fn);

    /**
     * array
     */
    let arr = [
      1,
      2,
    ];
  });

  console.log(p);

  // space
  console.log(1 + 2);
}

