export default class minHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  insert(element) {
    this.arr.push(element);
    this.percolateUp(this.size);
    this.size++;
  }

  getSize() {
    return this.size;
  }

  remove() {
    //console.log(this.arr[0]);
    var ret = this.arr[0];
    this.size--;
    this.arr[0] = this.arr.pop();
    //console.log(this.arr);
    this.percolateDown(0);

    return ret;
  }

  percolateUp(index) {
    //console.log(index);
    var curr = index;
    var parent = Math.ceil(curr / 2 - 1);
    //console.log(parent);
    //this.print();
    while (curr != 0 && this.arr[curr].getCost() < this.arr[parent].getCost()) {
      //console.log("swapping: " + this.arr[parent] + " " + this.arr[curr]);
      [this.arr[curr], this.arr[parent]] = [this.arr[parent], this.arr[curr]];
      curr = parent;
      parent = Math.ceil(curr / 2 - 1);
    }
    //this.print();
  }

  percolateDown(index) {
    //console.log("Before " + this.arr[index]);
    //this.print();
    let curr = index;
    let child = index;

    for (let i = 1; i < 3; i++) {
      if (
        typeof this.arr[curr * 2 + i] != "undefined" &&
        this.arr[child].getCost() > this.arr[curr * 2 + i].getCost()
      ) {
        child = curr * 2 + i;
      }
    }
    while (child < this.arr.length) {
      [this.arr[child], this.arr[curr]] = [this.arr[curr], this.arr[child]];
      curr = child;
      child = curr;
      for (let i = 1; i < 3; i++) {
        if (
          typeof this.arr[curr * 2 + i] != "undefined" &&
          this.arr[child].getCost() > this.arr[curr * 2 + i].getCost()
        ) {
          child = curr * 2 + i;
        }
      }
      if (child === curr) {
        break;
      }
    }

    //console.log("After");
    //this.print();
  }

  print() {
    console.log(this.arr);
  }
}
