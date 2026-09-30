(function(){
'use strict';
var $=window.jQuery;
if(!$)return;
var menu=document.querySelector('#myTab');
if(menu){
 var back=document.createElement('button');back.type='button';back.className='archive-back';back.textContent='← Back to categories';back.hidden=true;
 document.querySelector('.archive-bar').insertAdjacentElement('afterend',back);
 function sync(){var active=document.querySelector('.tab-pane.active');back.hidden=!active||active.id==='home';}
 back.addEventListener('click',function(){var home=$('#myTab a[href="#home"]');home.tab('show');$('.lucked-up').hide();history.replaceState(null,'',location.pathname);window.scrollTo(0,0);var first=menu.querySelector('a[href]:not([href="#home"])');if(first)first.focus();sync();});
 $('#myTab a[data-toggle="tab"]').on('shown',function(){if(this.hash!=='#home'){history.replaceState(null,'',this.hash);$('.lucked-up').show();}sync();});
 var wanted=Array.from(menu.querySelectorAll('a[data-toggle="tab"]')).find(function(a){return a.hash===location.hash;});if(wanted)$(wanted).tab('show');sync();
}
$('.carousel').each(function(){
 var el=this;el.setAttribute('tabindex','0');el.setAttribute('role','region');el.setAttribute('aria-label','Artwork slideshow. Use left and right arrow keys.');
 $(el).carousel('pause');
 el.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();$(el).carousel(e.key==='ArrowRight'?'next':'prev');}});
 $(el).find('.carousel-control').each(function(){this.setAttribute('aria-label',this.getAttribute('data-slide')==='prev'?'Previous image':'Next image');});
});
})();
