export class DialogueNode{
    constructor(title,text, childNodes, isEndNode = false){
        this.title = title;
        this.text = text;
        this.childNodes = childNodes;
        this.isEndNode = isEndNode;
        this.onEnter = () => {};
        this.onExit = () => {};
    }

}

export class Dialogue{
    constructor(title,startNode) {
        this.title = title;
        this.startNode = startNode;
    }

    start(){
        this.currentNode = this.startNode;
        return this.currentNode;
    }

    nextNode(node){
        this.currentNode = node;
        return this.currentNode;
    }
}


