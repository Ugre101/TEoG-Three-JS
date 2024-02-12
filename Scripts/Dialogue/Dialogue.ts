export class DialogueNode{
    title: string;
    text: string;
    childNodes: DialogueNode[];
    isEndNode: boolean;
    onEnter: () => void = () => {};
    onExit: () => void = () => {};

    constructor(title: string, text: string, childNodes: DialogueNode[], isEndNode: boolean = false){
        this.title = title;
        this.text = text;
        this.childNodes = childNodes;
        this.isEndNode = isEndNode;
    }
}

export class Dialogue{
    public title: string;
    public startNode: DialogueNode;
    private currentNode: DialogueNode;
    constructor(title: string,startNode: DialogueNode) {
        this.title = title;
        this.startNode = startNode;
    }

    start(){
        this.currentNode = this.startNode;
        return this.currentNode;
    }

    nextNode(node: DialogueNode){
        this.currentNode = node;
        return this.currentNode;
    }
}


