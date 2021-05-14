import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBestVisual]'
})
export class BestVisualDirective implements OnInit{

  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='grey';

  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','grey');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(evenData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
