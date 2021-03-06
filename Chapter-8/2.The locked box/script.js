console.log ('The locked box');

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    try{
        if (!box.locked) return body();
        else {
            box.unlock();
            return body();
        }
    }
    finally{
        box.lock();
    } 
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
    console.log(box._content)
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);