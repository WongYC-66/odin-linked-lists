//  with function factories

const LinkedList = function(){
    this.head = null
    this.tail = null
    this.append = (value) => {
        let newNode = new Node(value)
        if(! this.head ){
            this.head = newNode
            return
        }
        let currentNode = this.head
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode
        }
        currentNode.nextNode = newNode
        this.tail = newNode
    }
    this.prepend = (value) => {
        let newNode = new Node(value, this.head)
        this.head = newNode
    }
    this.size = () => {
        if(this.head === null) return 0
        let count = 1
        let currentNode = this.head
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode
            count++
        }
        return count
    }
    this.at = (index) => {
        if(index > this.size() - 1) return null
        let count = 0
        let currentNode = this.head
        while(count < index){
            currentNode = currentNode.nextNode
            count++
        }   
        return currentNode
    }
    this.pop = () => {
        let currentNode = this.head
        let parent = this.head
        while(currentNode.nextNode){
            parent = currentNode
            currentNode = currentNode.nextNode
        } 
        parent.nextNode = null
        this.tail = parent
    }
    this.contains = (item) => {
        if(item === '') return false
        let currentNode = this.head
        if(currentNode.value === item) return true
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode
            if(currentNode.value === item) return true
        }
        return false
    }
    this.find = (item) => {
        let currentNode = this.head
        let index = 0
        if(currentNode.value === item) return index
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode
            index++
            if(currentNode.value === item) return index
        }
        return null
    } 
    this.toString = () => {
        let str = ''
        if(! this.head) return 'null'
        let currentNode = this.head
        while(currentNode.nextNode){
            str += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode
        }
        str += `( ${currentNode.value} ) -> `
        str += `( null ) `
        return str
    }
    this.insertAt = (value, index) => {
        if(index > this.size()) return console.log('index too big')
        if(index === this.size() ) return this.append(value)
        if(index === 0) return this.prepend(value)
        let count = 1
        let parent = this.head
        let currentNode = parent.nextNode
        while(count < index){
            parent = currentNode
            currentNode = currentNode.nextNode
            count++
        }
        let newNode = new Node(value, currentNode)
        parent.nextNode = newNode
    }
    this.removeAt = (index) => {
        if(index > this.size() - 1 ) return console.log('index too big')
        if(index === this.size() - 1 ) return this.pop()
        if(index === 0) return this.head = this.head.nextNode
        let count = 0
        let parent = this.head
        let currentNode = this.head
        while(count < index){
            parent = currentNode
            currentNode = currentNode.nextNode
            count++
        }
        parent.nextNode = currentNode.nextNode
    }

}

const Node = function(value = null, nextNode = null){
    this.value = value
    this.nextNode = nextNode 
}

const example = new LinkedList()
example.append(0)
example.append(1)
example.append(2)
example.append(3)
example.append(4)


// ui
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#toString').addEventListener('click', () => {
        let str = example.toString()
        document.querySelector('.display').textContent = str
    })

    document.querySelector('#append').addEventListener('click', () => {
        let str = document.querySelector('#inputAppend').value
        str = Number(str)
        example.append(str)
        document.querySelector('#toString').click()
    })

    document.querySelector('#prepend').addEventListener('click', () => {
        let str = document.querySelector('#inputPrepend').value
        str = Number(str)
        example.prepend(str)
        document.querySelector('#toString').click()
    })

    document.querySelector('#size').addEventListener('click', () => {
        let size = example.size()
        document.querySelector('.display2').textContent = size
    })

    document.querySelector('#at').addEventListener('click', () => {
        let index = Number(document.querySelector('#inputAt').value)
        let value = example.at(index).value
        document.querySelector('.display3').textContent = value
    })
    document.querySelector('#pop').addEventListener('click', () => {
        example.pop()
        document.querySelector('#toString').click()
    })
    document.querySelector('#contains').addEventListener('click', () => {
        let value = document.querySelector('#inputContains').value
        value = value === '' ? null : Number(value)
        let isTrue = example.contains(value)
        document.querySelector('.display5').textContent = isTrue
    })
    document.querySelector('#find').addEventListener('click', () => {
        let value = document.querySelector('#inputFind').value
        value = value === '' ? null : Number(value)
        let index = example.find(value)
        document.querySelector('.display6').textContent = index
    })
    document.querySelector('#insertAt').addEventListener('click', () => {
        let value = document.querySelector('#inputInsertAtValue').value
        value = value === '' ? null : Number(value)
        let index = document.querySelector('#inputInsertAt').value
        index = index === '' ? null : Number(index)
        example.insertAt(value, index)
        document.querySelector('#toString').click()
    })
    document.querySelector('#removeAt').addEventListener('click', () => {
        let index = document.querySelector('#inputRemoveAt').value
        index = index === '' ? null : Number(index)
        example.removeAt(index)
        document.querySelector('#toString').click()
    })

    // display init
    document.querySelector('#toString').click()


})


// test
// let a = new LinkedList()
// a.append(2)
// a.append(3)
// a.append(4)
// a.prepend(1)
// a.append(5)
// console.log(a)
// console.log(a.size())
// console.log(a.head)
// console.log(a.tail)
// console.log(a.at(0))
// console.log(a.at(4))
// a.pop()
// console.log(a.tail)
// console.log(a.at(4))
// console.log(a.contains(4))
// console.log(a.contains(5))
// console.log(a.find(1))
// console.log(a.find(4))
// console.log(a.find(5))
// console.log(a.toString())
// a.insertAt(100, 1)
// a.insertAt(100, 4)
// console.log(a.toString())
// a.removeAt(1)
// a.removeAt(4)
// console.log(a.toString())
// console.log(a.head)
// console.log(a.tail)
// console.log(a.size())


// console.log('---------------')
// let b = new LinkedList()
// console.log(b)
// console.log(b.size())
// console.log(b.head)
// console.log(b.tail)
// console.log(b.toString())