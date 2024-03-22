class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    add(value) {
      this.heap.push(value);
  
      let current = this.heap.length - 1;
      while (current > 0) {
        let parent = Math.floor((current - 1) / 2);
        if (this.heap[current] >= this.heap[parent]) {
          break;
        }
        [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
        current = parent;
      }
    }
  
    removeMin() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      let current = 0;
  
      while (true) {
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        let smallest = current;
  
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === current) {
          break;
        }
        [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
        current = smallest;
      }
      return min;
    }
  }
  
  let minHeap = new MinHeap();
  minHeap.add(20);
  minHeap.add(50);
  minHeap.add(80);
  minHeap.add(5);
  minHeap.add(10);
  console.log(minHeap);
  console.log(minHeap.removeMin());
  console.log(minHeap);
  