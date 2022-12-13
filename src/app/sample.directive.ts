import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[sample]'
})
export class SampleDirective {
    constructor(private element: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.color = 'white';
        this.element.nativeElement.style['background-color'] = '#003399';
        this.element.nativeElement.style['font-size'] = 'xx-large'
        this.element.nativeElement.style['font-style'] = 'italic'
    }
 
    @HostListener('mouseleave') onMouseLeave() {
        this.element.nativeElement.style.color = '';
        this.element.nativeElement.style['background-color'] = '';
        this.element.nativeElement.style['font-size'] = '';
        this.element.nativeElement.style['font-style'] = '';
    }
}