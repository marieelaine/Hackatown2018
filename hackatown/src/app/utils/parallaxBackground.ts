
declare var ScrollMagic: any;
/**
    * Background parallax effect
    * (c) lg2fabrique 2017

    <div data-module="bg-parallax">
        <div class="img_wrp object-fit-wrp"
            data-object-fit="cover"><img class="object-fit" src="{{ image }}" alt="{{ name }}" data-bg-parallax="image"></div>
    </div>
*/
declare var Linear: any;
declare var TweenLite: any;
export default class ParallaxBackground {
    private _elements:                  NodeListOf<HTMLElement>;
    private _controller:                any;

    /**
    * constructor
    */
    constructor() {
        this._elements = document.querySelectorAll('[data-module="bg-parallax"]') as NodeListOf<HTMLElement>;

        // init controller
        this._controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 1, duration: '200%'}});

        for (let i = 0, l = this._elements.length; i < l; i++) {
            const image = this._elements[i].querySelector('[data-bg-parallax="image"]') as HTMLElement;
            const value = image.getAttribute('data-bg-parallax-value') || '20%';

            // build scenes
            new ScrollMagic.Scene({triggerElement: this._elements[i]})
                .setTween(image, {y: value, ease: Linear.easeNone})
                // .addIndicators() // dev only
                .addTo(this._controller);

            //     // save element
            //     this._elArray.push(this._sceneBloc);
        }
    }
}
