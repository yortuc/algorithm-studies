/*
    A stack structure with constant time push, max and pop methods.
*/

function Stack() {
    this._cur_max = -1 * Number.MAX_VALUE;
    this._arr = [];
    this._history_max = [];
}


/*       _arr     _hist
    1 -> 1
    2 -> 1,2      1,2
    4 -> 1,2,4    1,2,4
    3 -> 1,2,4,3  1,2,4
    5 -> 1,...,5  1,2,4,5
*/
Stack.prototype.push = function(item){
    this._arr.push(item);
    
    if(item>this._cur_max){
        this._cur_max = item;
        this._hitorty_max.push(item);
    }
}

// 
Stack.prototype.max = function() {
    return this._history_max[this._history_max.length-1];
}

Stack.prototype.pop = function() {
    
    var item_popped = this._arr.pop();
    
    if(item_popped === this._cur_max){
        this._history_max.pop();
    }

    return item_popped;
}

