import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[sample]'
})
export class SampleDirective {
    constructor(private element: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.color = 'green';
        this.element.nativeElement.style['background-color'] = 'yellow';
        this.element.nativeElement.style['font-size'] = 'xx-large'
        this.element.nativeElement.style['font-weight'] = 'bold'
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.element.nativeElement.style.color = '';
        this.element.nativeElement.style['background-color'] = '';
        this.element.nativeElement.style['font-size'] = '';
        this.element.nativeElement.style['font-weight'] = '';
    }
}