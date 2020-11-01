function solve(arr) {
    let inventory = arr.shift().split(', ');
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(' - ');
        let command = splited[0];
        let item = splited[1];
        switch(command) {
            case 'Collect': add(item); break;
            case 'Drop': remove(item); break;
            case 'Combine Items': combine(item); break;
            case 'Renew': renew(item); break;
            case 'Craft!': print(inventory); break;
        }

        function add(item) {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
            return inventory;
        }
        function remove(item) {
            for (let i = 0; i < inventory.length; i++) {
                if (item === inventory[i]) {
                    inventory.splice(i, 1);
                }
            }
            return inventory;
        }
        function combine(item) {
            if(item.includes(':')) {
                let splited = item.split(':');
                let oldItem = splited[0];
                let newItem = splited[1];
                if (inventory.includes(oldItem)) {
                
                    let sliced = inventory.slice(oldItem + 1);
                    inventory.push(newItem);
                    inventory.push(sliced);
                }
            }
            
            return inventory;
        }
        function renew(item) {
            if (inventory.includes(item)) {
                let sliced = inventory.splice(item, 1);
                inventory.push(sliced);
            }
            return inventory;
        }
        function print(inventory)  {
            console.log(inventory.join(', '));
        }      
        
    }
    
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])