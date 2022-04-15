//
//     Run Code - OK
//
//     Submit Code - Not OK
//
//

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 1; i <= n * n * n * n * n; i++) {
    for (let j = 1; j <= arr.length + 1; j++)
      if (i == arr[arr.length - 1] + arr[arr.length - 2]) {
        arr.push(i);
        break;
      } else {
        break;
      }
  }
  return console.log(arr[n]);
}

fibonacci(3);
//Fibonacci ədəd sırasında daxil edilmiş sırada olan ədədi tapın
// Bu sırada hər ədəd özündən əvvəlki 2 ədədin cəminə bərabərdir
// f(0)=0, f(1)=1 bu həmişə belədir. Digərləri isə altdakı ardıcıllıq ilə sonsuz düzülür
// Məsəslən 0,1,1,2,3,5,8,13,21 və s.
