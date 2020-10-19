function solve(arr) {
    let inventory = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(' ');
        let command = splited[0];
        let equipment = splited[1];
        switch(command) {
            case 'Buy': buy(equipment); break;
            case 'Trash': trash(equipment); break;
            case 'Repair': repair(equipment); break;
            case 'Upgrade': upgrade(equipment); break;
        }
        function buy(eqp) {
            if (!inventory.includes(eqp)) {
                inventory.push(eqp);
            }
            return inventory;
        }
        function trash(eqp) {
            for (let i = 0; i < inventory.length; i++) {
                if (eqp === inventory[i]) {
                    inventory.splice(i, 1);
                }
            }
            return inventory;
        }
        function repair(eqp) {
            for (let i = 0; i < inventory.length; i++) {
                if (eqp === inventory[i]) {
                    let repaired = inventory.splice(i, 1);
                    inventory.push(repaired.toString());
                }
            }
            return inventory;
        }
        function upgrade(eqp) {
            let item = eqp.split("-");
            for (let i = 0; i < inventory.length; i++) {
              if (item[0] === inventory[i]) {
                let newItem = item[0] + ":" + item[1];
                inventory.splice(i + 1, 0, newItem);
              }
            }
            return inventory;
        }        
    }
    console.log(inventory.join(' '));
}

solve(['SWORD Shield
    Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])