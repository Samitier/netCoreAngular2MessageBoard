import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';

@Directive({ 
    selector: '[draggable-item]' 
})
export class DraggableItemDirective implements OnInit{
    @Input('draggable-item') onFinishCallback: Function;
    dragging:boolean = false;
    offsetX: number = 0;
    offsetY: number = 0;

    constructor(
        private _elem: ElementRef, 
        private _renderer: Renderer
    ) {}

    ngOnInit() {
        this._renderer.setElementClass(this._elem.nativeElement, "noselect", true);
    }

    @HostListener('mousedown', ['$event']) onMouseDown(event) {
        let elemx = Number(this._elem.nativeElement.style.left.replace('px','')),
            elemy = Number(this._elem.nativeElement.style.top.replace('px',''));
        this.dragging = true;
        this.offsetY = event.y - elemy;
        this.offsetX = event.x - elemx;
    }
    @HostListener('document:mousemove', ['$event']) onMouseMove(event) {
        if(this.dragging) {
            this._renderer.setElementStyle(this._elem.nativeElement, "top", event.y - this.offsetY +"px");
            this._renderer.setElementStyle(this._elem.nativeElement, "left", event.x - this.offsetX +"px");
        }
    }
    @HostListener('document:mouseup',  ['$event']) onMouseUp(event) {
        if(this.dragging) this.onFinishCallback();
        this.dragging = false;
    }
}