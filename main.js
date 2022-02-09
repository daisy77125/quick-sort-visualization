const the_array = document.getElementById("the_array");
const iptr = document.getElementById("i");
const the_holder = document.getElementById("the_holder");

const input = [1, 1, 1, 1, 1];

for (let i = 0; i < input.length; i++) {
  let item = document.createElement("div");
  item.appendChild(document.createTextNode(input[i]));
  item.classList.add("p-2", "m-1");
  the_array.appendChild(item);

  let item2 = document.createElement("div");
  item2.classList.add("p-2", "m-1");
  the_holder.appendChild(item2);

  let item3 = document.createElement("div");
  item3.classList.add("p-2", "m-1");
  the_holder2.appendChild(item3);
}
let item2 = document.createElement("div");
item2.classList.add("p-2", "m-1");
the_holder.appendChild(item2);
let item3 = document.createElement("div");
item3.classList.add("p-2", "m-1");
the_holder.appendChild(item3);
let item4 = document.createElement("div");
item4.classList.add("p-2", "m-1");
the_holder2.appendChild(item4);
let item5 = document.createElement("div");
item5.classList.add("p-2", "m-1");
the_holder2.appendChild(item5);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function partition(input, left, right) {
  const pivot = input[right];
  the_array.children[right].classList.add("bg-success");

  let i = left - 1;
  let j = right;
  the_holder.children[i + 1].appendChild(document.createTextNode("i"));
  the_holder2.children[j + 1].appendChild(document.createTextNode("j"));
  await sleep(1000);

  while (1) {
    do {
      if (i > left - 1) {
        the_array.children[i].classList.add("bg-danger");
        await sleep(1000);
      }

      i = i + 1;

      the_holder.children[i].innerText = "";
      the_holder.children[i + 1].innerText = "i";

      await sleep(1000);
    } while (input[i] < pivot);
    the_array.children[i].classList.add("bg-primary");

    await sleep(1000);

    do {
      if (j < right) {
        the_array.children[j].classList.add("bg-primary");
        await sleep(1000);
      }

      j = j - 1;

      the_holder2.children[j + 2].innerText = "";
      the_holder2.children[j + 1].innerText = "j";

      await sleep(1000);
    } while (j >= i && input[j] > pivot);

    if (i < j) {
      the_array.children[j].classList.add("bg-danger");
      await sleep(1000);

      const temp = input[i];
      const tempElement = the_array.children[i];

      the_array.children[i].classList.add("zoom");
      the_array.children[j].classList.add("zoom");
      await sleep(1000);
      the_array.children[i].classList.remove("zoom");
      the_array.children[j].classList.remove("zoom");

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

  the_array.children[right].classList.add("zoom");
  the_array.children[i].classList.add("zoom");
  await sleep(1000);
  the_array.children[right].classList.remove("zoom");
  the_array.children[i].classList.remove("zoom");

  input[right] = input[i];
  the_array.children[right].textContent = input[i];
  the_array.children[right].classList.remove("bg-success");
  the_array.children[right].classList.add("bg-primary");

  input[i] = pivot;
  the_array.children[i].textContent = pivot;
  the_array.children[i].classList.remove("bg-primary");
  the_array.children[i].classList.add("bg-success");

  return i;
}

document.getElementById("partition").addEventListener("click", () => {
  partition(input, 0, input.length - 1);
});
