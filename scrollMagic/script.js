    var controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerHook: 'onLeave'
        }
    });

    var slides = document.querySelectorAll('div.panel');
    console.log(slides);
    var sLength = slides.length;

    for (var i=0;i<sLength;i++){
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
        .setPin(slides[i])
        .addTo(controller);
    }
