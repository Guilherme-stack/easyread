
/* LISTA ENCADEADA E IMPLEMENTAÇÃO DE TIPOS ABSTRADOS DE DADOS */
function linkedListPalavras(params) {
    
    let head = null
    let length = 0
    const Node = (value)=>{
        return{
            value,
            next:null
        }
    }
    const add = (value) =>{
        if (!head) {
            head = Node(value)
            length++
            return head
        }
        let node = head
        while(node.next){
            node = node.next
        }
        node.next = Node(value)
        length++
        return node.next
    }
    const getByIndex = (index) =>{
        if (length === 0 || index> length) {
            return null
        }
        let node = head
        let cont = 0
        while (cont < index && node.next) {
            node = node.next
            cont++
        }
        return node
    }
    const getByValue = (value) =>{
        if (length===0) {
            return null
        }
        let node = head

        if (node.value===value) {
            return node
        }
        while (node.next) {
            node = node.next
            if (node.value===value) {
                return node
            }
        }        
        return node
    }
     
    const remove = (node) =>{
        if (length===0) {
            return
        }
        if (node===head) {
            head=node.next
            return
        }
        let currentNode = head
        while (currentNode.next && (currentNode.next !==node)) {
            currentNode = currentNode.next
        }
        currentNode.next = node.next
    }
     
    return{
        length: () => length,
        add: (value)=> add(value),
        print: ()=> (head),
        getByIndex: (index)=> getByIndex(index),
        getByValue: (value)=> getByValue(value),
        remove:(node) => remove(node)
    }
}
var list = linkedListPalavras()

function resetar(array) {
    let node = array.getByIndex(2)
    array.remove(node)
    return list = array
     
}

module.exports ={list,resetar}
 
 