const the_array = document.getElementById("the_array");
const input = [3, 6, 1, 4, 8, 3, 1, 8, 5];

for (let i = 0; i < input.length; i++) {
  let item = document.createElement("div");
  item.appendChild(document.createTextNode(input[i]));
  item.classList.add("p-2", "m-1");
  the_array.appendChild(item);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function partition(input, left, right) {
  const pivot = input[right];
  the_array.children[right].classList.add("bg-success");

  let i = left - 1;
  let j = right;
  while (1) {
    do {
      i = i + 1;
      await sleep(1000);
      the_array.children[i].classList.add("bg-danger");
    } while (input[i] < pivot);
    the_array.children[i].classList.remove("bg-danger");
    the_array.children[i].classList.add("bg-primary");

    do {
      j = j - 1;
      await sleep(1000);
      the_array.children[j].classList.add("bg-primary");
    } while (j >= i && input[j] > pivot);
    the_array.children[j].classList.remove("bg-primary");
    the_array.children[j].classList.add("bg-danger");

    await sleep(1000);
    if (i < j) {
      const temp = input[i];
      const tempElement = the_array.children[i];

      input[i] = input[j];
      the_array.children[i].textContent = input[i];
      the_array.children[i].classList.remove("bg-primary");
      the_array.children[i].classList.add("bg-danger");

      input[j] = temp;
      the_array.children[j].textContent = input[j];
      the_array.children[j].classList.remove("bg-danger");
      the_array.children[j].classList.add("bg-primary");
    } else {
      break;
    }
  }

  input[right] = input[i];
  the_array.children[right].textContent = input[i];
  the_array.children[right].classList.remove("bg-success");
  the_array.children[right].classList.add("bg-primary");

  input[i] = pivot;
  the_array.children[i].textContent = pivot;
  the_array.children[i].classList.remove("bg-danger");
  the_array.children[i].classList.remove("bg-primary");
  the_array.children[i].classList.add("bg-success");

  return i;
}

partition(input, 0, input.length - 1);
