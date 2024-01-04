let A = [12, 50, 90, 66, 96, 98, 32]
let B = [40, 56, 96, 90, 47, 50]

//Bài 1+2
  var vtvcab = [];
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        if (!vtvcab.includes(A[i])) {
          vtvcab.push(A[i]);
        }
      }
    }
  }

  var phantuchung =
    "Các phần tử chung trong hai mảng là: " + vtvcab.join(", ");
  document.getElementById("vtvcab").innerHTML = phantuchung;


//Bài 3
//Sắp xếp mảng A

  function sapxep(A) {
  for (let i = 0; i < A.length - 1; i++) {
    let tim = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[tim]) tim = j;
    }

    // Đổi vi trí
    let M = A[i];
    A[i] = A[tim];
    A[tim] = M;
  }
}

//Sắp xếp mảng B

function sapxep(B) {
  for (let i = 0; i < B.length - 1; i++) {
    let tim = i;
    for (let j = i + 1; j < B.length; j++) {
      if (B[j] < B[tim]) tim = j;
    }

    // Đổi vị trí
    let t = B[i];
    B[i] = B[tim];
    B[tim] = t;
  }
}

sapxep(A);
sapxep(B);

// Hiển thị kết quả lên HTML
let sapxepA = document.getElementById("resultA");
sapxepA.innerHTML = "Mảng đã sắp xếp: " + A.join(", ");

let sapxepB = document.getElementById("resultB");
sapxepB.innerHTML = "Mảng đã sắp xếp: " + B.join(", ");
